(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const storedTheme = localStorage.getItem('alex-cv-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  root.dataset.theme = storedTheme || (prefersLight ? 'light' : 'dark');

  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('alex-cv-theme', next);
  });

  const header = document.querySelector('[data-header]');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 20);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const closeMenu = () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileMenu?.setAttribute('aria-hidden', 'true');
    mobileMenu?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu?.setAttribute('aria-hidden', String(isOpen));
    mobileMenu?.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  // Mark the section in view in both navigations.
  const navLinks = [...document.querySelectorAll('[data-nav-link]')];
  const navSections = [...new Set(navLinks.map(link => link.getAttribute('href')))]
    .map(hash => document.querySelector(hash))
    .filter(Boolean);
  const setCurrent = id => navLinks.forEach(link => {
    if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navSections.forEach(section => sectionObserver.observe(section));
  }
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  }, { passive: true });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const fallbackRepos = {
    Geoscan_MOPS: [5, 1], FrogeeCore: [13, 1], LogicCircuitSimulator: [7, 1],
    FgSNotes: [7, 0], 'ecoCheck-library': [5, 0], 'yasno-service': [0, 0],
    FgSdrones: [4, 3], MarketLog: [3, 0], 'Warehouse-delivery-robot': [2, 0]
  };

  const STAR_FORMS = ['звезда', 'звезды', 'звёзд'];
  const FORK_FORMS = ['форк', 'форка', 'форков'];
  const countLabel = (n, [one, few, many]) => {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return `${n} ${one}`;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} ${few}`;
    return `${n} ${many}`;
  };

  const updateRepoCards = repos => {
    repos.forEach(repo => {
      const card = document.querySelector(`[data-repo="${CSS.escape(repo.name)}"]`);
      if (!card) return;
      const starEl = card.querySelector('[data-repo-stars]');
      const forkEl = card.querySelector('[data-repo-forks]');
      if (starEl) starEl.textContent = countLabel(repo.stargazers_count, STAR_FORMS);
      if (forkEl) forkEl.textContent = countLabel(repo.forks_count, FORK_FORMS);
    });
  };

  const applyFallbacks = () => {
    Object.entries(fallbackRepos).forEach(([name, [stars, forks]]) => {
      const card = document.querySelector(`[data-repo="${CSS.escape(name)}"]`);
      if (!card) return;
      const starEl = card.querySelector('[data-repo-stars]');
      const forkEl = card.querySelector('[data-repo-forks]');
      if (starEl) starEl.textContent = countLabel(stars, STAR_FORMS);
      if (forkEl) forkEl.textContent = countLabel(forks, FORK_FORMS);
    });
  };

  const githubJson = url => fetch(url, {
    headers: { Accept: 'application/vnd.github+json' }
  }).then(response => {
    if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
    return response.json();
  });

  applyFallbacks();
  Promise.all([
    githubJson('https://api.github.com/users/ArduRadioKot/repos?per_page=100&sort=updated'),
    githubJson('https://api.github.com/users/X200L/repos?per_page=100&sort=updated').catch(() => [])
  ]).then(([arduRepos, x200lRepos]) => {
    updateRepoCards([...arduRepos, ...x200lRepos]);
  }).catch(() => {
    // Static fallback values are already rendered in the project cards.
  });

  document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const track = document.querySelector('.marquee-track');
  const sourceGroup = track?.querySelector('.marquee-group');
  const syncMarquee = () => {
    if (!track || !sourceGroup) return;
    const groupWidth = sourceGroup.offsetWidth;
    const viewport = track.parentElement?.clientWidth || window.innerWidth;
    if (!groupWidth) return;

    const needed = Math.max(2, Math.ceil(viewport / groupWidth) + 1);
    const groups = [...track.querySelectorAll('.marquee-group')];
    if (groups.length < needed) {
      for (let i = groups.length; i < needed; i += 1) {
        const clone = sourceGroup.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
      }
    } else if (groups.length > needed) {
      groups.slice(needed).forEach(group => group.remove());
    }

    // Unchanged width: leave the running animation alone.
    const distance = `${groupWidth}px`;
    if (track.style.getPropertyValue('--marquee-distance') === distance) return;
    track.style.setProperty('--marquee-distance', distance);
    track.style.setProperty('--marquee-duration', `${Math.max(groupWidth / 36, 12)}s`);
  };
  syncMarquee();
  // Re-measure once the web font is in and whenever the group itself changes width,
  // otherwise the loop distance no longer matches one copy and the seam jumps.
  document.fonts?.ready.then(syncMarquee);
  if (sourceGroup && 'ResizeObserver' in window) {
    new ResizeObserver(syncMarquee).observe(sourceGroup);
  }
  // A wider window needs more copies even when one copy keeps its width.
  window.addEventListener('resize', syncMarquee, { passive: true });
})();

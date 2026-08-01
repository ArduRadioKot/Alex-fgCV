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
    mobileMenu?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu?.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const glow = document.querySelector('.cursor-glow');
  if (glow && matchMedia('(pointer:fine)').matches) {
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    const animate = () => {
      x += (tx - x) * .08; y += (ty - y) * .08;
      glow.style.transform = `translate(${x - 215}px, ${y - 215}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }

  const fallbackProfile = { public_repos: 35, followers: 45 };
  const fallbackRepos = {
    Geoscan_MOPS: [5, 1], FrogeeCore: [13, 1], LogicCircuitSimulator: [7, 1],
    FgSNotes: [7, 0], 'ecoCheck-library': [5, 0], 'yasno-service': [0, 0], FgSdrones: [4, 3]
  };

  const updateRepoCards = repos => {
    let totalStars = 0;
    repos.forEach(repo => {
      totalStars += repo.stargazers_count || 0;
      const card = document.querySelector(`[data-repo="${CSS.escape(repo.name)}"]`);
      if (!card) return;
      const starEl = card.querySelector('[data-repo-stars]');
      const forkEl = card.querySelector('[data-repo-forks]');
      if (starEl) starEl.textContent = `★ ${repo.stargazers_count}`;
      if (forkEl) forkEl.textContent = `⑂ ${repo.forks_count}`;
    });
    const totalEl = document.querySelector('[data-stat="stars"]');
    if (totalEl && totalStars) totalEl.textContent = String(totalStars);
  };

  const applyFallbacks = () => {
    Object.entries(fallbackRepos).forEach(([name, [stars, forks]]) => {
      const card = document.querySelector(`[data-repo="${CSS.escape(name)}"]`);
      if (!card) return;
      const starEl = card.querySelector('[data-repo-stars]');
      const forkEl = card.querySelector('[data-repo-forks]');
      if (starEl) starEl.textContent = `★ ${stars}`;
      if (forkEl) forkEl.textContent = `⑂ ${forks}`;
    });
  };

  applyFallbacks();
  Promise.all([
    fetch('https://api.github.com/users/ArduRadioKot', { headers: { Accept: 'application/vnd.github+json' } }).then(r => {
      if (!r.ok) throw new Error('GitHub profile unavailable');
      return r.json();
    }),
    fetch('https://api.github.com/users/ArduRadioKot/repos?per_page=100&sort=updated', { headers: { Accept: 'application/vnd.github+json' } }).then(r => {
      if (!r.ok) throw new Error('GitHub repositories unavailable');
      return r.json();
    })
  ]).then(([profile, repos]) => {
    document.querySelector('[data-stat="repos"]').textContent = profile.public_repos ?? fallbackProfile.public_repos;
    document.querySelector('[data-stat="followers"]').textContent = profile.followers ?? fallbackProfile.followers;
    updateRepoCards(repos);
  }).catch(() => {
    document.querySelector('[data-stat="repos"]').textContent = fallbackProfile.public_repos;
    document.querySelector('[data-stat="followers"]').textContent = fallbackProfile.followers;
  });

  document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();

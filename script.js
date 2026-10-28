(() => {
  let lang = document.documentElement.lang === 'en' ? 'en' : 'ru';

  const I18N = {
    'meta.title': {
      ru: 'Александр — Developer & Engineer',
      en: 'Alexander — Developer & Engineer'
    },
    'meta.description': {
      ru: 'Александр — разработчик и инженер: embedded, робототехника, компьютерное зрение, AI, web и IoT.',
      en: 'Alexander — developer and engineer: embedded systems, robotics, computer vision, AI, web, and IoT.'
    },
    'meta.ogDescription': {
      ru: 'Личное портфолио и резюме: FrogeeSoft/S.I.T, embedded, робототехника, компьютерное зрение, AI, web и IoT.',
      en: 'Personal portfolio and résumé: FrogeeSoft/S.I.T, embedded systems, robotics, computer vision, AI, web, and IoT.'
    },
    'a11y.skip': { ru: 'Перейти к содержимому', en: 'Skip to content' },
    'brand.home': { ru: 'FrogeeSoft — на главную', en: 'FrogeeSoft — back to top' },
    'nav.primary': { ru: 'Основная навигация', en: 'Primary' },
    'nav.menu': { ru: 'Меню', en: 'Menu' },
    'nav.about': { ru: 'Обо мне', en: 'About' },
    'nav.projects': { ru: 'Проекты', en: 'Projects' },
    'nav.achievements': { ru: 'Достижения', en: 'Achievements' },
    'nav.process': { ru: 'Как я работаю', en: 'How I work' },
    'nav.personal': { ru: 'Личный проект', en: 'My project' },
    'nav.contact': { ru: 'Контакты', en: 'Contact' },
    'nav.email': { ru: 'Написать на почту', en: 'Email me' },
    'lang.label': { ru: 'Язык', en: 'Language' },
    'theme.toggle': { ru: 'Переключить тему', en: 'Toggle theme' },
    'menu.open': { ru: 'Открыть меню', en: 'Open menu' },
    'menu.close': { ru: 'Закрыть меню', en: 'Close menu' },
    'hero.title': {
      ru: 'Привет, я <span>Александр.</span>',
      en: 'Hi, I\u2019m <span>Alexander.</span>'
    },
    'hero.lead': {
      ru: '<strong>FullStack и embedded-разработчик,</strong> студент Научно-технологического университета «Сириус». Работаю с робототехникой, embedded-системами, компьютерным зрением и fullstack-продуктами.',
      en: '<strong>Full-stack and embedded developer</strong> and a first-year student at Sirius University of Science and Technology. I work with robotics, embedded systems, computer vision, and full-stack products.'
    },
    'hero.projects': { ru: 'Смотреть проекты', en: 'View projects' },
    'hero.contact': { ru: 'Написать мне', en: 'Get in touch' },
    'hero.photo': {
      ru: 'Александр выступает с презентацией технологического проекта',
      en: 'Alexander presenting a technology project'
    },
    'hero.role': { ru: 'Разработчик / инженер', en: 'Developer / Engineer' },
    'hero.scroll': { ru: 'Перейти к основной информации', en: 'Go to the main section' },
    'hero.scrollLabel': { ru: 'К основной информации', en: 'About me' },
    'info.rail': { ru: 'Обо мне', en: 'About' },
    'info.title': { ru: 'Учёба, стек и опыт', en: 'Studies, stack, and experience' },
    'info.eduLabel': { ru: 'Образование', en: 'Education' },
    'info.university': {
      ru: 'Научно-технологический университет «Сириус»',
      en: 'Sirius University of Science and Technology'
    },
    'info.eduText': {
      ru: 'Студент 1 курса. Направления подготовки: 01.00.00 Математика и механика, 09.00.00 Информатика и вычислительная техника.',
      en: 'First-year student. Fields of study: 01.00.00 Mathematics and Mechanics, 09.00.00 Informatics and Computer Engineering.'
    },
    'info.year': { ru: 'курс', en: 'year' },
    'info.stackLabel': { ru: 'Основной стек', en: 'Core stack' },
    'info.languages': { ru: 'Языки', en: 'Languages' },
    'info.robotics': { ru: 'Робототехника и embedded', en: 'Robotics and embedded' },
    'info.ai': { ru: 'AI, backend и web', en: 'AI, backend and web' },
    'info.expLabel': { ru: 'Опыт стажировок', en: 'Internships' },
    'org.yandex': { ru: 'Яндекс', en: 'Yandex' },
    'exp.yandexTitle': {
      ru: 'Разработка сервиса «Яндекс Топология»',
      en: 'Building the Yandex Topology service'
    },
    'exp.yandexText': {
      ru: 'Работа над «Яндекс Топологией»: распознавание плана помещения, генерация сетки и оптимальное размещение стеллажей, зарядных станций и рабочих зон.',
      en: 'Work on Yandex Topology: floor-plan recognition, grid generation, and optimal placement of racks, charging stations, and work zones.'
    },
    'org.geoscan': { ru: 'ГК\u00A0«Геоскан»', en: 'Geoscan Group' },
    'exp.geoscanTitle': {
      ru: 'Мониторинг и обследование зданий',
      en: 'Building monitoring and inspection'
    },
    'exp.geoscanText': {
      ru: 'Сервис поиска повреждений и проекты автоматизации: обработка аэрофотосъёмки, детекция дефектов, разработка систем управления и прототипирование инженерных решений.',
      en: 'A damage-detection service and automation projects: aerial imagery processing, defect detection, control systems, and prototypes of engineering solutions.'
    },
    'projects.rail': { ru: 'Избранные проекты', en: 'Selected work' },
    'projects.title': { ru: 'Личные и рабочие проекты', en: 'Personal and client projects' },
    'project.topologyDemo': {
      ru: 'Открыть демонстрацию Яндекс Топологии',
      en: 'Open the Yandex Topology demo'
    },
    'project.topologyAlt': {
      ru: 'Лендинг проекта Яндекс Топология с интерфейсом проектирования роботизированного склада',
      en: 'Yandex Topology landing page with a robotic-warehouse layout interface'
    },
    'project.topologyTitle': { ru: 'Яндекс Топология', en: 'Yandex Topology' },
    'project.topologyOrg': { ru: 'Яндекс · Большие вызовы', en: 'Yandex · Big Challenges' },
    'project.topologyText': {
      ru: 'Сервис для проектирования роботизированных складов. Система получает план помещения, распознаёт доступные зоны, строит сетку и формирует эффективное размещение стеллажей, зарядных станций и рабочей области.',
      en: 'A service for designing robotic warehouses. It takes a floor plan, recognizes usable zones, builds a grid, and lays out racks, charging stations, and the working area.'
    },
    'project.demo': { ru: 'Демо', en: 'Demo' },
    'project.case': { ru: 'Страница кейса', en: 'Case page' },
    'project.more': { ru: 'Подробнее', en: 'Details' },
    'project.mopsAria': { ru: 'МОПС на GitHub', en: 'MOPS on GitHub' },
    'project.mopsAlt': {
      ru: 'Результат компьютерного зрения: обнаруженные трещины выделены рамками',
      en: 'Computer-vision result: detected cracks outlined with boxes'
    },
    'project.mopsTitle': { ru: 'МОПС — мониторинг сооружений', en: 'MOPS — structure monitoring' },
    'project.mopsText': {
      ru: 'Система, созданная при поддержке ГК\u00A0«Геоскан»: дрон собирает фотографии объекта, Metashape строит ортофотофасад, а YOLO находит трещины. Backend — FastAPI, интерфейс — React.',
      en: 'Built with support from Geoscan Group: a drone photographs the site, Metashape builds an orthophoto facade, and YOLO finds cracks. The backend is FastAPI; the interface is React.'
    },
    'project.yasnoAria': { ru: 'Ясно на GitHub', en: 'Yasno on GitHub' },
    'project.yasnoAlt': {
      ru: 'Лендинг образовательной платформы Ясно с AI-ментором',
      en: 'Landing page of the Yasno learning platform with an AI mentor'
    },
    'project.yasnoTitle': { ru: 'Ясно', en: 'Yasno' },
    'project.yasnoText': {
      ru: 'AI-наставник для подготовки к ОГЭ и ЕГЭ: помогает разбирать учебные темы, строить план занятий и получать понятные объяснения.',
      en: 'An AI tutor for the OGE and EGE exams: it helps break down topics, build a study plan, and get clear explanations.'
    },
    'project.warehouseAria': {
      ru: 'Warehouse Delivery Robot на GitHub',
      en: 'Warehouse Delivery Robot on GitHub'
    },
    'project.warehouseAlt': {
      ru: 'Интерфейс распознавания топологии склада с логотипом FrogeeSoft',
      en: 'Warehouse topology recognition interface with the FrogeeSoft logo'
    },
    'project.warehouseText': {
      ru: 'Комплекс для роботизации склада: наземный ROS-робот доставляет грузы, а модуль инвентаризации распознаёт план, строит граф, прокладывает маршруты и считывает QR-коды с помощью Geoscan Pioneer.',
      en: 'A warehouse robotics stack: a ground ROS robot delivers loads, while an inventory module reads the floor plan, builds a graph, plans routes, and scans QR codes with Geoscan Pioneer.'
    },
    'project.robot': { ru: 'Код робота', en: 'Robot code' },
    'project.docs': { ru: 'Документация', en: 'Docs' },
    'project.logicAria': {
      ru: 'Logic Circuit Simulator на GitHub',
      en: 'Logic Circuit Simulator on GitHub'
    },
    'project.logicAlt': {
      ru: 'Презентационный экран симулятора логических схем',
      en: 'Title screen of the logic-circuit simulator'
    },
    'project.logicText': {
      ru: 'Графический редактор цифровых схем с drag-and-drop, логическими элементами и симуляцией сигналов в реальном времени.',
      en: 'A visual editor for digital circuits with drag-and-drop, logic gates, and real-time signal simulation.'
    },
    'project.notesAria': { ru: 'FgSNotes на GitHub', en: 'FgSNotes on GitHub' },
    'project.notesAlt': {
      ru: 'Интерфейс Markdown-редактора FgSNotes с редактором и предпросмотром',
      en: 'FgSNotes Markdown editor with a side-by-side preview'
    },
    'project.notesText': {
      ru: 'Кроссплатформенный Markdown-редактор с предпросмотром, подсветкой синтаксиса, темами, вкладками и системой плагинов.',
      en: 'A cross-platform Markdown editor with preview, syntax highlighting, themes, tabs, and a plugin system.'
    },
    'project.coreAria': { ru: 'FrogeeCore на GitHub', en: 'FrogeeCore on GitHub' },
    'project.coreAlt': {
      ru: 'Два прототипа устройства FrogeeCore с OLED-дисплеями',
      en: 'Two FrogeeCore prototypes with OLED displays'
    },
    'project.coreText': {
      ru: 'Платформа для быстрого прототипирования embedded- и IoT-устройств: собственный модуль, редактор кода, язык сценариев и набор встроенных библиотек.',
      en: 'A platform for rapid prototyping of embedded and IoT devices: a custom module, a code editor, a scripting language, and a set of built-in libraries.'
    },
    'projects.more': {
      ru: 'Больше desktop-, web-, embedded- и робототехнических проектов — в профиле GitHub.',
      en: 'More desktop, web, embedded, and robotics projects are in the GitHub profile.'
    },
    'projects.allCta': { ru: 'Все репозитории', en: 'All repositories' },
    'ach.rail': { ru: 'Достижения', en: 'Achievements' },
    'ach.title': {
      ru: 'Опыт участия в <em>соревнованиях</em>',
      en: 'A record of <em>competitions</em>'
    },
    'ach.current': { ru: 'текущий год', en: 'this year' },
    'ach.archive': { ru: 'архив', en: 'archive' },
    'ach.winner': { ru: 'Победитель', en: 'Winner' },
    'ach.prize': { ru: 'Призёр', en: 'Prizewinner' },
    'ach.regional': { ru: 'Призёр регионального этапа', en: 'Regional prizewinner' },
    'ach.participant': { ru: 'Участник', en: 'Participant' },
    'ach.finalist': { ru: 'Финалист', en: 'Finalist' },
    'ach.hello': {
      ru: 'Конкурс по робототехнике «Hello, Pioneer» от ГК\u00A0«Геоскан»',
      en: 'Hello, Pioneer robotics contest by Geoscan Group'
    },
    'ach.sputnik': {
      ru: 'Всероссийский конкурс научных работ «Спутник»',
      en: 'All-Russian research competition “Sputnik”'
    },
    'ach.olymp': {
      ru: 'Всероссийская олимпиада школьников по технологии и информатике',
      en: 'All-Russian Olympiad in Technology and Informatics'
    },
    'ach.congress': {
      ru: 'Международный научный съезд школьников и Конгресс молодых учёных',
      en: 'International Scientific Congress of School Students and the Congress of Young Scientists'
    },
    'ach.nto': { ru: 'Национальная технологическая олимпиада', en: 'National Technology Olympiad' },
    'ach.big': {
      ru: 'Всероссийский конкурс научно-технических проектов «Большие вызовы»',
      en: 'All-Russian science and engineering contest “Big Challenges”'
    },
    'ach.hse': { ru: 'Кейс-чемпионат «Ключ» НИУ ВШЭ', en: '“Klyuch” case championship, HSE University' },
    'ach.kapcha': { ru: 'Кейс-чемпионат «Капча»', en: '“Kapcha” case championship' },
    'work.rail': { ru: 'Как я работаю', en: 'How I work' },
    'work.title': { ru: 'От задачи до прототипа.', en: 'From brief to prototype.' },
    'work.aTitle': { ru: 'Анализ', en: 'Analysis' },
    'work.aText': {
      ru: 'Разбираюсь в задаче, ограничениях и реальном сценарии использования.',
      en: 'I start with the problem, the constraints, and how it will actually be used.'
    },
    'work.bTitle': { ru: 'Архитектура', en: 'Architecture' },
    'work.bText': {
      ru: 'Определяю компоненты, протоколы, алгоритмы и пользовательские интерфейсы.',
      en: 'I define the components, protocols, algorithms, and interfaces.'
    },
    'work.cTitle': { ru: 'Прототип', en: 'Prototype' },
    'work.cText': {
      ru: 'Собираю минимальную рабочую версию и проверяю ключевые гипотезы.',
      en: 'I build the smallest version that works and test the important assumptions.'
    },
    'work.dTitle': { ru: 'Доработка', en: 'Refinement' },
    'work.dText': {
      ru: 'Тестирую систему в реальных условиях и довожу до стабильного результата.',
      en: 'I test it in real conditions and tighten it until the result is stable.'
    },
    'about.rail': { ru: 'Личный проект', en: 'My project' },
    'about.kicker': {
      ru: 'Мой личный технологический проект',
      en: 'My own technology project'
    },
    'about.p1': {
      ru: 'FrogeeSoft / S.I.T — <strong>мой личный технологический проект</strong>. В его рамках я создаю инструменты для разработчиков, проектирую электронные устройства, собираю робототехнические системы и проверяю идеи на инженерных соревнованиях и хакатонах.',
      en: 'FrogeeSoft / S.I.T is <strong>my own technology project</strong>. I use it to build developer tools, design electronics, assemble robotic systems, and test ideas at engineering contests and hackathons.'
    },
    'about.p2': {
      ru: 'Также я развиваю образовательную платформу <strong>sit-edu.ru</strong>, веду канал проекта и публикую материалы о разработке, робототехнике, электронике и собственных экспериментах.',
      en: 'I also run the learning platform <strong>sit-edu.ru</strong>, keep the project channel, and publish notes on development, robotics, electronics, and my own experiments.'
    },
    'about.tools': { ru: 'Инструменты', en: 'Developer tools' },
    'about.devices': { ru: 'Устройства', en: 'Devices' },
    'about.robotics': { ru: 'Робототехника', en: 'Robotics' },
    'about.competitions': { ru: 'Соревнования', en: 'Competitions' },
    'about.education': { ru: 'Образование', en: 'Education' },
    'about.platform': { ru: 'Платформа', en: 'Platform' },
    'contact.rail': { ru: 'Контакты', en: 'Contact' },
    'contact.title': { ru: 'Давайте <em>обсудим.</em>', en: 'Let\u2019s <em>talk.</em>' },
    'contact.text': {
      ru: 'Есть интересная задача? Открыт к стажировке, первой работе, соревнованиям и совместной разработке технологических продуктов.',
      en: 'Have a problem worth solving? I\u2019m open to internships, a first role, competitions, and building technology products together.'
    },
    'contact.pdf': { ru: 'Сохранить как PDF', en: 'Save as PDF' },
    'contact.email': { ru: 'Почта', en: 'Email' },
    'contact.site': { ru: 'Сайт', en: 'Website' },
    'footer.top': { ru: 'Наверх ↑', en: 'Top ↑' }
  };

  const t = key => I18N[key]?.[lang] || I18N[key]?.ru || '';

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
  const syncMenuLabel = () => {
    const open = menuToggle?.getAttribute('aria-expanded') === 'true';
    menuToggle?.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
  };
  const closeMenu = () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileMenu?.setAttribute('aria-hidden', 'true');
    mobileMenu?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    syncMenuLabel();
  };
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu?.setAttribute('aria-hidden', String(isOpen));
    mobileMenu?.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
    syncMenuLabel();
  });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (!mobileMenu?.classList.contains('is-open')) return;
    if (mobileMenu.contains(event.target) || header?.contains(event.target)) return;
    closeMenu();
  });

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
    if (window.innerWidth > 1100) closeMenu();
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

  const FORMS = {
    stars: {
      ru: ['звезда', 'звезды', 'звёзд'],
      en: ['star', 'stars', 'stars']
    },
    forks: {
      ru: ['форк', 'форка', 'форков'],
      en: ['fork', 'forks', 'forks']
    }
  };
  const countLabel = (n, forms) => {
    if (lang === 'en') return `${n} ${n === 1 ? forms[0] : forms[1]}`;
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return `${n} ${forms[0]}`;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} ${forms[1]}`;
    return `${n} ${forms[2]}`;
  };

  let liveRepos = null;

  const updateRepoCards = repos => {
    repos.forEach(repo => {
      const card = document.querySelector(`[data-repo="${CSS.escape(repo.name)}"]`);
      if (!card) return;
      const starEl = card.querySelector('[data-repo-stars]');
      const forkEl = card.querySelector('[data-repo-forks]');
      if (starEl) starEl.textContent = countLabel(repo.stargazers_count, FORMS.stars[lang]);
      if (forkEl) forkEl.textContent = countLabel(repo.forks_count, FORMS.forks[lang]);
    });
  };

  const applyFallbacks = () => {
    Object.entries(fallbackRepos).forEach(([name, [stars, forks]]) => {
      const card = document.querySelector(`[data-repo="${CSS.escape(name)}"]`);
      if (!card) return;
      const starEl = card.querySelector('[data-repo-stars]');
      const forkEl = card.querySelector('[data-repo-forks]');
      if (starEl) starEl.textContent = countLabel(stars, FORMS.stars[lang]);
      if (forkEl) forkEl.textContent = countLabel(forks, FORMS.forks[lang]);
    });
  };

  const renderRepos = () => {
    applyFallbacks();
    if (liveRepos) updateRepoCards(liveRepos);
  };

  const applyTranslations = () => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = t(el.getAttribute('data-i18n'));
      if (!value) return;
      if (value.includes('<')) el.innerHTML = value;
      else el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      el.alt = t(el.getAttribute('data-i18n-alt'));
    });
    document.querySelectorAll('[data-i18n-content]').forEach(el => {
      el.setAttribute('content', t(el.getAttribute('data-i18n-content')));
    });
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.setLang === lang));
    });
    syncMenuLabel();
    renderRepos();
    document.documentElement.classList.remove('i18n-pending');
  };

  let appliedLang = null;
  const setLang = next => {
    if (next !== 'ru' && next !== 'en') return;
    if (appliedLang === next) return;
    lang = next;
    appliedLang = next;
    try { localStorage.setItem('alex-cv-lang', next); } catch (error) { /* private mode */ }
    const url = new URL(location.href);
    if (next === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    if (url.href !== location.href) history.replaceState(null, '', url);
    applyTranslations();
  };

  setLang(lang);

  const githubJson = url => fetch(url, {
    headers: { Accept: 'application/vnd.github+json' }
  }).then(response => {
    if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
    return response.json();
  });

  Promise.all([
    githubJson('https://api.github.com/users/ArduRadioKot/repos?per_page=100&sort=updated'),
    githubJson('https://api.github.com/users/X200L/repos?per_page=100&sort=updated').catch(() => [])
  ]).then(([arduRepos, x200lRepos]) => {
    liveRepos = [...arduRepos, ...x200lRepos];
    updateRepoCards(liveRepos);
  }).catch(() => {
    // Static fallback values are already rendered in the project cards.
  });

  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.setLang));
  });

  document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();

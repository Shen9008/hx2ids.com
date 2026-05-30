(function () {
    'use strict';

    const header = document.querySelector('.site-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');

    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 40);
        }, { passive: true });
    }

    if (menuToggle && navMobile) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-controls', 'mobile-nav');

        function setMenuOpen(open) {
            navMobile.classList.toggle('open', open);
            menuToggle.classList.toggle('active', open);
            menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            document.body.classList.toggle('menu-open', open);
        }

        menuToggle.addEventListener('click', () => {
            setMenuOpen(!navMobile.classList.contains('open'));
        });

        navMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setMenuOpen(false));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMobile.classList.contains('open')) {
                setMenuOpen(false);
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMobile.classList.contains('open')) {
                setMenuOpen(false);
            }
        });
    }

    const fadeEls = document.querySelectorAll('.fade-up');
    if (fadeEls.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        fadeEls.forEach(el => observer.observe(el));
    } else {
        fadeEls.forEach(el => el.classList.add('visible'));
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    initProjects();
    initContactForm();

    function initProjects() {
        const grid = document.getElementById('projects-grid');
        const filters = document.querySelector('.project-filters:not(#featured-filters)');
        const featuredGrid = document.getElementById('featured-projects');
        const featuredFilters = document.getElementById('featured-filters');
        const modal = document.getElementById('project-modal');

        if (!grid && !featuredGrid) return;
        if (typeof HX2_PROJECTS === 'undefined') return;

        function renderCard(project, index) {
            const delay = index !== undefined ? ` style="transition-delay:${(index % 8) * 0.06}s"` : '';
            return `
                <article class="project-card fade-up" data-id="${project.id}" data-category="${project.category}"${delay}>
                    <img src="${project.image}" alt="${project.name} — Hx2 Design project" loading="lazy">
                    <div class="project-card__overlay">
                        <span class="project-card__tag">${project.category === 'residential' ? 'Residential' : 'Commercial'}</span>
                        <h3>${project.name}</h3>
                        <p>${project.location}</p>
                    </div>
                </article>`;
        }

        function revealCards(container) {
            container.querySelectorAll('.fade-up').forEach(el => {
                if ('IntersectionObserver' in window) {
                    requestAnimationFrame(() => {
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.add('visible');
                                    observer.unobserve(entry.target);
                                }
                            });
                        }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
                        observer.observe(el);
                    });
                } else {
                    el.classList.add('visible');
                }
            });
        }

        function renderInto(container, projects) {
            container.innerHTML = projects.map((p, i) => renderCard(p, i)).join('');
            bindProjectClicks(container);
            revealCards(container);
        }

        if (featuredGrid) {
            function renderFeatured(filter) {
                const filtered = filter === 'all'
                    ? HX2_PROJECTS
                    : HX2_PROJECTS.filter(p => p.category === filter);
                renderInto(featuredGrid, filtered);
            }

            if (featuredFilters) {
                featuredFilters.addEventListener('click', (e) => {
                    const btn = e.target.closest('.filter-btn');
                    if (!btn) return;
                    featuredFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    renderFeatured(btn.dataset.filter);
                });
            }

            renderFeatured('all');
        }

        if (grid) {
            function render(filter) {
                const filtered = filter === 'all'
                    ? HX2_PROJECTS
                    : HX2_PROJECTS.filter(p => p.category === filter);
                renderInto(grid, filtered);
            }

            if (filters) {
                filters.addEventListener('click', (e) => {
                    const btn = e.target.closest('.filter-btn');
                    if (!btn) return;
                    filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    render(btn.dataset.filter);
                });
            }

            render('all');
        }

        function bindProjectClicks(container) {
            container.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('click', () => {
                    const project = HX2_PROJECTS.find(p => p.id === card.dataset.id);
                    if (project && modal) openModal(project);
                });
            });
        }

        function openModal(project) {
            const body = modal.querySelector('.modal-body');
            body.innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <span class="section-label">${project.category === 'residential' ? 'Residential' : 'Commercial'}</span>
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <dl class="modal-meta">
                    <div><dt>Location</dt><dd>${project.location}</dd></div>
                    <div><dt>Property Type</dt><dd>${project.type}</dd></div>
                    <div><dt>Condition</dt><dd>${project.condition}</dd></div>
                </dl>
                <a href="contact.html" class="btn btn-primary">Enquire About This Project</a>`;
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        if (modal) {
            modal.querySelector('.modal-close').addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
            document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
        }

        function closeModal() {
            if (!modal) return;
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const success = form.querySelector('.form-success');
            if (success) success.classList.add('show');
            form.reset();
            setTimeout(() => success.classList.remove('show'), 5000);
        });
    }
})();

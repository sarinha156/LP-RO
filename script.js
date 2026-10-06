/**
 * RODRIGO HILÁRIO ADVOCACIA — SCRIPTS INTERATIVOS & ACESSIBILIDADE
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion com Suporte Completo a Acessibilidade (ARIA + Teclado)
  const faqRows = document.querySelectorAll('.faq-row');
  faqRows.forEach(row => {
    const button = row.querySelector('.faq-button');
    if (button) {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // Fechar outros itens abertos
        faqRows.forEach(otherRow => {
          if (otherRow !== row) {
            otherRow.classList.remove('active');
            const otherBtn = otherRow.querySelector('.faq-button');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Alternar estado atual
        if (!isExpanded) {
          row.classList.add('active');
          button.setAttribute('aria-expanded', 'true');
        } else {
          row.classList.remove('active');
          button.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // 2. Menu Mobile Retrátil com Transição Suave
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', 'translate-x-full');
      }, 10);
    };

    const closeMenu = () => {
      mobileMenu.classList.add('opacity-0', 'translate-x-full');
      document.body.style.overflow = '';
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    };

    mobileMenuBtn.addEventListener('click', openMenu);
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // 3. Efeito Sutil de Rolagem no Header
  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('bg-[#070A11]/98', 'shadow-2xl', 'border-white/[0.1]');
        navbar.classList.remove('bg-[#070A11]/90', 'border-white/[0.06]');
      } else {
        navbar.classList.remove('bg-[#070A11]/98', 'shadow-2xl', 'border-white/[0.1]');
        navbar.classList.add('bg-[#070A11]/90', 'border-white/[0.06]');
      }
    });
  }

  // 4. WhatsApp Tooltip Dismiss
  const waDismiss = document.getElementById('waTooltipDismiss');
  const waTooltip = document.getElementById('waTooltip');
  if (waDismiss && waTooltip) {
    waDismiss.addEventListener('click', (e) => {
      e.stopPropagation();
      waTooltip.style.display = 'none';
    });
  }
});

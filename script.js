/**
 * RODRIGO HILÁRIO ADVOCACIA - SCRIPTS INTERATIVOS
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Fechar outros itens abertos
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Alternar o item clicado
        if (!isActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', 'translate-x-full');
      }, 10);
    });

    const closeMenu = () => {
      mobileMenu.classList.add('opacity-0', 'translate-x-full');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    };

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeMenu);
    }

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // 3. Header Scroll Effect
  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-[#0B111E]/95', 'shadow-xl', 'border-b', 'border-[#233359]');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('bg-[#0B111E]/95', 'shadow-xl', 'border-b', 'border-[#233359]');
        navbar.classList.add('bg-transparent');
      }
    });
  }

  // 4. WhatsApp Tooltip Floating Close/Dismiss
  const waDismiss = document.getElementById('waTooltipDismiss');
  const waTooltip = document.getElementById('waTooltip');
  if (waDismiss && waTooltip) {
    waDismiss.addEventListener('click', (e) => {
      e.stopPropagation();
      waTooltip.style.display = 'none';
    });
  }
});

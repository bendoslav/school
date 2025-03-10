document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to the CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        ctaButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            ctaButton.style.transform = 'scale(1)';
        }, 200);
    });
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const bars = mobileMenuButton.children;

    mobileMenuButton.addEventListener('click', () => {
        // Toggle mobile menu
        mobileMenu.classList.toggle('hidden');
        
        // Animate hamburger to X
        if (!mobileMenu.classList.contains('hidden')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
    
    // Přidání funkcionality pro obory
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('scale-105');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('scale-105');
        });
        
        // Přidání funkcionality pro tlačítko "Více informací"
        const moreInfoBtn = card.querySelector('.more-info-btn');
        if (moreInfoBtn) {
            moreInfoBtn.addEventListener('click', () => {
                const programId = card.getAttribute('data-program-id');
                // Zde můžete přidat kód pro zobrazení detailů oboru
                console.log(`Zobrazuji detaily oboru: ${programId}`);
            });
        }
    });
});
document.querySelectorAll('.hero-box').forEach(heroBox => {
    const heroText = heroBox.querySelector('.hero-text');
    const heroImage = heroBox.querySelector('.hero-image');
    
    heroText.addEventListener('mouseenter', () => {
        heroImage.style.opacity = '1';
    });
    
    heroText.addEventListener('mouseleave', () => {
        heroImage.style.opacity = '0';
    });
});
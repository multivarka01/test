document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.game-card, .social-link');

    // Add a simple hover sound effect or 3D tilt effect if desired
    // For now, let's add a dynamic glow effect based on mouse position
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            
            // Subtle 3D tilt
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Copy Standoff 2 ID
    const copyBtn = document.getElementById('copy-so2-btn');
    const idValue = document.getElementById('so2-id-value');
    
    if (copyBtn && idValue) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(idValue.innerText).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = 'Скопировано!';
                copyBtn.style.background = '#ff2a2a';
                copyBtn.style.color = '#000';
                
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.background = '';
                    copyBtn.style.color = '';
                }, 2000);
            });
        });
    }

    // Copy Discord Username
    const copyDiscordBtn = document.getElementById('copy-discord-btn');
    const discordText = document.getElementById('discord-text');
    
    if (copyDiscordBtn && discordText) {
        copyDiscordBtn.addEventListener('click', () => {
            const discordUsername = 'element_228';
            navigator.clipboard.writeText(discordUsername).then(() => {
                const originalText = discordText.innerText;
                discordText.innerText = 'Скопировано!';
                copyDiscordBtn.style.background = '#5865F2';
                copyDiscordBtn.style.color = '#fff';
                
                setTimeout(() => {
                    discordText.innerText = originalText;
                    copyDiscordBtn.style.background = '';
                    copyDiscordBtn.style.color = '';
                }, 2000);
            });
        });
    }

    // Tabs Navigation Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and target tab
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    if (lightbox && lightboxImg && closeBtn) {
        // Open lightbox
        galleryItems.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.classList.add('show');
                lightboxImg.src = img.src;
            });
        });

        // Close lightbox
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('show');
        });

        // Close when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('show');
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('show')) {
                lightbox.classList.remove('show');
            }
        });
    }
});

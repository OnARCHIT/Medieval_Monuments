// Monument Explorer - Advanced JavaScript with 3D effects, animations and interactions - FIXED VERSION

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize application
    initApp();
});

// Main initialization function
function initApp() {
    try {
        // Show loading screen
        const loadingScreen = document.getElementById('loading-screen');
        const loadingStatus = document.querySelector('.loading-status');
        
        if (!loadingScreen) {
            console.error('Loading screen element not found');
            // Skip loading screen and initialize directly
            initializeComponents();
            return;
        }
        
        // Simulate loading process
        const loadingMessages = [
            'Initializing 3D Engine',
            'Generating Monument Models', 
            'Calculating Light Physics',
            'Preparing Materials',
            'Creating Dynamic Shadows',
            'Finalizing Experience'
        ];
        
        let messageIndex = 0;
        const messageInterval = setInterval(() => {
            if (loadingStatus) {
                loadingStatus.textContent = loadingMessages[messageIndex];
                messageIndex = (messageIndex + 1) % loadingMessages.length;
            }
        }, 600);
        
        // Create particle effects for loading screen
        try {
            createParticles('.particle-system', 50);
        } catch (error) {
            console.warn('Particle creation failed:', error);
        }
        
        // Simulate loading complete after 3.5 seconds
        setTimeout(() => {
            clearInterval(messageInterval);
            hideLoadingScreen(loadingScreen);
            initializeComponents();
        }, 3500);
        
    } catch (error) {
        console.error('Initialization error:', error);
        // Fallback: hide loading and initialize anyway
        initializeComponents();
    }
}

function hideLoadingScreen(loadingScreen) {
    try {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 600);
    } catch (error) {
        console.error('Error hiding loading screen:', error);
        loadingScreen.style.display = 'none';
    }
}

function initializeComponents() {
    const components = [
        initNavigation,
        initCustomCursor,
        initScrollAnimations, 
        initHeroSection,
        initMonumentsSection,
        initGamesSection,
        initLaboratorySection,
        initTimelineSection,
        initAchievementsSection,
        initAudioControls,
        initThemeToggle,
        initNewsletterSection,
        initCreditsSection
    ];
    
    components.forEach((initFunc, index) => {
        try {
            if (typeof initFunc === 'function') {
                initFunc();
            }
        } catch (error) {
            console.error(`Error in component ${index}:`, error);
        }
    });
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    const cursorGlow = document.querySelector('.cursor-glow');

    // Only enable custom cursor for devices with fine pointer (mouse)
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            // Scale effect on interactive elements
            const target = e.target.closest('button, a, [role="button"], .clickable, .floating-monument, .monument-card, .game-card');
            if (target) {
                cursorTrail.style.transform = 'scale(1.5)';
                cursorGlow.style.transform = 'scale(2)';
                cursorGlow.style.opacity = '0.8';
            } else {
                cursorTrail.style.transform = 'scale(0.8)';
                cursorGlow.style.transform = 'scale(1)';
                cursorGlow.style.opacity = '0.5';
            }
        });

        // Handle cursor leaving the window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });

        // Handle click effect
        document.addEventListener('mousedown', () => {
            cursorTrail.style.transform = 'scale(0.6)';
        });

        document.addEventListener('mouseup', () => {
            cursorTrail.style.transform = 'scale(0.8)';
        });
    }
}

// ===== NAVIGATION =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Handle navigation click with improved performance
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Immediate visual feedback
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Smooth scroll with better timing
                const targetPosition = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optimized scroll handler
    let scrollTimer = null;
    window.addEventListener('scroll', () => {
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }

        scrollTimer = setTimeout(() => {
            updateActiveNav();
            updateNavbarStyle();
        }, 10);
    });

    function updateActiveNav() {
        let currentSection = '';
        const scrollPos = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    function updateNavbarStyle() {
        const navbar = document.getElementById('main-nav');
        if (window.scrollY > 50) {
            navbar.style.padding = `8px 16px`;
            navbar.style.boxShadow = 'var(--shadow-lg)';
            navbar.style.backgroundColor = 'rgba(var(--color-surface-rgb), 0.95)';
        } else {
            navbar.style.padding = `12px 16px`;
            navbar.style.boxShadow = 'var(--shadow-md)';
            navbar.style.backgroundColor = 'rgba(var(--color-surface-rgb), 0.8)';
        }
    }
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');

    // Check for saved theme preference or use device theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-color-scheme', savedTheme);
    } else {
        // Check if user prefers dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            document.documentElement.setAttribute('data-color-scheme', 'dark');
        }
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-color-scheme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Enhanced transition effect
        document.body.style.transition = 'background-color 0.5s ease-out, color 0.5s ease-out';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);

        showNotification(`Switched to ${newTheme} mode`, 'info');
    });
}

// ===== AUDIO CONTROLS =====
function initAudioControls() {
    const audioToggle = document.getElementById('audio-toggle');
    const audioPanel = document.getElementById('audio-panel');

    // Audio state
    const audioState = {
        masterVolume: 70,
        ambientSounds: true,
        uiSounds: true,
        narration: true,
        muted: false
    };

    // Toggle audio panel
    audioToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        audioPanel.classList.toggle('active');

        // Enhanced visual feedback
        if (audioPanel.classList.contains('active')) {
            audioToggle.style.background = 'var(--color-primary)';
            audioToggle.style.color = 'var(--color-btn-primary-text)';
        } else {
            audioToggle.style.background = '';
            audioToggle.style.color = '';
        }

        // Play UI sound
        if (audioState.uiSounds && !audioState.muted) {
            playUISound('click');
        }
    });

    // Handle master volume
    const masterVolume = document.getElementById('master-volume');
    if (masterVolume) {
        masterVolume.addEventListener('input', (e) => {
            audioState.masterVolume = parseInt(e.target.value);
            updateAudioSettings();
        });
    }

    // Handle audio options
    const ambientSounds = document.getElementById('ambient-sounds');
    const uiSounds = document.getElementById('ui-sounds');
    const narration = document.getElementById('narration');

    [ambientSounds, uiSounds, narration].forEach(control => {
        if (control) {
            control.addEventListener('change', (e) => {
                audioState[e.target.id.replace('-', '')] = e.target.checked;
                updateAudioSettings();
                if (audioState.uiSounds && !audioState.muted) {
                    playUISound('toggle');
                }
            });
        }
    });

    // Close audio panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!audioPanel.contains(e.target) && !audioToggle.contains(e.target)) {
            audioPanel.classList.remove('active');
            audioToggle.style.background = '';
            audioToggle.style.color = '';
        }
    });

    function updateAudioSettings() {
        console.log('Audio settings updated:', audioState);
    }

    function playUISound(type) {
        console.log(`Playing UI sound: ${type}`);
    }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const sectionHeaders = document.querySelectorAll('.section-header');

    // Elements to animate on scroll
    const elementsToAnimate = [
        '.monument-card',
        '.game-card',
        '.achievement-card',
        '.sun-controls',
        '.material-analysis',
        '.experiment-zone',
        '.time-navigator',
        '.time-portal-viewer'
    ];

    // Enhanced observer callback
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Enhanced staggered animations
                if (entry.target.classList.contains('monument-card')) {
                    const index = Array.from(document.querySelectorAll('.monument-card')).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${0.15 * index}s`;
                    entry.target.style.animationDelay = `${0.15 * index}s`;
                }

                if (entry.target.classList.contains('game-card')) {
                    const index = Array.from(document.querySelectorAll('.game-card')).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${0.1 * index}s`;
                }

                if (entry.target.classList.contains('achievement-card')) {
                    const index = Array.from(document.querySelectorAll('.achievement-card')).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${0.1 * index}s`;
                }
            }
        });
    };

    // Create Intersection Observer with better threshold
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1,
        rootMargin: '-50px'
    });

    // Observe elements
    sectionHeaders.forEach(header => observer.observe(header));
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            observer.observe(element);
        });
    });

    // Enhanced parallax effect
    let parallaxTimer = null;
    window.addEventListener('scroll', () => {
        if (parallaxTimer !== null) {
            clearTimeout(parallaxTimer);
        }

        parallaxTimer = setTimeout(() => {
            const scrollPosition = window.pageYOffset;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollPosition > sectionTop - window.innerHeight &&
                    scrollPosition < sectionTop + sectionHeight) {
                    const parallaxElements = section.querySelectorAll('.monument-3d, .monument-model, .game-3d-scene, .sample-3d');

                    parallaxElements.forEach(element => {
                        const speed = 0.03;
                        const yPos = (scrollPosition - sectionTop) * speed;
                        const currentTransform = element.style.transform || '';
                        
                        if (currentTransform.includes('rotateX') && currentTransform.includes('rotateY')) {
                            // Preserve existing rotation while adding parallax
                            element.style.transform = currentTransform.replace(/translateY\([^)]*\)/, '') + ` translateY(${yPos}px)`;
                        } else {
                            element.style.transform = `translateY(${yPos}px) rotateX(15deg) rotateY(20deg)`;
                        }
                    });
                }
            });
        }, 5);
    });
}

// ===== HERO SECTION =====
function initHeroSection() {
  const startJourneyBtn = document.getElementById('start-journey');
  const vrExperienceBtn = document.getElementById('virtual-reality');
  const floatingMonuments = document.querySelectorAll('.floating-monument');
  const heroSubtitle = document.querySelector('.hero-subtitle');

  // Staggered animation for each word in the hero subtitle
  if (heroSubtitle) {
    const words = heroSubtitle.querySelectorAll('span');
    words.forEach((word, i) => {
      setTimeout(() => {
        word.classList.add('animated');
      }, 120 * i);
    });
  }

window.addEventListener('DOMContentLoaded', initHeroSection);





    // Start journey button
    if (startJourneyBtn) {
        startJourneyBtn.addEventListener('click', () => {
            window.scrollTo({
                top: document.getElementById('monuments').offsetTop - 80,
                behavior: 'smooth'
            });
            createParticleExplosion(startJourneyBtn, 50);
        });
    }

    // VR experience button
    if (vrExperienceBtn) {
        vrExperienceBtn.addEventListener('click', () => {
            showNotification('VR Experience coming soon! Prepare for immersive monument exploration.', 'info');
        });
    }

    // Enhanced floating monuments interaction
    floatingMonuments.forEach(monument => {
        const label = monument.querySelector('.monument-label');
        const glow = monument.querySelector('.monument-glow');

        monument.addEventListener('mouseenter', () => {
            // Enhanced glow effect
            if (glow) {
                glow.style.opacity = '1';
                glow.style.filter = 'blur(15px)';
                glow.style.transform = 'rotateX(90deg) translateZ(-10px) scale(1.5)';
            }

            // Enhanced label effect
            if (label) {
                label.style.transform = 'translateX(-50%) scale(1.3)';
                label.style.color = 'var(--color-primary)';
                label.style.fontWeight = 'var(--font-weight-bold)';
                label.style.textShadow = '0 4px 15px rgba(0,0,0,0.5)';
            }

            // Add bounce animation to monument
            monument.style.animation = 'float 1s infinite ease-in-out';
        });

        monument.addEventListener('mouseleave', () => {
            // Reset effects
            if (glow) {
                glow.style.opacity = '0.6';
                glow.style.filter = 'blur(5px)';
                glow.style.transform = 'rotateX(90deg) translateZ(-10px) scale(1)';
            }

            if (label) {
                label.style.transform = 'translateX(-50%) scale(1)';
                label.style.color = 'var(--color-text)';
                label.style.fontWeight = '';
                label.style.textShadow = '';
            }

            // Reset animation
            monument.style.animation = '';
        });

        monument.addEventListener('click', () => {
            const monumentId = monument.getAttribute('data-monument');

            // Enhanced click feedback
            monument.style.transform = 'translateZ(100px) scale(1.5)';
            setTimeout(() => {
                monument.style.transform = '';
            }, 300);

            // Navigate to corresponding monument
            setTimeout(() => {
                const monumentCard = document.querySelector(`.monument-card[data-monument="${monumentId}"]`);
                if (monumentCard) {
                    window.scrollTo({
                        top: monumentCard.offsetTop - 100,
                        behavior: 'smooth'
                    });

                    // Enhanced highlight effect
                    monumentCard.style.transform = 'translateY(-20px) scale(1.05)';
                    monumentCard.style.boxShadow = '0 20px 40px rgba(var(--color-primary-rgb), 0.3)';
                    monumentCard.style.borderColor = 'var(--color-primary)';

                    setTimeout(() => {
                        monumentCard.style.transform = '';
                        monumentCard.style.boxShadow = '';
                        monumentCard.style.borderColor = '';
                    }, 2500);
                } else {
                    window.scrollTo({
                        top: document.getElementById('monuments').offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        });
    });

    // Add particle effects to hero background
    createParticles('.hero-background', 30);
}
document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const panel = btn.parentElement.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    if (!expanded) {
      // Expand panel
      btn.setAttribute('aria-expanded', 'true');
      panel.setAttribute('aria-hidden', 'false');
      panel.classList.add('expanded');

      // Animate max-height to scrollHeight for smooth expansion
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.style.opacity = '1';

      // Confetti burst
      const confetti = panel.querySelector('.confetti');
      confetti.innerHTML = '';
      for (let i = 0; i < 20; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        // Random colors from palette
        const colors = ['#d4af37', '#b08d57', '#ede3c6', '#a89f91'];
        piece.style.background = colors[i % colors.length];

        // Random X/Y translations for burst effect
        const x = (Math.random() - 0.5) * 160; // -80 to +80 px
        const y = (Math.random() - 1) * 120;   // -120 to 0 px (upwards)
        piece.style.setProperty('--x', `${x}px`);
        piece.style.setProperty('--y', `${y}px`);

        // Random animation delay for natural effect
        piece.style.animationDelay = (Math.random() * 0.2) + 's';

        confetti.appendChild(piece);
      }

      // Remove confetti after animation ends
      setTimeout(() => {
        confetti.innerHTML = '';
      }, 1000);

    } else {
      // Collapse panel
      btn.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');

      // Animate collapse by setting max-height to 0
      panel.style.maxHeight = '0';
      panel.style.opacity = '0';

      // Remove shiny animation class after transition
      panel.addEventListener('transitionend', function handler() {
        panel.classList.remove('expanded');
        panel.removeEventListener('transitionend', handler);
      });
    }
  });
});

// ===== MONUMENTS SECTION =====
function initMonumentsSection() {
    const sunSlider = document.getElementById('sun-time');
    const sunIndicator = document.querySelector('.sun-indicator');
    const lightValue = document.getElementById('light-value');
    const shadowValue = document.getElementById('shadow-value');
    const monumentCards = document.querySelectorAll('.monument-card');
    const exploreBtns = document.querySelectorAll('.explore-btn');

    // Enhanced sun position and lighting
    if (sunSlider) {
        sunSlider.addEventListener('input', (e) => {
            const time = parseFloat(e.target.value);
            updateLighting(time);
        });

        // Initialize with default time (noon)
        updateLighting(12);
    }

    // Enhanced explore monument buttons
    exploreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const monumentCard = btn.closest('.monument-card');
            const monumentName = monumentCard.querySelector('h3').textContent;

            showNotification(`Exploring ${monumentName} in immersive detail mode`, 'success');

            // Enhanced zoom effect
            const model = monumentCard.querySelector('.monument-3d');
            const particles = monumentCard.querySelector('.monument-particles');

            // Create exploration particles
            createParticleExplosion(btn, 30);

            // Enhanced 3D model interaction
            if (model) {
                model.style.transform = 'rotateX(25deg) rotateY(80deg) scale(1.3)';
                model.style.filter = 'brightness(1.2) contrast(1.1)';
            }

            // Add particle effect to monument
            if (particles) {
                particles.innerHTML = '';
                for (let i = 0; i < 20; i++) {
                    const particle = document.createElement('div');
                    particle.style.position = 'absolute';
                    particle.style.width = '3px';
                    particle.style.height = '3px';
                    particle.style.backgroundColor = 'var(--color-primary)';
                    particle.style.borderRadius = '50%';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = Math.random() * 100 + '%';
                    particle.style.animation = 'float 2s infinite ease-in-out';
                    particle.style.animationDelay = Math.random() * 2 + 's';
                    particles.appendChild(particle);
                }
            }

            setTimeout(() => {
                if (model) {
                    model.style.transform = '';
                    model.style.filter = '';
                }
                if (particles) particles.innerHTML = '';
            }, 3000);
        });
    });

    // Enhanced interactive 3D models
    monumentCards.forEach(card => {
        const model = card.querySelector('.monument-3d');
        if (model) {
            model.addEventListener('mousemove', (e) => {
                const rect = model.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Enhanced rotation calculation
                const rotateY = ((x / rect.width) - 0.5) * 60;
                const rotateX = ((y / rect.height) - 0.5) * -30;

                model.style.transform = `rotateX(${15 + rotateX}deg) rotateY(${20 + rotateY}deg) scale(1.05)`;
                model.style.filter = 'brightness(1.1)';
            });

            model.addEventListener('mouseleave', () => {
                model.style.transform = 'rotateX(15deg) rotateY(20deg)';
                model.style.filter = '';
            });
        }
    });
    // Smooth collapsible logic for modal section
const headerBtn = document.querySelector('.modal-header');
const modalContent = document.getElementById('materialModal');

headerBtn.addEventListener('click', () => {
  const expanded = headerBtn.getAttribute('aria-expanded') === 'true';
  headerBtn.setAttribute('aria-expanded', String(!expanded));
  modalContent.setAttribute('aria-hidden', String(expanded));

  if (!expanded) {
    modalContent.classList.add('open');
    // Set max-height to scrollHeight for smooth expand
    modalContent.style.maxHeight = modalContent.scrollHeight + 'px';
    modalContent.style.opacity = '1';
  } else {
    // Collapse: set max-height to 0 for smooth collapse
    modalContent.style.maxHeight = '0';
    modalContent.style.opacity = '0';
    // Remove .open after transition for accessibility
    setTimeout(() => {
      if (modalContent.style.maxHeight === '0px') {
        modalContent.classList.remove('open');
      }
    }, 800); // match transition duration
  }
});

// Optional: adjust max-height on window resize if open
window.addEventListener('resize', () => {
  if (modalContent.classList.contains('open')) {
    modalContent.style.maxHeight = modalContent.scrollHeight + 'px';
  }
});


    // Enhanced lighting update function
    function updateLighting(time) {
        let angle = 0;
        if (time >= 6 && time <= 18) {
            angle = ((time - 6) / 12) * 180;
        } else if (time < 6) {
            angle = 0;
        } else {
            angle = 180;
        }

        // Enhanced sun indicator with glow
        if (sunIndicator) {
            sunIndicator.style.transform = `rotate(${angle}deg) translateY(-52px) rotate(-${angle}deg)`;
        }

        // Enhanced light calculation
        let lightIntensity = 0;
        if (time >= 6 && time <= 18) {
            const midday = 12;
            const distanceFromMidday = Math.abs(time - midday);
            lightIntensity = Math.max(20, 100 - (distanceFromMidday * 15));
        } else {
            lightIntensity = Math.max(5, 30 - Math.abs(time - 12) * 3);
        }

        // Enhanced shadow calculation
        let shadowLength = '';
        let shadowIntensity = 1;

        if (time >= 11 && time <= 13) {
            shadowLength = 'Very Short';
            shadowIntensity = 0.6;
        } else if ((time >= 9 && time < 11) || (time > 13 && time <= 15)) {
            shadowLength = 'Short';
            shadowIntensity = 0.8;
        } else if ((time >= 7 && time < 9) || (time > 15 && time <= 17)) {
            shadowLength = 'Medium';
            shadowIntensity = 1.0;
        } else if ((time >= 5 && time < 7) || (time > 17 && time <= 19)) {
            shadowLength = 'Long';
            shadowIntensity = 1.3;
        } else {
            shadowLength = 'Very Long';
            shadowIntensity = 1.5;
        }

        // Update display with enhanced feedback
        if (lightValue) lightValue.textContent = `${Math.round(lightIntensity)}%`;
        if (shadowValue) shadowValue.textContent = shadowLength;

        // Enhanced monument lighting effects
        const monuments = document.querySelectorAll('.monument-3d');
        monuments.forEach(monument => {
            const shadow = monument.querySelector('.monument-shadow');
            const container = monument.closest('.monument-3d-container');

            if (shadow) {
                shadow.style.width = `${60 + (shadowIntensity * 20)}%`;
                shadow.style.filter = `blur(${3 + shadowIntensity * 4}px)`;
                shadow.style.opacity = Math.min(0.8, 0.2 + shadowIntensity * 0.4);

                // Add shadow direction based on sun position
                const shadowOffset = (angle - 90) * 0.2;
                shadow.style.transform = `translateX(calc(-50% + ${shadowOffset}px)) rotateX(90deg)`;
            }

            // Enhanced background transitions
            if (container) {
                let bgColor = '';
                let ambientLight = '';

                if (time >= 5 && time < 8) {
                    // Dawn
                    bgColor = 'linear-gradient(135deg, var(--time-dawn), var(--color-background))';
                    ambientLight = 'drop-shadow(0 0 10px rgba(242, 166, 94, 0.3))';
                } else if (time >= 8 && time < 17) {
                    // Day
                    bgColor = 'linear-gradient(135deg, var(--time-noon), var(--color-background))';
                    ambientLight = 'drop-shadow(0 0 15px rgba(255, 255, 253, 0.4))';
                } else if (time >= 17 && time < 20) {
                    // Dusk
                    bgColor = 'linear-gradient(135deg, var(--time-dusk), var(--color-background))';
                    ambientLight = 'drop-shadow(0 0 10px rgba(221, 85, 85, 0.3))';
                } else {
                    // Night
                    bgColor = 'linear-gradient(135deg, var(--time-night), var(--color-background))';
                    ambientLight = 'drop-shadow(0 0 8px rgba(31, 64, 104, 0.5))';
                }

                container.style.background = bgColor;
                monument.style.filter = ambientLight;
            }
        });

        // Update sun indicator glow
        if (sunIndicator) {
            if (lightIntensity > 50) {
                sunIndicator.style.boxShadow = `0 0 ${lightIntensity * 0.3}px rgba(255, 215, 0, ${lightIntensity / 100})`;
            } else {
                sunIndicator.style.boxShadow = `0 0 5px rgba(200, 200, 255, 0.3)`;
            }
        }
    }
}

// Enhanced Material Database with IS Code Properties
const materials = {
    'red-sandstone': {
        name: 'Red Sandstone',
        description: 'Durable, weather-resistant, easy to carve. Iron oxide gives red color, excellent workability. Perfect for forts, palaces, and decorative elements.',
        properties: { density: 76, hardness: 60, durability: 85 },
        values: { density: '2.3 g/cm³', hardness: '6/10', durability: 'Very High' },
        color: '#8B4513',
        isProperties: {
            compressiveStrength: 65, // MPa as per IS 1121-1
            transverseStrength: 6.5, // MPa as per IS 1121-2
            tensileStrength: 3.9,    // MPa as per IS 1121-3
            waterAbsorption: 0.65    // % as per IS 1124
        }
    },
    'white-marble': {
        name: 'White Marble',
        description: 'Beautiful finish, cool to touch, translucent. Metamorphic limestone that takes fine polish. Ideal for decorative elements, inlay work, and mausoleums.',
        properties: { density: 90, hardness: 70, durability: 65 },
        values: { density: '2.7 g/cm³', hardness: '7/10', durability: 'High' },
        color: '#FFFAFA',
        isProperties: {
            compressiveStrength: 70, // MPa as per IS 1121-1
            transverseStrength: 9.1, // MPa as per IS 1121-2
            tensileStrength: 5.6,    // MPa as per IS 1121-3
            waterAbsorption: 0.35    // % as per IS 1124
        }
    },
    'granite': {
        name: 'Granite',
        description: 'Extremely hard, long-lasting, earthquake-resistant. Crystalline structure with minimal water absorption. Perfect for temple construction and load-bearing structures.',
        properties: { density: 95, hardness: 90, durability: 95 },
        values: { density: '2.8 g/cm³', hardness: '9/10', durability: 'Exceptional' },
        color: '#708090',
        isProperties: {
            compressiveStrength: 95, // MPa as per IS 1121-1
            transverseStrength: 14.3, // MPa as per IS 1121-2
            tensileStrength: 9.5,    // MPa as per IS 1121-3
            waterAbsorption: 0.15    // % as per IS 1124
        }
    },
    'lime-mortar': {
        name: 'Lime Mortar',
        description: 'Traditional binding material made from limestone with breathable and self-healing properties. Used extensively in historic structures across India.',
        properties: { density: 65, hardness: 40, durability: 75 },
        values: { density: '1.7 g/cm³', hardness: '4/10', durability: 'High' },
        color: '#E8E4D8',
        isProperties: {
            compressiveStrength: 3.5, // MPa as per IS 1121-1
            transverseStrength: 1.2, // MPa as per IS 1121-2
            tensileStrength: 0.8,    // MPa as per IS 1121-3
            waterAbsorption: 12.5    // % as per IS 1124
        }
    },
    'egg-white-lime': {
        name: 'Egg White Lime',
        description: 'Advanced mortar using egg whites as binding agent, creating extremely durable finishes. Used in Chettinad architecture and fine detail work.',
        properties: { density: 68, hardness: 45, durability: 85 },
        values: { density: '1.8 g/cm³', hardness: '4.5/10', durability: 'Very High' },
        color: '#F5F5F0',
        isProperties: {
            compressiveStrength: 4.2, // MPa as per IS 1121-1
            transverseStrength: 1.5, // MPa as per IS 1121-2
            tensileStrength: 1.1,    // MPa as per IS 1121-3
            waterAbsorption: 9.8     // % as per IS 1124
        }
    },
    'honey-lime': {
        name: 'Honey Lime',
        description: 'Ancient mortar incorporating honey for water-resistant and flexible binding. Used in traditional construction for water-resistant applications.',
        properties: { density: 70, hardness: 42, durability: 80 },
        values: { density: '1.75 g/cm³', hardness: '4.2/10', durability: 'High' },
        color: '#E6D9B8',
        isProperties: {
            compressiveStrength: 3.8, // MPa as per IS 1121-1
            transverseStrength: 1.4, // MPa as per IS 1121-2
            tensileStrength: 1.0,    // MPa as per IS 1121-3
            waterAbsorption: 8.5     // % as per IS 1124
        }
    },
    'coconut-fiber-lime': {
        name: 'Coconut Fiber Lime',
        description: 'Lime mortar reinforced with coconut fibers for enhanced tensile strength. Traditional in coastal regions for structures requiring flexibility.',
        properties: { density: 62, hardness: 38, durability: 82 },
        values: { density: '1.65 g/cm³', hardness: '3.8/10', durability: 'Very High' },
        color: '#D9C9A3',
        isProperties: {
            compressiveStrength: 3.2, // MPa as per IS 1121-1
            transverseStrength: 1.8, // MPa as per IS 1121-2
            tensileStrength: 1.4,    // MPa as per IS 1121-3
            waterAbsorption: 10.2    // % as per IS 1124
        }
    },
    'teak-wood': {
        name: 'Teak Wood',
        description: 'Durable hardwood with natural termite resistance. Extensively used in Kerala architecture and temple construction for its longevity.',
        properties: { density: 55, hardness: 65, durability: 90 },
        values: { density: '0.65 g/cm³', hardness: '6.5/10', durability: 'Exceptional' },
        color: '#B68D4C',
        isProperties: {
            compressiveStrength: 58, // MPa as per IS 1121-1
            transverseStrength: 95, // MPa as per IS 1121-2
            tensileStrength: 100,    // MPa as per IS 1121-3
            waterAbsorption: 7.0     // % as per IS 1124
        }
    }
};

// IS Code Helper Functions

// IS 1121-1 compliant compressive strength values
function getISCompressiveStrength(material) {
    return materials[material].isProperties.compressiveStrength;
}

// IS 1121-2 compliant transverse strength values
function getISTransverseStrength(material) {
    return materials[material].isProperties.transverseStrength;
}

// IS 1121-3 compliant tensile strength values
function getISTensileStrength(material) {
    return materials[material].isProperties.tensileStrength;
}

// IS 1124:1974 compliant water absorption values
function getISWaterAbsorption(material) {
    return materials[material].isProperties.waterAbsorption;
}

// Complete IS code test implementation
function runISCodeTest() {
    if (!currentMaterial || !materials[currentMaterial]) {
        showNotification('Please select a material first', 'error');
        return;
    }

    const materialData = materials[currentMaterial];
    const testResults = {
        'compressive': calculateCompressiveStrength(),
        'transverse': calculateTransverseStrength(),
        'tensile': calculateTensileStrength(),
        'waterAbsorption': getISWaterAbsorption(currentMaterial)
    };
    
    let isTestResult = `📋 IS Code Test Results for ${materialData.name}:\n\n`;
    isTestResult += `• IS 1121-1: Compressive Strength = ${testResults.compressive.toFixed(2)} MPa\n`;
    isTestResult += `• IS 1121-2: Transverse Strength = ${testResults.transverse.toFixed(2)} MPa\n`;
    isTestResult += `• IS 1121-3: Tensile Strength = ${testResults.tensile.toFixed(2)} MPa\n`;
    isTestResult += `• IS 1124: Water Absorption = ${testResults.waterAbsorption.toFixed(2)}%\n\n`;
    
    // Check compliance with IS requirements
    const complianceStatus = checkISCodeCompliance(testResults);
    isTestResult += `🔍 IS Code Compliance Status:\n`;
    
    for (const [test, status] of Object.entries(complianceStatus)) {
        isTestResult += `• ${test}: ${status.compliant ? '✅ Compliant' : '❌ Non-compliant'} (${status.details})\n`;
    }
    
    showNotification(isTestResult, 'success');
}

// Compressive strength per IS 1121-1
function calculateCompressiveStrength() {
    const materialData = materials[currentMaterial];
    let baseStrength = getISCompressiveStrength(currentMaterial);
    
    const temp = parseInt(tempSlider.value);
    const humidity = parseInt(humiditySlider.value);
    
    // Temperature correction factor as per IS 4031 standards
    let tempFactor = 1.0;
    if (temp < 20) {
        tempFactor = 1.0 + (20 - temp) * 0.01; // Stronger when colder
    } else if (temp > 35) {
        tempFactor = 1.0 - (temp - 35) * 0.015; // Weaker when hotter
    }
    
    // Humidity correction factor as per IS 9000-6:1978
    let humidityFactor = 1.0;
    if (humidity > 70) {
        if (currentMaterial === 'white-marble' || currentMaterial === 'egg-white-lime') {
            humidityFactor = 1.0 - (humidity - 70) * 0.004;
        } else if (currentMaterial === 'red-sandstone' || currentMaterial === 'lime-mortar') {
            humidityFactor = 1.0 - (humidity - 70) * 0.003;
        } else if (currentMaterial === 'honey-lime' || currentMaterial === 'coconut-fiber-lime') {
            humidityFactor = 1.0 - (humidity - 70) * 0.002;
        } else { // granite and teak-wood
            humidityFactor = 1.0 - (humidity - 70) * 0.001;
        }
    }
    
    return baseStrength * tempFactor * humidityFactor;
}

// Transverse strength per IS 1121-2
function calculateTransverseStrength() {
    const compressiveStrength = calculateCompressiveStrength();
    
    let transverseRatio = 0.12; // Default
    
    // Material-specific ratios based on IS 1121-2
    if (currentMaterial === 'granite') {
        transverseRatio = 0.15; // Better transverse strength
    } else if (currentMaterial === 'white-marble' || currentMaterial === 'egg-white-lime') {
        transverseRatio = 0.13; // Medium transverse strength
    } else if (currentMaterial === 'red-sandstone' || currentMaterial === 'lime-mortar') {
        transverseRatio = 0.10; // Lower transverse strength
    } else if (currentMaterial === 'teak-wood') {
        transverseRatio = 1.64; // Wood has higher transverse than compressive
    } else if (currentMaterial === 'coconut-fiber-lime') {
        transverseRatio = 0.56; // Fiber reinforcement improves transverse strength
    }
    
    return compressiveStrength * transverseRatio;
}

// Tensile strength per IS 1121-3 formula: S = 2W/πdl
function calculateTensileStrength() {
    const compressiveStrength = calculateCompressiveStrength();
    
    let tensileRatio = 0.08; // Default
    
    // Material-specific ratios based on IS 1121-3
    if (currentMaterial === 'granite') {
        tensileRatio = 0.10; // Better tensile strength
    } else if (currentMaterial === 'white-marble') {
        tensileRatio = 0.08; // Medium tensile strength
    } else if (currentMaterial === 'red-sandstone') {
        tensileRatio = 0.06; // Lower tensile strength
    } else if (currentMaterial === 'teak-wood') {
        tensileRatio = 1.72; // Wood has higher tensile than compressive
    } else if (currentMaterial === 'coconut-fiber-lime') {
        tensileRatio = 0.44; // Fiber reinforcement improves tensile strength
    } else if (currentMaterial === 'egg-white-lime') {
        tensileRatio = 0.26; // Egg proteins improve tensile strength
    }
    
    return compressiveStrength * tensileRatio;
}

// IS code compliance checking function
function checkISCodeCompliance(testResults) {
    // Minimum requirements from IS codes
    const requirements = {
        'granite': {
            compressive: 80.0,
            transverse: 10.0,
            tensile: 8.0,
            waterAbsorption: 0.20
        },
        'white-marble': {
            compressive: 46.0, // From IS 1130:1969
            transverse: 7.0,
            tensile: 4.0,
            waterAbsorption: 0.40 // From IS 1130:1969
        },
        'red-sandstone': {
            compressive: 40.0,
            transverse: 5.0,
            tensile: 3.0,
            waterAbsorption: 0.75
        },
        'lime-mortar': {
            compressive: 2.5,
            transverse: 1.0,
            tensile: 0.6,
            waterAbsorption: 15.0
        },
        'egg-white-lime': {
            compressive: 3.5,
            transverse: 1.2,
            tensile: 0.9,
            waterAbsorption: 12.0
        },
        'honey-lime': {
            compressive: 3.0,
            transverse: 1.1,
            tensile: 0.8,
            waterAbsorption: 10.0
        },
        'coconut-fiber-lime': {
            compressive: 2.8,
            transverse: 1.5,
            tensile: 1.2,
            waterAbsorption: 12.0
        },
        'teak-wood': {
            compressive: 50.0,
            transverse: 85.0,
            tensile: 90.0,
            waterAbsorption: 8.0
        }
    };
    
    const req = requirements[currentMaterial];
    
    return {
        'Compressive Strength': {
            compliant: testResults.compressive >= req.compressive,
            details: `${testResults.compressive.toFixed(2)} MPa vs. required ${req.compressive} MPa`
        },
        'Transverse Strength': {
            compliant: testResults.transverse >= req.transverse,
            details: `${testResults.transverse.toFixed(2)} MPa vs. required ${req.transverse} MPa`
        },
        'Tensile Strength': {
            compliant: testResults.tensile >= req.tensile,
            details: `${testResults.tensile.toFixed(2)} MPa vs. required ${req.tensile} MPa`
        },
        'Water Absorption': {
            compliant: testResults.waterAbsorption <= req.waterAbsorption,
            details: `${testResults.waterAbsorption.toFixed(2)}% vs. maximum ${req.waterAbsorption}%`
        }
    };
}

// ===== GAMES SECTION - FIXED =====
function initGamesSection() {
    const playButtons = document.querySelectorAll('.play-btn');
    const gameInterface = document.getElementById('game-interface');
    const closeGameBtn = document.getElementById('close-game');
    const gameTitle = document.getElementById('game-title');
    const challengeDescription = document.getElementById('challenge-description');
    const testStructureBtn = document.getElementById('test-structure');
    const resetLevelBtn = document.getElementById('reset-level');
    const stabilityFill = document.getElementById('stability-fill');
    const stabilityText = document.getElementById('stability-text');
    const progressFill = document.getElementById('game-progress-fill');
    const progressText = document.getElementById('game-progress-text');

    // Game state
    const gameState = {
        currentGame: null,
        currentLevel: 1,
        maxLevels: 5,
        stability: 85,
        materials: {
            stone: { strength: 80, weight: 100 },
            marble: { strength: 60, weight: 90 },
            granite: { strength: 95, weight: 120 }
        },
        placedBlocks: []
    };

    // FIXED: Enhanced play game buttons
    playButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const gameId = btn.getAttribute('data-game');
            console.log('Starting game:', gameId); // Debug log

            // Add visual feedback immediately
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);

            // Start game with delay for visual feedback
            setTimeout(() => {
                startGame(gameId);
            }, 200);
        });
    });

    // FIXED: Close game button with proper event handling
    if (closeGameBtn) {
        closeGameBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Closing game interface'); // Debug log

            // Add closing animation
            gameInterface.style.transform = 'translate(-50%, -50%) scale(0.95)';
            gameInterface.style.opacity = '0.8';

            setTimeout(() => {
                gameInterface.classList.remove('active');
                gameInterface.style.transform = '';
                gameInterface.style.opacity = '';

                // Reset game state
                gameState.currentGame = null;
                gameState.placedBlocks = [];

                // Clear grid
                const placedBlocks = document.getElementById('placed-blocks');
                if (placedBlocks) {
                    placedBlocks.innerHTML = '';
                }

                showNotification('Game closed', 'info');
            }, 200);
        });
    }

    // Build tools
    const toolButtons = document.querySelectorAll('.tool-btn');
    toolButtons.forEach(tool => {
        tool.addEventListener('click', () => {
            toolButtons.forEach(t => t.classList.remove('active'));
            tool.classList.add('active');
            const toolType = tool.getAttribute('data-tool');
            showNotification(`${toolType.charAt(0).toUpperCase() + toolType.slice(1)} tool selected`, 'info');
        });
    });

    // Build grid interaction
    const buildGrid = document.getElementById('build-grid');
    if (buildGrid) {
        buildGrid.addEventListener('click', (e) => {
            const rect = buildGrid.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const activeTool = document.querySelector('.tool-btn.active');
            if (activeTool && activeTool.getAttribute('data-tool') === 'place') {
                const activeMaterial = document.querySelector('.material-option.active');
                if (activeMaterial) {
                    const material = activeMaterial.getAttribute('data-material');
                    placeBlock(x, y, material);
                }
            }
        });
    }

    // Test structure button
    if (testStructureBtn) {
        testStructureBtn.addEventListener('click', () => {
            const blockCount = gameState.placedBlocks.length;
            let newStability = Math.min(100, 30 + blockCount * 8);

            // Add random factor for realism
            newStability = Math.max(0, Math.min(100, newStability + (Math.random() * 20 - 10)));

            // Enhanced stability animation
            animateValue(gameState.stability, newStability, 1500, (value) => {
                gameState.stability = value;
                if (stabilityFill) stabilityFill.style.width = `${value}%`;
                if (stabilityText) stabilityText.textContent = `${Math.round(value)}% Stable`;

                // Enhanced color feedback
                if (value >= 70) {
                    if (stabilityText) {
                        stabilityText.style.color = 'var(--color-success)';
                    }
                    if (stabilityFill) {
                        stabilityFill.style.backgroundColor = 'var(--color-success)';
                    }
                } else if (value >= 40) {
                    if (stabilityText) {
                        stabilityText.style.color = 'var(--color-warning)';
                    }
                    if (stabilityFill) {
                        stabilityFill.style.backgroundColor = 'var(--color-warning)';
                    }
                } else {
                    if (stabilityText) {
                        stabilityText.style.color = 'var(--color-error)';
                    }
                    if (stabilityFill) {
                        stabilityFill.style.backgroundColor = 'var(--color-error)';
                    }
                }
            });

            // Level completion logic
            if (newStability >= 70) {
                showNotification('Excellent! Structure test passed with flying colors!', 'success');
                if (gameState.currentLevel < gameState.maxLevels) {
                    setTimeout(() => {
                        gameState.currentLevel++;
                        updateGameLevel();
                        showNotification(`Level ${gameState.currentLevel} unlocked!`, 'success');
                    }, 2000);
                } else {
                    setTimeout(() => {
                        showNotification('🎉 Congratulations! Master Architect achievement unlocked!', 'success');
                        unlockAchievement('architect');
                        gameState.currentLevel = 1;
                        updateGameLevel();
                    }, 2000);
                }
            } else {
                showNotification('Structure needs reinforcement. Keep building!', 'warning');
            }
        });
    }

    // Reset level button
    if (resetLevelBtn) {
        resetLevelBtn.addEventListener('click', () => {
            gameState.placedBlocks = [];
            const placedBlocks = document.getElementById('placed-blocks');
            if (placedBlocks) {
                placedBlocks.innerHTML = '';
            }

            gameState.stability = 85;
            if (stabilityFill) stabilityFill.style.width = `${gameState.stability}%`;
            if (stabilityText) stabilityText.textContent = `${gameState.stability}% Stable`;
            if (stabilityText) stabilityText.style.color = 'var(--color-success)';
            if (stabilityFill) stabilityFill.style.backgroundColor = 'var(--color-success)';

            showNotification('Level reset successfully!', 'info');
        });
    }

    // FIXED: Start game function with proper interface showing
    function startGame(gameId) {
        console.log('Starting game function called with:', gameId); // Debug log

        gameState.currentGame = gameId;

        // FIXED: Ensure game interface becomes visible
        if (gameInterface) {
            gameInterface.style.display = 'flex'; // Force display
            gameInterface.classList.add('active');

            // Add opening animation
            gameInterface.style.transform = 'translate(-50%, -50%) scale(1.05)';
            gameInterface.style.opacity = '0';

            setTimeout(() => {
                gameInterface.style.transform = 'translate(-50%, -50%) scale(1)';
                gameInterface.style.opacity = '1';
            }, 50);

            // Set game content based on type
            switch (gameId) {
                case 'architect':
                    if (gameTitle) gameTitle.textContent = 'Master Architect Challenge';
                    updateGameLevel();
                    break;
                case 'timeline':
                    if (gameTitle) gameTitle.textContent = 'Time Portal Quest';
                    if (challengeDescription) challengeDescription.textContent = 'Navigate through different historical periods and identify architectural styles from various dynasties.';
                    break;
                case 'physics':
                    if (gameTitle) gameTitle.textContent = 'Engineering Simulator';
                    if (challengeDescription) challengeDescription.textContent = 'Test the structural integrity of different monument designs under various environmental conditions.';
                    break;
            }

            // Reset and update UI
            gameState.currentLevel = 1;
            if (progressFill) progressFill.style.width = `${(gameState.currentLevel / gameState.maxLevels) * 100}%`;
            if (progressText) progressText.textContent = `Level ${gameState.currentLevel} of ${gameState.maxLevels}`;

            gameState.stability = 85;
            if (stabilityFill) stabilityFill.style.width = `${gameState.stability}%`;
            if (stabilityText) stabilityText.textContent = `${gameState.stability}% Stable`;
            if (stabilityText) stabilityText.style.color = 'var(--color-success)';

            console.log('Game interface should now be visible'); // Debug log
            showNotification(`${gameTitle ? gameTitle.textContent : 'Game'} started!`, 'success');
        }
    }

    function updateGameLevel() {
        if (progressFill) progressFill.style.width = `${(gameState.currentLevel / gameState.maxLevels) * 100}%`;
        if (progressText) progressText.textContent = `Level ${gameState.currentLevel} of ${gameState.maxLevels}`;

        gameState.placedBlocks = [];
        const placedBlocks = document.getElementById('placed-blocks');
        if (placedBlocks) {
            placedBlocks.innerHTML = '';
        }

        // Enhanced level descriptions
        const levelChallenges = [
            'Build a stable foundation using red sandstone blocks. Focus on weight distribution and balance.',
            'Create a defensive wall structure with alternating materials. Consider material properties carefully.',
            'Design a simple arch using appropriate materials for tension and compression forces.',
            'Construct a dome structure that efficiently distributes weight from apex to base.',
            'Create your architectural masterpiece combining all learned techniques!'
        ];

        if (challengeDescription) {
            challengeDescription.textContent = levelChallenges[gameState.currentLevel - 1];
        }

        gameState.stability = 85;
        if (stabilityFill) stabilityFill.style.width = `${gameState.stability}%`;
        if (stabilityText) stabilityText.textContent = `${gameState.stability}% Stable`;
        if (stabilityText) stabilityText.style.color = 'var(--color-success)';
    }

    function placeBlock(x, y, material) {
        const placedBlocks = document.getElementById('placed-blocks');
        if (!placedBlocks) return;

        const blockSize = 40;
        const gridX = Math.floor(x / blockSize) * blockSize;
        const gridY = Math.floor(y / blockSize) * blockSize;

        const existingBlock = gameState.placedBlocks.find(block =>
            block.x === gridX && block.y === gridY
        );

        if (!existingBlock) {
            const block = document.createElement('div');
            block.className = 'placed-block';

            // Enhanced block styling
            Object.assign(block.style, {
                position: 'absolute',
                width: `${blockSize}px`,
                height: `${blockSize}px`,
                left: `${gridX}px`,
                top: `${gridY}px`,
                backgroundColor: getMaterialColor(material),
                border: '2px solid rgba(0, 0, 0, 0.2)',
                borderRadius: '2px',
                transform: 'translateZ(20px)',
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
            });

            // Enhanced 3D effect
            const front = document.createElement('div');
            Object.assign(front.style, {
                position: 'absolute',
                width: '100%',
                height: '20px',
                backgroundColor: getMaterialColor(material),
                transform: 'rotateX(-90deg) translateY(-10px) translateZ(10px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.3)'
            });
            block.appendChild(front);

            const side = document.createElement('div');
            Object.assign(side.style, {
                position: 'absolute',
                width: '20px',
                height: '100%',
                backgroundColor: getMaterialColor(material),
                transform: 'rotateY(90deg) translateX(10px) translateZ(30px)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.3)'
            });
            block.appendChild(side);

            placedBlocks.appendChild(block);

            gameState.placedBlocks.push({
                x: gridX,
                y: gridY,
                material: material,
                element: block
            });

            // Enhanced click handler
            block.addEventListener('click', (e) => {
                e.stopPropagation();
                const activeTool = document.querySelector('.tool-btn.active');
                if (activeTool && activeTool.getAttribute('data-tool') === 'remove') {
                    removeBlock(block);
                }
            });

            // Enhanced placement animation
            block.style.opacity = '0';
            block.style.transform = 'translateZ(50px) scale(1.2)';
            setTimeout(() => {
                block.style.opacity = '1';
                block.style.transform = 'translateZ(20px) scale(1)';
            }, 50);

            showNotification(`${material} block placed`, 'info');
        }
    }

    function removeBlock(blockElement) {
        const blockIndex = gameState.placedBlocks.findIndex(block =>
            block.element === blockElement
        );

        if (blockIndex !== -1) {
            blockElement.style.opacity = '0';
            blockElement.style.transform = 'translateZ(50px) scale(0.8)';
            setTimeout(() => {
                blockElement.remove();
                gameState.placedBlocks.splice(blockIndex, 1);
            }, 300);
            showNotification('Block removed', 'info');
        }
    }

    function getMaterialColor(material) {
        const colors = {
            stone: '#8B4513',
            marble: '#FFFAFA',
            granite: '#708090'
        };
        return colors[material] || colors.stone;
    }

    function unlockAchievement(achievementId) {
        const achievement = document.querySelector(`.achievement-card[data-achievement="${achievementId}"]`);
        if (achievement && achievement.classList.contains('locked')) {
            achievement.classList.remove('locked');
            achievement.classList.add('unlocked');

            const progressFill = achievement.querySelector('.progress-fill');
            const progressText = achievement.querySelector('.achievement-progress span');

            if (progressFill && progressText) {
                progressFill.style.width = '100%';
                progressText.textContent = '5/5 Challenges';
            }

            const lockTrophy = achievement.querySelector('.locked-trophy');
            if (lockTrophy) {
                lockTrophy.classList.remove('locked-trophy');
                const glow = document.createElement('div');
                glow.className = 'achievement-glow';
                lockTrophy.appendChild(glow);
            }
        }
    }
}

// ===== LABORATORY SECTION =====
function initLaboratorySection() {
    const materialSamples = document.querySelectorAll('.material-sample');
    const materialName = document.getElementById('material-name');
    const materialDescription = document.getElementById('material-description');
    const samples3D = document.querySelectorAll('.sample-3d');
    const propertyBars = document.querySelectorAll('.property-fill');
    const densityValue = document.getElementById('density-value');
    const hardnessValue = document.getElementById('hardness-value');
    const durabilityValue = document.getElementById('durability-value');
    const testSample = document.getElementById('test-sample');
    const analysisBtns = document.querySelectorAll('.analysis-btn');
    const loadSlider = document.getElementById('load-slider');
    const tempSlider = document.getElementById('temp-slider');
    const humiditySlider = document.getElementById('humidity-slider');
    const loadValue = document.getElementById('load-value');
    const tempValue = document.getElementById('temp-value');
    const humidityValue = document.getElementById('humidity-value');
    const stressNeedle = document.getElementById('stress-needle');
    const stressStatus = document.getElementById('stress-status');
    const runTestBtn = document.getElementById('run-test');

    let currentMaterial = 'red-sandstone';

    // Enhanced material selection
    materialSamples.forEach(sample => {
        sample.addEventListener('click', () => {
            const material = sample.getAttribute('data-material');
            materialSamples.forEach(s => s.classList.remove('active'));
            sample.classList.add('active');

            samples3D.forEach(s => s.classList.remove('active'));
            const targetSample = document.querySelector(`.${material.replace('-', '')}-3d`);
            if (targetSample) {
                targetSample.classList.add('active');
            }

            updateMaterialInfo(material);
            updateTestSample(material);
            currentMaterial = material;
            showNotification(`Selected ${materials[material].name} for analysis`, 'info');
        });
    });

    // Enhanced analysis buttons
    analysisBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const testType = btn.getAttribute('data-test');

            // Visual feedback
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);

            runMaterialTest(testType);
        });
    });

    // Enhanced parameter sliders with real-time feedback
    [loadSlider, tempSlider, humiditySlider].forEach(slider => {
        if (slider) {
            slider.addEventListener('input', (e) => {
                const value = e.target.value;
                const valueDisplay = document.getElementById(e.target.id.replace('-slider', '-value'));
                if (valueDisplay) {
                    valueDisplay.textContent = value;
                }

                updateStressGauge();
            });
        }
    });

    // Enhanced run test button
    if (runTestBtn) {
        runTestBtn.addEventListener('click', () => {
            runTestBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                runTestBtn.style.transform = '';
            }, 150);

            runComprehensiveTest();
        });
    }

    // Initial setup
    updateMaterialInfo(currentMaterial);
    updateTestSample(currentMaterial);
    updateStressGauge();

    function updateMaterialInfo(material) {
        const data = materials[material];
        if (!data) return;

        if (materialName) materialName.textContent = data.name;
        if (materialDescription) materialDescription.textContent = data.description;

        // Enhanced property bar animations
        propertyBars.forEach((bar, index) => {
            const properties = ['density', 'hardness', 'durability'];
            const property = properties[index];
            if (property && data.properties[property]) {
                bar.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                bar.style.width = `${data.properties[property]}%`;
            }
        });

        // Update values with animation
        if (densityValue) densityValue.textContent = data.values.density;
        if (hardnessValue) hardnessValue.textContent = data.values.hardness;
        if (durabilityValue) durabilityValue.textContent = data.values.durability;
    }

    function updateTestSample(material) {
        const data = materials[material];
        if (!data || !testSample) return;

        testSample.style.backgroundColor = data.color;
        testSample.style.transition = 'background-color 0.5s ease';
    }

    function runMaterialTest(testType) {
        const data = materials[currentMaterial];
        let testResult = '';

        switch (testType) {
            case 'hardness':
                testResult = `Hardness Test: ${data.values.hardness}. ${data.properties.hardness > 75 ? 'Exceptional resistance to surface wear and scratching.' : 'Good for decorative work but requires protective treatments.'}`;
                break;
            case 'density':
                testResult = `Density Analysis: ${data.values.density}. ${data.properties.density > 85 ? 'High density provides superior structural integrity and load-bearing capacity.' : 'Moderate density allows for easier transportation and precise carving work.'}`;
                break;
            case 'weathering':
                testResult = `Weather Resistance: ${data.properties.durability > 80 ? 'Outstanding resistance to environmental weathering, suitable for exterior applications.' : 'Moderate weather resistance, best suited for interior or protected applications.'}`;
                break;
            case 'microscope':
                const microscopyResults = {
                    'red-sandstone': 'Fine to medium-grained quartz particles cemented with iron oxide and silica, creating the characteristic red coloration and excellent workability.',
                    'white-marble': 'Recrystallized calcite and dolomite minerals forming an interlocking mosaic texture with excellent light transmission properties.',
                    'granite': 'Coarse-grained igneous rock with interlocking quartz, feldspar, and mica crystals providing exceptional strength and durability.',
                    'lime-mortar': 'Calcium carbonate particles bound with calcium silicate hydrate gel, creating breathable matrix with self-healing properties.',
                    'egg-white-lime': 'Protein-enhanced calcium carbonate matrix with improved cohesion from albumin cross-linking, providing superior durability.',
                    'honey-lime': 'Honey-modified lime mortar with enhanced water resistance from natural sugars and organic compounds creating flexible binding.',
                    'coconut-fiber-lime': 'Fiber-reinforced lime matrix with coir fibers providing enhanced tensile strength and crack resistance.',
                    'teak-wood': 'Dense hardwood with natural oil content and tight grain structure providing inherent resistance to moisture and decay.'
                };
                testResult = `Microscopic Analysis: ${microscopyResults[currentMaterial]}`;
                break;
        }

        showNotification(testResult, 'info');

        // Enhanced visual feedback
        const sample = document.querySelector('.sample-3d.active');
        if (sample) {
            sample.style.animation = 'none';
            sample.style.filter = 'brightness(1.3) contrast(1.2)';
            setTimeout(() => {
                sample.style.animation = 'rotateBlock 20s infinite linear';
                sample.style.filter = '';
            }, 1000);
        }
    }

    function updateStressGauge() {
        if (!loadSlider || !tempSlider || !humiditySlider || !stressNeedle || !stressStatus) return;

        const load = parseInt(loadSlider.value);
        const temp = parseInt(tempSlider.value);
        const humidity = parseInt(humiditySlider.value);

        // IS Code compliant stress calculation based on IS 1121 (Part I):1974
        const materialData = materials[currentMaterial];

        // Base stress calculation as per IS standards - MPa units per IS 1121
        let stress = load * 0.40; // Initial stress based on applied load

        // Temperature effects as per IS 9000-6:1978 for environmental testing
        let tempEffect = 0;
        if (temp < 27) {
            // Below standard testing temperature (27°C ± 2°C per IS 4031)
            tempEffect = (27 - temp) * 0.15;
        } else if (temp > 31) {
            tempEffect = (temp - 31) * 0.25;
        }
        stress += tempEffect;

        // Humidity effects per IS 9000-6:1978 - standard is 65% ± 5%
        let humidityEffect = 0;
        if (humidity > 70) {
            if (currentMaterial === 'white-marble' || currentMaterial === 'egg-white-lime') {
                // Marble and egg-white lime sensitivity per IS 1130:1969
                humidityEffect = (humidity - 70) * 0.18;
            } else if (currentMaterial === 'red-sandstone' || currentMaterial === 'lime-mortar') {
                humidityEffect = (humidity - 70) * 0.12;
            } else if (currentMaterial === 'honey-lime' || currentMaterial === 'coconut-fiber-lime') {
                humidityEffect = (humidity - 70) * 0.09;
            } else {
                // Granite and teak are most resistant
                humidityEffect = (humidity - 70) * 0.06;
            }
        }
        stress += humidityEffect;

        // Material resistance based on IS 1121 compressive strength standards
        const isCompressiveStrength = getISCompressiveStrength(currentMaterial);
        const isRatedStrength = isCompressiveStrength * (materialData.properties.hardness / 100);
        const resistanceFactor = isRatedStrength / 100;
        stress = stress * (1 - resistanceFactor * 0.6);

        // Normalize to gauge range (0-180 degrees)
        const angle = Math.min(180, Math.max(0, stress * 1.8));

        // Update needle with IS standard compliance indicator
        stressNeedle.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        stressNeedle.style.transform = `rotate(${angle - 90}deg)`;

        // Status feedback based on IS standards
        let statusText = '';
        let statusColor = '';

        if (angle < 50) {
            statusText = 'IS Code: Optimal Conditions';
            statusColor = 'var(--color-success)';
        } else if (angle < 100) {
            statusText = 'IS Code: Within Safe Limits';
            statusColor = 'var(--color-warning)';
        } else if (angle < 150) {
            statusText = 'IS Code: Approaching Limits';
            statusColor = 'var(--color-error)';
        } else {
            statusText = 'IS Code: Exceeds Safe Limits';
            statusColor = 'var(--color-error)';
        }

        stressStatus.textContent = statusText;
        stressStatus.style.color = statusColor;
    }

    function runComprehensiveTest() {
        const load = parseInt(loadSlider.value);
        const temp = parseInt(tempSlider.value);
        const humidity = parseInt(humiditySlider.value);
        const materialData = materials[currentMaterial];
        
        let analysisResult = `🔬 IS Code Compliant Analysis for ${materialData.name}:\n\n`;
        
        // Load analysis based on IS 1121 standards
        const isCompressiveStrength = getISCompressiveStrength(currentMaterial);
        const isLoadLimit = isCompressiveStrength * 0.8; // 80% safety factor
        
        if (load > isLoadLimit) {
            analysisResult += materialData.properties.durability > 85 ? 
                `⚠️ IS 1121: Load of ${load}MPa exceeds recommended limit (${isLoadLimit.toFixed(1)}MPa)\n` :
                `❌ IS 1121: Load of ${load}MPa exceeds safe limit (${isLoadLimit.toFixed(1)}MPa)\n`;
        } else {
            analysisResult += `✅ IS 1121: Load of ${load}MPa within safe limit (${isLoadLimit.toFixed(1)}MPa)\n`;
        }
        
        // Temperature analysis per IS 9000-6:1978
        if (temp < 20 || temp > 35) {
            analysisResult += `⚠️ IS 9000: Temperature ${temp}°C outside standard testing range (27±2°C)\n`;
        } else {
            analysisResult += `✅ IS 9000: Temperature ${temp}°C within standard testing range (27±2°C)\n`;
        }
        
        // Humidity analysis per IS 4031 standards
        if (humidity < 60 || humidity > 70) {
            if (humidity > 90) {
                if (currentMaterial === 'white-marble') {
                    analysisResult += `❌ IS 9000: Humidity ${humidity}% exceeds standard range - Chemical deterioration risk\n`;
                } else {
                    analysisResult += `⚠️ IS 9000: Humidity ${humidity}% exceeds standard range - Monitor closely\n`;
                }
            } else {
                analysisResult += `⚠️ IS 9000: Humidity ${humidity}% outside standard testing range (65±5%)\n`;
            }
        } else {
            analysisResult += `✅ IS 9000: Humidity ${humidity}% within standard testing range (65±5%)\n`;
        }
        
        // IS code durability metrics
        const isWaterAbsorption = getISWaterAbsorption(currentMaterial);
        analysisResult += `\n📊 IS 1121 Durability Metrics:\n`;
        analysisResult += `• Compressive Strength: ${isCompressiveStrength} MPa (IS 1121-1)\n`;
        analysisResult += `• Water Absorption: ${isWaterAbsorption}% (IS 1124:1974)\n`;
        
        const isDurabilityFactor = (materialData.properties.hardness * 0.3 + materialData.properties.durability * 0.7) * 
                                  (1 - (isWaterAbsorption / 10));
        
        if (isDurabilityFactor > 80) {
            analysisResult += `\n🏆 IS Code Recommendation: Excellent - Meets all IS requirements for structural applications`;
        } else if (isDurabilityFactor > 60) {
            analysisResult += `\n👍 IS Code Recommendation: Suitable - Meets IS requirements with proper practices`;
        } else {
            analysisResult += `\n🎨 IS Code Recommendation: Limited structural use - Best for decorative applications`;
        }
        
        showNotification(analysisResult, 'success');
    }

    // Make these variables global for IS code functions
    window.currentMaterial = currentMaterial;
    window.tempSlider = tempSlider;
    window.humiditySlider = humiditySlider;
}

// ===== TIMELINE SECTION =====
function initTimelineSection() {
    const timePeriods = document.querySelectorAll('.time-period');
    const historicalScenes = document.querySelectorAll('.historical-scene');
    const dynastyInfos = document.querySelectorAll('.dynasty-info');

    // Enhanced time period selection
    timePeriods.forEach(period => {
        period.addEventListener('click', () => {
            const periodId = period.getAttribute('data-period');
            const periodYear = period.getAttribute('data-year');

            // Update active states
            timePeriods.forEach(p => p.classList.remove('active'));
            period.classList.add('active');

            historicalScenes.forEach(scene => {
                scene.classList.remove('active');
                if (scene.getAttribute('data-scene') === periodId) {
                    scene.classList.add('active');
                }
            });

            dynastyInfos.forEach(info => {
                info.classList.remove('active');
                if (info.getAttribute('data-dynasty') === periodId) {
                    info.classList.add('active');
                }
            });

            // Enhanced visual feedback
            const marker = period.querySelector('.period-marker');
            if (marker) {
                marker.style.transform = 'scale(1.8)';
                marker.style.boxShadow = '0 0 20px var(--color-primary)';
                setTimeout(() => {
                    marker.style.transform = 'scale(1.2)';
                    marker.style.boxShadow = '';
                }, 500);
            }

            // Enhanced portal animation
            const portalRings = document.querySelectorAll('.portal-rings .ring');
            portalRings.forEach((ring, index) => {
                ring.style.animation = 'none';
                ring.style.transform = 'translate(-50%, -50%) rotateX(70deg) scale(1.5)';
                ring.style.borderColor = 'var(--color-primary)';
                setTimeout(() => {
                    ring.style.animation = 'pulsateRing 3s infinite';
                    ring.style.transform = '';
                    ring.style.borderColor = '';
                }, 100 * index);
            });

            showNotification(`Time portal activated: ${periodYear} CE`, 'info');
        });
    });

    // Enhanced 3D interaction for historical scenes
    const scenes3D = document.querySelectorAll('.scene-3d');
    scenes3D.forEach(scene => {
        scene.addEventListener('mousemove', (e) => {
            const rect = scene.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 30;
            const rotateX = ((y / rect.height) - 0.5) * -15;

            const models = scene.querySelectorAll('.ancient-temple, .mughal-palace');
            models.forEach(model => {
                model.style.transform = `rotateX(${10 + rotateX}deg) rotateY(${20 + rotateY}deg) scale(1.05)`;
                model.style.filter = 'brightness(1.1) contrast(1.05)';
            });
        });

        scene.addEventListener('mouseleave', () => {
            const models = scene.querySelectorAll('.ancient-temple, .mughal-palace');
            models.forEach(model => {
                model.style.transform = 'rotateX(10deg) rotateY(20deg)';
                model.style.filter = '';
            });
        });
    });
}

// ===== ACHIEVEMENTS SECTION =====
function initAchievementsSection() {
    const achievementCards = document.querySelectorAll('.achievement-card');

    // Enhanced achievement interactions
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const trophy = card.querySelector('.trophy-3d');
            if (trophy) {
                trophy.style.animation = 'rotateTrophy 3s infinite linear';
                trophy.style.transform = 'scale(1.1)';
            }

            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';

            // Enhanced glow for unlocked achievements
            if (card.classList.contains('unlocked')) {
                const glow = card.querySelector('.achievement-glow');
                if (glow) {
                    glow.style.opacity = '1';
                    glow.style.transform = 'scale(1.3)';
                }
            }
        });

        card.addEventListener('mouseleave', () => {
            const trophy = card.querySelector('.trophy-3d');
            if (trophy) {
                trophy.style.animation = 'rotateTrophy 10s infinite linear';
                trophy.style.transform = '';
            }

            card.style.transform = '';
            card.style.boxShadow = '';

            const glow = card.querySelector('.achievement-glow');
            if (glow) {
                glow.style.opacity = '';
                glow.style.transform = '';
            }
        });

        // Click to view achievement details
        card.addEventListener('click', () => {
            const achievementType = card.getAttribute('data-achievement');
            const isUnlocked = card.classList.contains('unlocked');

            if (isUnlocked) {
                showNotification(`🏆 ${card.querySelector('h3').textContent} - Completed!`, 'success');
            } else {
                showNotification(`🔒 ${card.querySelector('h3').textContent} - Keep exploring to unlock!`, 'info');
            }
        });
    });
}

// Newsletter Subscription JavaScript
function initNewsletterSection() {
    const newsletterForm = document.getElementById('newsletter-form');
    const subscriberEmail = document.getElementById('subscriber-email');
    const successModal = document.getElementById('subscription-success');
    const successClose = document.querySelector('.success-close');
    const newsletterContainer = document.querySelector('.newsletter-container');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Initialize scroll animations
    initNewsletterAnimations();
    
    // Initialize form functionality
    initNewsletterForm();
    
    // Initialize success modal
    initSuccessModal();
    
    // Add particles to newsletter background
    createNewsletterParticles();
    
    function initNewsletterAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('newsletter-container')) {
                        entry.target.classList.add('visible');
                        setTimeout(() => {
                            animateStatsCounters();
                        }, 500);
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px'
        });
        
        if (newsletterContainer) {
            observer.observe(newsletterContainer);
        }
    }
    
    function initNewsletterForm() {
        if (!newsletterForm) return;
        
        // Enhanced email validation
        subscriberEmail.addEventListener('input', (e) => {
            validateEmail(e.target);
        });
        
        // Form submission
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = subscriberEmail.value.trim();
            const preferences = getSelectedPreferences();
            
            if (!validateEmail(subscriberEmail)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = newsletterForm.querySelector('.newsletter-btn');
            const originalText = submitBtn.querySelector('.btn-text').textContent;
            
            submitBtn.disabled = true;
            submitBtn.querySelector('.btn-text').textContent = 'Subscribing...';
            submitBtn.style.opacity = '0.7';
            
            try {
                // Replace with your actual subscription API
                await subscribeUser(email, preferences);
                
                showSuccessModal();
                resetForm();
                showNotification('Successfully subscribed to heritage updates!', 'success');
                
            } catch (error) {
                console.error('Subscription error:', error);
                showNotification('Subscription failed. Please try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').textContent = originalText;
                submitBtn.style.opacity = '1';
            }
        });
    }
    
    function initSuccessModal() {
        if (successClose) {
            successClose.addEventListener('click', () => {
                successModal.classList.remove('active');
            });
        }
        
        // Close modal on background click
        if (successModal) {
            successModal.addEventListener('click', (e) => {
                if (e.target === successModal) {
                    successModal.classList.remove('active');
                }
            });
        }
    }
    
    function validateEmail(emailInput) {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        
        if (email.length > 0) {
            if (isValid) {
                emailInput.style.borderColor = 'var(--color-success)';
                emailInput.style.boxShadow = '0 0 0 3px rgba(46, 204, 113, 0.2)';
            } else {
                emailInput.style.borderColor = 'var(--color-error)';
                emailInput.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.2)';
            }
        } else {
            emailInput.style.borderColor = '';
            emailInput.style.boxShadow = '';
        }
        
        return isValid;
    }
    
    function getSelectedPreferences() {
        const checkboxes = newsletterForm.querySelectorAll('input[type="checkbox"]:checked');
        return Array.from(checkboxes).map(cb => cb.value);
    }
    
    async function subscribeUser(email, preferences) {
        // Replace this with your actual subscription endpoint
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Store subscription data in localStorage for now
                const subscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
                subscriptions.push({
                    email: email,
                    preferences: preferences,
                    subscribedAt: new Date().toISOString()
                });
                localStorage.setItem('newsletter_subscriptions', JSON.stringify(subscriptions));
                resolve({ success: true, email, preferences });
            }, 2000);
        });
    }
    
    function showSuccessModal() {
        if (successModal) {
            successModal.classList.add('active');
        }
    }
    
    function resetForm() {
        if (newsletterForm) {
            newsletterForm.reset();
            subscriberEmail.style.borderColor = '';
            subscriberEmail.style.boxShadow = '';
        }
    }
    
    function animateStatsCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                stat.textContent = Math.floor(current).toLocaleString();
            }, 16);
            
            stat.style.animation = 'counterBounce 0.6s ease-out';
        });
    }
    
    function createNewsletterParticles() {
        const particleContainer = document.querySelector('.newsletter-particles');
        if (!particleContainer) return;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'newsletter-particle';
            
            const size = Math.random() * 4 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            Object.assign(particle.style, {
                position: 'absolute',
                left: posX + '%',
                top: posY + '%',
                width: size + 'px',
                height: size + 'px',
                borderRadius: '50%',
                backgroundColor: i % 3 === 0 ? 'rgba(33, 128, 141, 0.4)' :
                                i % 3 === 1 ? 'rgba(255, 193, 133, 0.4)' :
                                'rgba(255, 255, 255, 0.6)',
                opacity: '0.7',
                animation: `newsletterFloat ${duration}s infinite ease-in-out ${delay}s`,
                pointerEvents: 'none'
            });
            
            particleContainer.appendChild(particle);
        }
    }
}
// Add this to your existing JavaScript file to initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize credits section animations
    initCreditsSection();
});

function initCreditsSection() {
    const creditsSection = document.querySelector('.credits-section');
    const sectionHeader = document.querySelector('.section-header');
    const teamMembers = document.querySelectorAll('.team-member');
    const professorSection = document.querySelector('.professor-section');
    
    if (!creditsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('section-header')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('professor-section')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('team-member')) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-50px'
    });
    
    if (sectionHeader) observer.observe(sectionHeader);
    if (professorSection) observer.observe(professorSection);
    
    // Add staggered animation to team members
    teamMembers.forEach((member, index) => {
        member.style.transitionDelay = `${0.1 * (index + 1)}s`;
        observer.observe(member);
    });
}


// ===== HELPER FUNCTIONS =====

// Enhanced particle creation
function createParticles(containerSelector, count) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 6 + 2;
        const opacity = Math.random() * 0.6 + 0.2;
        const duration = Math.random() * 25 + 15;

        Object.assign(particle.style, {
            position: 'absolute',
            left: `${posX}%`,
            top: `${posY}%`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: i % 3 === 0 ? 'rgba(255, 255, 255, 0.8)' :
                            i % 3 === 1 ? 'rgba(31, 184, 205, 0.6)' :
                                        'rgba(255, 193, 133, 0.6)',
            opacity: opacity,
            animation: `float ${duration}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 10}s`,
            pointerEvents: 'none'
        });

        container.appendChild(particle);
    }
}

// Enhanced particle explosion
function createParticleExplosion(element, count) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const container = document.createElement('div');
    Object.assign(container.style, {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '9999'
    });

    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 3;
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 150 + 75;
        const duration = Math.random() * 1.5 + 1;

        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;

        Object.assign(particle.style, {
            position: 'absolute',
            left: `${centerX}px`,
            top: `${centerY}px`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: i % 4 === 0 ? 'var(--color-primary)' :
                            i % 4 === 1 ? 'var(--color-success)' :
                            i % 4 === 2 ? 'rgba(255, 193, 133, 0.9)' :
                                        'rgba(255, 255, 255, 0.8)',
            opacity: '1',
            transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            boxShadow: '0 0 10px currentColor'
        });

        container.appendChild(particle);

        setTimeout(() => {
            particle.style.left = `${endX}px`;
            particle.style.top = `${endY}px`;
            particle.style.opacity = '0';
            particle.style.transform = 'scale(0.3)';
        }, 10);

        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    setTimeout(() => {
        container.remove();
    }, 3000);
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;

    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };

    const colors = {
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-primary)'
    };

    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%) translateY(100px)',
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-text)',
        padding: '16px 24px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        zIndex: '9999',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        maxWidth: '500px',
        border: `2px solid ${colors[type]}`,
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 'var(--font-weight-medium)'
    });

    notification.innerHTML = `
        ${icons[type]}
        ${message}
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-30px)';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, message.length > 100 ? 8000 : 5000);
}

// Enhanced value animation
function animateValue(start, end, duration, callback) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        const value = start + easeProgress * (end - start);
        callback(value);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Loading timeout safety net
setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
        console.warn('Loading screen timeout - forcing hide');
        loadingScreen.style.display = 'none';
        try {
            initializeComponents();
        } catch (error) {
            console.error('Emergency initialization failed:', error);
        }
    }
}, 10000); // 10 second backup timeout

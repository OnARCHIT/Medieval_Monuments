// Monument Explorer - Advanced JavaScript with 3D effects, animations and interactions - FIXED VERSION

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize application
    initApp();
});

// Main initialization function
function initApp() {
    // Show loading screen
    const loadingScreen = document.getElementById('loading-screen');
    const loadingStatus = document.querySelector('.loading-status');
    
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
        loadingStatus.textContent = loadingMessages[messageIndex];
        messageIndex = (messageIndex + 1) % loadingMessages.length;
    }, 600);
    
    // Create particle effects for loading screen
    createParticles('.particle-system', 50);
    
    // Simulate loading complete after 3.5 seconds
    setTimeout(() => {
        clearInterval(messageInterval);
        loadingScreen.classList.add('hidden');
        
        // Initialize all components after loading
        initNavigation();
        initCustomCursor();
        initScrollAnimations();
        initHeroSection();
        initMonumentsSection();
        initGamesSection();
        initLaboratorySection();
        initTimelineSection();
        initAchievementsSection();
        initAudioControls();
        initThemeToggle();
    }, 3500);
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
    masterVolume.addEventListener('input', (e) => {
        audioState.masterVolume = parseInt(e.target.value);
        updateAudioSettings();
    });
    
    // Handle audio options
    const ambientSounds = document.getElementById('ambient-sounds');
    const uiSounds = document.getElementById('ui-sounds');
    const narration = document.getElementById('narration');
    
    [ambientSounds, uiSounds, narration].forEach(control => {
        control.addEventListener('change', (e) => {
            audioState[e.target.id.replace('-', '')] = e.target.checked;
            updateAudioSettings();
            
            if (audioState.uiSounds && !audioState.muted) {
                playUISound('toggle');
            }
        });
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
  
  // Adjust the SVG to ensure it fills the container
  const svgMap = document.querySelector('.india-svg-map');
  if (svgMap) {
    // Remove any inline width/height attributes that might constrain the SVG
    svgMap.removeAttribute('width');
    svgMap.removeAttribute('height');
    
    // Get the bounding box of the SVG content to adjust the viewBox
    const bbox = svgMap.getBBox();
    svgMap.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    
    // Force the SVG to stretch without preserving aspect ratio
    svgMap.setAttribute('preserveAspectRatio', 'none');
  }

  // Start journey button
  startJourneyBtn.addEventListener('click', () => {
    window.scrollTo({
      top: document.getElementById('monuments').offsetTop - 80,
      behavior: 'smooth'
    });
    createParticleExplosion(startJourneyBtn, 50);
  });

  // VR experience button
  vrExperienceBtn.addEventListener('click', () => {
    showNotification('VR Experience coming soon! Prepare for immersive monument exploration.', 'info');
  });

  // Enhanced floating monuments interaction
  floatingMonuments.forEach(monument => {
    const label = monument.querySelector('.monument-label');
    const glow = monument.querySelector('.monument-glow');

    monument.addEventListener('mouseenter', () => {
      glow.style.opacity = '1';
      glow.style.filter = 'blur(15px)';
      glow.style.transform = 'rotateX(90deg) translateZ(-10px) scale(1.5)';
      label.style.transform = 'translateX(-50%) scale(1.3)';
      label.style.color = 'var(--color-primary)';
      label.style.fontWeight = 'var(--font-weight-bold)';
      label.style.textShadow = '0 4px 15px rgba(0,0,0,0.5)';
      monument.style.animation = 'float 1s infinite ease-in-out';
    });

    monument.addEventListener('mouseleave', () => {
      glow.style.opacity = '0.6';
      glow.style.filter = 'blur(5px)';
      glow.style.transform = 'rotateX(90deg) translateZ(-10px) scale(1)';
      label.style.transform = 'translateX(-50%) scale(1)';
      label.style.color = 'var(--color-text)';
      label.style.fontWeight = '';
      label.style.textShadow = '';
      monument.style.animation = '';
    });

    monument.addEventListener('click', () => {
      const monumentId = monument.getAttribute('data-monument');
      monument.style.transform = 'translateZ(100px) scale(1.5)';
      setTimeout(() => {
        monument.style.transform = '';
      }, 300);

      setTimeout(() => {
        const monumentCard = document.querySelector(`.monument-card[data-monument="${monumentId}"]`);
        if (monumentCard) {
          window.scrollTo({
            top: monumentCard.offsetTop - 100,
            behavior: 'smooth'
          });
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

// ===== MONUMENTS SECTION =====
function initMonumentsSection() {
    const sunSlider = document.getElementById('sun-time');
    const sunIndicator = document.querySelector('.sun-indicator');
    const lightValue = document.getElementById('light-value');
    const shadowValue = document.getElementById('shadow-value');
    const monumentCards = document.querySelectorAll('.monument-card');
    const exploreBtns = document.querySelectorAll('.explore-btn');
    
    // Enhanced sun position and lighting
    sunSlider.addEventListener('input', (e) => {
        const time = parseFloat(e.target.value);
        updateLighting(time);
    });
    
    // Initialize with default time (noon)
    updateLighting(12);
    
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
            model.style.transform = 'rotateX(25deg) rotateY(80deg) scale(1.3)';
            model.style.filter = 'brightness(1.2) contrast(1.1)';
            
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
                model.style.transform = '';
                model.style.filter = '';
                if (particles) particles.innerHTML = '';
            }, 3000);
        });
    });
    
    // Enhanced interactive 3D models
    monumentCards.forEach(card => {
        const model = card.querySelector('.monument-3d');
        
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
        sunIndicator.style.transform = `rotate(${angle}deg) translateY(-52px) rotate(-${angle}deg)`;
        
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
        lightValue.textContent = `${Math.round(lightIntensity)}%`;
        shadowValue.textContent = shadowLength;
        
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
        if (lightIntensity > 50) {
            sunIndicator.style.boxShadow = `0 0 ${lightIntensity * 0.3}px rgba(255, 215, 0, ${lightIntensity / 100})`;
        } else {
            sunIndicator.style.boxShadow = `0 0 5px rgba(200, 200, 255, 0.3)`;
        }
    }
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
    
    // Material selection
    const materialOptions = document.querySelectorAll('.material-option');
    materialOptions.forEach(option => {
        option.addEventListener('click', () => {
            materialOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Add visual feedback
            option.style.transform = 'scale(1.1)';
            setTimeout(() => {
                option.style.transform = '';
            }, 200);
        });
    });
    
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
                stabilityFill.style.width = `${value}%`;
                stabilityText.textContent = `${Math.round(value)}% Stable`;
                
                // Enhanced color feedback
                if (value >= 70) {
                    stabilityText.style.color = 'var(--color-success)';
                    stabilityFill.style.backgroundColor = 'var(--color-success)';
                } else if (value >= 40) {
                    stabilityText.style.color = 'var(--color-warning)';
                    stabilityFill.style.backgroundColor = 'var(--color-warning)';
                } else {
                    stabilityText.style.color = 'var(--color-error)';
                    stabilityFill.style.backgroundColor = 'var(--color-error)';
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
            stabilityFill.style.width = `${gameState.stability}%`;
            stabilityText.textContent = `${gameState.stability}% Stable`;
            stabilityText.style.color = 'var(--color-success)';
            stabilityFill.style.backgroundColor = 'var(--color-success)';
            
            showNotification('Level reset successfully!', 'info');
        });
    }
    
    // FIXED: Start game function with proper interface showing
    function startGame(gameId) {
        console.log('Starting game function called with:', gameId); // Debug log
        
        gameState.currentGame = gameId;
        
        // FIXED: Ensure game interface becomes visible
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
                gameTitle.textContent = 'Master Architect Challenge';
                updateGameLevel();
                break;
            case 'timeline':
                gameTitle.textContent = 'Time Portal Quest';
                challengeDescription.textContent = 'Navigate through different historical periods and identify architectural styles from various dynasties.';
                break;
            case 'physics':
                gameTitle.textContent = 'Engineering Simulator';
                challengeDescription.textContent = 'Test the structural integrity of different monument designs under various environmental conditions.';
                break;
        }
        
        // Reset and update UI
        gameState.currentLevel = 1;
        progressFill.style.width = `${(gameState.currentLevel / gameState.maxLevels) * 100}%`;
        progressText.textContent = `Level ${gameState.currentLevel} of ${gameState.maxLevels}`;
        
        gameState.stability = 85;
        stabilityFill.style.width = `${gameState.stability}%`;
        stabilityText.textContent = `${gameState.stability}% Stable`;
        stabilityText.style.color = 'var(--color-success)';
        
        console.log('Game interface should now be visible'); // Debug log
        showNotification(`${gameTitle.textContent} started!`, 'success');
    }
    
    function updateGameLevel() {
        progressFill.style.width = `${(gameState.currentLevel / gameState.maxLevels) * 100}%`;
        progressText.textContent = `Level ${gameState.currentLevel} of ${gameState.maxLevels}`;
        
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
        
        challengeDescription.textContent = levelChallenges[gameState.currentLevel - 1];
        
        gameState.stability = 85;
        stabilityFill.style.width = `${gameState.stability}%`;
        stabilityText.textContent = `${gameState.stability}% Stable`;
        stabilityText.style.color = 'var(--color-success)';
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
    
    // Enhanced material data
    const materials = {
        'red-sandstone': {
            name: 'Red Sandstone',
            description: 'Durable, weather-resistant, easy to carve. Iron oxide gives red color, excellent workability. Perfect for forts, palaces, and decorative elements.',
            properties: { density: 76, hardness: 60, durability: 85 },
            values: { density: '2.3 g/cm³', hardness: '6/10', durability: 'Very High' },
            color: '#8B4513'
        },
        'white-marble': {
            name: 'White Marble',
            description: 'Beautiful finish, cool to touch, translucent. Metamorphic limestone that takes fine polish. Ideal for decorative elements, inlay work, and mausoleums.',
            properties: { density: 90, hardness: 70, durability: 65 },
            values: { density: '2.7 g/cm³', hardness: '7/10', durability: 'High' },
            color: '#FFFAFA'
        },
        'granite': {
            name: 'Granite',
            description: 'Extremely hard, long-lasting, earthquake-resistant. Crystalline structure with minimal water absorption. Perfect for temple construction and load-bearing structures.',
            properties: { density: 95, hardness: 90, durability: 95 },
            values: { density: '2.8 g/cm³', hardness: '9/10', durability: 'Exceptional' },
            color: '#708090'
        }
    };
    
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
        slider.addEventListener('input', (e) => {
            const value = e.target.value;
            const valueDisplay = document.getElementById(e.target.id.replace('-slider', '-value'));
            if (valueDisplay) {
                valueDisplay.textContent = value;
            }
            updateStressGauge();
        });
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
        
        materialName.textContent = data.name;
        materialDescription.textContent = data.description;
        
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
                    'granite': 'Coarse-grained igneous rock with interlocking quartz, feldspar, and mica crystals providing exceptional strength and durability.'
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
        
        // Enhanced stress calculation
        let stress = load * 0.6;
        const tempEffect = Math.abs(temp - 25) * 0.3;
        stress += tempEffect;
        
        // Material-specific humidity effects
        const materialData = materials[currentMaterial];
        if (currentMaterial === 'white-marble') {
            stress += humidity * 0.15; // Marble is more sensitive to humidity
        } else if (currentMaterial === 'red-sandstone') {
            stress += humidity * 0.1;
        } else {
            stress += humidity * 0.05; // Granite is most resistant
        }
        
        // Apply material resistance
        const resistanceFactor = (materialData.properties.hardness + materialData.properties.durability) / 200;
        stress = stress * (1 - resistanceFactor * 0.7);
        
        // Normalize to gauge range
        const angle = Math.min(180, Math.max(0, stress * 1.8));
        
        // Enhanced needle animation
        stressNeedle.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        stressNeedle.style.transform = `rotate(${angle - 90}deg)`;
        
        // Enhanced status feedback
        let statusText = '';
        let statusColor = '';
        
        if (angle < 50) {
            statusText = 'Optimal Conditions';
            statusColor = 'var(--color-success)';
        } else if (angle < 100) {
            statusText = 'Moderate Stress';
            statusColor = 'var(--color-warning)';
        } else if (angle < 150) {
            statusText = 'High Stress';
            statusColor = 'var(--color-error)';
        } else {
            statusText = 'Critical Stress';
            statusColor = 'var(--color-error)';
        }
        
        stressStatus.textContent = statusText;
        stressStatus.style.color = statusColor;
        stressStatus.style.transition = 'color 0.5s ease';
    }
    
    function runComprehensiveTest() {
        const load = parseInt(loadSlider.value);
        const temp = parseInt(tempSlider.value);
        const humidity = parseInt(humiditySlider.value);
        const materialData = materials[currentMaterial];
        
        let analysisResult = `🔬 Comprehensive Analysis for ${materialData.name}:\n\n`;
        
        // Enhanced load analysis
        if (load > 80) {
            analysisResult += materialData.properties.durability > 85 ? 
                `✅ Exceptional performance under extreme ${load}MPa loading\n` :
                `⚠️ Approaching material limits at ${load}MPa - monitor for stress fractures\n`;
        } else if (load > 50) {
            analysisResult += `✅ Good structural performance under ${load}MPa loading\n`;
        } else {
            analysisResult += `✅ Optimal conditions for long-term stability at ${load}MPa\n`;
        }
        
        // Enhanced temperature analysis
        if (temp < 0 || temp > 40) {
            analysisResult += currentMaterial === 'granite' ? 
                `✅ Withstands extreme temperature of ${temp}°C without degradation\n` :
                `⚠️ Thermal expansion/contraction concerns at ${temp}°C - consider expansion joints\n`;
        } else {
            analysisResult += `✅ Thermally stable at ${temp}°C - no special precautions needed\n`;
        }
        
        // Enhanced humidity analysis
        if (humidity > 80) {
            if (currentMaterial === 'granite') {
                analysisResult += `✅ Excellent moisture resistance at ${humidity}% humidity\n`;
            } else if (currentMaterial === 'white-marble') {
                analysisResult += `❌ Risk of chemical weathering and surface erosion at ${humidity}% humidity\n`;
            } else {
                analysisResult += `⚠️ Monitor for moisture-related degradation at ${humidity}% humidity\n`;
            }
        } else {
            analysisResult += `✅ Stable moisture conditions at ${humidity}% humidity\n`;
        }
        
        // Overall recommendation
        const overallScore = (materialData.properties.hardness + materialData.properties.durability) / 2;
        if (overallScore > 80) {
            analysisResult += `\n🏆 Recommendation: Excellent choice for critical structural applications`;
        } else if (overallScore > 60) {
            analysisResult += `\n👍 Recommendation: Good choice for general construction with proper maintenance`;
        } else {
            analysisResult += `\n🎨 Recommendation: Best suited for decorative and non-load-bearing applications`;
        }
        
        showNotification(analysisResult, 'success');
        
        // Enhanced visual effects
        if (testSample) {
            testSample.style.animation = 'wobbleStructure 1s ease-in-out';
            testSample.style.filter = 'brightness(1.2) saturate(1.3)';
            
            setTimeout(() => {
                testSample.style.animation = '';
                testSample.style.filter = '';
            }, 1000);
        }
        
        // Unlock achievement
        setTimeout(() => {
            const scientist = document.querySelector('.achievement-card[data-achievement="scientist"]');
            if (scientist && scientist.classList.contains('locked')) {
                scientist.classList.remove('locked');
                scientist.classList.add('unlocked');
                
                const progressFill = scientist.querySelector('.progress-fill');
                const progressText = scientist.querySelector('.achievement-progress span');
                
                if (progressFill) progressFill.style.width = '100%';
                if (progressText) progressText.textContent = '3/3 Materials';
                
                const lockTrophy = scientist.querySelector('.locked-trophy');
                if (lockTrophy) {
                    lockTrophy.classList.remove('locked-trophy');
                    const glow = document.createElement('div');
                    glow.className = 'achievement-glow';
                    lockTrophy.appendChild(glow);
                }
                
                showNotification('🏅 Material Scientist achievement unlocked!', 'success');
            }
        }, 2000);
    }
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
            marker.style.transform = 'scale(1.8)';
            marker.style.boxShadow = '0 0 20px var(--color-primary)';
            
            setTimeout(() => {
                marker.style.transform = 'scale(1.2)';
                marker.style.boxShadow = '';
            }, 500);
            
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
        <span style="font-size: 18px;">${icons[type]}</span>
        <span>${message}</span>
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
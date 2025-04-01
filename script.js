document.addEventListener('DOMContentLoaded', function() {
    // Load Instagram Gallery
    loadInstagramGallery();

    // Initialize interactive components
    initMobileMenu();
    initHeaderScroll();
    initSmoothScrolling();
    initAnimations();
    initGalleryFilters();
    initTestimonialSlider();
    init3DCardEffect();
    
    // Handle missing images
    handleMissingImages();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
        
        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animation on scroll
function initAnimations() {
    const sections = document.querySelectorAll('section');
    const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .link-card, .testimonial');
    
    const elementsToAnimate = [...sections, ...animateElements];
    
    const animateOnScroll = function() {
        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Run once on load
    setTimeout(animateOnScroll, 100);
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
}

// Gallery filters functionality
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter gallery items
                if (filter === 'all') {
                    galleryItems.forEach(item => {
                        item.style.display = 'block';
                    });
                } else {
                    galleryItems.forEach(item => {
                        if (item.classList.contains(filter)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
}

// Testimonial slider
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.arrow.prev');
    const nextBtn = document.querySelector('.arrow.next');
    
    if (testimonials.length > 0 && prevBtn && nextBtn) {
        let currentSlide = 0;
        const maxSlide = testimonials.length - 1;
        
        // Hide all testimonials except the first one
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // Next button functionality
        nextBtn.addEventListener('click', function() {
            testimonials[currentSlide].style.display = 'none';
            currentSlide = (currentSlide === maxSlide) ? 0 : currentSlide + 1;
            testimonials[currentSlide].style.display = 'block';
        });
        
        // Previous button functionality
        prevBtn.addEventListener('click', function() {
            testimonials[currentSlide].style.display = 'none';
            currentSlide = (currentSlide === 0) ? maxSlide : currentSlide - 1;
            testimonials[currentSlide].style.display = 'block';
        });
    }
}

// Handle missing images
function handleMissingImages() {
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.addEventListener('error', function() {
            // Set a fallback gradient background
            this.style.display = 'none';
            const parent = this.parentElement;
            if (parent.classList.contains('gallery-item')) {
                parent.style.background = 'linear-gradient(45deg, #121212, #2a2a2a)';
                
                // Add a placeholder text
                const placeholder = document.createElement('div');
                placeholder.classList.add('img-placeholder');
                placeholder.textContent = 'CapitalBulls ';
                placeholder.style.color = '#ffd700';
                placeholder.style.fontWeight = 'bold';
                placeholder.style.display = 'flex';
                placeholder.style.alignItems = 'center';
                placeholder.style.justifyContent = 'center';
                placeholder.style.height = '100%';
                placeholder.style.padding = '20px';
                placeholder.style.textAlign = 'center';
                
                parent.appendChild(placeholder);
            } else if (parent.classList.contains('logo')) {
                // Create text logo as fallback
                const textLogo = document.createElement('h1');
                textLogo.textContent = 'CapitalBulls ';
                textLogo.style.color = '#ffd700';
                textLogo.style.margin = '0';
                parent.appendChild(textLogo);
            } else if (parent.classList.contains('broker-image')) {
                parent.style.display = 'none';
            }
        });
    });
}

// Function to load Instagram Gallery
function loadInstagramGallery() {
    // Sample images - in a real implementation, this would come from Instagram API
    const galleryImages = [
        {
            url: 'images/result1.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'results'
        },
        {
            url: 'images/result2.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'results'
        },
        {
            url: 'images/result3.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'results'
        },
        {
            url: 'images/test1.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'testimonials'
        },
        {
            url: 'images/test2.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'testimonials'
        },
        {
            url: 'images/test3.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'testimonials'
        },
        {
            url: 'images/test4.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'testimonials'
        },
        {
            url: 'images/test5.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'testimonials'
        },
        {
            url: 'images/other1.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'other'
        },
        {
            url: 'images/other2.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'other'
        },
        {
            url: 'images/other3.jpg',
            link: 'https://www.instagram.com/capitalbulls_za/',
            category: 'other'
        }
    ];
    
    const galleryGrid = document.querySelector('.gallery-grid');
    
    if (galleryGrid) {
        galleryImages.forEach(image => {
            const galleryItem = document.createElement('a');
            galleryItem.href = image.link;
            galleryItem.target = '_blank';
            galleryItem.classList.add('gallery-item', image.category);
            
            const img = document.createElement('img');
            img.src = image.url;
            img.alt = 'CapitalBulls  Trading Image';
            galleryItem.appendChild(img);
            
            const icon = document.createElement('i');
            icon.classList.add('fab', 'fa-instagram', 'gallery-icon');
            galleryItem.appendChild(icon);
            
            galleryGrid.appendChild(galleryItem);
        });
    }
}

// Function to initialize 3D card effect with mouse tracking
function init3DCardEffect() {
    const cards = document.querySelectorAll('.card-3d');
    
    cards.forEach(card => {
        card.classList.add('mouse-interactive');
        
        card.addEventListener('mousemove', function(e) {
            // Get position of mouse relative to card
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the card
            const y = e.clientY - rect.top; // y position within the card
            
            // Calculate rotation values based on mouse position
            // Further from center = more rotation
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateY = ((x - centerX) / centerX) * 5; // max 5 deg rotation
            const rotateX = ((centerY - y) / centerY) * 5; // reverse Y axis for correct effect
            
            // Apply transform
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            
            // Add subtle shadow effect
            const shadowX = (x - centerX) / 20;
            const shadowY = (y - centerY) / 20;
            this.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.4)`;
            
            // Add subtle highlight effect
            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;
            
            // Create or update a custom property for shine gradient position
            this.style.setProperty('--shine-x', `${percentX}%`);
            this.style.setProperty('--shine-y', `${percentY}%`);
            this.style.setProperty('--shine-opacity', '1');
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset to default style on mouse leave
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            this.style.boxShadow = '';
            this.style.setProperty('--shine-opacity', '0');
        });
        
        // Create a shine element for each card
        const shine = document.createElement('div');
        shine.classList.add('card-shine');
        card.appendChild(shine);
    });
}

// Add animation styles
const animationStyles = `
    section,
    .feature-card,
    .pricing-card,
    .link-card,
    .testimonial {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.fade-in,
    .feature-card.fade-in,
    .pricing-card.fade-in,
    .link-card.fade-in,
    .testimonial.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (prefers-reduced-motion: reduce) {
        section,
        .feature-card,
        .pricing-card,
        .link-card,
        .testimonial {
            transition: none;
            opacity: 1;
            transform: none;
        }
    }
    
    /* Mobile menu animation */
    .mobile-menu-btn.active span:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
    }
`;

// Add the animation styles to the document
document.head.insertAdjacentHTML('beforeend', `<style>${animationStyles}</style>`);

// Update the copyright year
const currentYear = new Date().getFullYear();
const copyrightElement = document.querySelector('.copyright p');
if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} CapitalBulls . All rights reserved.`;
} 
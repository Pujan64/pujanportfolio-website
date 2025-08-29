// Portfolio JavaScript Implementation

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
    }

    applyTheme() {
        if (this.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', this.theme);
    }

    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }

    setupEventListeners() {
        const toggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => this.toggle());
        });
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.activeSection = 'home';
        this.navItems = [
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'certifications', label: 'Certifications' },
            { id: 'contact', label: 'Contact' }
        ];
        this.init();
    }

    init() {
        this.setupScrollSpy();
        this.setupNavigation();
        this.setupMobileMenu();
    }

    setupScrollSpy() {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + 100;
            
            for (let i = this.navItems.length - 1; i >= 0; i--) {
                const section = document.getElementById(this.navItems[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    this.setActiveSection(this.navItems[i].id);
                    break;
                }
            }
        });
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const target = button.getAttribute('data-target');
                this.scrollToSection(target);
            });
        });
    }

    setupMobileMenu() {
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        let isOpen = false;

        mobileToggle.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
        document.getElementById('menu-icon').classList.remove('hidden');
        document.getElementById('close-icon').classList.add('hidden');
    }

    setActiveSection(sectionId) {
        if (this.activeSection === sectionId) return;
        
        this.activeSection = sectionId;
        
        // Update navigation buttons
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(button => {
            const target = button.getAttribute('data-target');
            if (target === sectionId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

// Content Management
class ContentManager {
    constructor() {
        this.projects = [
            {
                title: "Face Detection System",
                description: "Advanced computer vision application using Python and OpenCV for real-time face detection and recognition.",
                technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
                category: "AI/ML",
                github: "https://github.com/Pujan64/face-detection",
                demo: "#",
                image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=Face+Detection"
            },
            {
                title: "Tic Tac Toe Game",
                description: "Interactive web-based Tic Tac Toe game with AI opponent and responsive design.",
                technologies: ["JavaScript", "HTML", "CSS", "Game Logic"],
                category: "Web Development",
                github: "https://github.com/Pujan64/tic-tac-toe",
                demo: "#",
                image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Tic+Tac+Toe"
            },
            {
                title: "Calculator Application",
                description: "Feature-rich calculator with scientific operations, history, and memory functions.",
                technologies: ["JavaScript", "CSS", "HTML", "Responsive Design"],
                category: "Web Development",
                github: "https://github.com/Pujan64/calculator",
                demo: "#",
                image: "https://via.placeholder.com/400x250/a855f7/ffffff?text=Calculator"
            },
            {
                title: "Landing Page",
                description: "Modern, responsive landing page with smooth animations and optimized performance.",
                technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
                category: "Web Development",
                github: "#",
                demo: "#",
                image: "https://via.placeholder.com/400x250/c084fc/ffffff?text=Landing+Page"
            },
            {
                title: "To-Do List App",
                description: "Comprehensive task management application with local storage and priority features.",
                technologies: ["JavaScript", "Local Storage", "CSS", "HTML"],
                category: "Web Development",
                github: "#",
                demo: "#",
                image: "https://via.placeholder.com/400x250/d8b4fe/ffffff?text=To-Do+App"
            },
            {
                title: "Random Password Generator",
                description: "Secure password generator with customizable length and character sets.",
                technologies: ["JavaScript", "Security", "HTML", "CSS"],
                category: "Utility",
                github: "#",
                demo: "#",
                image: "https://via.placeholder.com/400x250/e9d5ff/6b21a8?text=Password+Gen"
            },
            {
                title: "Temperature Converter",
                description: "Multi-unit temperature conversion tool with real-time calculation and history.",
                technologies: ["JavaScript", "Mathematics", "HTML", "CSS"],
                category: "Utility",
                github: "#",
                demo: "#",
                image: "https://via.placeholder.com/400x250/f3e8ff/5b21b6?text=Temp+Convert"
            }
        ];

        this.certifications = [
            {
                title: "Introduction to Web Development",
                issuer: "Coding Ninjas",
                date: "2024",
                description: "Comprehensive course covering HTML, CSS, JavaScript, and modern web development practices.",
                skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
            },
            {
                title: "Python Programming Certification",
                issuer: "Coding Ninjas",
                date: "2024",
                description: "Advanced Python programming course including data structures, algorithms, and OOP concepts.",
                skills: ["Python", "Data Structures", "Algorithms", "OOP"]
            },
            {
                title: "MongoDB Database Fundamentals",
                issuer: "MongoDB University",
                date: "2024",
                description: "Complete database management course covering NoSQL concepts and MongoDB operations.",
                skills: ["MongoDB", "NoSQL", "Database Design", "Data Modeling"]
            },
            {
                title: "Software Development Practices",
                issuer: "Tech Institute",
                date: "2024",
                description: "Professional development course focusing on best practices, version control, and collaboration.",
                skills: ["Git", "Agile", "Testing", "Code Review"]
            }
        ];

        this.init();
    }

    init() {
        this.renderProjects();
        this.renderCertifications();
    }

    renderProjects() {
        const projectsContainer = document.querySelector('#projects .grid');
        if (!projectsContainer) return;

        projectsContainer.innerHTML = this.projects.map(project => `
            <div class="card enhanced-card group">
                <div class="relative overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" 
                         class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute top-4 right-4">
                        <span class="px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full font-medium">
                            ${project.category}
                        </span>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">${project.title}</h3>
                    <p class="text-muted-foreground text-sm mb-4 leading-relaxed">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <div class="flex space-x-3">
                        <a href="${project.github}" target="_blank" class="btn btn-primary flex-1 group/btn">
                            <i data-lucide="github" class="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform"></i>
                            Code
                        </a>
                        <a href="${project.demo}" target="_blank" class="btn btn-outline flex-1 group/btn">
                            <i data-lucide="external-link" class="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform"></i>
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        // Re-initialize Lucide icons for new content
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    renderCertifications() {
        const certificationsContainer = document.querySelector('#certifications .grid');
        if (!certificationsContainer) return;

        certificationsContainer.innerHTML = this.certifications.map(cert => `
            <div class="card enhanced-card">
                <div class="card-body">
                    <div class="flex items-start space-x-4 mb-4">
                        <div class="flex-shrink-0 p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                            <i data-lucide="award" class="w-6 h-6 text-primary"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="text-lg font-bold text-primary mb-1">${cert.title}</h3>
                            <p class="text-accent font-semibold text-sm">${cert.issuer}</p>
                            <p class="text-muted-foreground text-sm">${cert.date}</p>
                        </div>
                    </div>
                    <p class="text-muted-foreground text-sm mb-4 leading-relaxed">${cert.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${cert.skills.map(skill => `
                            <span class="skill-badge">${skill}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // Re-initialize Lucide icons for new content
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Form Management
class FormManager {
    constructor() {
        this.init();
    }

    init() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate form submission
        this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        e.target.reset();
        
        // In a real application, you would send this data to a server
        console.log('Form submission:', data);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${
            type === 'success' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Hide notification after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
}

// Animation Manager
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupSkillBars();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    setupSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.querySelector('.skill-progress');
                    if (progress && !progress.classList.contains('animated')) {
                        progress.classList.add('animated');
                        progress.style.transform = 'scaleX(1)';
                    }
                }
            });
        }, { threshold: 0.5 });

        skillItems.forEach(item => {
            const progress = item.querySelector('.skill-progress');
            if (progress) {
                progress.style.transform = 'scaleX(0)';
                progress.style.transformOrigin = 'left center';
                progress.style.transition = 'transform 2s ease-out';
            }
            skillObserver.observe(item);
        });
    }
}

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    const themeManager = new ThemeManager();
    const navigationManager = new NavigationManager();
    const contentManager = new ContentManager();
    const formManager = new FormManager();
    const animationManager = new AnimationManager();

    // Make scrollToSection available globally
    window.scrollToSection = scrollToSection;

    console.log('Portfolio application initialized successfully!');
});

// Handle window resize
window.addEventListener('resize', () => {
    // Handle any resize-specific logic if needed
});

// Handle scroll for additional effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const navbar = document.getElementById('navigation');
    
    if (scrolled > 50) {
        navbar.classList.add('bg-background/95');
    } else {
        navbar.classList.remove('bg-background/95');
    }
});
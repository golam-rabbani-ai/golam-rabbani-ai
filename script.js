// Data definitions
const PROJECTS_DATA = [
  {
    "id": 1,
    "title": "NeuroFlow",
    "description": "An advanced AI-powered brain tumor detection and segmentation platform utilizing custom Convolutional Neural Networks (CNN) in PyTorch. Achieved 98.4% diagnostic accuracy.",
    "category": "AI / ML",
    "tags": ["Python", "PyTorch", "OpenCV", "Flask", "React"],
    "github": "https://github.com/golam-rabbani-ai/neuroflow",
    "live": "https://golam-rabbani-ai.github.io/neuroflow-demo",
    "image": "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 2,
    "title": "SentinelEye",
    "description": "Smart IoT home security system with real-time facial recognition and live video streaming. Sends instant security alerts via Telegram bot with snapshots when intrusion is detected.",
    "category": "IoT / Python",
    "tags": ["Python", "Raspberry Pi", "OpenCV", "Telegram API"],
    "github": "https://github.com/golam-rabbani-ai/sentineleye",
    "live": "https://golam-rabbani-ai.github.io/sentineleye-demo",
    "image": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 3,
    "title": "AnalyticsPulse",
    "description": "A comprehensive real-time web analytics application that tracks active sessions, bounce rates, geographical heatmaps, and user path navigation without relying on third-party cookies.",
    "category": "Full Stack",
    "tags": ["React", "Tailwind CSS", "NodeJS", "WebSockets", "D3.js"],
    "github": "https://github.com/golam-rabbani-ai/analyticspulse",
    "live": "https://golam-rabbani-ai.github.io/analyticspulse-demo",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 4,
    "title": "DevConnect",
    "description": "A developer community portal featuring real-time chat, collaborative coding playgrounds, and developer profile builders with automated portfolio generation.",
    "category": "Web Dev",
    "tags": ["React", "CSS3", "JavaScript", "NodeJS", "Socket.io"],
    "github": "https://github.com/golam-rabbani-ai/devconnect",
    "live": "https://golam-rabbani-ai.github.io/devconnect-demo",
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 5,
    "title": "AuraMarket",
    "description": "Modern e-commerce platform boasting customized AI product recommendation carousels, responsive grid search, user authentication, and seamless checkout integrations.",
    "category": "Full Stack",
    "tags": ["React", "Tailwind CSS", "FastAPI", "Python", "Stripe API"],
    "github": "https://github.com/golam-rabbani-ai/auramarket",
    "live": "https://golam-rabbani-ai.github.io/auramarket-demo",
    "image": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 6,
    "title": "TaskZen",
    "description": "An interactive, drag-and-drop collaborative task management tool modeled on Kanban principles, with dark mode toggle, keyboard accessibility, and subtask tracking.",
    "category": "Web Dev",
    "tags": ["React", "Framer Motion", "Tailwind CSS", "HTML5"],
    "github": "https://github.com/golam-rabbani-ai/taskzen",
    "live": "https://golam-rabbani-ai.github.io/taskzen-demo",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  }
];

const CERTIFICATES_DATA = [
  {
    "id": 1,
    "title": "Programming with JavaScript",
    "issuer": "Meta",
    "year": "2024",
    "category": "Development",
    "credentialUrl": "#"
  },
  {
    "id": 2,
    "title": "Introduction to Python Programming",
    "issuer": "University of Pennsylvania",
    "year": "2024",
    "category": "Development",
    "credentialUrl": "#"
  },
  {
    "id": 3,
    "title": "Foundations of Digital Marketing",
    "issuer": "Google",
    "year": "2023",
    "category": "Marketing & Analytics",
    "credentialUrl": "#"
  },
  {
    "id": 4,
    "title": "Introduction to Hardware and Operating Systems",
    "issuer": "IBM",
    "year": "2023",
    "category": "Systems & CS",
    "credentialUrl": "#"
  },
  {
    "id": 5,
    "title": "Operating Systems Fundamentals",
    "issuer": "Akamai",
    "year": "2024",
    "category": "Systems & CS",
    "credentialUrl": "#"
  },
  {
    "id": 6,
    "title": "Architecting Smart IoT Devices",
    "issuer": "28DIGITAL",
    "year": "2024",
    "category": "AI / ML & IoT",
    "credentialUrl": "#"
  },
  {
    "id": 7,
    "title": "English for Career Development",
    "issuer": "University of Pennsylvania",
    "year": "2023",
    "category": "Professional Skills",
    "credentialUrl": "#"
  },
  {
    "id": 8,
    "title": "Communication Skills for Engineering Scholars",
    "issuer": "Politecnico di Milano",
    "year": "2024",
    "category": "Professional Skills",
    "credentialUrl": "#"
  },
  {
    "id": 9,
    "title": "International Leadership and Organizational Behavior",
    "issuer": "Università Bocconi",
    "year": "2024",
    "category": "Professional Skills",
    "credentialUrl": "#"
  },
  {
    "id": 10,
    "title": "Qualitative Research Design",
    "issuer": "Emory University",
    "year": "2024",
    "category": "Professional Skills",
    "credentialUrl": "#"
  },
  {
    "id": 11,
    "title": "Ethics, Technology and Engineering",
    "issuer": "Eindhoven University of Technology",
    "year": "2024",
    "category": "Systems & CS",
    "credentialUrl": "#"
  },
  {
    "id": 12,
    "title": "Social Impact Strategy",
    "issuer": "University of Pennsylvania",
    "year": "2024",
    "category": "Professional Skills",
    "credentialUrl": "#"
  }
];

const TYPED_ROLES = [
  "AI & ML Enthusiast",
  "Full Stack Developer",
  "Python Developer",
  "React Developer",
  "B.Tech CSE Student",
  "Web Analytics Enthusiast"
];

// Toast Notification Manager
function addToast(message, type = 'success') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const id = Date.now();
  const toast = document.createElement('div');
  toast.id = `toast-${id}`;
  
  let bgClasses = '';
  let iconName = '';
  
  if (type === 'error') {
    bgClasses = 'bg-rose-950/80 border-rose-500/30 text-rose-200 html-light:bg-rose-50 html-light:border-rose-200 html-light:text-rose-800';
    iconName = 'alert-circle';
  } else if (type === 'info') {
    bgClasses = 'bg-indigo-950/80 border-indigo-500/30 text-indigo-200 html-light:bg-indigo-50 html-light:border-indigo-200 html-light:text-indigo-800';
    iconName = 'info';
  } else {
    bgClasses = 'bg-emerald-950/80 border-emerald-500/30 text-emerald-250 html-light:bg-emerald-50 html-light:border-emerald-200 html-light:text-emerald-800';
    iconName = 'check-circle';
  }

  toast.className = `p-4 rounded-xl border flex items-start gap-3 shadow-xl backdrop-blur-lg animate-slide-up ${bgClasses}`;
  toast.innerHTML = `
    <div class="mt-0.5">
      <i data-lucide="${iconName}" class="w-5 h-5"></i>
    </div>
    <p class="text-sm font-medium leading-relaxed">${message}</p>
  `;
  
  toastContainer.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Clipboard Copy logic
window.copyToClipboard = function(text, type) {
  navigator.clipboard.writeText(text).then(() => {
    if (type === 'email') {
      addToast("Email copied to clipboard!", "success");
    } else {
      addToast("Phone number copied to clipboard!", "success");
    }
  }).catch(() => {
    addToast("Failed to copy clipboard text.", "error");
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // Theme management
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  
  const getTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return 'dark'; // Default dark mode
  };
  
  const applyTheme = (theme) => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      themeToggleBtns.forEach(btn => {
        btn.innerHTML = `<i data-lucide="moon" class="w-5 h-5 transition-transform duration-300 hover:rotate-12"></i>`;
      });
    } else {
      root.classList.remove('light');
      themeToggleBtns.forEach(btn => {
        btn.innerHTML = `<i data-lucide="sun" class="w-5 h-5 transition-transform duration-300 hover:rotate-45"></i>`;
      });
    }
    localStorage.setItem('theme', theme);
    lucide.createIcons();
  };
  
  let currentTheme = getTheme();
  applyTheme(currentTheme);
  
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  });

  // Loading Screen simulation
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add('loading-screen-fade-out');
      setTimeout(() => loadingScreen.remove(), 600);
    }
  }, 1800);

  // Custom cursor logic
  const cursorOutline = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.custom-cursor-dot');
  
  let mouseCoords = { x: 0, y: 0 };
  let outlineCoords = { x: 0, y: 0 };
  let isCursorHidden = true;
  
  document.addEventListener('mousemove', (e) => {
    mouseCoords.x = e.clientX;
    mouseCoords.y = e.clientY;
    
    if (isCursorHidden) {
      isCursorHidden = false;
      if (cursorOutline) cursorOutline.style.opacity = '1';
      if (cursorDot) cursorDot.style.opacity = '1';
    }
    
    if (cursorDot) {
      cursorDot.style.left = `${mouseCoords.x}px`;
      cursorDot.style.top = `${mouseCoords.y}px`;
    }
  });

  document.addEventListener('mouseleave', () => {
    isCursorHidden = true;
    if (cursorOutline) cursorOutline.style.opacity = '0';
    if (cursorDot) cursorDot.style.opacity = '0';
  });

  const setupCursorHoverListeners = () => {
    const hoverables = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .interactive-element');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursorOutline) cursorOutline.classList.add('custom-cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        if (cursorOutline) cursorOutline.classList.remove('custom-cursor-hover');
      });
    });
  };

  setupCursorHoverListeners();
  
  // Track mutations to attach hover event listeners on new items dynamically
  const observer = new MutationObserver(setupCursorHoverListeners);
  observer.observe(document.body, { childList: true, subtree: true });

  const updateCursorTrail = () => {
    const dx = mouseCoords.x - outlineCoords.x;
    const dy = mouseCoords.y - outlineCoords.y;
    
    outlineCoords.x += dx * 0.15;
    outlineCoords.y += dy * 0.15;
    
    if (cursorOutline) {
      cursorOutline.style.left = `${outlineCoords.x}px`;
      cursorOutline.style.top = `${outlineCoords.y}px`;
    }
    
    requestAnimationFrame(updateCursorTrail);
  };
  requestAnimationFrame(updateCursorTrail);

  // Typewriter effect
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeTarget = document.getElementById('typewriter-text');
  
  const handleTypewriter = () => {
    const currentRole = TYPED_ROLES[roleIndex];
    
    if (isDeleting) {
      typeTarget.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typeTarget.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let delay = isDeleting ? 40 : 80;
    
    if (!isDeleting && charIndex === currentRole.length) {
      delay = 1500; // Pause at end of role
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % TYPED_ROLES.length;
      delay = 500; // Small delay before typing next
    }
    
    setTimeout(handleTypewriter, delay);
  };
  
  if (typeTarget) {
    setTimeout(handleTypewriter, 1000);
  }

  // Background Particles canvas
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw(isDark) {
        ctx.fillStyle = isDark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.2)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };
    initParticles();
    
    const animateParticles = () => {
      const isDark = !document.documentElement.classList.contains('light');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw(isDark);
      });
      
      // Connect nodes
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 100) {
            const alpha = (100 - dist) / 1000;
            ctx.strokeStyle = isDark 
              ? `rgba(168, 85, 247, ${alpha * 0.5})` 
              : `rgba(168, 85, 247, ${alpha * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  }

  // Scroll events: progress bar, header, and back-to-top button
  const progressBar = document.getElementById('scroll-progress-bar');
  const navHeader = document.querySelector('nav');
  const scrollTopBtn = document.getElementById('scroll-to-top-btn');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    if (totalScroll > 0) {
      const percentage = (scrollY / totalScroll) * 100;
      if (progressBar) progressBar.style.width = `${percentage}%`;
    }
    
    // Header shadow/blur trigger
    if (scrollY > 20) {
      navHeader?.classList.add('py-3', 'bg-slate-950/70', 'light:bg-slate-50/70', 'backdrop-blur-md', 'border-b', 'border-slate-900/50', 'light:border-slate-200/50', 'shadow-lg');
      navHeader?.classList.remove('py-5', 'bg-transparent');
    } else {
      navHeader?.classList.add('py-5', 'bg-transparent');
      navHeader?.classList.remove('py-3', 'bg-slate-950/70', 'light:bg-slate-50/70', 'backdrop-blur-md', 'border-b', 'border-slate-900/50', 'light:border-slate-200/50', 'shadow-lg');
    }
    
    // Back to top visibility
    if (scrollTopBtn) {
      if (scrollY > 400) {
        scrollTopBtn.classList.remove('hidden');
        scrollTopBtn.classList.add('flex');
      } else {
        scrollTopBtn.classList.remove('flex');
        scrollTopBtn.classList.add('hidden');
      }
    }

    // Scroll Spy active section highlighter
    const scrollPos = scrollY + 100;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const top = targetSection.offsetTop;
          const height = targetSection.offsetHeight;
          
          if (scrollPos >= top && scrollPos < top + height) {
            link.classList.add('text-indigo-400', 'dark:text-purple-400');
            link.classList.remove('text-slate-400');
            
            // Add underline indicator
            let indicator = link.querySelector('.active-indicator');
            if (!indicator) {
              indicator = document.createElement('span');
              indicator.className = 'active-indicator absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500';
              link.appendChild(indicator);
            }
          } else {
            link.classList.remove('text-indigo-400', 'dark:text-purple-400');
            link.classList.add('text-slate-400');
            link.querySelector('.active-indicator')?.remove();
          }
        }
      }
    });
  });
  
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll links trigger
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      
      const target = document.querySelector(targetId);
      if (target) {
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          const toggleIcon = document.getElementById('mobile-menu-toggle-icon');
          if (toggleIcon) toggleIcon.setAttribute('data-lucide', 'menu');
          lucide.createIcons();
        }
        
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuBtn.innerHTML = `<i data-lucide="x" class="w-6 h-6"></i>`;
      } else {
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
      }
      lucide.createIcons();
    });
  }

  // Projects category filters rendering
  const projectsGrid = document.getElementById('projects-grid');
  const projectFilterBar = document.getElementById('projects-filter-bar');
  
  const getProjectCategories = () => {
    const list = new Set(PROJECTS_DATA.map(p => p.category));
    return ['All', ...Array.from(list)];
  };
  
  const renderProjectFilters = () => {
    if (!projectFilterBar) return;
    const categories = getProjectCategories();
    
    projectFilterBar.innerHTML = categories.map(cat => `
      <button
        data-category="${cat}"
        class="project-filter-btn px-4.5 py-2 rounded-xl text-xs font-bold transition-all backdrop-blur-md border interactive-element ${
          cat === 'All'
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg border-transparent'
            : 'bg-slate-900/50 light:bg-white text-slate-400 light:text-slate-600 border-slate-800 light:border-slate-200 hover:border-slate-700 hover:text-slate-100 light:hover:text-slate-900'
        }"
      >
        ${cat}
      </button>
    `).join('');
    
    document.querySelectorAll('.project-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-category');
        
        document.querySelectorAll('.project-filter-btn').forEach(b => {
          b.className = 'project-filter-btn px-4.5 py-2 rounded-xl text-xs font-bold transition-all backdrop-blur-md border interactive-element bg-slate-900/50 light:bg-white text-slate-400 light:text-slate-600 border-slate-800 light:border-slate-200 hover:border-slate-700 hover:text-slate-100 light:hover:text-slate-900';
        });
        
        e.currentTarget.className = 'project-filter-btn px-4.5 py-2 rounded-xl text-xs font-bold transition-all backdrop-blur-md border interactive-element bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg border-transparent';
        
        renderProjects(cat);
      });
    });
  };
  
  const renderProjects = (category = 'All') => {
    if (!projectsGrid) return;
    
    const filtered = category === 'All' 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === category);
      
    projectsGrid.innerHTML = filtered.map(p => `
      <div class="glass-panel rounded-2xl overflow-hidden border border-slate-800 light:border-slate-200 shadow-2xl flex flex-col justify-between group hover:border-indigo-500/30 dark:hover:border-purple-500/30 hover:scale-[1.02] transition-all duration-300 interactive-element">
        <div class="relative h-48 overflow-hidden bg-slate-950">
          <img
            src="${p.image}"
            alt="${p.title}"
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-100"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <span class="absolute top-4 right-4 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-indigo-600/90 text-white backdrop-blur-md">
            ${p.category}
          </span>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-heading text-xl font-bold text-slate-100 light:text-slate-800 mb-2 group-hover:text-indigo-400 dark:group-hover:text-purple-400 transition-colors">
              ${p.title}
            </h3>
            <p class="text-sm text-slate-400 light:text-slate-600 leading-relaxed mb-6">
              ${p.description}
            </p>
          </div>
          <div class="space-y-6 pt-4 border-t border-slate-900/30 light:border-slate-200/30">
            <div class="flex flex-wrap gap-1.5">
              ${p.tags.map(tag => `
                <span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900 light:bg-slate-100 text-slate-400 light:text-slate-650 border border-slate-850 light:border-slate-200">
                  ${tag}
                </span>
              `).join('')}
            </div>
            <div class="flex items-center justify-between gap-4">
              <a
                href="${p.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-950 hover:bg-slate-850 light:hover:bg-slate-200 text-xs font-bold transition-all interactive-element"
              >
                <i data-lucide="github" class="w-4 h-4"></i>
                Code
              </a>
              <a
                href="${p.live}"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold transition-all hover:shadow-lg hover:shadow-indigo-500/20 interactive-element"
              >
                <i data-lucide="external-link" class="w-4 h-4"></i>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
    
    lucide.createIcons();
  };
  
  renderProjectFilters();
  renderProjects();

  // Certificates list rendering, tabs, and search
  const certificatesGrid = document.getElementById('certificates-grid');
  const certificatesFilterBar = document.getElementById('certificates-filter-bar');
  const certificateSearch = document.getElementById('certificate-search');
  
  let currentCertificateCategory = 'All';
  let currentCertificateSearchQuery = '';
  
  const getCertificateCategories = () => {
    const list = new Set(CERTIFICATES_DATA.map(c => c.category));
    return ['All', ...Array.from(list)];
  };
  
  const renderCertificateFilters = () => {
    if (!certificatesFilterBar) return;
    const categories = getCertificateCategories();
    
    certificatesFilterBar.innerHTML = categories.map(cat => `
      <button
        data-category="${cat}"
        class="certificate-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all backdrop-blur-md border interactive-element ${
          cat === 'All'
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg border-transparent'
            : 'bg-slate-900/50 light:bg-white text-slate-400 light:text-slate-600 border border-slate-800 light:border-slate-200 hover:border-slate-700 hover:text-slate-100 light:hover:text-slate-900'
        }"
      >
        ${cat}
      </button>
    `).join('');
    
    document.querySelectorAll('.certificate-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentCertificateCategory = e.currentTarget.getAttribute('data-category');
        
        document.querySelectorAll('.certificate-filter-btn').forEach(b => {
          b.className = 'certificate-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all backdrop-blur-md border interactive-element bg-slate-900/50 light:bg-white text-slate-400 light:text-slate-600 border border-slate-800 light:border-slate-200 hover:border-slate-700 hover:text-slate-100 light:hover:text-slate-900';
        });
        
        e.currentTarget.className = 'certificate-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all backdrop-blur-md border interactive-element bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg border-transparent';
        
        filterCertificates();
      });
    });
  };
  
  const filterCertificates = () => {
    if (!certificatesGrid) return;
    
    const filtered = CERTIFICATES_DATA.filter(c => {
      const matchesSearch = c.title.toLowerCase().includes(currentCertificateSearchQuery.toLowerCase()) ||
                            c.issuer.toLowerCase().includes(currentCertificateSearchQuery.toLowerCase());
      
      const matchesCategory = currentCertificateCategory === 'All' || c.category === currentCertificateCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    if (filtered.length > 0) {
      certificatesGrid.innerHTML = filtered.map(c => `
        <div class="glass-panel p-6 rounded-2xl border border-slate-800 light:border-slate-200 shadow-xl transition-all duration-300 hover:border-indigo-500/30 dark:hover:border-purple-500/30 group hover:scale-[1.02] interactive-element flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="p-2.5 bg-indigo-600/10 rounded-xl">
                <i data-lucide="award" class="w-5 h-5 text-indigo-400 light:text-indigo-600"></i>
              </div>
              <span class="text-xs font-semibold text-slate-500">${c.year}</span>
            </div>
            <h3 class="font-heading text-lg font-bold text-slate-100 light:text-slate-800 mb-1.5 leading-snug group-hover:text-indigo-400 dark:group-hover:text-purple-400 transition-colors">
              ${c.title}
            </h3>
            <p class="text-sm font-semibold text-slate-400 light:text-slate-500 mb-4">
              Issuer: ${c.issuer}
            </p>
          </div>
          <div class="pt-4 border-t border-slate-900/30 light:border-slate-200/30 flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-900 light:bg-slate-100 text-indigo-400 light:text-indigo-600 border border-slate-850 light:border-slate-200">
              ${c.category}
            </span>
            <a
              href="${c.credentialUrl}"
              class="verify-cert-btn inline-flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-indigo-400 light:text-slate-500 light:hover:text-indigo-600 transition-colors interactive-element"
              data-title="${c.title}"
            >
              Verify
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      `).join('');
      
      document.querySelectorAll('.verify-cert-btn').forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === '#') {
            e.preventDefault();
            alert(`Credential link placeholder for ${this.getAttribute('data-title')}.`);
          }
        });
      });
    } else {
      certificatesGrid.innerHTML = `
        <div class="col-span-full text-center py-12">
          <p class="text-slate-500">No certifications match your current filters.</p>
        </div>
      `;
    }
    
    lucide.createIcons();
  };
  
  if (certificateSearch) {
    certificateSearch.addEventListener('input', (e) => {
      currentCertificateSearchQuery = e.target.value;
      filterCertificates();
    });
  }
  
  renderCertificateFilters();
  filterCertificates();

  // GitHub Stats
  const USERNAME = "golam-rabbani-ai";
  
  const MOCK_PROFILE = {
    avatar_url: "https://github.com/golam-rabbani-ai.png",
    name: "MD GOLAM RABBANI",
    bio: "AI & ML Enthusiast | Full Stack Web Developer | B.Tech CSE Student",
    public_repos: 18,
    followers: 45,
    following: 52,
    html_url: `https://github.com/${USERNAME}`
  };
  
  const MOCK_REPOS = [
    {
      name: "neuroflow",
      description: "Brain tumor classification and segmentation using deep PyTorch ResNet models.",
      stargazers_count: 5,
      forks_count: 2,
      language: "Python",
      html_url: `https://github.com/${USERNAME}/neuroflow`
    },
    {
      name: "sentineleye",
      description: "Intruder warning system matching live camera streams with facial signatures.",
      stargazers_count: 3,
      forks_count: 1,
      language: "Python",
      html_url: `https://github.com/${USERNAME}/sentineleye`
    },
    {
      name: "analyticspulse",
      description: "High-performance JavaScript click tracker and realtime event map pipeline.",
      stargazers_count: 4,
      forks_count: 1,
      language: "JavaScript",
      html_url: `https://github.com/${USERNAME}/analyticspulse`
    }
  ];

  const githubLoader = document.getElementById('github-loader');
  const githubContainer = document.getElementById('github-container');
  const githubAvatar = document.getElementById('github-avatar');
  const githubName = document.getElementById('github-name');
  const githubUsername = document.getElementById('github-username');
  const githubBio = document.getElementById('github-bio');
  const githubFollowers = document.getElementById('github-followers');
  const githubReposCount = document.getElementById('github-repos-count');
  const githubStarsCount = document.getElementById('github-stars-count');
  const githubFollowing = document.getElementById('github-following');
  const githubProfileLink = document.getElementById('github-profile-link');
  const githubReposList = document.getElementById('github-repos-list');

  async function fetchGitHubData() {
    let profile = MOCK_PROFILE;
    let repos = MOCK_REPOS;
    let totalStars = 12;

    try {
      const userRes = await fetch(`https://api.github.com/users/${USERNAME}`);
      if (userRes.ok) {
        profile = await userRes.json();
      }

      const reposRes = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`);
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        repos = reposData.slice(0, 3);
        totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0) || 12;
      }
    } catch (err) {
      console.warn("GitHub API error, using fallback offline data.", err);
    } finally {
      // Hide loader, show container
      if (githubLoader) githubLoader.classList.add('hidden');
      if (githubContainer) githubContainer.classList.remove('hidden');

      // Update Profile UI
      if (githubAvatar) githubAvatar.src = profile.avatar_url;
      if (githubName) githubName.textContent = profile.name || USERNAME;
      if (githubUsername) githubUsername.textContent = `@${USERNAME}`;
      if (githubBio) githubBio.textContent = profile.bio || "AI/ML & Web Developer";
      if (githubFollowers) githubFollowers.textContent = profile.followers;
      if (githubReposCount) githubReposCount.textContent = profile.public_repos;
      if (githubStarsCount) githubStarsCount.textContent = totalStars;
      if (githubFollowing) githubFollowing.textContent = profile.following;
      if (githubProfileLink) githubProfileLink.href = profile.html_url;

      // Update Repos list UI
      if (githubReposList) {
        githubReposList.innerHTML = repos.map(repo => `
          <div class="glass-panel p-5 rounded-2xl border border-slate-800 light:border-slate-200 shadow-lg hover:border-indigo-500/30 dark:hover:border-purple-500/30 transition-all duration-300 group hover:scale-[1.01] interactive-element flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 class="font-heading text-base font-bold text-slate-100 light:text-slate-800 mb-1.5 flex items-center gap-1.5 group-hover:text-indigo-400 dark:group-hover:text-purple-400 transition-colors">
                ${repo.name}
              </h4>
              <p class="text-xs text-slate-400 light:text-slate-650 max-w-xl leading-relaxed">
                ${repo.description || "No description provided."}
              </p>
            </div>
            <div class="flex items-center gap-4.5 justify-between sm:justify-end">
              <div class="flex items-center gap-4 text-xs font-medium text-slate-500">
                <span class="flex items-center gap-1">
                  <i data-lucide="star" class="w-3.5 h-3.5 text-amber-500"></i>
                  ${repo.stargazers_count}
                </span>
                <span class="px-2 py-0.5 rounded bg-slate-900 light:bg-slate-100 text-slate-400 light:text-slate-600 border border-slate-850 light:border-slate-200 font-bold">
                  ${repo.language || "Web"}
                </span>
              </div>
              <a
                href="${repo.html_url}"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-850 light:border-slate-200 text-slate-400 hover:text-indigo-400 light:hover:text-indigo-600 transition-all interactive-element"
                aria-label="View repo"
              >
                <i data-lucide="external-link" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        `).join('');
      }
      lucide.createIcons();
    }
  }

  fetchGitHubData();

  // Contact form submission via EmailJS
  const contactForm = document.getElementById('contact-form');
  const submitBtnText = document.getElementById('submit-btn-text');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const message = document.getElementById('form-message').value;
      
      if (!name || !email || !message) {
        addToast("Please fill in all fields.", "error");
        return;
      }
      
      if (submitBtnText) submitBtnText.textContent = "Sending...";
      
      // Attempt to retrieve keys from global variables (or define mock behavior if empty)
      const serviceId = window.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
      const templateId = window.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
      const publicKey = window.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';
      
      const isMock = serviceId.includes('placeholder') || templateId.includes('placeholder') || publicKey.includes('placeholder');
      
      if (isMock) {
        setTimeout(() => {
          addToast("Message simulated successfully! Setup EmailJS keys to link live.", "success");
          contactForm.reset();
          if (submitBtnText) submitBtnText.textContent = "Send Message";
        }, 1000);
      } else {
        try {
          // Live EmailJS send
          await emailjs.sendForm(serviceId, templateId, contactForm, publicKey);
          addToast("Your message was sent successfully!", "success");
          contactForm.reset();
        } catch (err) {
          addToast("Failed to send message. Please try again or copy email directly.", "error");
          console.error(err);
        } finally {
          if (submitBtnText) submitBtnText.textContent = "Send Message";
        }
      }
    });
  }
});

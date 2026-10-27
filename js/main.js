/**
 * =================================================================
 * SCRIPT UTAMA PORTOFOLIO IOS DEVELOPER
 * =================================================================
 * Mengelola rendering data, filter kategori, modal galeri screenshot,
 * animasi counter, navigasi, dan helper upload/preview foto lokal.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi seluruh komponen
  initHero();
  initSkills();
  initProjects();
  initExperience();
  initContact();
  initNavigation();
  initLiveUploader();
  initOwnerMode();
  
  // Render Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
});

/* ==========================================================================
   1. Hero Section & Profile Render
   ========================================================================== */
function initHero() {
  const p = portfolioData.profile;
  
  // Set Profile Information
  const devName = document.getElementById('hero-dev-name');
  const devTitle = document.getElementById('hero-dev-title');
  const devBio = document.getElementById('hero-dev-bio');
  const devStatus = document.getElementById('hero-status-badge');
  const devAvatar = document.getElementById('hero-dev-avatar');

  if (devName) devName.textContent = p.name;
  if (devTitle) devTitle.textContent = p.title;
  if (devBio) devBio.textContent = p.shortBio;
  if (devStatus) devStatus.textContent = p.statusBadge;
  if (devAvatar) devAvatar.src = p.avatar;

  // Render Stats Grid
  const statsContainer = document.getElementById('hero-stats-grid');
  if (statsContainer && p.stats) {
    statsContainer.innerHTML = p.stats.map(stat => `
      <div class="glass-panel p-4 rounded-2xl border border-white/5 text-center">
        <div class="text-2xl sm:text-3xl font-extrabold text-white mb-1">
          <span>${stat.prefix || ''}</span><span class="stat-counter">${stat.value}</span><span>${stat.suffix || ''}</span>
        </div>
        <div class="text-xs text-slate-400 font-medium">${stat.label}</div>
      </div>
    `).join('');
  }

  // Hero iPhone interactive preview switcher
  setupHeroIphoneSwitcher();
}

function setupHeroIphoneSwitcher() {
  const heroScreenImg = document.getElementById('hero-iphone-screen');
  const heroAppTitle = document.getElementById('hero-iphone-app-title');
  const prevBtn = document.getElementById('hero-screen-prev');
  const nextBtn = document.getElementById('hero-screen-next');

  if (!heroScreenImg || !portfolioData.projects.length) return;

  let currentProjectIndex = 0;

  function updateHeroScreen(index) {
    currentProjectIndex = (index + portfolioData.projects.length) % portfolioData.projects.length;
    const project = portfolioData.projects[currentProjectIndex];
    
    // Smooth transition
    heroScreenImg.style.opacity = '0';
    setTimeout(() => {
      heroScreenImg.src = project.thumbnail;
      if (heroAppTitle) heroAppTitle.textContent = project.title;
      heroScreenImg.style.opacity = '1';
    }, 150);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateHeroScreen(currentProjectIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateHeroScreen(currentProjectIndex + 1));
  }
}

/* ==========================================================================
   2. Skills Section Render
   ========================================================================== */
function initSkills() {
  const skillsContainer = document.getElementById('skills-grid-container');
  if (!skillsContainer || !portfolioData.skills) return;

  skillsContainer.innerHTML = portfolioData.skills.map((cat, idx) => `
    <div class="glass-card p-6 sm:p-7 rounded-3xl relative overflow-hidden">
      <!-- Top Subtle Glow Line -->
      <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div class="flex items-center gap-3 mb-2">
        <span class="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm">
          0${idx + 1}
        </span>
        <h3 class="text-lg sm:text-xl font-bold text-white">${cat.category}</h3>
      </div>
      <p class="text-xs sm:text-sm text-slate-400 mb-6">${cat.description}</p>

      <div class="space-y-3.5">
        ${cat.items.map(item => `
          <div class="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] transition-all duration-200">
            <div class="flex items-center justify-between mb-1.5">
              <div class="flex items-center gap-2.5">
                <i data-lucide="${item.icon || 'code'}" class="w-4 h-4 text-blue-400"></i>
                <span class="font-semibold text-sm text-slate-200">${item.name}</span>
              </div>
              <span class="text-[11px] font-mono-code font-semibold px-2.5 py-0.5 rounded-full ${
                item.level === 'Expert' 
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' 
                  : item.level === 'Advanced'
                  ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                  : 'bg-amber-500/15 text-amber-400 border border-amber-500/20'
              }">
                ${item.level}
              </span>
            </div>
            <div class="text-xs text-slate-400 pl-6">${item.highlight}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   3. Featured Projects Showcase & Filters
   ========================================================================== */
function initProjects() {
  const container = document.getElementById('projects-container');
  const filterButtons = document.querySelectorAll('.project-filter-btn');

  if (!container) return;

  renderProjectCards(portfolioData.projects);

  // Filter Buttons Click
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('tab-active', 'bg-blue-600/20', 'border-blue-500/40', 'text-white');
        b.classList.add('text-slate-400');
      });

      btn.classList.add('tab-active', 'bg-blue-600/20', 'border-blue-500/40', 'text-white');
      btn.classList.remove('text-slate-400');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjectCards(portfolioData.projects);
      } else {
        const filtered = portfolioData.projects.filter(p => p.category === filter);
        renderProjectCards(filtered);
      }
      
      if (window.lucide) lucide.createIcons();
    });
  });
}

function renderProjectCards(projectsList) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  if (projectsList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400">
        <i data-lucide="folder-search" class="w-12 h-12 mx-auto mb-3 text-slate-500"></i>
        <p class="text-base">Belum ada proyek dalam kategori ini.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = projectsList.map(project => `
    <div class="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden" data-project-id="${project.id}">
      
      <!-- Top Badge Bar -->
      <div class="flex items-center justify-between gap-3 mb-5">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-br ${project.appIconBg || 'from-blue-600 to-blue-800'} flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <i data-lucide="${project.appIconSymbol || 'smartphone'}" class="w-5 h-5"></i>
          </div>
          <div>
            <span class="text-xs font-semibold text-blue-400 uppercase tracking-wider font-mono-code">${project.categoryLabel}</span>
            <div class="text-[11px] text-slate-400">${project.role} • ${project.timeline}</div>
          </div>
        </div>

        ${project.featured ? `
          <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1">
            <i data-lucide="sparkles" class="w-3 h-3"></i> Unggulan
          </span>
        ` : ''}
      </div>

      <!-- App Title & Description -->
      <div class="mb-5">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
          ${project.title}
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 line-clamp-2">
          ${project.shortDescription}
        </p>
      </div>

      <!-- iPhone Frame Preview (Realistic Mockup Mini) -->
      <div class="my-4 py-2 flex justify-center bg-black/40 rounded-2xl border border-white/5 cursor-pointer project-card-preview-btn" onclick="openProjectModal('${project.id}')">
        <div class="project-card-mockup group-hover:scale-[1.03] transition-transform duration-300">
          <div class="iphone-island" style="top: 10px; width: 65px; height: 18px;">
            <div class="iphone-island-camera" style="width: 7px; height: 7px;"></div>
          </div>
          <div class="iphone-screen">
            <img src="${project.thumbnail}" alt="${project.title} Screenshot" class="project-card-img" id="card-img-${project.id}" loading="lazy" />
            <div class="iphone-glare"></div>
          </div>
          <div class="iphone-home-indicator" style="bottom: 4px; width: 80px; height: 3px;"></div>
        </div>
      </div>

      <!-- App Metrics Pills -->
      <div class="grid grid-cols-3 gap-2 py-3 px-3.5 my-3 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
        <div>
          <div class="text-[10px] text-slate-400 uppercase">Downloads</div>
          <div class="text-sm font-bold text-white">${project.metrics.downloads}</div>
        </div>
        <div class="border-x border-white/10">
          <div class="text-[10px] text-slate-400 uppercase">Rating</div>
          <div class="text-sm font-bold text-amber-400">${project.metrics.rating}</div>
        </div>
        <div>
          <div class="text-[10px] text-slate-400 uppercase">Crash-Free</div>
          <div class="text-sm font-bold text-emerald-400">${project.metrics.crashFree}</div>
        </div>
      </div>

      <!-- Tech Stack Tags -->
      <div class="flex flex-wrap gap-1.5 mb-6">
        ${project.techStack.slice(0, 4).map(tech => `
          <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/5">
            ${tech}
          </span>
        `).join('')}
        ${project.techStack.length > 4 ? `
          <span class="px-2 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
            +${project.techStack.length - 4}
          </span>
        ` : ''}
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 pt-2 border-t border-white/5">
        <button 
          onclick="openProjectModal('${project.id}')"
          class="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
          <i data-lucide="external-link" class="w-4 h-4"></i> Detail Aplikasi
        </button>

        <button 
          onclick="openLiveUploaderFor('${project.id}')" 
          title="Tes upload/ganti screenshot proyek ini (Khusus Owner)"
          class="owner-only py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all duration-200 items-center gap-1.5">
          <i data-lucide="image-plus" class="w-4 h-4 text-blue-400"></i>
          <span class="hidden sm:inline">Uji Foto</span>
        </button>
      </div>

    </div>
  `).join('');
}

/* ==========================================================================
   4. Project Detail Modal & Screenshot Gallery
   ========================================================================== */
let currentModalProject = null;
let currentModalScreenIndex = 0;

window.openProjectModal = function(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  currentModalProject = project;
  currentModalScreenIndex = 0;

  const modal = document.getElementById('project-detail-modal');
  if (!modal) return;

  // Fill in content
  document.getElementById('modal-app-title').textContent = project.title;
  document.getElementById('modal-app-subtitle').textContent = project.subtitle;
  document.getElementById('modal-app-category').textContent = project.categoryLabel;
  document.getElementById('modal-app-desc').textContent = project.fullDescription;
  document.getElementById('modal-app-role').textContent = project.role;
  document.getElementById('modal-app-timeline').textContent = project.timeline;

  // Metrics
  document.getElementById('modal-stat-downloads').textContent = project.metrics.downloads;
  document.getElementById('modal-stat-rating').textContent = project.metrics.rating;
  document.getElementById('modal-stat-crashfree').textContent = project.metrics.crashFree;

  // Tech Stack
  const techContainer = document.getElementById('modal-tech-stack');
  if (techContainer) {
    techContainer.innerHTML = project.techStack.map(t => `
      <span class="px-3 py-1 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 font-mono-code">
        ${t}
      </span>
    `).join('');
  }

  // Key Features
  const featuresContainer = document.getElementById('modal-key-features');
  if (featuresContainer) {
    featuresContainer.innerHTML = project.keyFeatures.map(f => `
      <li class="flex items-start gap-2.5 text-sm text-slate-300">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Technical Challenges
  const challengesContainer = document.getElementById('modal-technical-challenges');
  if (challengesContainer && project.technicalChallenges) {
    challengesContainer.innerHTML = project.technicalChallenges.map(item => `
      <div class="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
        <div class="text-xs font-bold text-amber-400 flex items-center gap-1.5">
          <i data-lucide="alert-circle" class="w-3.5 h-3.5"></i> Tantangan:
        </div>
        <p class="text-xs text-slate-300">${item.problem}</p>
        <div class="text-xs font-bold text-blue-400 flex items-center gap-1.5 pt-1">
          <i data-lucide="check" class="w-3.5 h-3.5"></i> Solusi Rekayasa:
        </div>
        <p class="text-xs text-slate-300">${item.solution}</p>
      </div>
    `).join('');
  }

  // Setup Gallery Screenshots
  setupModalGallery();

  // Links
  const appStoreLink = document.getElementById('modal-link-appstore');
  const githubLink = document.getElementById('modal-link-github');

  if (appStoreLink) {
    if (project.links.appStore) {
      appStoreLink.href = project.links.appStore;
      appStoreLink.classList.remove('hidden');
    } else {
      appStoreLink.classList.add('hidden');
    }
  }

  if (githubLink) {
    if (project.links.github) {
      githubLink.href = project.links.github;
      githubLink.classList.remove('hidden');
    } else {
      githubLink.classList.add('hidden');
    }
  }

  // Show Modal
  modal.classList.remove('hidden');
  const card = document.getElementById('project-detail-card');
  if (card) card.scrollTop = 0;
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  if (window.lucide) lucide.createIcons();
};

function setupModalGallery() {
  if (!currentModalProject) return;

  const mainScreenImg = document.getElementById('modal-iphone-screen');
  const thumbsContainer = document.getElementById('modal-thumbnails-container');
  const prevBtn = document.getElementById('modal-gallery-prev');
  const nextBtn = document.getElementById('modal-gallery-next');

  const screenshots = currentModalProject.screenshots || [currentModalProject.thumbnail];

  function updateModalScreen(index) {
    currentModalScreenIndex = (index + screenshots.length) % screenshots.length;
    mainScreenImg.src = screenshots[currentModalScreenIndex];

    // Highlight thumbnail
    const thumbs = thumbsContainer.querySelectorAll('.modal-thumb-btn');
    thumbs.forEach((t, i) => {
      if (i === currentModalScreenIndex) {
        t.classList.add('ring-2', 'ring-blue-500', 'opacity-100');
        t.classList.remove('opacity-60');
      } else {
        t.classList.remove('ring-2', 'ring-blue-500', 'opacity-100');
        t.classList.add('opacity-60');
      }
    });
  }

  // Render Thumbnails
  if (thumbsContainer) {
    thumbsContainer.innerHTML = screenshots.map((src, i) => `
      <button 
        class="modal-thumb-btn w-12 h-20 rounded-xl overflow-hidden border border-white/10 transition-all ${i === 0 ? 'ring-2 ring-blue-500 opacity-100' : 'opacity-60 hover:opacity-100'}"
        onclick="setModalScreenIndex(${i})">
        <img src="${src}" class="w-full h-full object-cover" alt="Thumb ${i+1}" />
      </button>
    `).join('');
  }

  window.setModalScreenIndex = updateModalScreen;

  if (prevBtn) prevBtn.onclick = () => updateModalScreen(currentModalScreenIndex - 1);
  if (nextBtn) nextBtn.onclick = () => updateModalScreen(currentModalScreenIndex + 1);

  // Set initial screen
  updateModalScreen(0);
}

window.closeProjectModal = function() {
  const modal = document.getElementById('project-detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
};

/* ==========================================================================
   5. Interactive Live Screenshot Uploader & Studio Previewer
   ========================================================================== */
function initLiveUploader() {
  const dropzone = document.getElementById('uploader-dropzone');
  const fileInput = document.getElementById('uploader-file-input');
  const projectSelect = document.getElementById('uploader-project-select');
  const livePreviewImg = document.getElementById('uploader-preview-screen');
  const applyBtn = document.getElementById('uploader-apply-btn');
  const resetBtn = document.getElementById('uploader-reset-btn');
  const filenameDisplay = document.getElementById('uploader-filename-display');

  if (!dropzone || !fileInput) return;

  // Populate project selector options
  if (projectSelect) {
    projectSelect.innerHTML = portfolioData.projects.map(p => `
      <option value="${p.id}">${p.title} (${p.categoryLabel})</option>
    `).join('');
  }

  let currentLoadedDataUrl = null;

  // Handle Drag & Drop
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      handleImageFile(files[0]);
    }
  });

  dropzone.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      handleImageFile(fileInput.files[0]);
    }
  });

  function handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('Silakan pilih file gambar (PNG, JPG, SVG, WebP)!');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      currentLoadedDataUrl = e.target.result;
      if (livePreviewImg) {
        livePreviewImg.src = currentLoadedDataUrl;
      }
      if (filenameDisplay) {
        filenameDisplay.innerHTML = `
          <div class="flex items-center gap-2 text-emerald-400 text-xs font-semibold py-1">
            <i data-lucide="check" class="w-4 h-4"></i> Gambar aktif: ${file.name} (${Math.round(file.size / 1024)} KB)
          </div>
        `;
        if (window.lucide) lucide.createIcons();
      }
      if (applyBtn) {
        applyBtn.removeAttribute('disabled');
        applyBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    };
    reader.readAsDataURL(file);
  }

  // Apply to project card
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      if (!currentLoadedDataUrl || !projectSelect) return;

      const targetId = projectSelect.value;
      const targetProject = portfolioData.projects.find(p => p.id === targetId);
      if (targetProject) {
        targetProject.thumbnail = currentLoadedDataUrl;
        if (!targetProject.screenshots) targetProject.screenshots = [];
        targetProject.screenshots.unshift(currentLoadedDataUrl);

        // Update card image in DOM
        const cardImg = document.getElementById(`card-img-${targetId}`);
        if (cardImg) {
          cardImg.src = currentLoadedDataUrl;
        }

        // Also update Hero if currently active
        const heroScreen = document.getElementById('hero-iphone-screen');
        if (heroScreen) heroScreen.src = currentLoadedDataUrl;

        showToast(`Screenshot untuk "${targetProject.title}" berhasil di-preview di kartu!`);
      }
    });
  }

  // Reset to original
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      window.location.reload();
    });
  }
}

window.openLiveUploaderFor = function(projectId) {
  const modal = document.getElementById('live-uploader-modal');
  const projectSelect = document.getElementById('uploader-project-select');
  if (modal) {
    modal.classList.remove('hidden');
    const card = document.getElementById('live-uploader-card');
    if (card) card.scrollTop = 0;
    modal.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    if (projectSelect && projectId) {
      projectSelect.value = projectId;
    }
    if (window.lucide) lucide.createIcons();
  }
};

window.closeLiveUploader = function() {
  const modal = document.getElementById('live-uploader-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
};

/* ==========================================================================
   6. Work Experience Timeline Render
   ========================================================================== */
function initExperience() {
  const container = document.getElementById('experience-timeline-container');
  if (!container || !portfolioData.experiences) return;

  container.innerHTML = portfolioData.experiences.map((exp, idx) => `
    <div class="relative pl-8 sm:pl-10 pb-12 last:pb-2 group">
      <!-- Vertical Connecting Line -->
      <div class="absolute left-3 top-3 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/40 via-sky-500/20 to-transparent group-last:hidden"></div>

      <!-- Dot Marker -->
      <div class="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-2 border-slate-900 timeline-dot flex items-center justify-center">
        <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
      </div>

      <!-- Experience Card -->
      <div class="glass-card rounded-2xl p-5 sm:p-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
          <div class="flex items-center gap-2">
            <h4 class="text-lg font-bold text-white">${exp.role}</h4>
            <span class="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
              ${exp.type}
            </span>
          </div>
          <span class="text-xs font-mono-code font-medium text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full w-fit">
            ${exp.period}
          </span>
        </div>

        <div class="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-1.5">
          <i data-lucide="building" class="w-4 h-4"></i> ${exp.company}
        </div>

        <p class="text-xs sm:text-sm text-slate-300 mb-4">${exp.description}</p>

        <div class="space-y-2 border-t border-white/5 pt-3">
          ${exp.achievements.map(ach => `
            <div class="flex items-start gap-2 text-xs text-slate-400">
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5"></i>
              <span>${ach}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. Contact Form & Toast Alert
   ========================================================================== */
function initContact() {
  const form = document.getElementById('contact-form');
  const directEmail = document.getElementById('contact-direct-email');
  
  if (directEmail && portfolioData.contact) {
    directEmail.textContent = portfolioData.contact.directEmail;
    directEmail.href = `mailto:${portfolioData.contact.directEmail}`;
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;

      if (!name || !email || !message) {
        showToast('Mohon lengkapi formulir pesan terlebih dahulu!', 'error');
        return;
      }

      // Format mailto link
      const subject = encodeURIComponent(`Halo Fauzi - Inquiry Proyek iOS dari ${name}`);
      const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
      
      window.location.href = `mailto:${portfolioData.contact.directEmail}?subject=${subject}&body=${body}`;
      
      showToast('Membuka aplikasi email Anda...', 'success');
      form.reset();
    });
  }
}

function showToast(message, type = 'success') {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl glass-panel text-white text-sm font-medium shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }

  const iconName = type === 'success' ? 'check-circle' : 'alert-circle';
  const iconColor = type === 'success' ? 'text-emerald-400' : 'text-rose-400';

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-5 h-5 ${iconColor}"></i>
    <span>${message}</span>
  `;

  if (window.lucide) lucide.createIcons();

  toast.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
  }, 3500);
}

/* ==========================================================================
   8. Navigation & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Active section spy on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('text-blue-400', 'font-semibold');
          matchingLink.classList.remove('text-slate-400');
        } else {
          matchingLink.classList.remove('text-blue-400', 'font-semibold');
          matchingLink.classList.add('text-slate-400');
        }
      }
    });
  });
}

/* ==========================================================================
   9. Owner Mode Authentication & Management
   ========================================================================== */
function initOwnerMode() {
  const isOwner = localStorage.getItem('ios_portfolio_owner_mode') === 'true';
  toggleOwnerMode(isOwner, false);
}

window.openOwnerLoginModal = function() {
  const modal = document.getElementById('owner-login-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    const input = document.getElementById('owner-passcode-input');
    if (input) {
      input.value = '';
      input.focus();
    }
    const err = document.getElementById('owner-login-error');
    if (err) err.classList.add('hidden');
    if (window.lucide) lucide.createIcons();
  }
};

window.closeOwnerLoginModal = function() {
  const modal = document.getElementById('owner-login-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
};

window.handleOwnerLogin = function(e) {
  e.preventDefault();
  const input = document.getElementById('owner-passcode-input');
  const err = document.getElementById('owner-login-error');
  if (!input) return;

  if (input.value.trim() === 'admin' || input.value.trim() === '1234') {
    toggleOwnerMode(true, true);
    closeOwnerLoginModal();
    showToast('Mode Owner Berhasil Diaktifkan! ', 'success');
  } else {
    if (err) err.classList.remove('hidden');
  }
};

window.toggleOwnerMode = function(enable, save = true) {
  const indicator = document.getElementById('owner-mode-indicator');
  if (enable) {
    document.body.classList.add('is-owner-mode');
    if (indicator) indicator.classList.remove('hidden');
    if (save) localStorage.setItem('ios_portfolio_owner_mode', 'true');
  } else {
    document.body.classList.remove('is-owner-mode');
    if (indicator) indicator.classList.add('hidden');
    if (save) {
      localStorage.removeItem('ios_portfolio_owner_mode');
      showToast('Mode Owner dinonaktifkan.', 'success');
    }
  }
  if (window.lucide) lucide.createIcons();
};

// Global Escape Key Listener for Modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeLiveUploader();
    closeOwnerLoginModal();
  }
});


(() => {
  const FRAME_COUNT = 120;
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const loader = document.getElementById('loader');
  const loaderProgress = document.getElementById('loader-progress');
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  // ==========================================================================
  // Bilingual Translation Dictionary (EN & TR)
  // ==========================================================================
  const translations = {
    en: {
      status_available: "Available for Opportunities",
      nav_home: "Home",
      nav_projects: "Projects",
      nav_about: "About",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_contact: "Contact",
      btn_get_in_touch: "Get in Touch",
      hero_badge: "Customer Support & Technical Operations Specialist",
      hero_tagline: "Bridging deep technical knowledge with exceptional customer experiences. Specializing in hardware/software support, multi-tier ticketing, and modern web technologies.",
      btn_contact_me: "Contact Me",
      btn_view_experience: "View Experience",
      social_connect: "Connect:",
      stat1_title: "Years Experience",
      stat1_sub: "Tech Support & Ops",
      stat2_title: "Piri Reis GPA",
      stat2_sub: "Computer Programming",
      stat3_title: "Multilingual",
      stat3_sub: "Fluent Technical Support",
      stat4_title: "SLA Compliance",
      stat4_sub: "Resolution Efficiency",
      about_tag: "About Me",
      about_title: "Passionate About Solving Complex Technical Challenges",
      about_lead: "Hello! I am <strong>Mert Karaca</strong>, a versatile Technical Support & Operations Specialist with a solid academic foundation in <strong>Computer Programming from Piri Reis University</strong>.",
      about_p1: "Over the past 5+ years, I have honed my expertise working with global enterprise organizations such as <strong>Teleperformance</strong> and <strong>Conduent</strong>, diagnosing intricate hardware/software anomalies, managing omnichannel ticketing queues, and ensuring high customer satisfaction.",
      about_p2: "With a background in software development (C#, ASP.NET, JavaScript, SQL), I serve as the ideal bridge between technical engineering teams, product stakeholders, and end-users.",
      pillar1_title: "Technical Problem Solving",
      pillar1_desc: "In-depth root cause analysis for hardware, OS, networking, and software applications.",
      pillar2_title: "Multilingual Support (EN / TR)",
      pillar2_desc: "Fluent verbal and written communication in English & Turkish for international enterprise clients.",
      pillar3_title: "Software & Web Background",
      pillar3_desc: "Applied understanding of modern web architectures, API lifecycles, and database structures.",
      skills_tag: "Skills & Competencies",
      skills_title: "Core Technical & Professional Expertise",
      skills_desc: "A comprehensive blend of technical troubleshooting, software development, and customer operations.",
      skill_cat1_title: "Technical Support",
      skill_cat1_sub: "Diagnostics & Infrastructure",
      skill1_1: "Hardware & Software Troubleshooting",
      skill1_2: "Ticketing Systems (Jira, ServiceNow, Zendesk)",
      skill1_3: "Mobile, Tablet & IoT Device Support",
      skill1_4: "Remote Desktop & Diagnostics Tools",
      skill1_5: "Call Center & Multi-Tier Support Ops",
      skill1_6: "SLA Management & Incident Escalation",
      skill_cat2_title: "Web & Programming",
      skill_cat2_sub: "Code, Platforms & Databases",
      skill2_1: "C# and Object-Oriented Programming",
      skill2_2: "ASP.NET Framework & Web Architecture",
      skill2_3: "JavaScript (ES6+), DOM & Async Logic",
      skill2_4: "HTML5, Modern CSS3 & Responsive UI",
      skill2_5: "Web Maintenance, Hosting & Deployment",
      skill2_6: "Relational Databases & SQL Queries",
      skill_cat3_title: "Soft Skills & Ops",
      skill_cat3_sub: "Communication & Relations",
      skill3_1: "Customer Relationship Management (CRM)",
      skill3_2: "Fluent English Communication & Reporting",
      skill3_3: "Active Listening & De-escalation",
      skill3_4: "Analytical Thinking & Problem Solving",
      skill3_5: "Cross-Functional Team Collaboration",
      skill3_6: "Process Documentation & Knowledge Base",
      exp_tag: "Career History",
      exp_title: "Work Experience",
      exp_desc: "A track record of delivering technical excellence and customer satisfaction.",
      exp1_role: "Technical Support Specialist",
      work_remote: "Remote",
      exp1_period: "Nov 2024 — Present",
      exp1_desc: "Delivering high-quality remote technical support and resolving complex customer issues efficiently. Analyzing software, hardware, and account problems while maintaining strict SLA metrics and high CSAT ratings.",
      tag_remote_support: "Remote Support",
      tag_incident_res: "Incident Resolution",
      tag_ticketing: "Ticketing Systems",
      tag_cust_advocacy: "Customer Advocacy",
      exp2_role: "Sales & Operations Support",
      work_onsite: "On-site",
      exp2_period: "Aug 2023 — Present",
      exp2_desc: "Managing end-to-end customer support operations, market analysis, and sales execution. Coordinating order pipelines, managing client queries, and ensuring operational synchronization across fulfillment teams.",
      tag_ops_management: "Operations Management",
      tag_market_analysis: "Market Analysis",
      tag_crm: "CRM Systems",
      tag_client_rel: "Client Relations",
      exp3_role: "Web & Technical Specialist",
      exp3_period: "Sep 2020 — Jul 2023",
      exp3_desc: "Managed the organization's web platform, improved user experience, and maintained web systems. Handled content updates, system troubleshooting, platform reliability, and technical customer inquiries.",
      tag_web_maint: "Web Maintenance",
      tag_ui_ux: "UI/UX Optimization",
      tag_platform_admin: "Platform Administration",
      exp4_role: "Technical Support Specialist",
      exp4_period: "Sep 2017 — Oct 2018",
      exp4_desc: "Provided English-language hardware and software support for smartphones, tablets, and electronic devices. Guided international consumers through troubleshooting protocols and escalated hardware repairs.",
      tag_hw_troubleshoot: "Hardware Troubleshooting",
      tag_mobile_support: "Mobile & Tablet Support",
      tag_en_support: "English Support (EN)",
      tag_diagnostics: "Technical Diagnostics",
      edu_tag: "Academic Background",
      edu_title: "Education & Qualifications",
      edu_degree: "Associate Degree in Computer Programming",
      edu_school: "Piri Reis University",
      gpa_label: "Graduation GPA",
      edu_hl1_title: "Software Development",
      edu_hl1_desc: "Algorithms, Object-Oriented Programming (C#), web development lifecycles, and software architecture.",
      edu_hl2_title: "Database Management",
      edu_hl2_desc: "Relational Database Design (RDBMS), SQL query optimization, table schemas, and data integrity.",
      edu_hl3_title: "Information Systems & Hardware",
      edu_hl3_desc: "Computer hardware architectures, networking fundamentals, operating systems, and system security.",
      contact_tag: "Get in Touch",
      contact_title: "Let's Connect & Work Together",
      contact_desc: "Open for opportunities in Technical Support, Customer Operations, and IT Support roles.",
      contact_info_heading: "Contact Information",
      contact_info_sub: "Feel free to reach out for career opportunities, technical collaborations, or consulting questions.",
      contact_label_email: "Email Address",
      contact_label_location: "Location",
      contact_val_location: "Kocaeli, Türkiye",
      form_label_name: "Your Name",
      form_ph_name: "John Doe",
      form_label_email: "Your Email",
      form_ph_email: "john@example.com",
      form_label_subject: "Subject",
      form_ph_subject: "Role Opportunity / Collaboration",
      form_label_message: "Message",
      form_ph_message: "Hello Mert, I would like to discuss...",
      form_btn_send: "Send Message",
      footer_role: "Customer Support & Technical Operations Specialist",
      btn_back_to_top: "Back to Top",
      footer_copyright: "© 2026 Mert Karaca. All rights reserved.",
      form_sending: "Sending...",
      form_sent: "Message Sent!",
      form_success_msg: "Thank you, your message has been received! Mert will get back to you shortly."
    },
    tr: {
      status_available: "Yeni Fırsatlara Açık",
      nav_home: "Ana Sayfa",
      nav_projects: "Projeler",
      nav_about: "Hakkımda",
      nav_skills: "Yetenekler",
      nav_experience: "Deneyim",
      nav_education: "Eğitim",
      nav_contact: "İletişim",
      btn_get_in_touch: "İletişime Geç",
      hero_badge: "Müşteri Desteği & Teknik Operasyonlar Uzmanı",
      hero_tagline: "Derin teknik bilgi birikimini üstün müşteri deneyimiyle birleştiriyorum. Donanım/yazılım desteği, çok katmanlı biletleme sistemleri ve modern web teknolojilerinde uzmanım.",
      btn_contact_me: "Bana Ulaşın",
      btn_view_experience: "Deneyimleri İncele",
      social_connect: "Bağlantı:",
      stat1_title: "Yıl Deneyim",
      stat1_sub: "Teknik Destek & Ops",
      stat2_title: "Piri Reis Notu",
      stat2_sub: "Bilgisayar Programcılığı",
      stat3_title: "Çok Dilli",
      stat3_sub: "Akıcı Teknik Destek",
      stat4_title: "SLA Uyumu",
      stat4_sub: "Çözüm Verimliliği",
      about_tag: "Hakkımda",
      about_title: "Karmaşık Teknik Sorunları Çözme Tutkusu",
      about_lead: "Merhaba! Ben <strong>Mert Karaca</strong>, <strong>Piri Reis Üniversitesi Bilgisayar Programcılığı</strong> mezunu, çok yönlü bir Teknik Destek ve Operasyon Uzmanıyım.",
      about_p1: "5 yılı aşkın süredir <strong>Teleperformance</strong> ve <strong>Conduent</strong> gibi global ölçekli kurumsal şirketlerde donanım/yazılım sorunlarının teşhisi, çok kanallı biletleme sistemlerinin yönetimi ve müşteri memnuniyetinin en üst düzeyde tutulması alanlarında çalıştım.",
      about_p2: "Yazılım geliştirme altyapım (C#, ASP.NET, JavaScript, SQL) sayesinde teknik mühendislik ekipleri, ürün yöneticileri ve son kullanıcılar arasında güçlü bir iletişim köprüsü kuruyorum.",
      pillar1_title: "Teknik Problem Çözme",
      pillar1_desc: "Donanım, işletim sistemleri, ağ yapıları ve yazılım uygulamalarında kök neden analizi ve çözümleme.",
      pillar2_title: "Çok Dilli Destek (EN / TR)",
      pillar2_desc: "Uluslararası kurumsal müşteriler için Türkçe ve İngilizce dillerinde akıcı sözlü ve yazılı iletişim.",
      pillar3_title: "Yazılım & Web Altyapısı",
      pillar3_desc: "Modern web mimarileri, API yaşam döngüleri ve ilişkisel veritabanı yapıları üzerine pratik hakimiyet.",
      skills_tag: "Yetenekler & Yetkinlikler",
      skills_title: "Temel Teknik ve Profesyonel Uzmanlıklar",
      skills_desc: "Teknik sorun giderme, yazılım geliştirme ve müşteri operasyonlarının kapsamlı bir sentezi.",
      skill_cat1_title: "Teknik Destek",
      skill_cat1_sub: "Tanılama & Altyapı",
      skill1_1: "Donanım & Yazılım Sorun Giderme",
      skill1_2: "Biletleme Sistemleri (Jira, ServiceNow, Zendesk)",
      skill1_3: "Mobil, Tablet & Akıllı Cihaz Desteği",
      skill1_4: "Uzak Masaüstü & Tanılama Araçları",
      skill1_5: "Çağrı Merkezi & Çok Katmanlı Destek",
      skill1_6: "SLA Yönetimi & Olay Eskalasyonu",
      skill_cat2_title: "Web & Programlama",
      skill_cat2_sub: "Kodlama, Platformlar & Veritabanları",
      skill2_1: "C# ve Nesne Yönelimli Programlama",
      skill2_2: "ASP.NET Çatısı & Web Mimarisi",
      skill2_3: "JavaScript (ES6+), DOM & Asenkron Mantık",
      skill2_4: "HTML5, Modern CSS3 & Duyarlı Arayüz",
      skill2_5: "Web Bakımı, Barındırma & Dağıtım",
      skill2_6: "İlişkisel Veritabanları & SQL Sorguları",
      skill_cat3_title: "Sosyal Beceriler & Ops",
      skill_cat3_sub: "İletişim & İlişki Yönetimi",
      skill3_1: "Müşteri İlişkileri Yönetimi (CRM)",
      skill3_2: "Akıcı İngilizce İletişim & Raporlama",
      skill3_3: "Aktif Dinleme & Kriz Çözümü",
      skill3_4: "Analitik Düşünme & Problem Çözme",
      skill3_5: "Fonksiyonlar Arası Takım Çalışması",
      skill3_6: "Süreç Dokümantasyonu & Bilgi Bankası",
      exp_tag: "Kariyer Geçmişi",
      exp_title: "İş Deneyimi",
      exp_desc: "Teknik mükemmeliyet ve müşteri memnuniyeti sağlama konusunda kanıtlanmış başarılar.",
      exp1_role: "Teknik Destek Uzmanı",
      work_remote: "Uzaktan",
      exp1_period: "Kas 2024 — Günümüz",
      exp1_desc: "Kullanıcılara yüksek kalitede uzaktan teknik destek sağlamak ve karmaşık sorunları verimli şekilde çözmek. Katı SLA ve yüksek CSAT standartlarını koruyarak yazılım, donanım ve hesap problemlerini yönetmek.",
      tag_remote_support: "Uzaktan Destek",
      tag_incident_res: "Olay Çözümü",
      tag_ticketing: "Biletleme Sistemleri",
      tag_cust_advocacy: "Müşteri Memnuniyeti",
      exp2_role: "Satış & Operasyon Desteği",
      work_onsite: "Ofis",
      exp2_period: "Ağu 2023 — Günümüz",
      exp2_desc: "Uçtan uca müşteri destek operasyonlarını, pazar analizini ve satış süreçlerini yönetmek. Sipariş akışlarını koordine etmek ve operasyonel entegrasyonu sağlamak.",
      tag_ops_management: "Operasyon Yönetimi",
      tag_market_analysis: "Pazar Analizi",
      tag_crm: "CRM Sistemleri",
      tag_client_rel: "Müşteri İlişkileri",
      exp3_role: "Web & Teknik Destek Uzmanı",
      exp3_period: "Eyl 2020 — Tem 2023",
      exp3_desc: "Kuruluşun web platformunu yönetmek, kullanıcı deneyimini iyileştirmek ve web sistemlerinin sürekliliğini sağlamak. İçerik güncellemeleri ve teknik müşteri taleplerini yürütmek.",
      tag_web_maint: "Web Bakımı",
      tag_ui_ux: "UI/UX Optimizasyonu",
      tag_platform_admin: "Platform Yönetimi",
      exp4_role: "Teknik Destek Uzmanı",
      exp4_period: "Eyl 2017 — Eki 2018",
      exp4_desc: "Akıllı telefon, tablet ve elektronik cihazlar için İngilizce donanım ve yazılım desteği sunmak. Uluslararası kullanıcıları sorun giderme adımlarında yönlendirmek ve onarım süreçlerini koordine etmek.",
      tag_hw_troubleshoot: "Donanım Sorun Giderme",
      tag_mobile_support: "Mobil & Tablet Desteği",
      tag_en_support: "İngilizce Destek (EN)",
      tag_diagnostics: "Teknik Tanılama",
      edu_tag: "Akademik Geçmiş",
      edu_title: "Eğitim & Nitelikler",
      edu_degree: "Bilgisayar Programcılığı Ön Lisans",
      edu_school: "Piri Reis Üniversitesi",
      gpa_label: "Mezuniyet Not Ortalaması",
      edu_hl1_title: "Yazılım Geliştirme",
      edu_hl1_desc: "Algoritmalar, Nesne Yönelimli Programlama (C#), web geliştirme yaşam döngüleri ve yazılım mimarisi.",
      edu_hl2_title: "Veritabanı Yönetimi",
      edu_hl2_desc: "İlişkisel Veritabanı Tasarımı (RDBMS), SQL sorgu optimizasyonu, tablo şemaları ve veri bütünlüğü.",
      edu_hl3_title: "Bilgi Sistemleri & Donanım",
      edu_hl3_desc: "Bilgisayar donanım mimarileri, ağ temelleri, işletim sistemleri ve sistem güvenliği prensipleri.",
      contact_tag: "İletişime Geçin",
      contact_title: "Birlikte Çalışalım & Bağlantı Kurun",
      contact_desc: "Teknik Destek, Müşteri Operasyonları ve IT Destek pozisyonları için yeni fırsatlara açığım.",
      contact_info_heading: "İletişim Bilgileri",
      contact_info_sub: "Kariyer fırsatları, teknik iş birlikleri veya danışmanlık talepleriniz için dilediğiniz zaman ulaşabilirsiniz.",
      contact_label_email: "E-posta Adresi",
      contact_label_location: "Konum",
      contact_val_location: "Kocaeli, Türkiye",
      form_label_name: "Adınız Soyadınız",
      form_ph_name: "Ahmet Yılmaz",
      form_label_email: "E-posta Adresiniz",
      form_ph_email: "ahmet@ornek.com",
      form_label_subject: "Konu",
      form_ph_subject: "İş Fırsatı / İş Birliği",
      form_label_message: "Mesajınız",
      form_ph_message: "Merhaba Mert, sizinle şu konu hakkında görüşmek istiyorum...",
      form_btn_send: "Mesajı Gönder",
      footer_role: "Müşteri Desteği & Teknik Operasyonlar Uzmanı",
      btn_back_to_top: "Yukarı Çık",
      footer_copyright: "© 2026 Mert Karaca. Tüm hakları saklıdır.",
      form_sending: "Gönderiliyor...",
      form_sent: "Mesaj Gönderildi!",
      form_success_msg: "Teşekkürler, mesajınız başarıyla iletildi! Mert en kısa sürede size dönüş yapacaktır."
    }
  };

  let currentLang = localStorage.getItem('portfolio_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    // Update active flag buttons
    document.querySelectorAll('.lang-flag-btn, .lang-btn').forEach((btn) => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const dict = translations[lang] || translations.en;

    // Translate text content & innerHTML
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
  }

  // Setup Flag Language Switcher Click Handlers
  document.querySelectorAll('.lang-flag-btn, .lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // Apply default language on initial load
  applyLanguage(currentLang);

  // ==========================================================================
  // Frame Sequence & Canvas Smooth Lerp Engine
  // ==========================================================================
  const getFrameSrc = (index) => `frames/frame_${index}.jpg`;
  const images = new Array(FRAME_COUNT + 1);
  let loadedCount = 0;
  let currentDrawnIndex = -1;
  let targetProgress = 0;
  let currentProgress = 0;
  const LERP_FACTOR = 0.12;

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    currentDrawnIndex = -1;
    drawFrame(getFrameIndex(currentProgress));
  }

  window.addEventListener('resize', resizeCanvas, { passive: true });

  function getFrameIndex(progress) {
    const clamped = Math.max(0, Math.min(1, progress));
    return Math.min(FRAME_COUNT, Math.max(1, Math.round(clamped * (FRAME_COUNT - 1)) + 1));
  }

  function drawFrame(index) {
    let img = images[index];
    let isExact = true;

    if (!img || !img.complete || img.naturalWidth === 0) {
      isExact = false;
      for (let offset = 1; offset < FRAME_COUNT; offset++) {
        if (index - offset >= 1 && images[index - offset]?.complete && images[index - offset].naturalWidth > 0) {
          img = images[index - offset];
          break;
        }
        if (index + offset <= FRAME_COUNT && images[index + offset]?.complete && images[index + offset].naturalWidth > 0) {
          img = images[index + offset];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const renderW = iw * scale;
    const renderH = ih * scale;
    const renderX = (cw - renderW) / 2;
    const renderY = (ch - renderH) / 2;

    ctx.fillStyle = '#070a12';
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, renderX, renderY, renderW, renderH);

    if (isExact) {
      currentDrawnIndex = index;
    }
  }

  function getScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    const maxScroll = scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return 0;
    return Math.min(1, Math.max(0, scrollTop / maxScroll));
  }

  function preloadImages() {
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      images[i] = img;

      img.onload = () => {
        loadedCount++;
        if (loaderProgress) {
          loaderProgress.style.width = `${(loadedCount / FRAME_COUNT) * 100}%`;
        }

        const currentIdx = getFrameIndex(currentProgress);
        if (i === currentIdx || currentDrawnIndex === -1) {
          drawFrame(currentIdx);
        }

        if (loadedCount === FRAME_COUNT && loader) {
          loader.classList.add('loaded');
        }
      };

      img.onerror = () => {
        loadedCount++;
      };
    }
  }

  function renderLoop() {
    targetProgress = getScrollProgress();
    const diff = targetProgress - currentProgress;

    if (Math.abs(diff) > 0.00001) {
      currentProgress += diff * LERP_FACTOR;
    } else {
      currentProgress = targetProgress;
    }

    const frameIndex = getFrameIndex(currentProgress);
    if (frameIndex !== currentDrawnIndex) {
      drawFrame(frameIndex);
    }

    requestAnimationFrame(renderLoop);
  }

  // ==========================================================================
  // Scroll Spy & Navigation
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');

  function handleScrollEffects() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      allNavLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScrollEffects, { passive: true });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.classList.toggle('is-active', isOpen);
    });

    allNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('is-active');
      });
    });

    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('is-active');
      }
    });
  }

  // ==========================================================================
  // Contact Form Submission Handling
  // ==========================================================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const dict = translations[currentLang] || translations.en;
      const submitBtn = document.getElementById('submit-btn');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>${dict.form_sending}</span>`;
      }

      setTimeout(() => {
        if (formFeedback) {
          formFeedback.className = 'form-feedback success';
          formFeedback.textContent = dict.form_success_msg;
        }
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>${dict.form_sent}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          `;
          setTimeout(() => {
            submitBtn.innerHTML = `
              <span>${dict.form_btn_send}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            `;
          }, 4000);
        }
      }, 800);
    });
  }

  // Initialize
  resizeCanvas();
  preloadImages();
  requestAnimationFrame(renderLoop);
})();

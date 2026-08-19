(() => {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  // ==========================================================================
  // Bilingual Translation Dictionary (Shared + Projects-page keys)
  // ==========================================================================
  const translations = {
    en: {
      status_available: "Available for Opportunities",
      nav_home: "Home", nav_about: "About", nav_skills: "Skills",
      nav_experience: "Experience", nav_education: "Education",
      nav_projects: "Projects", nav_contact: "Contact",
      btn_get_in_touch: "Get in Touch",
      // Projects Hero
      proj_hero_badge: "Featured Codebases & Software Portfolio",
      proj_hero_title_1: "Engineered for",
      proj_hero_title_2: "Security & Performance",
      proj_hero_desc: "A curated showcase of open-source cybersecurity assessments, cryptographic utilities, international trade platforms, and desktop software simulations developed by Mert Karaca.",
      stat_repos: "GitHub Repos",
      stat_focus1: "CTF & Cryptography",
      stat_focus2: "Windows Form Apps",
      stat_focus3: "HTML5, CSS, JS, PHP",
      // Section Headers
      sec_tag_1: "Cybersecurity & Cryptography",
      sec_title_1: "Vulnerability Research & Encryption Tools",
      sec_desc_1: "Proactive threat analysis, penetration testing assessments, and mathematically unbreakable encryption algorithms.",
      sec_tag_2: "Web Platforms & Trade Systems",
      sec_title_2: "International Trade & Digital Platforms",
      sec_desc_2: "End-to-end web applications built for international trade commerce, manufacturing branding, and user conversion.",
      sec_tag_3: "Software Applications & Simulations",
      sec_title_3: "C# & Android Software Systems",
      sec_desc_3: "Object-oriented desktop applications, dynamic logic simulations, and mobile chronometer apps.",
      // Project Summaries
      proj1_summary: "A comprehensive, technical security analysis and audit detailing findings from a Capture The Flag (CTF) offensive security event. Includes vulnerability identification, exploit methodology, risk evaluation, and step-by-step mitigation suggestions.",
      proj1_kp1: "Vulnerability assessment & adversarial vector mapping",
      proj1_kp2: "Proof of Concept exploit demonstrations & risk scoring",
      proj1_kp3: "Actionable defense hardening and mitigation guidelines",
      proj2_summary: "A Windows desktop cryptography application implementing the mathematically unbreakable One-Time Pad (OTP) encryption scheme. Demonstrates secure key generation, character-by-character ciphering, and error-resilient decryption protocols.",
      proj2_kp1: "Perfect secrecy encryption model with unique key generation",
      proj2_kp2: "Fast byte-level XOR encryption and decryption algorithms",
      proj2_kp3: "Clean Windows desktop UI built in C# with instant validation",
      proj3_summary: "A comprehensive export trade platform facilitating commerce between Turkey and African nations for consumable products (hygiene supplies, paper items, packaging). Engineered with modern web standards, Cloudflare Pages hosting, and security hardening.",
      proj3_kp1: "B2B product catalog and international inquiry pipeline",
      proj3_kp2: "Deployed on Cloudflare Pages with global edge CDN acceleration",
      proj3_kp3: "Security audit and vulnerability fixes for resilient uptime",
      proj4_summary: "Official corporate web platform for laser cutting and advertising operations. Built with pure modular JavaScript and responsive CSS3, providing a modern showcase for industrial manufacturing capabilities.",
      proj4_kp1: "Interactive product portfolio and dynamic layout animations",
      proj4_kp2: "Optimized for fast mobile performance and search engine indexing",
      proj4_kp3: "Clean open-source repository architecture",
      proj5_summary: "A dynamic desktop simulation application developed with C# Windows Forms. Implements object-oriented programming principles to model race physics, randomized competitor velocity, real-time lead tracking, and animated finish line detection.",
      proj5_kp1: "Multi-threaded timer loops & real-time coordinate rendering",
      proj5_kp2: "Dynamic state calculations and winner determination logic",
      proj5_kp3: "Interactive controls for resets, race speed, and betting simulation",
      proj6_summary: "A mobile chronometer application built for Piri Reis University's Mobile Programming course. Features a clean stopwatch UI with start, pause, and reset controls — developed in Java for Android with a downloadable APK.",
      proj6_kp1: "Native Android application with intuitive timer controls",
      proj6_kp2: "Pause/resume functionality and styled button themes",
      proj6_kp3: "APK available for direct download and installation",
      btn_view_github: "View on GitHub",
      btn_download_apk: "Download APK",
      footer_role: "Customer Support & Technical Operations Specialist",
      btn_back_to_top: "Back to Top",
      footer_copyright: "© 2026 Mert Karaca. All rights reserved.",
      footer_tagline: "Designed with Smooth Scroll & Modern Web Stack"
    },
    tr: {
      status_available: "Yeni Fırsatlara Açık",
      nav_home: "Ana Sayfa", nav_about: "Hakkımda", nav_skills: "Yetenekler",
      nav_experience: "Deneyim", nav_education: "Eğitim",
      nav_projects: "Projeler", nav_contact: "İletişim",
      btn_get_in_touch: "İletişime Geç",
      // Projects Hero
      proj_hero_badge: "Öne Çıkan Kod Tabanları & Yazılım Portföyü",
      proj_hero_title_1: "Güvenlik ve",
      proj_hero_title_2: "Performans İçin Tasarlandı",
      proj_hero_desc: "Mert Karaca tarafından geliştirilen açık kaynaklı siber güvenlik değerlendirmeleri, kriptografik araçlar, uluslararası ticaret platformları ve masaüstü yazılım simülasyonlarının seçilmiş bir vitrini.",
      stat_repos: "GitHub Deposu",
      stat_focus1: "CTF & Kriptografi",
      stat_focus2: "Windows Form Uygulamaları",
      stat_focus3: "HTML5, CSS, JS, PHP",
      // Section Headers
      sec_tag_1: "Siber Güvenlik & Kriptografi",
      sec_title_1: "Zafiyet Araştırması & Şifreleme Araçları",
      sec_desc_1: "Proaktif tehdit analizi, sızma testi değerlendirmeleri ve matematiksel olarak kırılamaz şifreleme algoritmaları.",
      sec_tag_2: "Web Platformları & Ticaret Sistemleri",
      sec_title_2: "Uluslararası Ticaret & Dijital Platformlar",
      sec_desc_2: "Uluslararası ticaret, üretim markalaşması ve kullanıcı dönüşümü için geliştirilen uçtan uca web uygulamaları.",
      sec_tag_3: "Yazılım Uygulamaları & Simülasyonlar",
      sec_title_3: "C# & Android Yazılım Sistemleri",
      sec_desc_3: "Nesne yönelimli masaüstü uygulamaları, dinamik mantık simülasyonları ve mobil kronometre uygulamaları.",
      // Project Summaries
      proj1_summary: "Capture The Flag (CTF) saldırı güvenliği etkinliğinden elde edilen bulguları ayrıntılandıran kapsamlı ve teknik bir güvenlik analizi. Zafiyet tespiti, exploit metodolojisi, risk değerlendirmesi ve adım adım azaltma önerileri içerir.",
      proj1_kp1: "Zafiyet değerlendirmesi ve saldırı vektörü haritalama",
      proj1_kp2: "Kavram kanıtı exploit gösterimleri ve risk puanlaması",
      proj1_kp3: "Eyleme geçirilebilir güvenlik sertleştirme ve azaltma yönergeleri",
      proj2_summary: "Matematiksel olarak kırılamaz Tek Kullanımlık Şifreleme (OTP) şemasını uygulayan bir Windows masaüstü kriptografi uygulaması. Güvenli anahtar üretimi, karakter bazlı şifreleme ve güvenilir çözme protokolleri gösterilmektedir.",
      proj2_kp1: "Benzersiz anahtar üretimi ile mükemmel gizlilik şifreleme modeli",
      proj2_kp2: "Hızlı bayt düzeyinde XOR şifreleme ve çözme algoritmaları",
      proj2_kp3: "Anlık doğrulama ile C# üzerine inşa edilmiş temiz Windows masaüstü arayüzü",
      proj3_summary: "Türkiye ve Afrika ülkeleri arasında sarf ürünleri (temizlik malzemeleri, kağıt ürünler, ambalaj) ticaretini kolaylaştıran kapsamlı bir ihracat platformu. Modern web standartları, Cloudflare Pages barındırma ve güvenlik sertleştirme ile geliştirilmiştir.",
      proj3_kp1: "B2B ürün kataloğu ve uluslararası talep hattı",
      proj3_kp2: "Küresel edge CDN hızlandırmalı Cloudflare Pages üzerinde yayınlandı",
      proj3_kp3: "Güvenlik denetimi ve zafiyet düzeltmeleri ile kesintisiz çalışma süresi",
      proj4_summary: "Lazer kesim ve reklam operasyonları için resmi kurumsal web platformu. Saf modüler JavaScript ve duyarlı CSS3 ile inşa edilmiş, endüstriyel üretim yeteneklerini sergileyen modern bir vitrin.",
      proj4_kp1: "İnteraktif ürün portföyü ve dinamik düzen animasyonları",
      proj4_kp2: "Hızlı mobil performans ve arama motoru endeksleme için optimize edildi",
      proj4_kp3: "Temiz açık kaynak depo mimarisi",
      proj5_summary: "C# Windows Forms ile geliştirilmiş dinamik bir masaüstü simülasyon uygulaması. Yarış fiziğini, rastgele yarışmacı hızını, gerçek zamanlı önde gitme takibini ve animasyonlu bitiş çizgisi tespitini modellemek için nesne yönelimli programlama ilkelerini uygular.",
      proj5_kp1: "Çok iş parçacıklı zamanlayıcı döngüleri ve gerçek zamanlı koordinat oluşturma",
      proj5_kp2: "Dinamik durum hesaplamaları ve kazanan belirleme mantığı",
      proj5_kp3: "Sıfırlama, yarış hızı ve bahis simülasyonu için etkileşimli kontroller",
      proj6_summary: "Piri Reis Üniversitesi Mobil Programlama dersi için geliştirilen bir Android kronometre uygulaması. Başlat, duraklat ve sıfırla kontrollerine sahip sade bir kronometre arayüzü sunar; Java ile Android'e yönelik geliştirilmiş ve indirilebilir APK dosyası mevcuttur.",
      proj6_kp1: "Sezgisel zamanlayıcı kontrollerine sahip yerel Android uygulaması",
      proj6_kp2: "Duraklat/devam et işlevi ve stil uygulanmış buton temaları",
      proj6_kp3: "Doğrudan indirme ve kurulum için APK mevcut",
      btn_view_github: "GitHub'da Görüntüle",
      btn_download_apk: "APK İndir",
      footer_role: "Müşteri Desteği & Teknik Operasyonlar Uzmanı",
      btn_back_to_top: "Yukarı Çık",
      footer_copyright: "© 2026 Mert Karaca. Tüm hakları saklıdır.",
      footer_tagline: "Smooth Scroll & Modern Web Teknolojileri ile Tasarlandı"
    }
  };

  let currentLang = localStorage.getItem('portfolio_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    document.querySelectorAll('.lang-flag-btn, .lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    const dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
  }

  document.querySelectorAll('.lang-flag-btn, .lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });

  applyLanguage(currentLang);

  // ==========================================================================
  // Navbar scroll state
  // ==========================================================================
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // ==========================================================================
  // Intersection Observer — fade-in card animations
  // ==========================================================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.project-featured-card, .proj-stat-pill, .projects-stats-row').forEach((el) => {
    el.classList.add('fade-reveal');
    observer.observe(el);
  });

  // ==========================================================================
  // Racing animation loop for horse race banner
  // ==========================================================================
  const bars = document.querySelectorAll('.track-bar');
  if (bars.length) {
    const positions = [0, 0, 0];
    const speeds = [0, 0, 0];
    let animating = true;

    function randomizeRace() {
      positions.forEach((_, i) => { positions[i] = 0; speeds[i] = 0; });
      speeds.forEach((_, i) => { speeds[i] = 15 + Math.random() * 40; });
    }

    function updateRaceBars() {
      if (!animating) return;
      positions.forEach((p, i) => {
        positions[i] = Math.min(100, positions[i] + (speeds[i] / 300));
        if (bars[i]) bars[i].style.width = `${positions[i]}%`;
      });
      if (positions.every(p => p >= 100)) {
        setTimeout(() => { randomizeRace(); }, 1500);
      }
      requestAnimationFrame(updateRaceBars);
    }

    randomizeRace();
    setTimeout(updateRaceBars, 400);
  }
})();

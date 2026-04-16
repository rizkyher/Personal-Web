<script>
  import Icon from '@iconify/svelte';

  const projects = [
    {
      title: "INISIASI",
      desc: "Sistem Manajemen Edukasi komprehensif yang mencakup modul tahun akademik, profil siswa, hingga tracking hafalan.",
      tag: "EdTech System",
      year: "2026",
      icon: "ph:student-duotone",
      accent: "#1a365d", /* Navy Gelap */
      tech: ["Svelte 5", "Laravel", "Tailwind"],
      link: "https://inisiasi.sekolahimpian.com/"
    },
    {
      title: "Khwarizmi",
      desc: "Platform edukasi vokasi untuk IT dan desain digital, dilengkapi dengan sistem rekrutmen magang terintegrasi.",
      tag: "E-Learning",
      year: "2026",
      icon: "ph:code-block-duotone",
      accent: "#2c4a7c", /* Navy Terang sedikit */
      tech: ["HTML", "Tailwind", "JavaScript"],
      link: "https://khwarizmi.co.id/"
    },
    {
      title: "Mayuppi",
      desc: "Website profil dan sistem informasi sekolah dengan antarmuka yang bersih, minimalis, dan sangat responsif di perangkat mobile.",
      tag: "School CMS",
      year: "2025",
      icon: "ph:buildings-duotone",
      accent: "#1e3a8a", /* Royal Navy */
      tech: ["HTML", "JavaScript", "Tailwind"],
      link: "https://mayuppi.sch.id/"
    },
    {
      title: "Portal SI",
      desc: "Portal sistem informasi terpadu dengan dashboard performa tinggi untuk manajemen data dan operasional harian.",
      tag: "Web Portal",
      year: "2025",
      icon: "ph:globe-hemisphere-west-duotone",
      accent: "#0f172a", /* Slate Dark */
      tech: ["Laravel", "Tailwind", "MySQL", "Flutter"],
      link: "https://portalsi.com/"
    },
  ];
</script>

<section id="portfolio" class="portfolio-section">
  <div class="portfolio-inner">
    
    <div class="section-header reveal">
      <p class="eyebrow">— Selected Works</p>
      <div class="header-row">
        <h2 class="section-title">Proyek <em>Pilihan.</em></h2>
        <p class="header-desc">
          Kumpulan karya terbaik yang menggabungkan desain elegan dengan arsitektur kode yang tangguh.
        </p>
      </div>
    </div>

    <div class="cards-stack">
      {#each projects as project, i}
        <div class="sticky-wrapper" style="top: calc(100px + {i * 25}px); z-index: {i + 1};">
          <article class="modern-card" style="background: {project.accent};">
            
            <div class="card-content">
              <div class="card-meta">
                <span class="card-num">0{i + 1}</span>
                <span class="card-year">— {project.year}</span>
                <span class="card-tag">{project.tag}</span>
              </div>
              
              <h3 class="card-title">{project.title}</h3>
              <p class="card-desc">{project.desc}</p>

              <div class="tech-row">
                {#each project.tech as t}
                  <span class="tech-pill">{t}</span>
                {/each}
              </div>

              <a href={project.link} target="_blank" rel="noopener" class="btn-visit">
                <span>Kunjungi Website</span>
                <div class="icon-circle">
                  <Icon icon="ph:arrow-up-right-bold" width="16" height="16" />
                </div>
              </a>
            </div>

            <div class="card-visual">
              <div class="visual-bg-glow"></div>
              <div class="visual-glass-box">
                <Icon icon={project.icon} class="main-icon" />
              </div>
              <Icon icon={project.icon} class="watermark-icon" />
            </div>

          </article>
        </div>
      {/each}
    </div>

  </div>
</section>

<style>
  .portfolio-section {
    padding: 8rem 10%;
    background: var(--cream);
    position: relative;
  }
  .portfolio-inner { max-width: 1100px; margin: 0 auto; }

  .section-header { margin-bottom: 5rem; }
  .eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--gold);
    margin-bottom: 1rem;
  }
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
  }
  .section-title { margin-bottom: 0; }
  .header-desc {
    max-width: 400px;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-muted);
  }

  /* ── Stacking UX Logic ── */
  .cards-stack {
    display: flex;
    flex-direction: column;
    gap: 5rem; /* Jarak scroll antar kartu */
    padding-bottom: 4rem; /* Ruang lebih di bawah agar kartu terakhir bisa di-scroll utuh */
  }

  .sticky-wrapper {
    position: sticky;
    /* top diatur dinamis di Svelte template */
  }

  /* ── Premium Card Design ── */
  .modern-card {
    display: flex;
    min-height: 460px;
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 -15px 40px rgba(8, 32, 82, 0.05), 0 30px 60px rgba(8, 32, 82, 0.15);
    overflow: hidden;
    color: var(--cream-light); /* Semua teks di dalam card jadi terang */
    transform-origin: top center;
    transition: transform 0.4s var(--ease);
  }

  /* Konten Kiri */
  .card-content {
    flex: 1;
    padding: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
  }
  
  .card-meta {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .card-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--gold);
  }
  .card-year, .card-tag {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.6);
  }

  .card-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.2rem;
    color: #ffffff;
  }
  .card-desc {
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.75);
    max-width: 480px;
    margin-bottom: 2.5rem;
  }

  /* Tech Pills Glassmorphism */
  .tech-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 3rem;
  }
  .tech-pill {
    padding: 0.4rem 1.2rem;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.9);
  }

  /* Hover Button Elite */
  .btn-visit {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    align-self: flex-start;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    border-radius: 50px;
    transition: all 0.3s var(--ease);
  }
  .btn-visit span {
    font-size: 0.85rem;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--gold);
    color: var(--navy);
    border-radius: 50%;
    transition: transform 0.3s var(--ease);
  }
  .btn-visit:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }
  .btn-visit:hover .icon-circle { transform: scale(1.1) rotate(45deg); }

  /* ── Visual Kanan ── */
  .card-visual {
    width: 45%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    overflow: hidden;
  }
  .visual-bg-glow {
    position: absolute;
    width: 200px;
    height: 200px;
    background: var(--gold);
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.15;
    z-index: 1;
  }
  .visual-glass-box {
    position: relative;
    z-index: 2;
    width: 140px;
    height: 140px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,255,255,0.05);
  }
  .visual-glass-box :global(.main-icon) {
    font-size: 64px;
    color: var(--gold);
  }
  .card-visual :global(.watermark-icon) {
    position: absolute;
    right: -10%;
    bottom: -15%;
    font-size: 400px;
    color: rgba(255, 255, 255, 0.03);
    z-index: 0;
    transform: rotate(-15deg);
  }

  /* ── Responsive Mobile ── */
  @media (max-width: 900px) {
    .header-row { flex-direction: column; align-items: flex-start; gap: 1rem; }
    .header-desc { max-width: 100%; }
    
    .modern-card { flex-direction: column; height: auto; }
    .card-visual { width: 100%; padding: 4rem 0; border-left: none; border-bottom: 1px solid rgba(255,255,255,0.05); order: -1; } /* Gambar pindah ke atas di mobile */
    .card-content { padding: 3rem 2rem; }
    
    .cards-stack { gap: 3rem; }
    /* Mengurangi jarak tumpuk top di mobile agar tidak memakan ruang atas terlalu banyak */
    .sticky-wrapper { top: calc(80px + var(--mobile-offset, 0px)) !important; }
    .sticky-wrapper:nth-child(1) { --mobile-offset: 0px; }
    .sticky-wrapper:nth-child(2) { --mobile-offset: 15px; }
    .sticky-wrapper:nth-child(3) { --mobile-offset: 30px; }
    .sticky-wrapper:nth-child(4) { --mobile-offset: 45px; }
  }
</style>
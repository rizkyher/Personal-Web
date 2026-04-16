<script>
  import Icon from '@iconify/svelte';

  const projects = [
    {
      title: "INISIASI",
      desc: "Sistem Manajemen Edukasi komprehensif yang mencakup modul tahun akademik, profil siswa, hingga tracking hafalan.",
      tag: "EdTech System", year: "2026",
      icon: "ph:student-duotone", accent: "#1a365d",
      tech: ["Svelte 5", "Laravel", "Tailwind"],
      link: "https://inisiasi.sekolahimpian.com/"
    },
    {
      title: "Khwarizmi",
      desc: "Platform edukasi vokasi untuk IT dan desain digital, dilengkapi dengan sistem rekrutmen magang terintegrasi.",
      tag: "E-Learning", year: "2026",
      icon: "ph:code-block-duotone", accent: "#2c4a7c",
      tech: ["HTML", "Tailwind", "JavaScript"],
      link: "https://khwarizmi.co.id/"
    },
    {
      title: "Mayuppi",
      desc: "Website profil dan sistem informasi sekolah dengan antarmuka yang bersih, minimalis, dan sangat responsif.",
      tag: "School CMS", year: "2025",
      icon: "ph:buildings-duotone", accent: "#1e3a8a",
      tech: ["HTML", "JavaScript", "Tailwind"],
      link: "https://mayuppi.sch.id/"
    },
    {
      title: "Portal SI",
      desc: "Portal sistem informasi terpadu dengan dashboard performa tinggi untuk manajemen data dan operasional harian.",
      tag: "Web Portal", year: "2025",
      icon: "ph:globe-hemisphere-west-duotone", accent: "#0f172a",
      tech: ["Laravel", "Tailwind", "MySQL", "Flutter"],
      link: "https://portalsi.com/"
    },
  ];
</script>

<section id="portfolio" class="portfolio-section">
  <div class="portfolio-inner">

    <div class="section-header reveal">
      <p class="eyebrow">Selected Works</p>
      <div class="header-row">
        <h2 class="section-title">Proyek <em>Pilihan.</em></h2>
        <p class="header-desc">
          Kumpulan karya terbaik yang menggabungkan desain elegan dengan arsitektur kode yang tangguh.
        </p>
      </div>
    </div>

    <!-- ── Desktop: sticky stacking ── -->
    <div class="cards-stack">
      {#each projects as project, i}
        <div class="sticky-wrapper" style="top:calc(100px + {i * 25}px); z-index:{i + 1}">
          <article class="modern-card" style="background:{project.accent}">
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
                <Icon icon={project.icon} width="64" height="64" class="main-icon" />
              </div>
              <div class="watermark-wrap">
                <Icon icon={project.icon} width="380" height="380" class="watermark-icon" />
              </div>
            </div>
          </article>
        </div>
      {/each}
    </div>

    <!-- ── Mobile: flat scrollable cards ── -->
    <div class="mobile-cards">
      {#each projects as project, i}
        <article class="mc" style="--accent:{project.accent}">
          <!-- Coloured top strip with icon -->
          <div class="mc-head" style="background:{project.accent}">
            <div class="mc-icon-wrap">
              <Icon icon={project.icon} width="34" height="34" class="mc-icon" />
            </div>
            <div class="mc-head-right">
              <span class="mc-num">0{i + 1}</span>
              <span class="mc-year">{project.year}</span>
            </div>
          </div>

          <div class="mc-body">
            <span class="mc-tag">{project.tag}</span>
            <h3 class="mc-title">{project.title}</h3>
            <p class="mc-desc">{project.desc}</p>

            <div class="mc-pills">
              {#each project.tech as t}
                <span class="mc-pill">{t}</span>
              {/each}
            </div>
          </div>

          <div class="mc-foot">
            <a href={project.link} target="_blank" rel="noopener" class="mc-link">
              Kunjungi Website
              <span class="mc-arrow">
                <Icon icon="ph:arrow-up-right-bold" width="13" height="13" />
              </span>
            </a>
          </div>
        </article>
      {/each}
    </div>

  </div>
</section>

<style>
  .portfolio-section { padding: 8rem 10%; background: var(--cream); }
  .portfolio-inner { max-width: 1100px; margin: 0 auto; }

  .section-header { margin-bottom: 5rem; }
  .eyebrow { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: var(--gold); margin-bottom: 1rem; }
  .header-row { display: flex; justify-content: space-between; align-items: flex-end; gap: 2rem; flex-wrap: wrap; }
  .section-title { margin-bottom: 0; }
  .header-desc { max-width: 400px; font-size: 0.95rem; line-height: 1.7; color: var(--text-muted); }

  /* ── Desktop sticky stack ── */
  .mobile-cards { display: none; }
  .cards-stack { display: flex; flex-direction: column; gap: 5rem; padding-bottom: 4rem; }
  .sticky-wrapper { position: sticky; }

  .modern-card {
    display: flex; min-height: 460px; border-radius: 32px;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 -15px 40px rgba(8,32,82,0.05), 0 30px 60px rgba(8,32,82,0.15);
    overflow: hidden; color: var(--cream-light);
  }
  .card-content {
    flex: 1; padding: 4.5rem;
    display: flex; flex-direction: column; justify-content: center;
    position: relative; z-index: 2;
  }
  .card-meta { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; }
  .card-num { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 900; color: var(--gold); }
  .card-year, .card-tag { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.55); }
  .card-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3vw, 3rem); font-weight: 700; line-height: 1.1; margin-bottom: 1.2rem; color: #fff; }
  .card-desc { font-size: 1rem; line-height: 1.7; color: rgba(255,255,255,0.75); max-width: 480px; margin-bottom: 2.5rem; }

  .tech-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 3rem; }
  .tech-pill {
    padding: 0.38rem 1rem; background: rgba(255,255,255,0.07); backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.15); border-radius: var(--r-full);
    font-size: 0.73rem; font-weight: 600; color: rgba(255,255,255,0.88);
  }
  .btn-visit {
    display: inline-flex; align-items: center; gap: 0.9rem; align-self: flex-start;
    text-decoration: none; background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.2); padding: 0.45rem 0.45rem 0.45rem 1.3rem;
    border-radius: var(--r-full); transition: background 0.28s, border-color 0.28s;
    -webkit-tap-highlight-color: transparent;
  }
  .btn-visit span { font-size: 0.82rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 1px; }
  .icon-circle {
    width: 38px; height: 38px; background: var(--gold); color: var(--navy);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    transition: transform 0.28s var(--ease);
  }
  .btn-visit:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.35); }
  .btn-visit:hover .icon-circle { transform: rotate(45deg) scale(1.08); }

  .card-visual {
    width: 42%; position: relative; display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 100%);
    border-left: 1px solid rgba(255,255,255,0.05); overflow: hidden;
  }
  .visual-bg-glow { position: absolute; width: 200px; height: 200px; background: var(--gold); border-radius: 50%; filter: blur(90px); opacity: 0.14; z-index: 1; }
  .visual-glass-box {
    position: relative; z-index: 2; width: 130px; height: 130px;
    background: rgba(255,255,255,0.05); backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.18); border-radius: 28px;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }
  .visual-glass-box :global(.main-icon) { color: var(--gold); }
  .watermark-wrap { position: absolute; right: -12%; bottom: -18%; z-index: 0; opacity: 0.04; transform: rotate(-15deg); }

  /* ── Mobile flat cards ── */
  .mc {
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--r-lg); overflow: hidden;
    display: flex; flex-direction: column;
    transition: transform 0.28s var(--ease), box-shadow 0.28s;
  }
  .mc:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(27,59,111,0.1); }

  .mc-head {
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.3rem 1.4rem;
  }
  .mc-icon-wrap {
    width: 52px; height: 52px; border-radius: var(--r-md);
    background: rgba(255,255,255,0.12); backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
  }
  .mc-icon-wrap :global(.mc-icon) { color: rgba(255,255,255,0.85); }
  .mc-head-right { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }
  .mc-num { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 900; color: var(--gold); line-height: 1; }
  .mc-year { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.4); }

  .mc-body { padding: 1.3rem 1.4rem 0.9rem; flex: 1; }
  .mc-tag { display: inline-block; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gold); margin-bottom: 0.45rem; }
  .mc-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; color: var(--navy); margin-bottom: 0.5rem; line-height: 1.2; }
  .mc-desc { font-size: 0.86rem; line-height: 1.68; color: var(--text-body); margin-bottom: 0.9rem; }

  .mc-pills { display: flex; flex-wrap: wrap; gap: 0.35rem; }
  .mc-pill {
    padding: 0.28rem 0.65rem;
    background: rgba(27,59,111,0.06); border: 1px solid var(--border);
    border-radius: var(--r-full); font-size: 0.68rem; font-weight: 600; color: var(--text-muted);
  }

  .mc-foot {
    padding: 0.85rem 1.4rem 1.3rem;
    border-top: 1px solid var(--border); margin-top: 0.4rem;
  }
  .mc-link {
    display: inline-flex; align-items: center; gap: 0.4rem;
    font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
    color: var(--navy); text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  .mc-arrow {
    width: 26px; height: 26px; background: var(--cream-dark); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.22s, transform 0.22s;
  }
  .mc-link:hover .mc-arrow { background: var(--navy); color: white; transform: rotate(45deg); }

  /* ── Responsive ── */
  @media (max-width: 860px) {
    .portfolio-section { padding: 5.5rem 5%; }
    .cards-stack { display: none; }
    .mobile-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.1rem;
    }
    .section-header { margin-bottom: 3rem; }
    .header-row { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
    .header-desc { max-width: 100%; }
  }

  @media (max-width: 380px) {
    .mobile-cards { grid-template-columns: 1fr; }
  }
</style>
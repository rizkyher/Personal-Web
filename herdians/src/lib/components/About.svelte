<script>
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';

  // Tech stack diambil berdasarkan riwayat pertanyaan dan diskusi Anda dengan saya
  const techStack = [
    { 
      category: "Frontend", 
      tools: "Svelte 5, React / Next.js, Vue / Nuxt, Tailwind CSS",
      icon: "ph:browsers-light"
    },
    { 
      category: "Backend & Runtime", 
      tools: "Laravel, Node.js, Bun",
      icon: "ph:hard-drives-light"
    },
    { 
      category: "Mobile & Design", 
      tools: "Flutter, Figma",
      icon: "ph:devices-light"
    }
  ];

  let visible = $state(false);
  let sectionEl;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) visible = true; },
      { threshold: 0.2 }
    );
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section id="about" class="about-minimal" bind:this={sectionEl} class:is-visible={visible}>
  <div class="minimal-inner">
    
    <div class="minimal-header">
      <p class="eyebrow">— Profil & Arsitektur</p>
    </div>

    <div class="content-split">
      
      <div class="split-left fade-up">
        <h2 class="headline">
          Arsitektur rapi. <br>
          <em>Performa tinggi.</em>
        </h2>
        <p class="bio">
          Sebagai Full Stack Developer dengan pengalaman lebih dari 2 tahun, saya berfokus pada penyelesaian masalah melalui kode yang efisien, mudah dirawat, dan *scalable*. Dari antarmuka web yang responsif hingga arsitektur server yang tangguh.
        </p>

        <div class="stats-row">
          <div class="stat">
            <span class="num">10+</span>
            <span class="label">Proyek</span>
          </div>
          <div class="stat">
            <span class="num">2+</span>
            <span class="label">Tahun Exp.</span>
          </div>
        </div>
      </div>

      <div class="split-right">
        <div class="tech-list">
          {#each techStack as tech, i}
            <div class="tech-row fade-up" style="transition-delay: {0.15 + (i * 0.1)}s">
              <div class="tech-info">
                <span class="tech-cat">{tech.category}</span>
                <span class="tech-tools">{tech.tools}</span>
              </div>
              <div class="tech-icon">
                <Icon icon={tech.icon} width="24" />
              </div>
            </div>
          {/each}
        </div>
        
        <a href="#" class="btn-clean fade-up" style="transition-delay: 0.45s">
          Unduh Resume (PDF)
          <Icon icon="ph:arrow-right-light" />
        </a>
      </div>

    </div>
  </div>
</section>

<style>
  /* ── Ultra Minimalist Base ── */
  .about-minimal {
    padding: 8rem 10%;
    background: var(--white, #f4f5f7); /* Menggunakan putih/krem sangat terang agar super clean */
    color: var(--navy, #2A4D88);
    position: relative;
  }
  
  .minimal-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--gold, #7C94B8);
    margin-bottom: 4rem;
  }

  .content-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
  }

  /* ── Kiri: Statement ── */
  .headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--navy-dark, #1e3d70);
  }
  .headline em {
    font-style: italic;
    color: var(--gold, #7C94B8);
  }

  .bio {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-body, #5a6e8a);
    margin-bottom: 3rem;
    max-width: 90%;
  }

  .stats-row {
    display: flex;
    gap: 3rem;
  }
  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .num {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 1;
    color: var(--navy-dark);
  }
  .label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-muted);
  }

  /* ── Kanan: Tech List Editorial ── */
  .tech-list {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(27, 59, 111, 0.15); /* Garis batas tipis */
    margin-bottom: 2.5rem;
  }
  
  .tech-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 0;
    border-bottom: 1px solid rgba(27, 59, 111, 0.15);
    transition: padding-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
  }
  
  .tech-info {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  
  .tech-cat {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--gold);
  }
  
  .tech-tools {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--navy);
  }

  .tech-icon {
    color: var(--text-muted);
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  /* Interaksi Hover Super Elegan */
  .tech-row:hover {
    padding-left: 1rem;
    border-bottom-color: var(--navy);
  }
  .tech-row:hover .tech-icon {
    opacity: 1;
    color: var(--navy);
    transform: scale(1.1);
  }

  /* Tombol Clean */
  .btn-clean {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--navy);
    text-decoration: none;
    position: relative;
    padding-bottom: 4px;
  }
  .btn-clean::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 1.5px;
    background: var(--navy);
    transition: width 0.3s ease;
  }
  .btn-clean:hover::after { width: 100%; }

  /* ── Animasi Reveal Halus ── */
  .fade-up {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .is-visible .fade-up {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .content-split {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
    .about-minimal { padding: 6rem 5%; }
    .bio { max-width: 100%; }
    .tech-row:hover { padding-left: 0; } /* Matikan geser di mobile agar tidak mengganggu scroll */
  }
</style>
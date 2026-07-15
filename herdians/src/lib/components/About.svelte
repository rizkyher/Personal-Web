<script>
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';
  import { i18n } from '$lib/i18n.svelte';

  const techIcons = ["ph:browsers-light", "ph:hard-drives-light", "ph:devices-light"];
  const techTools = [
    "Svelte 5, React / Next.js, Vue / Nuxt, Tailwind CSS",
    "Laravel, Node.js, Bun",
    "Flutter, Figma",
  ];

  const techStack = $derived(
    i18n.t.about.techCategories.map((category, i) => ({
      category,
      tools: techTools[i],
      icon: techIcons[i],
    }))
  );

  let visible  = $state(false);
  /** @type {HTMLElement | undefined} */
  let sectionEl = $state(undefined);

  onMount(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visible = true; },
      { threshold: 0.15 }
    );
    if (sectionEl) io.observe(sectionEl);
    return () => io.disconnect();
  });
</script>

<section id="about" class="about-minimal" bind:this={sectionEl} class:is-visible={visible}>
  <div class="minimal-inner">

    <div class="minimal-header">
      <p class="eyebrow">{i18n.t.about.eyebrow}</p>
    </div>

    <div class="content-split">

      <div class="split-left fade-up">
        <h2 class="headline">
          {i18n.t.about.headline1}<br>
          <em>{i18n.t.about.headline2}</em>
        </h2>
        <p class="bio">{@html i18n.t.about.bio}</p>

        <div class="stats-row">
          <div class="stat">
            <span class="num">10+</span>
            <span class="lbl">{i18n.t.about.stats.projects}</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="num">2+</span>
            <span class="lbl">{i18n.t.about.stats.years}</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="num">5+</span>
            <span class="lbl">{i18n.t.about.stats.clients}</span>
          </div>
        </div>

        <!-- Desktop CV button -->
        <a href="/cv-rizky.pdf" target="_blank" rel="noopener" class="btn-clean fade-up desktop-cv" style="transition-delay:0.45s">
          {i18n.t.about.downloadCV}
          <Icon icon="ph:arrow-right-light" width="18" height="18" />
        </a>
      </div>

      <div class="split-right fade-up" style="transition-delay:0.1s">
        <div class="tech-list">
          {#each techStack as tech, i}
            <div class="tech-row fade-up" style="transition-delay:{0.15 + i * 0.1}s">
              <div class="tech-info">
                <span class="tech-cat">{tech.category}</span>
                <span class="tech-tools">{tech.tools}</span>
              </div>
              <div class="tech-icon">
                <Icon icon={tech.icon} width="24" height="24" />
              </div>
            </div>
          {/each}
        </div>

        <!-- Mobile CV button (shown below tech list) -->
        <a href="/cv-rizky.pdf" target="_blank" rel="noopener" class="btn-clean fade-up mobile-cv" style="transition-delay:0.5s">
          {i18n.t.about.downloadCV}
          <Icon icon="ph:arrow-right-light" width="18" height="18" />
        </a>
      </div>

    </div>
  </div>
</section>

<style>
  .about-minimal {
    padding: 8rem 10%;
    background: var(--white);
    color: var(--navy);
    position: relative;
  }

  .minimal-inner { max-width: 1100px; margin: 0 auto; }

  .eyebrow { margin-bottom: 3.5rem; }

  .content-split {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 6rem; align-items: start;
  }

  /* Left */
  .headline {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 700; line-height: 1.1; margin-bottom: 1.5rem; color: var(--navy-dark);
  }
  .headline em { font-style: italic; color: var(--gold); }

  .bio { font-size: 1rem; line-height: 1.75; color: var(--text-body); margin-bottom: 2.5rem; max-width: 90%; }

  /* Stats */
  .stats-row {
    display: flex; align-items: center; gap: 1.5rem;
    padding: 1.3rem 1rem;
    background: var(--cream); border: 1px solid var(--border);
    border-radius: var(--r-md); margin-bottom: 2rem;
  }
  .stat { display: flex; flex-direction: column; gap: 0.2rem; flex: 1; align-items: center; }
  .num { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 900; line-height: 1; color: var(--navy-dark); }
  .lbl { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-muted); }
  .stat-div { width: 1px; height: 38px; background: var(--border); flex-shrink: 0; }

  .btn-clean {
    display: inline-flex; align-items: center; gap: 0.8rem;
    font-size: 0.82rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 1.5px; color: var(--navy); text-decoration: none;
    position: relative; padding-bottom: 4px;
    -webkit-tap-highlight-color: transparent;
  }
  .btn-clean::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 0; height: 1.5px; background: var(--navy);
    transition: width 0.3s var(--ease);
  }
  .btn-clean:hover::after { width: 100%; }

  /* Right: tech list */
  .tech-list {
    display: flex; flex-direction: column;
    border-top: 1px solid rgba(10,65,116,0.15);
    margin-bottom: 2.5rem;
  }
  .tech-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 1.7rem 0; border-bottom: 1px solid rgba(10,65,116,0.12);
    cursor: default; transition: padding-left 0.3s var(--ease), border-bottom-color 0.3s;
  }
  .tech-row:hover { padding-left: 0.75rem; border-bottom-color: var(--navy); }
  .tech-info { display: flex; flex-direction: column; gap: 0.35rem; }
  .tech-cat { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gold); }
  .tech-tools { font-size: 1rem; font-weight: 600; color: var(--navy); }
  .tech-icon { color: var(--text-muted); opacity: 0.3; transition: opacity 0.3s, color 0.3s, transform 0.3s; }
  .tech-row:hover .tech-icon { opacity: 1; color: var(--navy); transform: scale(1.1); }

  /* Show/hide CV buttons */
  .mobile-cv { display: none; }

  /* Fade-up animation via parent .is-visible */
  .fade-up {
    opacity: 0; transform: translateY(18px);
    transition: opacity 0.75s var(--ease), transform 0.75s var(--ease);
  }
  .is-visible .fade-up { opacity: 1; transform: none; }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .about-minimal { padding: 5.5rem 5%; }
    .eyebrow { margin-bottom: 2.5rem; }
    .content-split { grid-template-columns: 1fr; gap: 3rem; }
    .bio { max-width: 100%; }
    .tech-row:hover { padding-left: 0; }
    .desktop-cv { display: none; }
    .mobile-cv { display: inline-flex; }
  }

  @media (max-width: 480px) {
    .stats-row { gap: 0; padding: 1rem 0.5rem; }
    .num { font-size: 1.5rem; }
    .tech-tools { font-size: 0.9rem; }
  }
</style>
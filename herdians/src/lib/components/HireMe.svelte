<script>
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';
  import { i18n } from '$lib/i18n.svelte';

  let hoveredIndex = $state(-1);

  // Encoded URLs for CTA buttons
  const whatsappUrl = $derived(
    `https://wa.me/6285163554496?text=${encodeURIComponent(i18n.t.hireMe.cta.whatsappMsg)}`
  );
  const emailUrl = $derived(
    `mailto:rizkyherdiansyah31@gmail.com?subject=${encodeURIComponent(i18n.t.hireMe.cta.emailSubject)}&body=${encodeURIComponent(i18n.t.hireMe.cta.emailBody)}`
  );

  // Scroll reveal
  /** @type {HTMLElement | undefined} */
  let sectionRef = $state(undefined);
  let visible = $state(false);

  onMount(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            visible = true;
            io.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef) io.observe(sectionRef);
    return () => io.disconnect();
  });
</script>

<section id="hire-me" class="hire-section" bind:this={sectionRef}>
  <!-- Subtle background -->
  <div class="hire-bg" aria-hidden="true">
    <div class="grid-pattern"></div>
    <div class="gradient-orb orb-a"></div>
    <div class="gradient-orb orb-b"></div>
  </div>

  <div class="hire-inner" class:visible>
    <!-- Header -->
    <div class="hire-header reveal">
      <span class="eyebrow">{i18n.t.hireMe.eyebrow}</span>
      <h2 class="section-title">
        {i18n.t.hireMe.title1}<br>
        <em>{i18n.t.hireMe.title2}</em>
      </h2>
      <p class="section-desc">{i18n.t.hireMe.desc}</p>
    </div>

    <!-- Process Steps -->
    <div class="process-grid reveal d1">
      {#each i18n.t.hireMe.steps as step, idx}
        <div
          class="process-card"
          class:active={hoveredIndex === idx}
          onmouseenter={() => hoveredIndex = idx}
          onmouseleave={() => hoveredIndex = -1}
          role="article"
        >
          <div class="step-number">0{idx + 1}</div>
          <div class="step-icon">
            <Icon icon={step.icon} width="28" height="28" />
          </div>
          <h3 class="step-title">{step.title}</h3>
          <p class="step-desc">{step.description}</p>
        </div>
      {/each}
    </div>

    <!-- CTA -->
    <div class="hire-cta reveal d2">
      <p class="cta-text">{i18n.t.hireMe.cta.text}</p>
      <div class="cta-buttons">
        <a href={whatsappUrl} target="_blank" rel="noopener" class="btn-primary">
          <Icon icon="ph:whatsapp-logo-bold" width="18" height="18" />
          <span>{i18n.t.hireMe.cta.whatsapp}</span>
        </a>
        <a href={emailUrl} class="btn-outline">
          <Icon icon="ph:envelope-bold" width="18" height="18" />
          <span>{i18n.t.hireMe.cta.email}</span>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .hire-section {
    padding: 8rem 10%;
    background: var(--cream);
    position: relative;
    overflow: hidden;
  }

  /* Background */
  .hire-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }
  .grid-pattern {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(10,65,116,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(10,65,116,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.5;
  }
  .orb-a {
    width: 400px;
    height: 400px;
    background: rgba(78,142,162,0.15);
    top: -100px;
    right: -100px;
  }
  .orb-b {
    width: 350px;
    height: 350px;
    background: rgba(10,65,116,0.08);
    bottom: -50px;
    left: -100px;
  }

  .hire-inner {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s var(--ease), transform 0.8s var(--ease);
  }
  .hire-inner.visible {
    opacity: 1;
    transform: none;
  }

  /* Header */
  .hire-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  .section-desc {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-body);
    max-width: 600px;
    margin: 0 auto;
  }

  /* Process Grid */
  .process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .process-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 2rem 1.5rem;
    text-align: center;
    transition: all 0.4s var(--ease);
    cursor: default;
    position: relative;
    overflow: hidden;
  }
  .process-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--navy), var(--gold));
    transform: scaleX(0);
    transition: transform 0.4s var(--ease);
  }
  .process-card:hover,
  .process-card:active,
  .process-card.active {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(10,65,116,0.12);
    border-color: var(--gold);
  }
  .process-card:hover::before,
  .process-card.active::before {
    transform: scaleX(1);
  }

  .step-number {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(10,65,116,0.15);
    line-height: 1;
    margin-bottom: 1rem;
  }
  .step-icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(10,65,116,0.06), rgba(78,142,162,0.08));
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.2rem;
    color: var(--navy);
    transition: all 0.4s var(--ease);
  }
  .process-card:hover .step-icon,
  .process-card.active .step-icon {
    background: linear-gradient(135deg, var(--navy), var(--navy-mid));
    color: #fff;
    transform: scale(1.1) rotate(-5deg);
  }
  .step-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 0.6rem;
  }
  .step-desc {
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--text-muted);
  }

  /* CTA */
  .hire-cta {
    text-align: center;
    background: linear-gradient(155deg, var(--navy) 0%, #001D39 100%);
    border-radius: 28px;
    padding: 3.5rem;
    position: relative;
    overflow: hidden;
  }
  .hire-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
  }
  .cta-text {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    font-weight: 700;
    color: #fff;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }

  /* Buttons override for light-on-dark */
  .cta-buttons :global(.btn-primary) {
    background: #fff;
    color: var(--navy);
  }
  .cta-buttons :global(.btn-primary:hover) {
    background: var(--cream-light);
    box-shadow: 0 14px 32px rgba(0,0,0,0.2);
  }
  .cta-buttons :global(.btn-outline) {
    border-color: rgba(255,255,255,0.3);
    color: #fff;
  }
  .cta-buttons :global(.btn-outline:hover) {
    background: rgba(255,255,255,0.1);
    color: #fff;
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .process-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 960px) {
    .hire-section { padding: 6rem 5%; }
    .hire-cta { padding: 2.5rem 2rem; }
  }
  @media (max-width: 600px) {
    .process-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    .hire-cta { padding: 2rem 1.5rem; }
  }

  /* ── Dark mode ── */
  :global([data-theme="dark"]) .process-card {
    background: var(--white);
  }
  :global([data-theme="dark"]) .process-card:hover,
  :global([data-theme="dark"]) .process-card.active {
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
  :global([data-theme="dark"]) .step-icon {
    background: linear-gradient(135deg, rgba(197,227,247,0.08), rgba(91,184,212,0.1));
  }
  :global([data-theme="dark"]) .hire-cta {
    background: linear-gradient(155deg, #0d2d45 0%, #001828 100%);
  }
</style>

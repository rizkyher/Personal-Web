<script>
  import { i18n } from '$lib/i18n.svelte';

  const infiniteStats = $derived([
    ...i18n.t.marquee, ...i18n.t.marquee,
    ...i18n.t.marquee, ...i18n.t.marquee,
  ]);
</script>

<div class="marquee-simple" aria-hidden="true">
  <div class="marquee-track">
    {#each infiniteStats as stat}
      <div class="marquee-item">
        <span class="stat-value">{stat.value}</span>
        <span class="stat-label">{stat.label}</span>
        <span class="separator">—</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .marquee-simple {
    background: var(--cream);
    padding: 1rem 0;
    overflow: hidden;
    display: flex;
    position: relative;
    border-top: 1px solid rgba(73,118,159,0.1);
    border-bottom: 1px solid rgba(73,118,159,0.1);
  }
  /* Fade edges */
  .marquee-simple::before,
  .marquee-simple::after {
    content: ''; position: absolute; top: 0; bottom: 0;
    width: 64px; z-index: 2; pointer-events: none;
  }
  .marquee-simple::before { left: 0;  background: linear-gradient(to right, var(--cream), transparent); }
  .marquee-simple::after  { right: 0; background: linear-gradient(to left,  var(--cream), transparent); }

  .marquee-track {
    display: flex; align-items: center;
    width: max-content;
    animation: marqueeScroll 35s linear infinite;
    will-change: transform;
  }
  .marquee-simple:hover .marquee-track { animation-play-state: paused; }

  .marquee-item {
    display: flex; align-items: center;
    gap: 0.8rem; padding-right: 0.8rem;
    white-space: nowrap; color: var(--navy);
  }
  .stat-value { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 900; }
  .stat-label { font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; opacity: 0.75; }
  .separator { color: var(--gold); margin-left: 0.8rem; opacity: 0.5; }

  @keyframes marqueeScroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* Hide label on tiny phones */
  @media (max-width: 400px) {
    .stat-label { display: none; }
    .separator { margin-left: 0.4rem; }
  }
</style>
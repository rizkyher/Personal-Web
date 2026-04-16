<script>
  const stats = [
    { value: "2+",  label: "Years Experience" },
    { value: "10+", label: "Projects Deployed" },
    { value: "5+",  label: "Global Clients" },
    { value: "100%",label: "Code Quality" }
  ];

  const infiniteStats = [...stats, ...stats, ...stats, ...stats];
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
    background: var(--cream, #D9D9D8); /* Warna terang/krem agar sangat bersih */
    padding: 1rem 0;
    overflow: hidden;
    display: flex;
    position: relative;
    border-top: 1px solid rgba(42, 77, 136, 0.1);
    border-bottom: 1px solid rgba(42, 77, 136, 0.1);
  }

  .marquee-track {
    display: flex;
    align-items: center;
    width: max-content;
    animation: marqueeScroll 35s linear infinite;
    will-change: transform;
  }

  .marquee-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding-right: 0.8rem;
    white-space: nowrap;
    color: var(--navy, #2A4D88);
  }

  .stat-value {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
  }

  .stat-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;
  }

  .separator {
    color: var(--gold, #7C94B8);
    margin-left: 0.8rem;
    opacity: 0.5;
  }

  @keyframes marqueeScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
</style>
<script>
  import Icon from '@iconify/svelte';
  import { i18n } from '$lib/i18n.svelte';
</script>

<section class="services-section">
  <div class="services-inner">

    <div class="services-header reveal">
      <p class="eyebrow">{i18n.t.services.eyebrow}</p>
      <h2 class="section-title">{i18n.t.services.title} <em>{i18n.t.services.titleEm}</em></h2>
    </div>

    <div class="cards-row">
      {#each i18n.t.services.items as svc, i}
        <article class="scard reveal" style="transition-delay:{i * 0.12}s">
          <div class="scard-icon">
            <Icon icon={svc.icon} width="36" height="36" class="icon-svg" />
          </div>

          <h3 class="scard-name">{svc.name}</h3>
          <p class="scard-desc">{svc.desc}</p>

          <ul class="feature-list">
            {#each svc.features as feat}
              <li class="feature-item">
                <span class="feat-dot" aria-hidden="true"></span>
                {feat}
              </li>
            {/each}
          </ul>

          <a href="#contact" class="scard-cta">
            {i18n.t.nav.hire}
            <Icon icon="ph:arrow-right-bold" width="14" height="14" />
          </a>
        </article>
      {/each}
    </div>

  </div>
</section>

<style>
  .services-section {
    padding: 8rem 10%;
    background: var(--cream-light);
    position: relative;
  }

  .services-inner { max-width: 1100px; margin: 0 auto; }

  .services-header { margin-bottom: 4rem; }
  .services-header .section-title { margin-bottom: 0; }

  /* Cards row */
  .cards-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  /* Card */
  .scard {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    padding: 2.5rem 2.2rem;
    display: flex; flex-direction: column;
    position: relative; overflow: hidden;
    transition: transform 0.3s var(--ease), box-shadow 0.3s, border-color 0.3s;
  }
  .scard::before {
    content: ''; position: absolute;
    top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--navy), var(--gold));
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.4s var(--ease);
  }
  .scard:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(10,65,116,0.1); border-color: transparent; }
  .scard:hover::before { transform: scaleX(1); }

  /* Icon */
  .scard-icon {
    width: 60px; height: 60px; border-radius: var(--r-md);
    background: linear-gradient(135deg, var(--cream), var(--cream-dark));
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.6rem;
    transition: background 0.3s;
  }
  .scard:hover .scard-icon {
    background: linear-gradient(135deg, var(--navy), var(--navy-mid));
  }
  .scard-icon :global(.icon-svg) { color: var(--navy); transition: color 0.3s; }
  .scard:hover .scard-icon :global(.icon-svg) { color: var(--white); }

  /* Text */
  .scard-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem; font-weight: 700; color: var(--navy);
    margin-bottom: 0.75rem; line-height: 1.2;
  }
  .scard-desc {
    font-size: 0.9rem; line-height: 1.75; color: var(--text-muted);
    margin-bottom: 1.8rem;
  }

  /* Features */
  .feature-list {
    list-style: none; display: flex; flex-direction: column;
    gap: 0.65rem; flex: 1; margin-bottom: 2rem;
  }
  .feature-item {
    display: flex; align-items: center; gap: 0.65rem;
    font-size: 0.82rem; font-weight: 500; color: var(--text-body);
    line-height: 1.4;
  }
  .feat-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold); flex-shrink: 0;
  }

  /* CTA link */
  .scard-cta {
    display: inline-flex; align-items: center; gap: 0.45rem; align-self: flex-start;
    font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;
    color: var(--navy); text-decoration: none;
    position: relative; padding-bottom: 3px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.25s;
  }
  .scard-cta::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 0; height: 1.5px; background: var(--navy);
    transition: width 0.3s var(--ease);
  }
  .scard-cta:hover { color: var(--gold); }
  .scard-cta:hover::after { width: 100%; background: var(--gold); }

  /* RTL */
  :global(html[dir="rtl"]) .scard::before { transform-origin: right; }
  :global(html[dir="rtl"]) .scard-cta::after { left: auto; right: 0; }

  /* Responsive */
  @media (max-width: 960px) {
    .services-section { padding: 6rem 5%; }
    .cards-row { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 600px) {
    .services-section { padding: 5rem 5%; }
    .cards-row {
      grid-template-columns: 1fr;
      display: flex; flex-wrap: nowrap; overflow-x: auto;
      gap: 1.25rem; padding-bottom: 1.5rem;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .cards-row::-webkit-scrollbar { display: none; }
    .scard {
      flex: 0 0 82%; max-width: 310px;
      scroll-snap-align: center;
    }
    .scard:hover { transform: none; }
    .services-header { margin-bottom: 2.5rem; }
  }
</style>

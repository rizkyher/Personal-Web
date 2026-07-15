<script>
  import Icon from '@iconify/svelte';
  import { i18n } from '$lib/i18n.svelte';

  const meta = [
    { initial: 'AF', accent: '#001D39', project: 'INISIASI' },
    { initial: 'DP', accent: '#0A4174', project: 'Khwarizmi' },
    { initial: 'BS', accent: '#49769F', project: 'Portal SI' },
  ];

  const items = $derived(
    i18n.t.testimonials.items.map((item, i) => ({ ...item, ...meta[i] }))
  );
</script>

<section class="testi-section">
  <div class="testi-inner">

    <div class="testi-header reveal">
      <p class="eyebrow">{i18n.t.testimonials.eyebrow}</p>
      <h2 class="section-title">{i18n.t.testimonials.title} <em>{i18n.t.testimonials.titleEm}</em></h2>
    </div>

    <div class="cards-grid">
      {#each items as item, i}
        <article class="tcard reveal" style="transition-delay:{i * 0.1}s">
          <div class="tcard-top">
            <span class="quote-icon" aria-hidden="true">"</span>
            <div class="stars" aria-label="5 stars">
              {#each Array(5) as _}
                <Icon icon="ph:star-fill" width="14" height="14" />
              {/each}
            </div>
          </div>

          <blockquote class="tcard-quote">{item.quote}</blockquote>

          <footer class="tcard-footer">
            <div class="avatar" style="background:{item.accent}">{item.initial}</div>
            <div class="author-info">
              <span class="author-name">{item.name}</span>
              <span class="author-role">{item.role}</span>
            </div>
          </footer>
        </article>
      {/each}
    </div>

  </div>
</section>

<style>
  .testi-section {
    padding: 8rem 10%;
    background: var(--cream-light);
    position: relative;
  }
  .testi-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(circle, rgba(10,65,116,0.05) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .testi-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }

  .testi-header { margin-bottom: 4rem; }
  .testi-header .section-title { margin-bottom: 0; }

  /* Grid */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  /* Card */
  .tcard {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    padding: 2.2rem 2rem;
    display: flex; flex-direction: column; gap: 1.4rem;
    transition: transform 0.28s var(--ease), box-shadow 0.28s;
    position: relative;
  }
  .tcard:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(10, 65, 116, 0.1);
  }

  /* Top row */
  .tcard-top {
    display: flex; justify-content: space-between; align-items: flex-start;
  }
  .quote-icon {
    font-family: 'Playfair Display', serif;
    font-size: 4rem; line-height: 0.6;
    color: var(--gold); opacity: 0.35;
    user-select: none;
  }
  .stars {
    display: flex; gap: 0.2rem; color: var(--gold);
    padding-top: 0.2rem;
  }

  /* Quote */
  .tcard-quote {
    font-size: 0.92rem; line-height: 1.8;
    color: var(--text-body); flex: 1;
    font-style: italic;
  }

  /* Footer */
  .tcard-footer {
    display: flex; align-items: center; gap: 0.9rem;
    padding-top: 1.2rem;
    border-top: 1px solid var(--border);
  }
  .avatar {
    width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.75rem; font-weight: 800; color: #fff; letter-spacing: 0.5px;
  }
  .author-info { display: flex; flex-direction: column; gap: 0.2rem; min-width: 0; }
  .author-name {
    font-size: 0.85rem; font-weight: 700; color: var(--navy);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .author-role {
    font-size: 0.72rem; color: var(--text-muted); font-weight: 500;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }

  /* Responsive */
  @media (max-width: 960px) {
    .testi-section { padding: 6rem 5%; }
    .cards-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 640px) {
    .testi-section { padding: 5rem 5%; }
    .cards-grid {
      grid-template-columns: 1fr;
      display: flex; flex-wrap: nowrap; overflow-x: auto;
      gap: 1.25rem; padding-bottom: 1.5rem;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .cards-grid::-webkit-scrollbar { display: none; }
    .tcard {
      flex: 0 0 85%; max-width: 320px;
      scroll-snap-align: center;
    }
    .tcard:hover { transform: none; }
    .testi-header { margin-bottom: 2.5rem; }
  }
</style>

<script>
  import Icon from '@iconify/svelte';

  const name = "Rizky Herdiansyah";
  const year = new Date().getFullYear();

  const socials = [
    { icon: 'mdi:instagram', href: 'https://www.instagram.com/r_herdians/', label: 'Instagram' },
    { icon: 'ri:twitter-x-fill', href: 'https://x.com/r_herdians?s=11', label: 'X' },
    { icon: 'mdi:github', href: 'https://github.com/rizkyher', label: 'GitHub' },
  ];

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer class="footer-elite">
  <div class="footer-inner">

    <div class="footer-grid">

      <!-- Brand -->
      <div class="brand-col">
        <a href="#home" class="logo-wrap" onclick={scrollToTop}>
          <!-- Show image if it exists; graceful fallback via onerror -->
          <img
            src="/logo.png"
            alt=""
            class="logo-img"
            aria-hidden="true"
          />
          <span class="logo-text">r<em>herdians</em></span>
        </a>
        <p class="brand-desc">
          Membangun produk digital skala produksi dari antarmuka piksel-sempurna hingga arsitektur server yang tangguh.
        </p>
      </div>

      <!-- Inquiries -->
      <div class="links-col">
        <h4 class="col-title">Inquiries</h4>
        <div class="link-group">
          <a href="mailto:rizkyherdiansyah31@gmail.com" class="hover-line">
            rizkyherdiansyah31@gmail.com
          </a>
          <a href="https://wa.me/6285163554496" target="_blank" rel="noopener" class="hover-line">
            +62 851 6355 4496
          </a>
        </div>
      </div>

      <!-- Connect -->
      <div class="links-col">
        <h4 class="col-title">Connect</h4>
        <div class="social-list">
          {#each socials as s}
            <a href={s.href} target="_blank" rel="noopener" aria-label={s.label} class="social-item">
              <Icon icon={s.icon} width="18" height="18" class="s-icon" />
              <span class="hover-line">{s.label}</span>
            </a>
          {/each}
        </div>
      </div>

    </div>

    <div class="massive-footer-text" aria-hidden="true">HERDIANS</div>

    <div class="footer-bottom">
      <p class="copyright">
        &copy; {year} {name}.<span class="hide-mobile"> All rights reserved.</span>
      </p>
      <a href="#home" class="back-to-top" onclick={scrollToTop} aria-label="Kembali ke atas">
        Back to top
        <div class="arrow-up">
          <Icon icon="ph:arrow-up-bold" width="15" height="15" />
        </div>
      </a>
    </div>

  </div>
</footer>

<style>
  .footer-elite {
    background: #050b14;
    color: #fff;
    padding: 6rem 10% 2rem;
    position: relative; overflow: hidden;
  }
  .footer-inner { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; }

  /* Grid */
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 4rem; margin-bottom: 5rem; }

  /* Brand */
  .logo-wrap { display: flex; align-items: center; gap: 0.6rem; text-decoration: none; margin-bottom: 1.5rem; width: max-content; -webkit-tap-highlight-color: transparent; }
  .logo-img { height: 30px; width: auto; object-fit: contain; }
  .logo-text { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.4rem; letter-spacing: 0.5px; color: #fff; }
  .logo-text em { font-style: italic; color: var(--gold); }
  .brand-desc { font-size: 0.92rem; line-height: 1.7; color: rgba(255,255,255,0.45); max-width: 300px; }

  /* Cols */
  .col-title { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.28); margin-bottom: 1.8rem; }
  .link-group, .social-list { display: flex; flex-direction: column; gap: 1.1rem; }

  /* Hover underline */
  .hover-line {
    font-size: 0.95rem; font-weight: 500; color: rgba(255,255,255,0.78);
    text-decoration: none; position: relative; width: max-content; max-width: 100%;
    transition: color 0.25s; word-break: break-all;
    -webkit-tap-highlight-color: transparent;
  }
  .hover-line::after { content: ''; position: absolute; bottom: -3px; left: 0; width: 0; height: 1.5px; background: var(--gold); transition: width 0.35s var(--ease); }
  .hover-line:hover { color: #fff; }
  .hover-line:hover::after, a:hover .hover-line::after { width: 100%; }

  /* Social items */
  .social-item { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; -webkit-tap-highlight-color: transparent; min-height: 32px; }
  .social-item :global(.s-icon) { color: rgba(255,255,255,0.45); transition: color 0.25s, transform 0.25s; flex-shrink: 0; }
  .social-item:hover :global(.s-icon) { color: var(--gold); transform: scale(1.1) rotate(5deg); }

  /* Massive text */
  .massive-footer-text {
    font-family: 'Playfair Display', serif;
    font-size: 14vw; font-weight: 900; line-height: 0.82;
    letter-spacing: -2px; text-align: center;
    color: transparent; -webkit-text-stroke: 1.5px rgba(255,255,255,0.05);
    user-select: none; margin-bottom: 3rem;
  }

  /* Bottom */
  .footer-bottom {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 1.8rem; border-top: 1px solid rgba(255,255,255,0.07);
    flex-wrap: wrap; gap: 1rem;
  }
  .copyright { font-size: 0.82rem; color: rgba(255,255,255,0.35); font-weight: 500; }
  .back-to-top {
    display: flex; align-items: center; gap: 0.75rem;
    font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;
    color: #fff; text-decoration: none; transition: color 0.25s;
    -webkit-tap-highlight-color: transparent;
  }
  .arrow-up {
    width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.18);
    display: flex; align-items: center; justify-content: center; color: var(--gold);
    transition: transform 0.35s var(--ease), background 0.25s, border-color 0.25s;
  }
  .back-to-top:hover { color: var(--gold); }
  .back-to-top:hover .arrow-up { transform: translateY(-5px); background: #fff; border-color: #fff; color: #050b14; }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .footer-elite { padding: 4.5rem 5% 1.5rem; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; margin-bottom: 3rem; }
    .brand-col { grid-column: 1 / -1; }
    .brand-desc { max-width: 100%; }
    .massive-footer-text { font-size: 16vw; margin-bottom: 2rem; }
  }

  @media (max-width: 560px) {
    .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
    .massive-footer-text { font-size: 17vw; letter-spacing: -1px; }
    .footer-bottom { flex-direction: column-reverse; gap: 1.2rem; align-items: flex-start; }
    .back-to-top { align-self: flex-end; }
    .hide-mobile { display: none; }
    .hover-line { font-size: 0.88rem; }
  }
</style>
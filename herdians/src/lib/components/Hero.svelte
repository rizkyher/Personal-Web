<script>
  import Icon from '@iconify/svelte';
  import { i18n } from '$lib/i18n.svelte';
</script>

<header id="home" class="hero">
  <div class="dot-grid" aria-hidden="true"></div>

  <div class="hero-bg-panel" aria-hidden="true">
    <div class="panel-texture"></div>
  </div>

  <!-- Desktop floating tags -->
  <div class="float-tag float-top" aria-hidden="true">
    <span class="pulse-dot"></span>
    {i18n.t.hero.available}
  </div>
  <div class="float-tag float-bot" aria-hidden="true">
    {i18n.t.hero.location}
  </div>

  <div class="hero-content">
    <!-- Mobile-only avatar -->
    <div class="mobile-avatar" aria-hidden="true">
      <div class="avatar-ring"></div>
      <img src="/rizky.jpeg" alt="Profile" />
    </div>

    <!-- Mobile-only availability pill -->
    <div class="mobile-avail">
      <span class="pulse-dot"></span>
      {i18n.t.hero.available}
    </div>

    <p class="eyebrow">{i18n.t.hero.greeting}</p>

    <h1 class="hero-name">
      <span class="line-wrap"><span class="line-in">Rizky</span></span>
      <span class="line-wrap d1"><span class="line-in italic">Herdiansyah</span></span>
    </h1>

    <div class="hero-role">
      <span class="role-line"></span>
      <span class="role-label">{i18n.t.hero.role}</span>
      <span class="role-line"></span>
    </div>

    <p class="hero-desc">{@html i18n.t.hero.desc}</p>

    <div class="hero-actions">
      <a href="#portfolio" class="btn-primary">
        {i18n.t.hero.viewWorks} <Icon icon="ph:arrow-right-bold" width="16" height="16" />
      </a>
      <div class="social-row">
        <a href="https://www.instagram.com/r_herdians/" target="_blank" rel="noopener" aria-label="Instagram">
          <Icon icon="mdi:instagram" width="20" height="20" />
        </a>
        <a href="https://x.com/r_herdians?s=11" target="_blank" rel="noopener" aria-label="X (Twitter)">
          <Icon icon="ri:twitter-x-fill" width="18" height="18" />
        </a>
        <a href="https://github.com/rizkyher" target="_blank" rel="noopener" aria-label="GitHub">
          <Icon icon="mdi:github" width="20" height="20" />
        </a>
        <a href="https://www.linkedin.com/in/rizkyherdiansyah/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <Icon icon="mdi:linkedin" width="20" height="20" />
        </a>
      </div>
    </div>

    <!-- Mobile-only stats strip -->
    <div class="mobile-stats">
      <div class="ms-item">
        <strong>10+</strong><span>{i18n.t.hero.stats.projects}</span>
      </div>
      <div class="ms-sep"></div>
      <div class="ms-item">
        <strong>2+</strong><span>{i18n.t.hero.stats.years}</span>
      </div>
      <div class="ms-sep"></div>
      <div class="ms-item">
        <strong>5+</strong><span>{i18n.t.hero.stats.clients}</span>
      </div>
    </div>
  </div>

  <!-- Image block (desktop only) -->
  <div class="hero-image-block" aria-hidden="true">
    <div class="image-wrap">
      <div class="ring ring-1"></div>
      <div class="ring ring-2"></div>

      <div class="image-frame">
        <img
          src="/rizky.jpeg"
          alt="Profile"
          class="profile-img"
          loading="eager"
        />
        <span class="corner tl"></span>
        <span class="corner tr"></span>
        <span class="corner bl"></span>
        <span class="corner br"></span>
      </div>

      <div class="badge badge-award">
        <Icon icon="ph:tree-structure-duotone" width="22" height="22" class="badge-icon" />
        <div>
          <strong>Solid Architecture</strong>
          <small>Clean & Scalable</small>
        </div>
      </div>

      <div class="badge badge-exp">
        <span class="exp-num">2+</span>
        <span class="exp-label">Years Exp.</span>
      </div>
    </div>
  </div>

  <a href="#about" class="scroll-cue" aria-label="Scroll down">
    <Icon icon="lucide:chevron-down" width="20" height="20" />
  </a>
</header>

<style>
  .hero {
    min-height: 100svh;
    display: flex; align-items: center; justify-content: space-between;
    padding: 110px 10% 80px;
    position: relative; overflow: hidden; gap: 3rem;
  }

  /* Dot grid - Base (Tetap) */
  .dot-grid {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(10,65,116,0.12) 1px, transparent 1px);
    background-size: 28px 28px; pointer-events: none;
    mask-image: radial-gradient(ellipse 60% 80% at 20% 50%, black 0%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 60% 80% at 20% 50%, black 0%, transparent 80%);
  }

  /* Right panel - Desktop */
  .hero-bg-panel {
    position: absolute; right: 0; top: 0; width: 44%; height: 100%;
    background: linear-gradient(155deg, var(--navy) 0%, var(--navy-dark) 100%);
    clip-path: polygon(14% 0, 100% 0, 100% 100%, 0% 100%); overflow: hidden;
  }
  .panel-texture {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 22px 22px;
  }

  /* Floating tags — desktop only */
  .float-tag {
    position: absolute;
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--r-full); padding: 0.45rem 1.1rem;
    font-size: 0.75rem; font-weight: 600; color: var(--navy);
    box-shadow: 0 6px 20px rgba(10,65,116,0.09);
    display: flex; align-items: center; gap: 0.55rem; z-index: 2;
  }
  .float-top { top: 18%; left: 8%; animation: float 4s ease-in-out infinite; }
  .float-bot { bottom: 12%; left: 8%; animation: float 4s 1.6s ease-in-out infinite; }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

  /* Pulse dot */
  .pulse-dot {
    width: 8px; height: 8px; background: #22c55e; border-radius: 50%;
    position: relative; flex-shrink: 0;
  }
  .pulse-dot::after {
    content: ''; position: absolute; inset: -3px;
    background: rgba(34,197,94,0.35); border-radius: 50%;
    animation: pulse 2s ease-out infinite;
  }
  @keyframes pulse { 0%{transform:scale(1);opacity:1} 100%{transform:scale(2);opacity:0} }

  /* Mobile avatar */
  .mobile-avatar {
    display: none; width: 110px; height: 110px; margin: 0 auto 1.5rem;
    position: relative; border-radius: 50%; padding: 4px;
    background: linear-gradient(135deg, var(--gold), transparent);
    animation: fadeUp 0.8s var(--ease) both;
  }
  .mobile-avatar img {
    width: 100%; height: 100%; object-fit: cover; border-radius: 50%;
    border: 4px solid var(--white); background: var(--navy);
  }
  .avatar-ring {
    position: absolute; top: -6px; left: -6px; right: -6px; bottom: -6px;
    border: 1px dashed rgba(10,65,116,0.3); border-radius: 50%;
    animation: spin 20s linear infinite;
  }

  /* Mobile availability pill */
  .mobile-avail {
    display: none; align-items: center; gap: 0.5rem;
    background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.22);
    border-radius: var(--r-full); padding: 0.42rem 1rem;
    font-size: 0.75rem; font-weight: 600; color: #16a34a;
    margin-bottom: 1.2rem; width: max-content; max-width: 100%;
  }

  /* Hero content */
  .hero-content { position: relative; z-index: 2; max-width: 540px; }

  .eyebrow {
    font-size: 0.8rem; font-weight: 500; letter-spacing: 3.5px;
    text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.85rem;
    animation: fadeUp 0.8s var(--ease) both;
  }

  .line-wrap { display: block; overflow: hidden; }
  .line-in {
    display: block; font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 5.2vw, 5rem); font-weight: 900; line-height: 1.04; color: var(--navy);
    animation: lineSlide 0.85s var(--ease) both;
  }
  .line-in.italic { font-style: italic; }
  .d1 .line-in { animation-delay: 0.12s; }
  @keyframes lineSlide { from{transform:translateY(110%);opacity:0} to{transform:translateY(0);opacity:1} }

  .hero-role {
    display: flex; align-items: center; gap: 0.9rem; margin: 1.3rem 0;
    animation: fadeUp 0.8s 0.25s var(--ease) both;
  }
  .role-line { flex: 1; height: 1px; background: rgba(10,65,116,0.12); }
  .role-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); white-space: nowrap; }

  .hero-desc {
    font-size: 0.98rem; line-height: 1.8; color: var(--text-body); max-width: 410px;
    animation: fadeUp 0.8s 0.35s var(--ease) both;
  }

  .hero-actions {
    margin-top: 2rem; display: flex; align-items: center; gap: 1.8rem; flex-wrap: wrap;
    animation: fadeUp 0.8s 0.45s var(--ease) both;
  }

  .social-row { display: flex; gap: 0.7rem; }
  .social-row a {
    display: flex; align-items: center; justify-content: center;
    width: 42px; height: 42px;
    border: 1.5px solid rgba(10,65,116,0.18); border-radius: 50%;
    color: var(--navy); text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.22s, color 0.22s, border-color 0.22s, transform 0.22s;
  }
  .social-row a:hover { background: var(--navy); color: var(--cream-light); border-color: var(--navy); transform: translateY(-3px); }

  /* Mobile stats strip */
  .mobile-stats {
    display: none; align-items: center;
    margin-top: 2rem;
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--r-md); padding: 1.2rem 0.75rem;
    position: relative; z-index: 2;
  }
  .ms-item { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; flex: 1; }
  .ms-item strong { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 900; color: var(--navy); }
  .ms-item span { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); }
  .ms-sep { width: 1px; height: 34px; background: var(--border); flex-shrink: 0; }

  /* Image block */
  .hero-image-block { position: relative; z-index: 2; flex-shrink: 0; animation: fadeUp 0.9s 0.55s var(--ease) both; }
  .image-wrap { position: relative; }
  .ring { position: absolute; border-radius: 50%; border: 1px dashed rgba(255,255,255,0.12); top: 50%; left: 50%; transform: translate(-50%,-50%); }
  .ring-1 { width: 340px; height: 340px; animation: spin 24s linear infinite; }
  .ring-2 { width: 400px; height: 400px; animation: spin 36s linear infinite reverse; }
  @keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg); } }

  .image-frame {
    width: 270px; height: 330px; border-radius: 22px; overflow: hidden; position: relative;
    box-shadow: 0 30px 60px rgba(0,29,57,0.5), 0 0 0 1px rgba(255,255,255,0.06) inset;
  }
  .profile-img { width: 100%; height: 100%; object-fit: cover; display: block; }

  .corner { position: absolute; width: 18px; height: 18px; border-color: var(--gold); border-style: solid; }
  .corner.tl { top:-5px; left:-5px; border-width: 2px 0 0 2px; border-radius: 3px 0 0 0; }
  .corner.tr { top:-5px; right:-5px; border-width: 2px 2px 0 0; border-radius: 0 3px 0 0; }
  .corner.bl { bottom:-5px; left:-5px; border-width: 0 0 2px 2px; border-radius: 0 0 0 3px; }
  .corner.br { bottom:-5px; right:-5px; border-width: 0 2px 2px 0; border-radius: 0 0 3px 0; }

  .badge {
    position: absolute; background: var(--cream-light); border: 1px solid var(--border);
    border-radius: var(--r-md); padding: 0.65rem 1rem;
    box-shadow: 0 8px 24px rgba(10,65,116,0.12);
    display: flex; align-items: center; gap: 0.6rem;
    font-size: 0.8rem; font-weight: 700; color: var(--navy); white-space: nowrap;
  }
  .badge-award { bottom: -18px; left: -28px; }
  .badge-award :global(.badge-icon) { color: var(--gold); }
  .badge-award small { display: block; font-weight: 400; font-size: 0.68rem; color: var(--text-muted); }
  .badge-exp { top: 20px; right: -26px; flex-direction: column; gap: 0; align-items: flex-start; }
  .exp-num { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 900; line-height: 1; }
  .exp-label { font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); }

  .scroll-cue {
    position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
    display: flex; align-items: center; justify-content: center;
    width: 36px; height: 36px; border: 1.5px solid var(--border); border-radius: 50%;
    color: var(--text-muted); text-decoration: none;
    animation: bounce 2.5s ease-in-out infinite, fadeUp 0.8s 1s var(--ease) both;
    transition: border-color 0.2s, color 0.2s;
  }
  .scroll-cue:hover { border-color: var(--navy); color: var(--navy); }
  @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(5px)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }

  /* ── Mobile & Tablet Layout ── */
  @media (max-width: 900px) {
    .hero {
      flex-direction: column; padding: 120px 5% 70px;
      text-align: center; gap: 0; justify-content: center;
    }
    
    /* 1. Hilangkan Panel Navy yang Mengganggu di Mobile */
    .hero-bg-panel { display: none; }

    /* 2. Tambahkan Dekorasi Background Lembut khusus Mobile */
    .hero::before {
      content: ''; position: absolute; inset: 0; z-index: 0;
      background: radial-gradient(circle at 50% 0%, rgba(124, 148, 184, 0.15) 0%, transparent 60%);
      pointer-events: none;
    }
    
    /* 3. Perluas Area Masking Dot Grid di Mobile */
    .dot-grid {
      mask-image: radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 100%);
      -webkit-mask-image: radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 100%);
      opacity: 0.6;
    }

    .hero-content { max-width: 100%; position: relative; z-index: 2; }
    .eyebrow { justify-content: center; }
    :global(.hero .eyebrow::before) { display: none; }
    .hero-role { justify-content: center; }
    .hero-desc { max-width: 100%; margin: 0 auto; }
    
    .hero-actions { justify-content: center; margin-top: 2.5rem; }
    .social-row { justify-content: center; }
    .float-tag, .hero-image-block, .scroll-cue { display: none; }
    
    .mobile-avatar { display: block; }
    .mobile-avail { display: flex; margin-left: auto; margin-right: auto; }
    .mobile-stats { display: flex; }
    .line-in { font-size: clamp(2.8rem, 10vw, 4.5rem); }
  }

  @media (max-width: 420px) {
    .hero { padding: 100px 5% 56px; }
    .line-in { font-size: clamp(2.6rem, 12vw, 3.5rem); }
    .hero-desc { font-size: 0.95rem; }
    .hero-actions { gap: 1rem; flex-direction: column; }
    .social-row { margin-top: 0.5rem; }
    .ms-item strong { font-size: 1.3rem; }
  }

  /* ── RTL (Arabic) overrides ── */

  /* Move dark panel to the LEFT so text stays on light background */
  :global(html[dir="rtl"]) .hero-bg-panel {
    right: auto;
    left: 0;
    clip-path: polygon(0 0, 86% 0, 100% 100%, 0 100%);
  }

  /* Shift dot-grid mask to focus on the RIGHT (where text is in RTL) */
  :global(html[dir="rtl"]) .dot-grid {
    mask-image: radial-gradient(ellipse 60% 80% at 80% 50%, black 0%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 60% 80% at 80% 50%, black 0%, transparent 80%);
  }

  /* Floating tags: move to right side in RTL */
  :global(html[dir="rtl"]) .float-top { left: auto; right: 8%; }
  :global(html[dir="rtl"]) .float-bot { left: auto; right: 8%; }
</style>
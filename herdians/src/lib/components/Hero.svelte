<script>
  import Icon from '@iconify/svelte';

  const name = "Rizky Herdiansyah";
</script>

<header id="home" class="hero">
  <div class="dot-grid" aria-hidden="true"></div>

  <div class="hero-bg-panel" aria-hidden="true">
    <div class="panel-texture"></div>
  </div>

  <div class="float-tag float-top" aria-hidden="true">
    <span class="pulse-dot"></span>
    Available for work
  </div>
  <div class="float-tag float-bot" aria-hidden="true">
    📍 Bandung, Indonesia
  </div>

  <div class="hero-content">
    <p class="eyebrow">Hello, saya</p>

    <h1 class="hero-name">
      <span class="line-wrap"><span class="line-in">Rizky</span></span>
      <span class="line-wrap d1"><span class="line-in accent">Herdiansyah</span></span>
    </h1>

    <div class="hero-role">
      <span class="role-line"></span>
      <span class="role-label">Full Stack Developer</span>
      <span class="role-line"></span>
    </div>

    <p class="hero-desc">
      Membangun produk digital dari <em>frontend</em> hingga <em>backend</em> —
      dari desain antarmuka hingga arsitektur server yang scalable dan efisien.
    </p>

    <div class="hero-actions">
      <a href="#portfolio" class="btn-primary">
        View Works <Icon icon="ph:arrow-right-bold" width="16" height="16" />
      </a>
      
      <div class="social-row">
        <a href="https://www.instagram.com/r_herdians/" target="_blank" rel="noopener" aria-label="Instagram">
          <Icon icon="mdi:instagram" width="20" height="20" />
        </a>
        
        <a href="https://www.linkedin.com/in/rizky-herdiansyah-a237a4268/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <Icon icon="mdi:linkedin" width="20" height="20" />
        </a>
        
        <a href="#" target="_blank" rel="noopener" aria-label="Twitter">
          <Icon icon="ri:twitter-x-fill" width="18" height="18" />
        </a>
        
        <a href="#" target="_blank" rel="noopener" aria-label="Facebook">
          <Icon icon="mdi:facebook" width="20" height="20" />
        </a>
      </div>
    </div>
  </div>

  <div class="hero-image-block" aria-hidden="true">
    <div class="image-wrap">
      <div class="ring ring-1"></div>
      <div class="ring ring-2"></div>

      <div class="image-frame relative w-48 h-48">
  <img 
    src="https://i.pinimg.com/1200x/b4/4e/64/b44e64a9790169f518b6c8f612263944.jpg" 
    alt="Profile"
    class="w-full h-full object-cover rounded-lg"
  />

  <span class="corner tl"></span>
  <span class="corner tr"></span>
  <span class="corner bl"></span>
  <span class="corner br"></span>
</div>

      <div class="badge badge-award">
        <Icon icon="ph:medal-fill" width="24" height="24" class="badge-icon" />
        <div>
          <strong>Top Creator</strong>
          <small>2024</small>
        </div>
      </div>

      <div class="badge badge-exp">
        <span class="exp-num">4+</span>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 110px 10% 80px;
    position: relative;
    overflow: hidden;
    gap: 3rem;
  }

  /* Dot grid */
  .dot-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(27,59,111,0.12) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
    mask-image: radial-gradient(ellipse 60% 80% at 20% 50%, black 0%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 60% 80% at 20% 50%, black 0%, transparent 80%);
  }

  /* Right panel */
  .hero-bg-panel {
    position: absolute;
    right: 0; top: 0;
    width: 44%;
    height: 100%;
    background: linear-gradient(155deg, var(--navy) 0%, var(--navy-dark) 100%);
    clip-path: polygon(14% 0, 100% 0, 100% 100%, 0% 100%);
    overflow: hidden;
  }
  .panel-texture {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 22px 22px;
  }

  /* Floating tags */
  .float-tag {
    position: absolute;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius-full);
    padding: 0.45rem 1.1rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--navy);
    letter-spacing: 0.3px;
    box-shadow: 0 6px 20px rgba(27,59,111,0.09);
    display: flex;
    align-items: center;
    gap: 0.55rem;
    z-index: 2;
  }
  .float-top { top: 18%; left: 8%; animation: float 4s ease-in-out infinite; }
  .float-bot { bottom: 12%; left: 8%; animation: float 4s 1.6s ease-in-out infinite; }
  @keyframes float {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }

  .pulse-dot {
    width: 8px; height: 8px;
    background: #22c55e;
    border-radius: 50%;
    position: relative;
  }
  .pulse-dot::after {
    content: '';
    position: absolute; inset: -3px;
    background: rgba(34,197,94,0.35);
    border-radius: 50%;
    animation: pulse 2s ease-out infinite;
  }
  @keyframes pulse {
    0%   { transform: scale(1); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }

  /* Content */
  .hero-content {
    position: relative; z-index: 2;
    max-width: 540px;
  }

  .eyebrow {
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 1rem;
    animation: fadeUp 0.8s var(--ease) both;
  }

  .line-wrap {
    display: block;
    overflow: hidden;
  }
  .line-in {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 5.2vw, 5rem);
    font-weight: 900;
    line-height: 1.04;
    color: var(--navy);
    animation: lineSlide 0.85s var(--ease) both;
  }
  .line-in.accent { color: var(--navy); font-style: italic; }
  .d1 .line-in { animation-delay: 0.12s; }

  @keyframes lineSlide {
    from { transform: translateY(110%); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
  }

  .hero-role {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    margin: 1.3rem 0;
    animation: fadeUp 0.8s 0.25s var(--ease) both;
  }
  .role-line { flex: 1; height: 1px; background: rgba(27,59,111,0.12); }
  .role-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--gold);
    white-space: nowrap;
  }

  .hero-desc {
    font-size: 0.98rem;
    line-height: 1.8;
    color: var(--text-body);
    max-width: 410px;
    animation: fadeUp 0.8s 0.35s var(--ease) both;
  }
  .hero-desc em { font-style: normal; font-weight: 600; color: var(--navy); }

  .hero-actions {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1.8rem;
    flex-wrap: wrap;
    animation: fadeUp 0.8s 0.45s var(--ease) both;
  }

  /* Social row */
  .social-row { display: flex; gap: 0.7rem; }
  .social-row a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px; height: 38px;
    border: 1.5px solid rgba(27,59,111,0.18);
    border-radius: 50%;
    color: var(--navy);
    text-decoration: none;
    transition: background 0.22s, color 0.22s, border-color 0.22s, transform 0.22s;
  }
  .social-row a:hover {
    background: var(--navy);
    color: var(--cream-light);
    border-color: var(--navy);
    transform: translateY(-3px);
  }

  /* Image block */
  .hero-image-block {
    position: relative; z-index: 2;
    flex-shrink: 0;
    animation: fadeUp 0.9s 0.55s var(--ease) both;
  }
  .image-wrap { position: relative; }

  .ring {
    position: absolute;
    border-radius: 50%;
    border: 1px dashed rgba(255,255,255,0.12);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  .ring-1 { width: 340px; height: 340px; animation: spin 24s linear infinite; }
  .ring-2 { width: 400px; height: 400px; animation: spin 36s linear infinite reverse; }
  @keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg); } }

  .image-frame {
    width: 270px;
    height: 330px;
    background: linear-gradient(145deg, rgba(255,255,255,0.07) 0%, transparent 50%),
                linear-gradient(165deg, #1a3968, #0d1e3b);
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow:
      0 30px 60px rgba(13,30,59,0.5),
      0 0 0 1px rgba(255,255,255,0.06) inset;
    overflow: hidden;
  }
  .image-frame::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 30% 20%, rgba(184,145,90,0.12), transparent 60%);
  }
  .image-placeholder {
    font-family: 'Playfair Display', serif;
    font-size: 3.2rem;
    font-weight: 900;
    color: rgba(255,255,255,0.12);
    letter-spacing: 5px;
    z-index: 1;
  }

  /* Corners */
  .corner {
    position: absolute;
    width: 18px; height: 18px;
    border-color: var(--gold);
    border-style: solid;
  }
  .corner.tl { top: -5px; left: -5px; border-width: 2px 0 0 2px; border-radius: 3px 0 0 0; }
  .corner.tr { top: -5px; right: -5px; border-width: 2px 2px 0 0; border-radius: 0 3px 0 0; }
  .corner.bl { bottom: -5px; left: -5px; border-width: 0 0 2px 2px; border-radius: 0 0 0 3px; }
  .corner.br { bottom: -5px; right: -5px; border-width: 0 2px 2px 0; border-radius: 0 0 3px 0; }

  /* Badges */
  .badge {
    position: absolute;
    background: var(--cream-light);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 0.65rem 1rem;
    box-shadow: 0 8px 24px rgba(27,59,111,0.12);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--navy);
    white-space: nowrap;
  }
  .badge-award {
    bottom: -18px; left: -28px;
  }
  .badge-award :global(.badge-icon) { color: var(--gold); }
  .badge-award small { display: block; font-weight: 400; font-size: 0.7rem; color: var(--text-muted); }

  .badge-exp {
    top: 20px; right: -26px;
    flex-direction: column;
    gap: 0;
    align-items: flex-start;
    padding: 0.7rem 1rem;
  }
  .exp-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--navy);
    line-height: 1;
  }
  .exp-label { font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); }

  /* Scroll cue */
  .scroll-cue {
    position: absolute;
    bottom: 2rem; left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px; height: 36px;
    border: 1.5px solid var(--border);
    border-radius: 50%;
    color: var(--text-muted);
    text-decoration: none;
    animation: bounce 2.5s ease-in-out infinite, fadeUp 0.8s 1s var(--ease) both;
    transition: border-color 0.2s, color 0.2s;
  }
  .scroll-cue:hover { border-color: var(--navy); color: var(--navy); }
  @keyframes bounce {
    0%,100% { transform: translateX(-50%) translateY(0); }
    50%      { transform: translateX(-50%) translateY(5px); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: none; }
  }

  /* Responsive */
  @media (max-width: 900px) {
    .hero {
      flex-direction: column;
      padding: 120px 6% 80px;
      text-align: center;
      gap: 3.5rem;
    }
    .hero-bg-panel { clip-path: none; width: 100%; height: 45%; top: auto; bottom: 0; opacity: 0.35; }
    .hero-content { max-width: 100%; }
    .eyebrow { justify-content: center; }
    .eyebrow::before { display: none; }
    .hero-role { justify-content: center; }
    .hero-desc { max-width: 100%; margin: 0 auto; }
    .hero-actions { justify-content: center; }
    .social-row { justify-content: center; }
    .float-tag { display: none; }
    .hero-image-block { display: none; }
    .scroll-cue { display: none; }
  }
</style>

<script>
  import { Menu, X } from 'lucide-svelte';

  let { scrollY = 0 } = $props();
  let menuOpen = $state(false);

  const navItems = ['Home', 'About', 'Portfolio', 'Contact'];
  function closeMenu() { menuOpen = false; }
</script>

<nav class="nav" class:scrolled={scrollY > 60}>
  <div class="nav-inner">
    <a href="/" class="logo" onclick={closeMenu}>r<em>herdians</em></a>

    <ul class="nav-links">
      {#each navItems as item}
        <li><a href="#{item.toLowerCase()}">{item}</a></li>
      {/each}
      <li><a href="#contact" class="nav-cta">Hire Me</a></li>
    </ul>

    <button
      class="hamburger" class:active={menuOpen}
      onclick={() => menuOpen = !menuOpen}
      aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
    >
      {#if menuOpen}<X size={20} />{:else}<Menu size={20} />{/if}
    </button>
  </div>
</nav>

{#if menuOpen}
  <div class="drawer-backdrop" onclick={closeMenu} aria-hidden="true"></div>
{/if}

<div class="mobile-drawer" class:open={menuOpen} role="dialog" aria-modal="true" aria-label="Navigation menu">
  <div class="drawer-header">
    <span class="logo">r<em>herdians</em></span>
    <button class="drawer-close" onclick={closeMenu} aria-label="Tutup menu">
      <X size={18} />
    </button>
  </div>

  <nav class="drawer-nav">
    {#each navItems as item, i}
      <a
        href="#{item.toLowerCase()}"
        class="drawer-link"
        style="animation-delay:{i * 0.06}s"
        onclick={closeMenu}
      >
        <span class="drawer-num">0{i + 1}</span>
        <span class="drawer-label">{item}</span>
      </a>
    {/each}
  </nav>

  <div class="drawer-footer">
    <a href="#contact" class="btn-primary full-w" onclick={closeMenu}>
      Hire Me →
    </a>
    <p class="drawer-sub">Bandung, Indonesia · Open for Work</p>
  </div>
</div>

<style>
  .nav {
    position: fixed; width: 100%; top: 0; z-index: 500;
    transition: background 0.4s, box-shadow 0.4s;
  }
  .nav.scrolled {
    background: rgba(237,232,222,0.9);
    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 0 rgba(27,59,111,0.08), 0 4px 20px rgba(27,59,111,0.05);
  }
  .nav-inner {
    max-width: 1180px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.3rem 2.5rem;
  }

  .logo {
    font-family: 'Playfair Display', serif; font-weight: 700;
    font-size: 1.15rem; text-decoration: none; color: var(--navy);
  }
  .logo em { font-style: italic; color: var(--gold); }

  /* Desktop */
  .nav-links { list-style: none; display: flex; align-items: center; gap: 2.5rem; }
  .nav-links a {
    text-decoration: none; font-size: 0.78rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 1.5px;
    color: #ffffff; mix-blend-mode: difference;
    position: relative; padding-bottom: 3px;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 0; height: 1.5px; background: #ffffff;
    transition: width 0.3s var(--ease);
  }
  .nav-links a:hover::after { width: 100%; }
  .nav-cta {
    padding: 0.5rem 1.3rem !important; background: var(--navy);
    color: var(--cream-light) !important; border-radius: var(--r-full);
    mix-blend-mode: normal !important;
    transition: background 0.25s, transform 0.25s !important;
  }
  .nav-cta:hover { background: var(--navy-dark) !important; transform: translateY(-2px); }
  .nav-cta::after { display: none !important; }

  /* Hamburger */
  .hamburger {
    display: none; align-items: center; justify-content: center;
    width: 44px; height: 44px;
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--r-sm); cursor: pointer; color: var(--navy);
    transition: background 0.2s;
    -webkit-tap-highlight-color: transparent;
  }
  .hamburger:hover { background: var(--cream-dark); }
  .hamburger.active { background: var(--navy); color: white; border-color: var(--navy); }

  /* Backdrop */
  .drawer-backdrop {
    position: fixed; inset: 0;
    background: rgba(13,30,59,0.5); backdrop-filter: blur(4px);
    z-index: 600; animation: bIn 0.22s var(--ease);
  }
  @keyframes bIn { from { opacity: 0; } to { opacity: 1; } }

  /* Drawer */
  .mobile-drawer {
    position: fixed; top: 0; right: 0;
    width: min(300px, 80vw); height: 100dvh;
    background: var(--cream-light);
    z-index: 700; display: flex; flex-direction: column;
    padding: 1.5rem 1.5rem 2rem;
    transform: translateX(105%);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
    box-shadow: -24px 0 60px rgba(13,30,59,0.18);
  }
  .mobile-drawer.open { transform: translateX(0); }

  .drawer-header {
    display: flex; align-items: center; justify-content: space-between;
    padding-bottom: 1.5rem; border-bottom: 1px solid var(--border); margin-bottom: 1.5rem;
  }
  .drawer-close {
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    background: var(--cream-dark); border: none; border-radius: 50%;
    cursor: pointer; color: var(--navy);
    transition: background 0.2s, color 0.2s;
    -webkit-tap-highlight-color: transparent;
  }
  .drawer-close:hover { background: var(--navy); color: white; }

  .drawer-nav { display: flex; flex-direction: column; gap: 0.2rem; flex: 1; }
  .drawer-link {
    display: flex; align-items: center; gap: 1rem;
    padding: 0.95rem 0.75rem;
    text-decoration: none;
    border-radius: var(--r-sm); border-bottom: 1px solid var(--border);
    animation: sIn 0.3s var(--ease) both;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.18s, padding-left 0.18s;
    min-height: 52px; /* comfortable tap target */
  }
  .mobile-drawer.open .drawer-link { animation-name: sIn; }
  @keyframes sIn { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: none; } }
  .drawer-link:hover { background: var(--cream-dark); padding-left: 1.2rem; }
  .drawer-num { font-size: 0.65rem; font-weight: 700; color: var(--gold); letter-spacing: 1px; }
  .drawer-label { font-size: 1.1rem; font-weight: 700; color: var(--navy); }

  .drawer-footer { padding-top: 1.5rem; }
  .full-w { width: 100%; justify-content: center; border-radius: var(--r-md); padding: 1rem; }
  .drawer-sub {
    margin-top: 1rem; font-size: 0.7rem; font-weight: 600;
    text-align: center; color: var(--text-muted);
    text-transform: uppercase; letter-spacing: 1.2px;
  }

  @media (max-width: 860px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .nav-inner { padding: 1rem 1.25rem; }
  }
</style>
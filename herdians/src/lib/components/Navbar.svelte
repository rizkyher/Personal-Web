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

    <!-- Desktop links -->
    <ul class="nav-links">
      {#each navItems as item}
        <li><a href="#{item.toLowerCase()}">{item}</a></li>
      {/each}
      <li>
        <a href="#contact" class="nav-cta">Hire Me</a>
      </li>
    </ul>

    <!-- Hamburger -->
    <button
      class="hamburger"
      class:active={menuOpen}
      onclick={() => menuOpen = !menuOpen}
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    >
      {#if menuOpen}
        <X size={22} />
      {:else}
        <Menu size={22} />
      {/if}
    </button>
  </div>
</nav>

<!-- Mobile drawer backdrop -->
{#if menuOpen}
  <div class="drawer-backdrop" onclick={closeMenu} aria-hidden="true"></div>
{/if}

<!-- Mobile drawer -->
<div class="mobile-drawer" class:open={menuOpen}>
  <div class="drawer-header">
    <span class="logo">r<em>herdians</em></span>
    <button class="drawer-close" onclick={closeMenu} aria-label="Close">
      <X size={20} />
    </button>
  </div>
  <nav class="drawer-nav">
    {#each navItems as item, i}
      <a
        href="#{item.toLowerCase()}"
        class="drawer-link"
        style="animation-delay:{i * 0.07}s"
        onclick={closeMenu}
      >
        <span class="drawer-num">0{i + 1}</span>
        {item}
      </a>
    {/each}
  </nav>
  <div class="drawer-footer">
    <a href="#contact" class="btn-primary" onclick={closeMenu}>Hire Me →</a>
  </div>
</div>

<style>
  .nav {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 500;
    transition: background 0.4s, box-shadow 0.4s, padding 0.3s;
  }
  .nav.scrolled {
    background: rgba(237, 232, 222, 0.88);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    box-shadow: 0 1px 0 rgba(27,59,111,0.08), 0 4px 24px rgba(27,59,111,0.06);
  }

  .nav-inner {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.35rem 2.5rem;
  }

  .logo {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 1.15rem;
    letter-spacing: 0.5px;
    text-decoration: none;
    color: var(--navy);
  }
  .logo em { font-style: italic; color: var(--gold); }

  /* Desktop nav */
  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
  .nav-links a {
    text-decoration: none;
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    position: relative;
    padding-bottom: 3px;
    
    /* === UBAH BAGIAN INI === */
    color: #ffffff; /* Gunakan putih murni */
    mix-blend-mode: difference; /* Ini magic-nya */
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 1.5px;
    /* === UBAH WARNA GARIS BAWAH AGAR IKUT BLEND (Opsional) === */
    background: #ffffff; 
    transition: width 0.3s var(--ease);
  }
  .nav-links a:hover::after { width: 100%; }

  .nav-cta {
    padding: 0.5rem 1.25rem !important;
    background: var(--navy);
    color: var(--cream-light) !important;
    border-radius: var(--radius-full);
    letter-spacing: 1px !important;
    transition: background 0.25s, transform 0.25s !important;
    
    /* === TAMBAHKAN INI === */
    mix-blend-mode: normal; /* Kembalikan ke normal agar tombol tidak ikut transparan/berubah warna */
  }
  .nav-cta:hover { background: var(--navy-dark) !important; transform: translateY(-2px); }
  .nav-cta::after { display: none !important; }

  /* Hamburger */
  .hamburger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px; height: 40px;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    cursor: pointer;
    color: var(--navy);
    transition: background 0.2s, transform 0.2s;
  }
  .hamburger:hover { background: var(--cream-dark); }
  .hamburger.active { background: var(--navy); color: var(--cream-light); }

  /* Backdrop */
  .drawer-backdrop {
    position: fixed; inset: 0;
    background: rgba(13, 30, 59, 0.45);
    backdrop-filter: blur(3px);
    z-index: 600;
    animation: fadeIn 0.25s var(--ease);
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  /* Mobile drawer */
  .mobile-drawer {
    position: fixed;
    top: 0; right: 0;
    width: min(320px, 82vw);
    height: 100dvh;
    background: var(--cream-light);
    z-index: 700;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    transform: translateX(105%);
    transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -20px 0 60px rgba(13,30,59,0.18);
  }
  .mobile-drawer.open { transform: translateX(0); }

  .drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  .drawer-close {
    width: 36px; height: 36px;
    display: flex; align-items: center; justify-content: center;
    background: var(--cream-dark);
    border: none; border-radius: 50%;
    cursor: pointer; color: var(--navy);
    transition: background 0.2s;
  }
  .drawer-close:hover { background: var(--navy); color: white; }

  .drawer-nav {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }
  .drawer-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0.75rem;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--navy);
    border-radius: var(--radius-sm);
    border-bottom: 1px solid var(--border);
    transition: background 0.2s, color 0.2s, padding-left 0.2s;
    animation: slideIn 0.35s var(--ease) both;
  }
  .mobile-drawer.open .drawer-link { animation-name: slideIn; }
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(20px); }
    to   { opacity: 1; transform: none; }
  }
  .drawer-link:hover { background: var(--cream-dark); padding-left: 1.25rem; }
  .drawer-num { font-size: 0.7rem; font-weight: 700; color: var(--gold); letter-spacing: 1px; }

  .drawer-footer { padding-top: 2rem; }
  .drawer-footer .btn-primary { width: 100%; justify-content: center; border-radius: var(--radius-md); }

  @media (max-width: 860px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .nav-inner { padding: 1.1rem 1.5rem; }
  }
</style>

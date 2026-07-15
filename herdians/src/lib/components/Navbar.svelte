<script lang="ts">
  import { Menu, X, Moon, Sun } from 'lucide-svelte';
  import { i18n, type Lang } from '$lib/i18n.svelte';
  import { theme } from '$lib/theme.svelte';

  let { scrollY = 0 } = $props();
  let menuOpen = $state(false);

  const navItems = $derived([
    { label: i18n.t.nav.items[0], href: 'home' },
    { label: i18n.t.nav.items[1], href: 'about' },
    { label: i18n.t.nav.items[2], href: 'portfolio' },
    { label: i18n.t.nav.items[3], href: 'hire-me' },
    { label: i18n.t.nav.items[4], href: 'contact' },
  ]);

  const langs: { code: Lang; label: string }[] = [
    { code: 'id', label: 'ID' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  function closeMenu() { menuOpen = false; }
</script>

<nav class="nav" class:scrolled={scrollY > 60}>
  <div class="nav-inner">
    <a href="/" class="logo" onclick={closeMenu}>r<em>herdians</em></a>

    <ul class="nav-links">
      {#each navItems as item}
        <li><a href="#{item.href}">{item.label}</a></li>
      {/each}
      <li><a href="#hire-me" class="nav-cta">{i18n.t.nav.hire}</a></li>
    </ul>

    <div class="nav-end">
      <div class="lang-switcher desktop-lang">
        {#each langs as l}
          <button
            class="lang-btn"
            class:active={i18n.lang === l.code}
            onclick={() => i18n.setLang(l.code)}
            aria-label={l.label}
          >{l.label}</button>
        {/each}
      </div>

      <button
        class="theme-toggle"
        onclick={theme.toggle}
        aria-label={theme.dark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {#if theme.dark}<Sun size={16} />{:else}<Moon size={16} />{/if}
      </button>

      <button
        class="hamburger" class:active={menuOpen}
        onclick={() => menuOpen = !menuOpen}
        aria-label={menuOpen ? i18n.t.nav.closeMenu : i18n.t.nav.openMenu}
      >
        {#if menuOpen}<X size={20} />{:else}<Menu size={20} />{/if}
      </button>
    </div>
  </div>
</nav>

{#if menuOpen}
  <div class="drawer-backdrop" onclick={closeMenu} aria-hidden="true"></div>
{/if}

<div class="mobile-drawer" class:open={menuOpen} role="dialog" aria-modal="true" aria-label="Navigation menu">
  <div class="drawer-header">
    <span class="logo">r<em>herdians</em></span>
    <button class="drawer-close" onclick={closeMenu} aria-label={i18n.t.nav.closeMenu}>
      <X size={18} />
    </button>
  </div>

  <nav class="drawer-nav">
    {#each navItems as item, i}
      <a
        href="#{item.href}"
        class="drawer-link"
        style="animation-delay:{i * 0.06}s"
        onclick={closeMenu}
      >
        <span class="drawer-num">0{i + 1}</span>
        <span class="drawer-label">{item.label}</span>
      </a>
    {/each}
  </nav>

  <div class="drawer-footer">
    <a href="#hire-me" class="btn-primary full-w" onclick={closeMenu}>
      {i18n.t.nav.hire} →
    </a>

    <div class="drawer-controls">
      <div class="lang-switcher mobile-lang">
        {#each langs as l}
          <button
            class="lang-btn"
            class:active={i18n.lang === l.code}
            onclick={() => i18n.setLang(l.code)}
            aria-label={l.label}
          >{l.label}</button>
        {/each}
      </div>

      <button
        class="theme-toggle drawer-theme-btn"
        onclick={theme.toggle}
        aria-label={theme.dark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {#if theme.dark}<Sun size={16} />{:else}<Moon size={16} />{/if}
      </button>
    </div>

    <p class="drawer-sub">{i18n.t.nav.location}</p>
  </div>
</div>

<style>
  .nav {
    position: fixed; width: 100%; top: 0; z-index: 500;
    transition: background 0.4s, box-shadow 0.4s;
  }
  .nav.scrolled {
    background: rgba(235, 243, 248, 0.9);
    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 0 rgba(10, 65, 116, 0.08), 0 4px 20px rgba(10, 65, 116, 0.05);
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
    color: var(--navy);
    position: relative; padding-bottom: 3px;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 0; height: 1.5px; background: var(--navy);
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

  /* Nav end group (lang switcher + hamburger) */
  .nav-end { display: flex; align-items: center; gap: 0.75rem; }

  /* Language switcher */
  .lang-switcher {
    display: flex; gap: 0.2rem; align-items: center;
    background: rgba(235, 243, 248, 0.7);
    border: 1px solid rgba(10, 65, 116, 0.12);
    border-radius: var(--r-full); padding: 0.22rem;
  }
  .lang-btn {
    padding: 0.28rem 0.6rem; border-radius: var(--r-full);
    font-size: 0.65rem; font-weight: 700; letter-spacing: 1px;
    text-transform: uppercase; border: none;
    background: transparent; color: var(--navy);
    cursor: pointer;
    transition: background 0.18s, color 0.18s;
    -webkit-tap-highlight-color: transparent;
    mix-blend-mode: normal;
    line-height: 1;
  }
  .lang-btn.active { background: var(--navy); color: var(--white); }

  .mobile-lang {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.12);
    margin-top: 0.75rem;
  }
  .mobile-lang .lang-btn { color: rgba(255, 255, 255, 0.7); }
  .mobile-lang .lang-btn.active { background: var(--gold); color: var(--navy-dark); }

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
    background: rgba(0, 29, 57, 0.5); backdrop-filter: blur(4px);
    z-index: 600; animation: bIn 0.22s var(--ease);
  }
  @keyframes bIn { from { opacity: 0; } to { opacity: 1; } }

  /* Drawer */
  .mobile-drawer {
    position: fixed; top: 0; right: 0;
    width: min(300px, 80vw); height: 100dvh;
    background: rgba(0, 29, 57, 0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 700; display: flex; flex-direction: column;
    padding: 1.5rem 1.5rem 2rem;
    transform: translateX(105%);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
    box-shadow: -24px 0 60px rgba(0, 29, 57, 0.4);
  }
  .mobile-drawer.open { transform: translateX(0); }

  /* RTL: drawer slides from left */
  :global(html[dir="rtl"]) .mobile-drawer {
    right: auto; left: 0;
    border-left: none; border-right: 1px solid rgba(255, 255, 255, 0.08);
    transform: translateX(-105%);
    box-shadow: 24px 0 60px rgba(0, 29, 57, 0.4);
  }
  :global(html[dir="rtl"]) .mobile-drawer.open { transform: translateX(0); }

  .drawer-header {
    display: flex; align-items: center; justify-content: space-between;
    padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 1.5rem;
  }
  .drawer-header .logo { color: #fff; }
  .drawer-close {
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255, 255, 255, 0.1); border: none; border-radius: 50%;
    cursor: pointer; color: #fff;
    transition: background 0.2s, color 0.2s, transform 0.2s;
    -webkit-tap-highlight-color: transparent;
  }
  .drawer-close:hover { background: var(--gold); color: var(--navy-dark); transform: scale(1.05); }

  .drawer-nav { display: flex; flex-direction: column; gap: 0.2rem; flex: 1; }
  .drawer-link {
    display: flex; align-items: center; gap: 1rem;
    padding: 0.95rem 0.75rem;
    text-decoration: none;
    border-radius: var(--r-sm); border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    animation: sIn 0.3s var(--ease) both;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.18s, padding-left 0.18s;
    min-height: 52px;
  }
  .mobile-drawer.open .drawer-link { animation-name: sIn; }
  @keyframes sIn { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: none; } }
  :global(html[dir="rtl"]) .drawer-link { transition: background 0.18s, padding-right 0.18s; }
  :global(html[dir="rtl"]) .mobile-drawer.open .drawer-link { animation-name: sInRtl; }
  @keyframes sInRtl { from { opacity: 0; transform: translateX(-18px); } to { opacity: 1; transform: none; } }
  .drawer-link:hover { background: rgba(255, 255, 255, 0.05); padding-left: 1.2rem; }
  :global(html[dir="rtl"]) .drawer-link:hover { padding-left: 0.75rem; padding-right: 1.2rem; }
  .drawer-num { font-size: 0.65rem; font-weight: 700; color: var(--gold); letter-spacing: 1px; }
  .drawer-label { font-size: 1.1rem; font-weight: 700; color: #fff; }

  .drawer-footer { padding-top: 1.5rem; }
  .full-w { width: 100%; justify-content: center; border-radius: var(--r-md); padding: 1rem; }
  .drawer-sub {
    margin-top: 0.75rem; font-size: 0.7rem; font-weight: 600;
    text-align: center; color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase; letter-spacing: 1.2px;
  }

  /* Theme toggle */
  .theme-toggle {
    width: 38px; height: 38px;
    display: flex; align-items: center; justify-content: center;
    background: var(--cream-dark);
    border: 1.5px solid var(--border);
    border-radius: var(--r-full);
    cursor: pointer; color: var(--navy);
    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
    -webkit-tap-highlight-color: transparent;
    flex-shrink: 0;
  }
  .theme-toggle:hover { background: var(--cream); transform: rotate(15deg); }

  /* Drawer controls row (lang + theme toggle) */
  .drawer-controls {
    display: flex; align-items: center; justify-content: space-between;
    gap: 0.75rem; margin-top: 0.75rem;
  }
  .drawer-controls .mobile-lang { margin-top: 0; flex: 1; }

  .drawer-theme-btn {
    color: rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.15);
  }
  .drawer-theme-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: rotate(12deg);
  }

  @media (max-width: 860px) {
    .nav-links { display: none; }
    .desktop-lang { display: none; }
    .hamburger { display: flex; }
    .nav-inner { padding: 1rem 1.25rem; }
  }

  /* ── Dark mode overrides ── */
  :global([data-theme="dark"]) .nav.scrolled {
    background: rgba(9, 20, 31, 0.92);
    box-shadow: 0 1px 0 rgba(197, 227, 247, 0.06), 0 4px 20px rgba(0, 0, 0, 0.35);
  }
  :global([data-theme="dark"]) .lang-switcher {
    background: rgba(197, 227, 247, 0.06);
    border-color: rgba(197, 227, 247, 0.12);
  }
  :global([data-theme="dark"]) .lang-btn { color: var(--navy-mid); }
  :global([data-theme="dark"]) .hamburger {
    border-color: rgba(197, 227, 247, 0.15);
  }
  :global([data-theme="dark"]) .hamburger:hover { background: var(--cream-dark); }
  :global([data-theme="dark"]) .hamburger.active {
    background: var(--navy-mid); border-color: var(--navy-mid); color: var(--cream-light);
  }
  :global([data-theme="dark"]) .nav-cta {
    background: #1D4D6E !important;
    color: #C5E3F7 !important;
  }
  :global([data-theme="dark"]) .nav-cta:hover { background: #163D57 !important; }
  :global([data-theme="dark"]) .theme-toggle {
    border-color: rgba(197, 227, 247, 0.15);
  }
  :global([data-theme="dark"]) .theme-toggle:hover { background: var(--cream-dark); }
</style>

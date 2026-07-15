<script lang="ts">
  import { onMount } from "svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Marquee from "$lib/components/Marquee.svelte";
  import About from "$lib/components/About.svelte";
  import Services from "$lib/components/Services.svelte";
  import Portfolio from "$lib/components/Portfolio.svelte";
  import Testimonials from "$lib/components/Testimonials.svelte";
  import Philosophy from "$lib/components/Philosophy.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import HireMe from "$lib/components/HireMe.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { i18n, type Lang } from "$lib/i18n.svelte";
  import { theme } from "$lib/theme.svelte";

  let scrollY = $state(0);
  let scrollProgress = $state(0);
  let cursorX = $state(0);
  let cursorY = $state(0);
  let cursorVisible = $state(false);
  let cursorHovering = $state(false);

  $effect(() => {
    document.documentElement.setAttribute("dir", i18n.dir);
    document.documentElement.setAttribute("lang", i18n.lang);
    localStorage.setItem("lang", i18n.lang);
  });

  $effect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme.dark ? "dark" : "light",
    );
    localStorage.setItem("theme", theme.dark ? "dark" : "light");
  });

  onMount(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "ar" || saved === "id") {
      i18n.setLang(saved);
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") theme.set(true);
    else if (
      !savedTheme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      theme.set(true);

    const onScroll = () => {
      scrollY = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = max > 0 ? (scrollY / max) * 100 : 0;
    };
    const onMove = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursorVisible = true;
    };
    const onLeave = () => {
      cursorVisible = false;
    };

    const onHoverIn = (e: MouseEvent) => {
      if (
        (e.target as Element).closest("a") ||
        (e.target as Element).closest("button")
      ) {
        cursorHovering = true;
      }
    };
    const onHoverOut = (e: MouseEvent) => {
      if (
        (e.target as Element).closest("a") ||
        (e.target as Element).closest("button")
      ) {
        cursorHovering = false;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);
    document.body.addEventListener("mouseover", onHoverIn);
    document.body.addEventListener("mouseout", onHoverOut);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.07 },
    );
    const observe = () =>
      document
        .querySelectorAll(".reveal:not(.visible)")
        .forEach((el) => io.observe(el));
    observe();
    setTimeout(observe, 300);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
      document.body.removeEventListener("mouseover", onHoverIn);
      document.body.removeEventListener("mouseout", onHoverOut);
      io.disconnect();
    };
  });
</script>

<div class="progress-bar" style="width:{scrollProgress}%"></div>
<div
  class="cursor-dot"
  style="left:{cursorX}px;top:{cursorY}px;opacity:{cursorVisible ? 1 : 0}"
></div>
<div
  class="cursor-ring"
  class:hovering={cursorHovering}
  style="left:{cursorX}px;top:{cursorY}px;opacity:{cursorVisible ? 0.5 : 0}"
></div>
<div class="noise" aria-hidden="true"></div>

<Navbar {scrollY} />
<main>
  <Hero />
  <Marquee />
  <About />
  <Services />
  <Portfolio />
  <!-- <Testimonials /> -->
  <HireMe />
  <Philosophy />
  <Contact />
</main>
<Footer />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap");

  :global(:root) {
    --navy: #0a4174;
    --navy-mid: #49769f;
    --navy-dark: #001d39;
    --cream: #ebf3f8;
    --cream-dark: #bdd8e9;
    --cream-light: #f5f9fc;
    --white: #ffffff;
    --gold: #4e8ea2;
    --gold-lt: #7bbde8;
    --text-muted: #6ea2b3;
    --text-body: #0a4174;
    --border: rgba(10, 65, 116, 0.15);
    --ease: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    --r-sm: 8px;
    --r-md: 16px;
    --r-lg: 24px;
    --r-xl: 32px;
    --r-full: 999px;
    /* Phosphor icon size helper */
    --icon-sm: 18px;
    --icon-md: 24px;
  }

  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(html) {
    scroll-behavior: smooth;
  }
  :global(body) {
    font-family: "DM Sans", sans-serif;
    background: var(--cream);
    color: var(--navy);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Reveal ── */
  :global(.reveal) {
    opacity: 0;
    transform: translateY(22px);
    transition:
      opacity 0.75s var(--ease),
      transform 0.75s var(--ease);
  }
  :global(.reveal.visible) {
    opacity: 1;
    transform: none;
  }
  :global(.d1) {
    transition-delay: 0.1s !important;
  }
  :global(.d2) {
    transition-delay: 0.2s !important;
  }
  :global(.d3) {
    transition-delay: 0.3s !important;
  }

  /* ── Shared typography ── */
  :global(.eyebrow) {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  :global(.eyebrow::before) {
    content: "";
    display: inline-block;
    width: 16px;
    height: 1.5px;
    background: var(--gold);
    flex-shrink: 0;
  }
  :global(.section-title) {
    font-family: "Playfair Display", serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 900;
    line-height: 1.1;
    color: var(--navy);
    margin-bottom: 1.5rem;
  }
  :global(.section-title em) {
    font-style: italic;
    color: var(--gold);
  }

  /* ── Shared buttons ── */
  :global(.btn-primary) {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 2rem;
    background: var(--navy);
    color: var(--cream-light);
    border: none;
    border-radius: var(--r-full);
    font-family: "DM Sans", sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition:
      transform 0.25s var(--ease),
      box-shadow 0.25s,
      background 0.25s;
  }
  :global(.btn-primary:hover) {
    transform: translateY(-3px);
    box-shadow: 0 14px 32px rgba(27, 59, 111, 0.28);
    background: var(--navy-dark);
  }
  :global(.btn-outline) {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.82rem 1.8rem;
    border: 1.5px solid var(--navy);
    color: var(--navy);
    border-radius: var(--r-full);
    font-family: "DM Sans", sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition:
      background 0.25s,
      color 0.25s,
      transform 0.25s;
  }
  :global(.btn-outline:hover) {
    background: var(--navy);
    color: var(--cream-light);
    transform: translateY(-2px);
  }

  /* ── Progress bar ── */
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--gold), var(--navy));
    z-index: 9999;
    transition: width 0.1s linear;
    pointer-events: none;
  }

  /* ── Cursor (desktop only) ── */
  .cursor-dot,
  .cursor-ring {
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
  }
  .cursor-dot {
    width: 7px;
    height: 7px;
    background: var(--navy);
    border-radius: 50%;
  }
  .cursor-ring {
    width: 28px;
    height: 28px;
    border: 1.5px solid var(--navy);
    border-radius: 50%;
    transition:
      left 0.1s var(--ease),
      top 0.1s var(--ease),
      opacity 0.3s,
      width 0.3s var(--ease),
      height 0.3s var(--ease),
      border-color 0.3s var(--ease);
  }
  .cursor-ring.hovering {
    width: 44px;
    height: 44px;
    border-color: var(--gold);
    border-width: 2px;
  }
  @media (pointer: coarse) {
    .cursor-dot,
    .cursor-ring {
      display: none;
    }
  }

  /* ── Noise ── */
  .noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9990;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
  }

  /* ── em styling inside @html content (scoped CSS can't reach dynamic HTML) ── */
  :global(.hero-desc em) {
    font-style: normal;
    font-weight: 600;
    color: var(--navy);
  }
  :global(.bio em) {
    font-style: italic;
    color: var(--navy);
  }

  /* ── Arabic (RTL) overrides ── */
  :global(html[lang="ar"]) :global(body) {
    font-family: "Cairo", sans-serif;
  }
  :global(html[lang="ar"]) :global(.section-title),
  :global(html[lang="ar"]) :global(.eyebrow) {
    font-family: "Cairo", sans-serif;
    font-style: normal;
  }

  /* Flip underline animations to start from right in RTL */
  :global(html[dir="rtl"]) :global(.btn-clean::after),
  :global(html[dir="rtl"]) :global(.hover-line::after),
  :global(html[dir="rtl"]) :global(.nav-links a::after) {
    left: auto;
    right: 0;
  }

  /* ── Dark Mode ── */
  :global([data-theme="dark"]) {
    --navy: #c5e3f7;
    --navy-mid: #7db8d8;
    --cream: #0c1b2a;
    --cream-dark: #172e42;
    --cream-light: #09141f;
    --white: #0f2338;
    --gold: #5bb8d4;
    --gold-lt: #88cce8;
    --text-muted: #78adcc;
    --text-body: #c5e3f7;
    --border: rgba(197, 227, 247, 0.1);
  }

  /* Buttons: --navy is now light, so override button backgrounds */
  :global([data-theme="dark"]) :global(.btn-primary) {
    background: #1d4d6e;
    color: #c5e3f7;
  }
  :global([data-theme="dark"]) :global(.btn-primary:hover) {
    background: #163d57;
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
  }
  :global([data-theme="dark"]) :global(.btn-outline) {
    border-color: rgba(197, 227, 247, 0.25);
  }
  :global([data-theme="dark"]) :global(.btn-outline:hover) {
    background: #1d4d6e;
    color: #c5e3f7;
  }

  /* Hero: keep the panel dark, update dot grid, divider, social borders */
  :global([data-theme="dark"]) :global(.hero-bg-panel) {
    background: linear-gradient(155deg, #0d2d45 0%, #001828 100%);
  }
  :global([data-theme="dark"]) :global(.dot-grid) {
    background-image: radial-gradient(
      circle,
      rgba(197, 227, 247, 0.07) 1px,
      transparent 1px
    );
  }
  :global([data-theme="dark"]) :global(.role-line) {
    background: rgba(197, 227, 247, 0.12);
  }
  :global([data-theme="dark"]) :global(.social-row a) {
    border-color: rgba(197, 227, 247, 0.15);
  }
  :global([data-theme="dark"]) :global(.avatar-ring) {
    border-color: rgba(197, 227, 247, 0.2);
  }

  /* Progress bar: keep accent gradient visible on dark */
  :global([data-theme="dark"]) .progress-bar {
    background: linear-gradient(90deg, var(--gold), var(--gold-lt));
  }

  /* Cursor: invert to match dark bg */
  :global([data-theme="dark"]) .cursor-dot {
    background: var(--navy);
  }
  :global([data-theme="dark"]) .cursor-ring {
    border-color: var(--navy);
  }
</style>

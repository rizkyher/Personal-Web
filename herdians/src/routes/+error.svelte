<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';

  function goHome(e: MouseEvent) {
    e.preventDefault();
    window.location.href = '/';
  }
</script>

<svelte:head>
  <title>{$page.status} — Rizky Herdiansyah</title>
</svelte:head>

<div class="error-wrap">
  <div class="noise" aria-hidden="true"></div>

  <div class="error-inner">
    <div class="status-badge">
      <span class="pulse-dot"></span>
      {$page.status === 404 ? 'Page Not Found' : 'Something went wrong'}
    </div>

    <h1 class="error-code">{$page.status}</h1>

    <p class="error-msg">
      {#if $page.status === 404}
        Halaman yang kamu cari tidak ditemukan atau sudah dipindahkan.
      {:else}
        {$page.error?.message ?? 'Terjadi kesalahan yang tidak terduga.'}
      {/if}
    </p>

    <a href="/" class="btn-home" onclick={goHome}>
      <Icon icon="ph:arrow-left-bold" width="16" height="16" />
      Kembali ke Beranda
    </a>
  </div>

  <div class="watermark" aria-hidden="true">{$page.status}</div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,700&family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700&display=swap');

  .error-wrap {
    min-height: 100svh; display: flex; align-items: center; justify-content: center;
    background: linear-gradient(155deg, #0A4174 0%, #001D39 100%);
    position: relative; overflow: hidden; text-align: center; padding: 2rem;
    font-family: 'DM Sans', sans-serif;
  }
  .error-wrap::before {
    content: ''; position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 26px 26px; pointer-events: none;
  }

  .noise {
    position: fixed; inset: 0; pointer-events: none; opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
  }

  .error-inner {
    position: relative; z-index: 2;
    display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
  }

  .status-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.4rem 1.1rem;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
    border-radius: 999px; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.7);
  }
  .pulse-dot {
    width: 7px; height: 7px; background: #ef4444; border-radius: 50%;
    position: relative; flex-shrink: 0;
  }
  .pulse-dot::after {
    content: ''; position: absolute; inset: -3px;
    background: rgba(239,68,68,0.3); border-radius: 50%;
    animation: pulse 2s ease-out infinite;
  }
  @keyframes pulse { 0%{transform:scale(1);opacity:1} 100%{transform:scale(2.2);opacity:0} }

  .error-code {
    font-family: 'Playfair Display', serif;
    font-size: clamp(6rem, 18vw, 12rem);
    font-weight: 900; line-height: 0.9;
    color: #fff; margin: 0;
    animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
  }
  @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }

  .error-msg {
    font-size: 1rem; color: rgba(255,255,255,0.6); line-height: 1.7;
    max-width: 380px; margin: 0;
    animation: fadeUp 0.7s 0.1s cubic-bezier(0.4,0,0.2,1) both;
  }

  .btn-home {
    display: inline-flex; align-items: center; gap: 0.6rem;
    padding: 0.9rem 2rem; margin-top: 0.5rem;
    background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.2);
    border-radius: 999px; color: #fff; text-decoration: none;
    font-size: 0.85rem; font-weight: 700; letter-spacing: 0.5px;
    transition: background 0.25s, border-color 0.25s, transform 0.25s;
    animation: fadeUp 0.7s 0.2s cubic-bezier(0.4,0,0.2,1) both;
    -webkit-tap-highlight-color: transparent;
  }
  .btn-home:hover {
    background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.4);
    transform: translateY(-2px);
  }

  .watermark {
    position: absolute; bottom: -4vw; left: 50%; transform: translateX(-50%);
    font-family: 'Playfair Display', serif;
    font-size: 30vw; font-weight: 900; line-height: 1;
    color: transparent; -webkit-text-stroke: 1.5px rgba(255,255,255,0.04);
    user-select: none; pointer-events: none; white-space: nowrap;
  }
</style>

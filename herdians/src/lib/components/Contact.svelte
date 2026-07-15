<script>
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';
  import toast, { Toaster } from 'svelte-french-toast';
  import { i18n } from '$lib/i18n.svelte';

  let formData    = $state({ name: '', email: '', subject: '', message: '' });
  let sending     = $state(false);
  let sent        = $state(false);
  let currentTime = $state('');

  onMount(() => {
    const update = () => {
      currentTime = new Intl.DateTimeFormat(i18n.t.contact.locale, {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit', minute: '2-digit', hour12: true
      }).format(new Date());
    };
    update();
    const iv = setInterval(update, 10000);
    return () => clearInterval(iv);
  });

  $effect(() => {
    void i18n.lang; // re-run when lang changes to refresh time format
    currentTime = new Intl.DateTimeFormat(i18n.t.contact.locale, {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit', minute: '2-digit', hour12: true
    }).format(new Date());
  });

  /**
   * @param {SubmitEvent} e
   */
  async function handleSubmit(e) {
    e.preventDefault();
    sending = true;
    const { toast: t } = i18n.t.contact;

    const toastId = toast.loading(t.loading, {
      style: "background:#0A4174;color:#fff;font-family:'DM Sans',sans-serif;font-size:0.9rem;",
      iconTheme: { primary: '#4E8EA2', secondary: '#0A4174' }
    });

    try {
      const res    = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const result = await res.json();

      if (res.ok && result.success) {
        sent = true;
        formData = { name: '', email: '', subject: '', message: '' };
        toast.success(t.success, { id: toastId, duration: 4000, style: "background:#0A4174;color:#fff;font-family:'DM Sans',sans-serif;font-size:0.9rem;", iconTheme: { primary: '#4ade80', secondary: '#0A4174' } });
      } else {
        toast.error(result.message || t.error, { id: toastId, style: "background:#0A4174;color:#fff;font-family:'DM Sans',sans-serif;", iconTheme: { primary: '#ef4444', secondary: '#0A4174' } });
      }
    } catch {
      toast.error(t.networkError, { id: toastId, style: "background:#0A4174;color:#fff;font-family:'DM Sans',sans-serif;", iconTheme: { primary: '#ef4444', secondary: '#0A4174' } });
    } finally {
      sending = false;
    }
  }
</script>

<Toaster position="bottom-right" />

<section id="contact" class="contact-section">
  <div class="aurora-wrap" aria-hidden="true">
    <div class="aurora-orb orb-1"></div>
    <div class="aurora-orb orb-2"></div>
  </div>

  <div class="marquee-bg" aria-hidden="true">
    <div class="marquee-track">
      <span>LET'S BUILD SOMETHING GREAT — </span>
      <span>LET'S BUILD SOMETHING GREAT — </span>
    </div>
  </div>

  <div class="contact-inner">

    <!-- ── Left ── -->
    <div class="contact-left reveal">
      <div class="status-widget">
        <div class="status-indicator">
          <span class="live-dot"></span>
          {i18n.t.contact.status}
        </div>
        <div class="time-indicator">
          <Icon icon="ph:globe-hemisphere-east-duotone" width="14" height="14" />
          <span>Bandung — {currentTime}</span>
        </div>
      </div>

      <h2 class="massive-title">
        {i18n.t.contact.titleLine1}<br>
        <span class="text-gradient">{i18n.t.contact.titleLine2}</span>
      </h2>

      <p class="subtitle">{i18n.t.contact.subtitle}</p>

      <div class="direct-contacts">
        <a href="mailto:rizkyherdiansyah31@gmail.com" class="magnetic-link">
          <div class="link-content">
            <span class="link-label">{i18n.t.contact.emailLabel}</span>
            <span class="link-value">rizkyherdiansyah31@gmail.com</span>
          </div>
          <div class="link-arrow"><Icon icon="ph:arrow-up-right-bold" width="16" height="16" /></div>
        </a>

        <div class="divider-line"></div>

        <a href="https://wa.me/6285163554496" target="_blank" rel="noopener" class="magnetic-link">
          <div class="link-content">
            <span class="link-label">{i18n.t.contact.whatsappLabel}</span>
            <span class="link-value">+62 851 6355 4496</span>
          </div>
          <div class="link-arrow"><Icon icon="ph:whatsapp-logo-bold" width="16" height="16" /></div>
        </a>
      </div>
    </div>

    <!-- ── Right: Navy form ── -->
    <div class="contact-right reveal d1">
      <form class="navy-form" onsubmit={handleSubmit}>
        <div class="panel-texture"></div>

        <div class="form-content">
          {#if sent}
            <div class="success-state">
              <div class="success-icon">
                <Icon icon="ph:check-fat-duotone" width="72" height="72" />
              </div>
              <h3>{i18n.t.contact.success.title}</h3>
              <p>{i18n.t.contact.success.desc}</p>
              <button type="button" class="btn-outline-light" onclick={() => sent = false}>{i18n.t.contact.success.back}</button>
            </div>
          {:else}
            <div class="form-grid">
              <div class="input-wrap">
                <input type="text" id="cname" placeholder=" " bind:value={formData.name} required />
                <label for="cname">{i18n.t.contact.form.name}</label>
                <span class="focus-border"></span>
              </div>
              <div class="input-wrap">
                <input type="email" id="cemail" placeholder=" " bind:value={formData.email} required />
                <label for="cemail">{i18n.t.contact.form.email}</label>
                <span class="focus-border"></span>
              </div>
            </div>

            <div class="input-wrap">
              <input type="text" id="csubject" placeholder=" " bind:value={formData.subject} required />
              <label for="csubject">{i18n.t.contact.form.subject}</label>
              <span class="focus-border"></span>
            </div>

            <div class="input-wrap">
              <textarea id="cmsg" rows="4" placeholder=" " bind:value={formData.message} required></textarea>
              <label for="cmsg">{i18n.t.contact.form.message}</label>
              <span class="focus-border"></span>
            </div>

            <button type="submit" class="btn-swipe" disabled={sending}>
              <span class="btn-text">{sending ? i18n.t.contact.form.submitting : i18n.t.contact.form.submit}</span>
              <span class="btn-swipe-bg"></span>
              <Icon
                icon={sending ? 'ph:spinner-gap-bold' : 'ph:paper-plane-tilt-fill'}
                width="18" height="18"
                class={sending ? 'spin' : 'fly-icon'}
              />
            </button>
          {/if}
        </div>
      </form>
    </div>

  </div>
</section>

<style>
  .contact-section {
    padding: 9rem 10%;
    background: var(--cream-dark);
    position: relative; overflow: hidden; z-index: 1;
  }

  /* Aurora */
  .aurora-wrap { position: absolute; inset: 0; z-index: -2; overflow: hidden; }
  .aurora-orb { position: absolute; border-radius: 50%; filter: blur(100px); animation: floatOrb 20s infinite alternate ease-in-out; }
  .orb-1 { width: 600px; height: 600px; background: rgba(73,118,159,0.08); top: -100px; right: -100px; }
  .orb-2 { width: 500px; height: 500px; background: rgba(124,148,184,0.15); bottom: -100px; left: -200px; animation-delay: -10s; }
  @keyframes floatOrb { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(-80px,80px) scale(1.1)} }

  /* Bg marquee */
  .marquee-bg { position: absolute; top: 15%; left: 0; width: 100%; z-index: -1; pointer-events: none; user-select: none; opacity: 0.1; }
  .marquee-track { display: flex; white-space: nowrap; animation: scrollBg 60s linear infinite; }
  .marquee-track span { font-family: 'Playfair Display', serif; font-size: 15vw; font-weight: 900; color: transparent; -webkit-text-stroke: 2px rgba(73,118,159,0.15); padding-right: 2rem; }
  @keyframes scrollBg { 100%{transform:translateX(-50%)} }

  /* Layout */
  .contact-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }

  /* Status widget */
  .status-widget {
    display: inline-flex; align-items: center; gap: 1.2rem;
    padding: 0.6rem 1.2rem; margin-bottom: 2.5rem;
    background: var(--white); border: 1px solid var(--border);
    border-radius: 100px; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 1.5px; color: var(--navy);
    box-shadow: 0 4px 15px rgba(10,65,116,0.05);
    flex-wrap: wrap; max-width: 100%;
  }
  .status-indicator { display: flex; align-items: center; gap: 0.5rem; }
  .live-dot { width: 6px; height: 6px; background: #22c55e; border-radius: 50%; animation: blink 1.5s infinite; flex-shrink: 0; }
  @keyframes blink { 50%{opacity:0.4} }
  .time-indicator { display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); border-left: 1px solid var(--border); padding-left: 1.2rem; }

  /* Title */
  .massive-title { font-family: 'Playfair Display', serif; font-size: clamp(2.6rem, 4.5vw, 4.5rem); font-weight: 900; line-height: 1.05; margin-bottom: 1.2rem; color: var(--navy); }
  .text-gradient { background: linear-gradient(to right, var(--navy), var(--gold)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-style: italic; }
  .subtitle { font-size: 1rem; line-height: 1.8; color: var(--text-body); max-width: 450px; margin-bottom: 3rem; }

  /* Magnetic links */
  .direct-contacts { display: flex; flex-direction: column; gap: 1.5rem; }
  .divider-line { height: 1px; background: rgba(10,65,116,0.1); width: 100%; max-width: 420px; }
  .magnetic-link { display: flex; align-items: center; justify-content: space-between; text-decoration: none; max-width: 420px; padding: 0.5rem 0; -webkit-tap-highlight-color: transparent; }
  .link-content { display: flex; flex-direction: column; gap: 0.3rem; min-width: 0; flex: 1; margin-right: 1rem; }
  .link-label { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; flex-shrink: 0; }
  .link-value { font-size: 1.15rem; color: var(--navy); font-weight: 600; transition: color 0.3s; word-break: break-all; }
  .link-arrow { width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--navy); flex-shrink: 0; transition: all 0.3s var(--ease); }
  .magnetic-link:hover .link-value { color: var(--gold); }
  .magnetic-link:hover .link-arrow { background: var(--navy); color: white; transform: scale(1.1) rotate(45deg); border-color: var(--navy); }

  /* Navy form */
  .navy-form {
    background: linear-gradient(155deg, var(--navy) 0%, #001D39 100%);
    border-radius: 28px; box-shadow: 0 30px 60px rgba(0,29,57,0.25);
    position: relative; overflow: hidden; min-height: 520px;
    display: flex; flex-direction: column; justify-content: center;
  }
  .panel-texture { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 22px 22px; pointer-events: none; z-index: 1; }
  .form-content { position: relative; z-index: 2; padding: 3.5rem; width: 100%; }

  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }

  /* Floating label inputs */
  .input-wrap { position: relative; margin-bottom: 2.5rem; }
  .input-wrap input, .input-wrap textarea { width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.2); padding: 0.5rem 0; font-family: 'DM Sans', sans-serif; font-size: 1.05rem; color: #fff; outline: none; resize: none; transition: border-color 0.3s; }
  .input-wrap label { position: absolute; left: 0; top: 0.5rem; font-size: 1rem; color: rgba(255,255,255,0.5); pointer-events: none; transition: all 0.4s var(--ease); }
  .input-wrap input:focus ~ label, .input-wrap textarea:focus ~ label,
  .input-wrap input:not(:placeholder-shown) ~ label, .input-wrap textarea:not(:placeholder-shown) ~ label { top: -16px; font-size: 0.7rem; color: var(--gold); text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }
  .focus-border { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 0; height: 1.5px; background: var(--gold); transition: width 0.4s var(--ease); }
  .input-wrap input:focus ~ .focus-border, .input-wrap textarea:focus ~ .focus-border { width: 100%; }

  /* Submit */
  .btn-swipe { position: relative; overflow: hidden; border: 1px solid rgba(255,255,255,0.2); background: transparent; padding: 1.2rem 2rem; border-radius: 100px; display: flex; align-items: center; justify-content: center; gap: 0.8rem; cursor: pointer; margin-top: 1rem; width: 100%; -webkit-tap-highlight-color: transparent; }
  .btn-swipe-bg { position: absolute; top: 0; left: -10%; width: 120%; height: 100%; background: var(--white); transform: translateX(-100%) skewX(-15deg); z-index: 0; transition: transform 0.5s var(--ease); }
  .btn-text, .btn-swipe :global(svg) { position: relative; z-index: 1; transition: color 0.4s; }
  .btn-text { font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 1.5px; }
  .btn-swipe :global(svg) { color: #fff; }
  .btn-swipe:hover:not(:disabled) .btn-swipe-bg { transform: translateX(0) skewX(0); }
  .btn-swipe:hover:not(:disabled) .btn-text, .btn-swipe:hover:not(:disabled) :global(svg) { color: var(--navy); }
  .btn-swipe:hover:not(:disabled) :global(.fly-icon) { transform: translateX(4px) translateY(-4px); }
  .btn-swipe:disabled { opacity: 0.6; cursor: not-allowed; }
  :global(.spin) { animation: spinIcon 1s linear infinite; }
  @keyframes spinIcon { 100%{transform:rotate(360deg)} }

  /* Success */
  .success-state { text-align: center; animation: fadeIn 0.6s ease forwards; }
  .success-icon { color: var(--gold); margin-bottom: 1.5rem; animation: scaleIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275); display: flex; justify-content: center; }
  .success-state h3 { font-family: 'Playfair Display', serif; font-size: 2.2rem; margin-bottom: 1rem; color: #fff; }
  .success-state p { color: rgba(255,255,255,0.7); line-height: 1.7; margin: 0 auto 2.5rem; max-width: 320px; font-size: 0.95rem; }
  .btn-outline-light { background: transparent; border: 1.5px solid rgba(255,255,255,0.3); color: #fff; padding: 0.8rem 2rem; border-radius: 50px; cursor: pointer; text-transform: uppercase; font-size: 0.8rem; font-weight: 700; letter-spacing: 1.5px; transition: 0.3s; }
  .btn-outline-light:hover { background: #fff; color: var(--navy); }
  @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
  @keyframes scaleIn { 0%{transform:scale(0)} 100%{transform:scale(1)} }

  /* ── Responsive ── */
  @media (max-width: 960px) {
    .contact-section { padding: 6rem 5%; }
    .contact-inner { grid-template-columns: 1fr; gap: 3.5rem; }
    /* Status pill: stack vertically */
    .status-widget { flex-direction: column; align-items: flex-start; gap: 0.7rem; border-radius: var(--r-lg); padding: 1rem 1.3rem; }
    .time-indicator { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 0.7rem; width: 100%; }
    .form-grid { grid-template-columns: 1fr; gap: 0; }
    .form-content { padding: 2.5rem 2rem; }
    .subtitle { max-width: 100%; }
    .direct-contacts { max-width: 100%; }
    .divider-line { max-width: 100%; }
    .magnetic-link { max-width: 100%; }
    .marquee-bg { display: none; }
  }

  @media (max-width: 480px) {
    .massive-title { font-size: 2.3rem; }
    .link-value { font-size: 0.95rem; }
    .form-content { padding: 2rem 1.5rem; }
    .navy-form { border-radius: var(--r-lg); }
    .success-state h3 { font-size: 1.7rem; }
  }
</style>
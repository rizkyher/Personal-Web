<script>
  const name = "Rizky Herdiansyah";
</script>

<section class="philosophy-section">
  <div class="philosophy-inner reveal">
    <!-- Decorative large quote mark -->
    <span class="quote-mark" aria-hidden="true">"</span>

    <blockquote class="quote-text">
      Kode yang baik bukan hanya yang bekerja — tapi yang mudah dipahami,
      dirawat, dan terus berkembang bersama kebutuhan pengguna.
    </blockquote>

    <footer class="quote-footer">
      <span class="quote-line"></span>
      <cite class="quote-author">
        {name} &nbsp;·&nbsp; Full Stack Philosophy
      </cite>
      <span class="quote-line"></span>
    </footer>

    <div class="deco-dots" aria-hidden="true">
      <span>✦</span><span>✦</span><span>✦</span>
    </div>
  </div>

  <!-- Background decoration -->
  <div class="bg-glow" aria-hidden="true"></div>
</section>

<style>
  .philosophy-section {
    background: var(--navy-dark);
    padding: 7rem 10%;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  /* Subtle dot grid on dark bg */
  .philosophy-section::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 26px 26px;
    pointer-events: none;
  }

  .bg-glow {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 60%; height: 60%;
    background: radial-gradient(ellipse, rgba(184,145,90,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .philosophy-inner {
    position: relative; z-index: 1;
    max-width: 760px;
    margin: 0 auto;
  }

  .quote-mark {
    font-family: 'Playfair Display', serif;
    font-size: 10rem;
    line-height: 0.7;
    color: rgba(184,145,90,0.18);
    display: block;
    margin-bottom: 1rem;
    user-select: none;
  }

  .quote-text {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.35rem, 2.4vw, 1.9rem);
    font-style: italic;
    font-weight: 400;
    color: rgba(255,255,255,0.88);
    line-height: 1.65;
    margin-bottom: 2rem;
  }

  .quote-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }
  .quote-line {
    flex: 1;
    max-width: 80px;
    height: 1px;
    background: rgba(255,255,255,0.15);
  }
  .quote-author {
    font-style: normal;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--gold);
  }

  .deco-dots {
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    color: var(--gold);
    font-size: 0.55rem;
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    .philosophy-section { padding: 5rem 6%; }
    .quote-mark { font-size: 6rem; }
  }
</style>

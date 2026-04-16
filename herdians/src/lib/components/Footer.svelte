<script>
  import Icon from '@iconify/svelte';

  const name = "Rizky Herdiansyah";
  const year = new Date().getFullYear();

  const socials = [
    { icon: 'mdi:instagram', href: 'https://www.instagram.com/r_herdians/', label: 'Instagram' },
    { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/rizky-herdiansyah-a237a4268/', label: 'LinkedIn' },
    { icon: 'ri:twitter-x-fill', href: '#', label: 'Twitter' },
    { icon: 'mdi:github', href: '#', label: 'GitHub' } // Saya ganti Facebook jadi GitHub karena lebih relevan untuk developer
  ];
</script>

<footer class="footer">
  <div class="footer-inner">
    
    <div class="footer-head">
      <a href="/" class="footer-logo">r<em>herdians</em></a>
      <div class="footer-contact">
        <a href="mailto:rizkyherdiansyah31@gmail.com" class="contact-link">
          <Icon icon="ph:envelope-simple-duotone" width="18" height="18" />
          rizkyherdiansyah31@gmail.com
        </a>
        <a href="https://wa.me/6285163554496" class="contact-link" target="_blank" rel="noopener">
          <Icon icon="ph:whatsapp-logo-duotone" width="18" height="18" />
          +62 851 6355 4496
        </a>
      </div>
    </div>

    <div class="divider"></div>

    <div class="footer-bottom">
      <p class="copyright">&copy; {year} {name}. All rights reserved.</p>
      
      <div class="socials">
        {#each socials as s}
          <a href={s.href} target="_blank" rel="noopener" aria-label={s.label} class="social-icon">
            <Icon icon={s.icon} width="20" height="20" />
          </a>
        {/each}
      </div>
    </div>

  </div>
</footer>

<style>
  .footer {
    background: var(--navy-dark);
    padding: 4rem 10% 3rem;
  }
  
  .footer-inner {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  /* --- Top Section --- */
  .footer-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.95);
    text-decoration: none;
    letter-spacing: 0.5px;
  }
  .footer-logo em { font-style: italic; color: var(--gold); }

  .footer-contact {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.2s;
  }
  .contact-link:hover {
    color: var(--gold);
  }

  /* --- Divider --- */
  .divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
  }

  /* --- Bottom Section --- */
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .copyright {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.4);
  }

  .socials {
    display: flex;
    gap: 1rem;
  }
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    transition: color 0.2s, transform 0.2s;
  }
  .social-icon:hover {
    color: var(--gold);
    transform: translateY(-2px);
  }

  /* --- Responsive --- */
  @media (max-width: 640px) {
    .footer {
      padding: 4rem 6% 2.5rem;
    }
    .footer-head {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }
    .footer-contact {
      flex-direction: column;
      gap: 1rem;
    }
    .footer-bottom {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
</style>
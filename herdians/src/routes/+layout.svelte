<script lang="ts">
    import './layout.css';

    let { children } = $props();
</script>

<svelte:head>
	<title>Rizky Herdiansyah | Full Stack Developer</title>
    <link rel="icon" href="/logo3.png" />
    <link rel="apple-touch-icon" href="/logo3.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Portofolio Rizky Herdiansyah - Full Stack Developer dengan pengalaman lebih dari 2 tahun, menggabungkan desain elegan dengan arsitektur kode yang tangguh." />
	<meta name="keywords" content="Rizky Herdiansyah, Full Stack Developer, Portofolio, Web Developer, Svelte, Laravel, Tailwind CSS" />
	<meta name="author" content="Rizky Herdiansyah" />
	<meta property="og:title" content="Rizky Herdiansyah | Full Stack Developer" />
	<meta property="og:description" content="Portofolio Rizky Herdiansyah - Full Stack Developer dengan pengalaman lebih dari 2 tahun, menggabungkan desain elegan dengan arsitektur kode yang tangguh." />
	<meta property="og:image" content="/rizky.jpeg" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://herdians.vercel.app/" />
	<link rel="canonical" href="https://herdians.vercel.app/" />
	<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Rizky Herdiansyah",
		"jobTitle": "Full Stack Developer",
		"url": "https://herdians.vercel.app",
		"email": "rizkyherdiansyah31@gmail.com",
		"telephone": "+6285163554496",
		"image": "https://herdians.vercel.app/rizky.jpeg",
		"description": "Full Stack Developer with 2+ years of experience building scalable web and mobile applications.",
		"knowsAbout": ["Svelte", "Laravel", "React", "Next.js", "Node.js", "Flutter", "Figma", "Tailwind CSS", "TypeScript"],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Bandung",
			"addressRegion": "West Java",
			"addressCountry": "ID"
		},
		"sameAs": [
			"https://github.com/rizkyher",
			"https://www.linkedin.com/in/rizkyherdiansyah/",
			"https://www.instagram.com/r_herdians/",
			"https://x.com/r_herdians"
		]
	})}</script>`}
</svelte:head>

{@render children()}
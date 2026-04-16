<script lang="ts">
    import './layout.css';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href="/logo2.png" />
    <link rel="apple-touch-icon" href="/logo2.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Portofolio Rizky Herdiansyah - Full Stack Developer dengan pengalaman lebih dari 2 tahun, menggabungkan desain elegan dengan arsitektur kode yang tangguh." />
	<meta name="keywords" content="Rizky Herdiansyah, Full Stack Developer, Portofolio, Web Developer, Svelte, Laravel, Tailwind CSS" />
	<meta name="author" content="Rizky Herdiansyah" />
</svelte:head>

{@render children()}
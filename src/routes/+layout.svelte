<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { page } from '$app/stores';

	let pages = {
		"/fixtures": "Fixtures & Results",
		"/golden-boot": "Golden Boot",
		"/tables": "Tables",
		"/gallery": "Gallery"
	}
</script>

<Header />

<main>
	<div class="main">
		{#if $page.url.pathname != "/"}
			<h1>{pages[$page.url.pathname]}</h1>
		{/if}
		<div class="slot">
			<slot />
		</div>
	</div>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-top: 0;
		width: min(100%, 1200px);
		margin: 0 auto;
		box-sizing: border-box;
	}

	.slot {
		margin-top: 10px;
	}
</style>

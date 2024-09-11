<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { page } from '$app/stores';

	let pages = {
		"/results": "Results",
		"/golden-boot": "Golden Boot",
		"/": "Tables"
	}
</script>

<Header />

<main>
	<div class="main">
		<h1>{pages[$page.url.pathname]}</h1>
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
		width: 100%;
		max-width: 1800px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.slot {
		margin-top: 10px;
	}
</style>

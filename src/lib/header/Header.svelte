<script>
	import { page } from '$app/stores';

	let visible = false;

	function handleMore() {
		visible = !visible;
	}

	function reset() {
		visible = false;
	}
</script>

<div class="header">
	<ul>
		<li class="branding desktop"><b>UniHall</b> Football</li>
		<li class="branding mobile"><b>UH</b>F</li>
		<li class:active={$page.url.pathname === '/'}><a on:click={reset} href="/" preload="true">Tables</a></li>
		<li class:active={$page.url.pathname === '/golden-boot'}><a on:click={reset} href="/golden-boot" preload="true">Golden Boot</a></li>
		<li class:active={$page.url.pathname === '/results'}><a on:click={reset} href="/results" preload="true">Results</a></li>
	</ul>
</div>

<style>
	.header {
		padding: 16px;
		margin: 0;
		width: 100%;
		background-color: #3f752e;
		color: #ffffff;
		font-size: 1.1em;
	}

	.mobile {
		display: none;
	}

	.active {
		color: #fdfb60;
	}

	b {
		font-size: 1em;
	}

	.branding {
		font-weight: 400;
		font-size: 1.3em;
		text-align: left;
		float: left;
	}

	ul {
		width: 100%;
		max-width: 1800px;
		padding: 0;
		margin: 0 auto;
		list-style-type: none;
		text-align: right;
	}

	li {
		display: inline;
		padding: 0 6px;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media screen and (max-width: 625px) {
		.desktop {
			display: none;
		}

		.mobile {
			display: inline;
		}
	}
</style>
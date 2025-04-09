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
	<ul class="flex">
		<a on:click={reset} href="/" preload="true">
			<div class="brand">
				<li class="branding desktop"><b>UniHall</b> Premier League</li>
				<li class="branding mobile">UPL</li>	
			</div>
		</a>
		<div class="links">
			<li class:active={$page.url.pathname === '/tables'}><a on:click={reset} href="/tables" preload="true">Tables</a></li>
			<li class:active={$page.url.pathname === '/golden-boot'}><a on:click={reset} href="/golden-boot" preload="true">Goals</a></li>
			<li class:active={$page.url.pathname === '/fixtures'}><a on:click={reset} href="/fixtures" preload="true">Fixtures</a></li>
			<li class:active={$page.url.pathname === '/gallery'}><a on:click={reset} href="/gallery" preload="true">Gallery</a></li>
		</div>
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
		position: fixed;
		left: 0;
		top: 0;
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
		vertical-align: middle;
	}

	.flex {
		width: min(100%, 1200px);
		padding: 0;
		margin: 0 auto;
		list-style-type: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
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
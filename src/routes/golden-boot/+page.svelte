<script>
	import { goalscorers } from "$lib/shared/stores/season.js";
	import { players } from "$lib/shared/stores/players.js";
</script>

<svelte:head>
	<title>UPL | Golden Boot</title>
</svelte:head>

<table>
	<tr><th>Player</th><th>Goals</th></tr>
	{#each $goalscorers as player}
		<tr><td class="flex"><img height="34px" src="./{$players.find(o => o.name === player[0]).club.toLowerCase()}.png" alt="{$players.find(o => o.name === player[0]).club}">{player[0]}</td><td>{player[1]}</td></tr>
	{/each}
</table>

<style>
	.flex {
		display: flex;
		align-items: center;
	}
	.flex > img {
		margin-right: 0.8em;
	}
	h2 {
		margin-top: 0;
		margin-bottom: 0;
		font-weight: 400;
	}
	.header {
		display: grid;
		width: 100%;
		grid-template-columns: 80px auto;
		grid-template-rows: 100%;
		padding: 1em 0;
	}
	.label {
		display: flex;
		align-items: center;
	}
</style>
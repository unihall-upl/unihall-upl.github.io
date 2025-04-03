<script>
	import { teams, recent } from "$lib/shared/stores/season.js";
</script>

<svelte:head>
	<title>UPL | Tables</title>
</svelte:head>

<table>
	<tr><th width="20px"></th><th style="text-align: left">Club</th><th width="20px">P</th><th width="20px">W</th><th width="20px">D</th><th width="20px">L</th><th width="20px">+/-</th><th width="20px"><b>Pts</b></th></tr>
	{#each Object.entries($teams) as [name, team]}
		<tr><td>{ team.position }</td><td class="flex" style="text-align: left"><img height="34px" src="./{name.toLowerCase()}.png" alt="{name}"><p>{name}</p></td><td>{team.played}</td><td>{team.won}</td><td>{team.drawn}</td><td>{team.lost}</td><td>{new Intl.NumberFormat("en-US", { signDisplay: "exceptZero"}).format(team.gd)}</td><td><b>{team.points}</b></td></tr>
	{/each}
</table>

<style>
	.flex {
		display: flex;
		align-items: center;
	}
	p {
		margin: 0;
		margin-left: 0.6em;
	}
	th, tr {
		text-align: center;
	}
</style>
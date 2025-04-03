<script>
	import FixtureBlock from "../lib/fixture-block/FixtureBlock.svelte";
	import Champions from "../lib/champions/Champions.svelte";
	import { teams, matches } from "$lib/shared/stores/season.js";
	
	let upcoming = [];
	let recent = [];

	$matches.forEach(match => {
		if (!match.played) {
			upcoming.push(match);
		} else {
			recent.push(match);
		}
	});
</script>

<svelte:head>
	<title>UniHall Premier League</title>
</svelte:head>

<Champions final={$matches.slice(-1)[0]} third={$matches.slice(-2, -1)[0]} />

{#if recent.length > 0}
<h2>Recent</h2>
<div class="upcoming">
	{#each recent as match}
		<FixtureBlock lhs={match.clubs[0]} rhs={match.clubs[1]} home={match.home} away={match.away} played={true} stage={match.stage} />
	{/each}	
</div>
{/if}


{#if upcoming.length > 0}
<h2>Upcoming</h2>
<div class="upcoming">
	{#each upcoming as match}
		<FixtureBlock lhs={match.clubs[0]} rhs={match.clubs[1]} played={false} stage={match.stage} />
	{/each}	
</div>
{/if}

<h2>Table</h2>
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
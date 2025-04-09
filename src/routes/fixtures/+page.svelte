<script>
	import { matches } from "$lib/shared/stores/season.js";
</script>

<svelte:head>
	<title>UPL | Results</title>
</svelte:head>

<table>
	<tr><th style="width: 15ch">Date</th><th style="width: 13ch">Location</th><th style="text-align: center; width: 34ch;">Result</th><th class="collapse">Goals</th></tr>
	{#each $matches as match}
		<tr>
			<td>{match.time}, {new Date(
					match.date.split("/").reverse().join("-"),
				).toLocaleDateString(undefined, {
					month: "long",
					day: "numeric",
				})}
			</td>
			<td>Riley Oval, UWA</td>
			<td class="flex">
				<img
					height="34px"
					src="./{match.clubs[0].toLowerCase()}.png"
					alt={match.clubs[0]}
					/>
				<div class="span">
					<p>{match.clubs[0]}</p>
				</div>
				<p>{#if match.played}{match.home} - {match.away}{:else} vs {/if}</p>
				<div class="span">
					<p>{match.clubs[1]}</p>
				</div>
				
				<img
					height="34px"
					src="./{match.clubs[1].toLowerCase()}.png"
					alt={match.clubs[1]}
					/>
			</td>
			<td class="collapse">
				{#each match.goals as goal, index}
					<span>{ index == match.goals.length - 1 ? goal : `${goal}, `}</span>

				{/each}
			</td>
		</tr>
	{/each}
</table>

<style>
	.flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.flex p {
		padding-inline: 5px;
	}
	.span {
		width: 5ch;
		text-align: center;
		padding-inline: 5px;
	}
	
	@media screen and (max-width: 500px) {
		.collapse {
			display: none;
		}
	}

	@media screen and (max-width: 420px) {
		img {
			display: none;
		}
	}
</style>

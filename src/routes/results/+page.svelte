<script>
	import { matches } from "$lib/shared/stores/season.js";
</script>

<svelte:head>
	<title>Unihall Football | Results</title>
</svelte:head>

<table>
	<tr><th style="width: 8ch">Date</th><th style="text-align: center; width: 30ch;">Result</th><th class="collapse">Goalscorers</th></tr>
	{#each $matches as match}
		<tr>
			<td>{new Date(
					match.date.split("/").reverse().join("-"),
				).toLocaleDateString(undefined, {
					month: "short",
					day: "numeric",
				})}
			</td>
			<td class="flex">
				<img
					height="34px"
					src="./{match.clubs[0].toLowerCase()}.png"
					alt={match.clubs[0]}
					/>
				<div class="span">
					<p>{match.clubs[0]}</p>
				</div>
				<p>{match.home} - {match.away}</p>
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
	
</style>

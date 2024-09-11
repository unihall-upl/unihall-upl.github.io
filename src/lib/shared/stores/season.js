import data from "$lib/data/data.json";
import { writable } from 'svelte/store';

export const season = writable("0");
export const current_data = writable();
export const stats = writable("goals");
export const teams = writable();
export const recent = writable()
export const goalscorers = writable();
export const motm = writable();
export const matches = writable();

let selected = data;

recent.set([... selected[0].stats].slice(-1));

season.subscribe((value) => {
    let current = value;

    if (isNaN(current)) {
        selected = [{ "season": "All Time", "stats": [... data].reverse().map(({ stats }) => stats).flat() }];
        current = 0;
    } else {
        current = parseInt(value);
        selected = data;
    }

	current_data.set(selected[current]);

	function generateTeam(name) {
		return {
			position: 0,
			played: 0,
			points: 0,
			won: 0,
			drawn: 0,
			lost: 0,
			gd: 0
		}
	}

    let results = {}

	selected[current].stats.forEach((node) => {
		if (results[node.clubs[0]] === undefined) {
			results[node.clubs[0]] = generateTeam(node.clubs[0]);
		}

		if (results[node.clubs[1]] === undefined) {
			results[node.clubs[1]] = generateTeam(node.clubs[1]);
		}

		// Wins/Draws/Losses

		if (node.home > node.away) {
			results[node.clubs[0]].won += 1;
			results[node.clubs[1]].lost += 1;
			results[node.clubs[0]].points += 3;
		} else if (node.away > node.home) {
			results[node.clubs[1]].won += 1;
			results[node.clubs[0]].lost += 1;
			results[node.clubs[1]].points += 3;
		} else {
			results[node.clubs[0]].drawn += 1;
			results[node.clubs[1]].drawn += 1;
			results[node.clubs[0]].points += 1;
			results[node.clubs[1]].points += 3;
		}

		// Goal Difference
		results[node.clubs[0]].gd += node.home - node.away;
		results[node.clubs[1]].gd += node.away - node.home;

		// Matcheds Played
		results[node.clubs[0]].played += 1
		results[node.clubs[1]].played += 1
	});

	// Sorth the teams by points and goal difference

	results = Object.fromEntries(
		Object.entries(results).sort((a, b) => {
			if (b[1].points == a[1].points) {
				return b[1].gd - a[1].gd
			}

			return b[1].points - a[1].points;
		})
	);

	// Update table position

	let position = 1;

	for (let [name, team] of Object.entries(results)) {
		team.position = position;
		position ++;
	}

    teams.set(results);

    //
    // Goals
    //

    function sortObject(obj) {
		return Object.entries(obj).sort(([,a],[,b]) => b - a)
	}

	let scorers = {}

	selected[current].stats.forEach((node) => {
		node.goals.forEach((scorer) => {
			if (scorer in scorers) {
				scorers[scorer] += 1
			} else {
				scorers[scorer] = 1
			}
		});
	});

	goalscorers.set(sortObject(scorers));

    //
    // Matches
    //

    matches.set([... selected[current].stats].reverse());
});
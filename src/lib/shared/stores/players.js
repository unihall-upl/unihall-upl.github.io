import { current_data } from "$lib/shared/stores/season.js";
import { writable, get } from 'svelte/store';

function player(name, club) {
    let goals = 0;

    get(current_data).stats.forEach(matchday => {
        matchday.goals.forEach(stat => {
            if (stat == name) {
                goals += 1;
            }
        });
    });

    return {
        "name": name,
        "club": club,
        "goals": goals
    }
}

export const players = writable();

current_data.subscribe((value) => {
    players.set([
        player("Nic", "A"),
        player("Moses", "A"),
        player("Taps", "A"),
        player("Jason", "A"),
        player("Marcus", "A"),
        player("Zee", "B"),
        player("Linton", "B"),
        player("James", "B"),
        player("Huggins", "B"),
        player("Tinashe", "B"),
        player("Zee", "B"),
        player("Ethan", "DEC"),
        player("Gordon", "DEC"),
        player("Bilal", "DEC"),
        player("Benji", "DEC"),
        player("Min", "JL"),
        player("Rohans", "JL"),
        player("Dabeer", "JL"),
        player("Dhey", "JL"),
        player("Shourjya", "MK"),
        player("Hrishik", "MK")
    ]);
});
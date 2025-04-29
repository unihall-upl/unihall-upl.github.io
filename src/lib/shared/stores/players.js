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
        // MA (11 Players)
        player("Loki Minahan", "MA"),
        player("Akshyobh Dhakhwa", "MA"),
        player("Jason White", "MA"),
        player("Hans Ragoonath", "MA"),
        player("Minh Quan", "MA"),
        player("Rodney Gakpo", "MA"),
        player("Christian Masbudi", "MA"),
        player("Huggins Machaka", "MA"),
        player("Nagisa Futagawa", "MA"),
        player("Josh Linarto", "MA"),
        player("Joel MacPherson", "MA"),
        player("Mo", "MA"),
        player("Zino", "MA"),
        player("David Martin", "MA"),

        // BL (10 Players)
        player("Dabeer Shikrani", "BL"),
        player("Husain Pardawala", "BL"),
        player("Gavin Cantlay", "BL"),
        player("Soyun Choi", "BL"),
        player("Sheikh Ishak", "BL"),
        player("Bo Chen", "BL"),
        player("Tinashe Nemacha", "BL"),
        player("Reagan Leow", "BL"),
        player("Faizaan Khan", "BL"),
        player("Emmanuel Thomas", "BL"),

        // DEC (12 Players)
        player("Linton Mushayabasa", "DEC"),
        player("Benji Passaportis", "DEC"),
        player("Jakob Mosch", "DEC"),
        player("Joao Marcelo", "DEC"),
        player("Madoc Williams", "DEC"),
        player("Conor Strampel", "DEC"),
        player("Joachim Bayiri", "DEC"),
        player("Reuben Wong", "DEC"),
        player("Coline Chane-Waye", "DEC"),
        player("Tapiwa Ziteya", "DEC"),
        player("Seo Seongwon", "DEC"),
        player("Tanguy Tilmont", "DEC"),
        player("Yannick Horta", "DEC"),
        player("Moses Gwese", "DEC"),
        player("Eduardo", "DEC"),
        
        // JK (25 Players)
        player("Milan Varghese", "JK"),
        player("Caleb Ang", "JK"),
        player("Marcus Tsui", "JK"),
        player("Zee Wei Goh", "JK"),
        player("Ethan Sim", "JK"),
        player("Bilal Selim", "JK"),
        player("Asha Robson", "JK"),
        player("Shunta Harada", "JK"),
        player("Cody Thongpitukthavorn", "JK"),
        player("Gabriel Anderson", "JK"),
        player("Muhaimeen Jonaidee", "JK"),
        player("Nicholas Chng", "JK"), // Extras
        player("Hrishik Kaul", "JK"),
        player("Theo Moir", "JK"),
        player("Harshit Puri", "JK"),
        player("Anindya Kundu", "JK"),
        player("Aniket Hassan", "JK"),
        player("Gordon Tshekiso", "JK"),
        player("Iliyas Akhmet", "JK"),
        player("Mitul Agarwal", "JK"),
        player("Advay Katoch", "JK"),
        player("Irfan Farozi", "JK"),
        player("Justin Adam", "JK")
    ]);
});
<script>
    export let final;
    export let third;

    let gold = final.clubs[0] > final.clubs[1] ? final.clubs[0] : final.clubs[1];
</script>

{#if final.played}
    <div class="champions">
        <div class="card">
            <h1>{gold} are the 2025 UniHall Premier League Champions!</h1>
        </div>
        <div class="finals">
            <div class="fixture">
                <div>
                    <h4>Third-Fourth Playoff</h4>
                    <div class="results">
                        <img height="34px" src="./{final.clubs[0].toLowerCase()}.png"alt={final.clubs[0]}/>
                        <h3>{final.clubs[0]} {final.home} - {final.away} {final.clubs[1]}</h3>
                        <img height="34px" src="./{final.clubs[1].toLowerCase()}.png"alt={final.clubs[1]}/>    
                    </div>    
                </div>  
            </div>
            <div class="fixture">
                <div>
                    <h4>Final</h4>
                    <div class="results">
                        <img height="34px" src="./{final.clubs[0].toLowerCase()}.png"alt={final.clubs[0]}/>
                        <h3>{final.clubs[0]} {final.home} - {final.away} {final.clubs[1]}</h3>
                        <img height="34px" src="./{final.clubs[1].toLowerCase()}.png"alt={final.clubs[1]}/>    
                    </div>    
                </div>    
            </div>    
        </div>
    </div>
{/if}

<style>
    h4 {
        color: #555;
        text-transform: uppercase;
        text-align: center;
        margin-top: 0;
        margin-bottom: 0.2em;
    }

    .card, .fixture, .results {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        width: 100%;
        height: 140px;
        color: #ffffff;
        background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
        radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
        border-radius: 1em;
        margin-bottom: 1em;
        padding: 2em;
    }

    .finals {
        display: flex;
        justify-content: space-between;
    }

    .fixture {
        box-sizing: border-box;
        width: 49%;
        min-width: 180px;
        height: 110px;
        border: 2px solid #dddddd;
        border-radius: 1em;
        margin-bottom: 0.5em;
    }

    .fixture h3 {
        margin-inline: 0.3em;
    }

    @media screen and (max-width: 450px) {
        .fixture {
            display: none;
        }
    }
</style>
<script>
    export let lhs;
    export let rhs;
    export let home;
    export let away;
    export let played;
    export let stage;
</script>

<div class="card">
    <div>
        <h5>{stage}</h5>
        <div class="results">
            <img height="34px" src="./{lhs.toLowerCase()}.png"alt={lhs}/>
            <h3>{lhs} {played ? `${home} - ${away}` : 'vs'} {rhs}</h3>
            <img height="34px" src="./{rhs.toLowerCase()}.png"alt={rhs}/>   
        </div>    
    </div>  
</div>

<style>
    .card {
        width: clamp(185px, 29vw, 210px);
        height: 80px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 1em;
        border: 1px solid #dddddd;
        margin-right: 0.5em;
        margin-bottom: 0.5em;
    }

    .results {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    h5 {
        color: #555;
        text-transform: uppercase;
        text-align: center;
        margin-top: 0;
        margin-bottom: 0.2em;
    }

    .card h3 {
        margin-inline: 0.2em;
    }

    @media screen and (max-width: 450px) {
        .card {
            width: 100%;
        }
    }
</style>
<script>
    export let imgSrc;

    let overlaySrc;
    let overlay = false;

    function updateImage(e) {
        overlaySrc = e.target.src;
        overlay = true;
    }
</script>

<div class="grid">
    {#each imgSrc as image}
        <div class="imgContainer">
            {#await import(`$lib/gallery/${image}.jpeg`) then { default: src }}
                <img class="galleryItem" src={src} alt="Football gallery item" on:click={updateImage}>
            {/await}
        </div>
    {/each}    
</div>

<div class="overlay overlay-{overlay}" on:click={() => {overlay = false;}}>
    <img class="overlay-image" src={overlaySrc} alt="Overlay item">
</div>


<style>
    .grid {
        display: flex;
        flex-wrap: wrap;
    }

    .galleryItem {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .imgContainer {
        max-width: 33%;
        padding: 4px;
        cursor: pointer;
    }

    .overlay-true {
        display: flex;
        justify-content: center;
        align-items: center;
        touch-action: none;
        -webkit-overflow-scrolling: none;
        overflow: hidden;
        overscroll-behavior: none;
    }

    .overlay-false {
        display: none;
    }

    .overlay {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(9, 31, 16, 0.7);
    }

    .overlay-image {
        width: min(1200px, 100%);
        padding: 12px;
    }

    .imgContainer {
        max-width: 33%;
        padding: 4px;
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
		.imgContainer {
			max-width: 50%;
		}
	}

    @media screen and (max-width: 400px) {
		.imgContainer {
			max-width: 100%;
		}
	}
</style>
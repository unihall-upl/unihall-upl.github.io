<script>
    import Viewer from "../../lib/viewer/Viewer.svelte";
    const images = import.meta.glob('$lib/gallery/*.jpeg', { eager: true });
</script>

<Viewer imgSrc={images} />
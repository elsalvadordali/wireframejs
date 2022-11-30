<script lang="ts">
    export let text = ''
</script>

<button>{text}</button>

<style>
    button {
        background-color: #aaa;
        border: 2px solid black;
        padding: .5rem 1rem;
        margin-top: 3px;
    }
    button:hover, button:active {
        margin-top: 0;
        margin-bottom: 3px;
    }
</style>
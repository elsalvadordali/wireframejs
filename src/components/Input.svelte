<script lang="ts">
    export let inputName
</script>

<div class='input'>
    <label for='input'>{inputName}</label>
    <input type='text' id='input'>
</div>

<style>
    label {
        display: block;
        width: 100%;
    }
    .input {
        padding: .5rem;
        margin: .5rem;
    }
</style>
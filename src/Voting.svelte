<script>
    import { createEventDispatcher } from 'svelte'

    export let options;
    const  dispatcher = createEventDispatcher()
</script>

<div class="option-list">
    {#each options as {name}, i (name)}
        <div class="option-button" on:click="{dispatcher('vote', i)}">{name}</div>
    {/each }
</div>

<style>
    .option-list{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .option-button{
        padding: 0.5rem 0.5rem;
        width: 5%;
        background-color: hsl(160, 100%, 30%);
        color: white;
        border-radius: 4rem;
        transition-duration: 200ms;
        cursor: pointer;
        text-align: center;
    }
    .option-button:hover{
        background-color: hsl(160, 100%, 10%);
        transform: scale(1.1);
    }
    
</style>
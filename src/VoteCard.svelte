<script>
	import Results from './Results.svelte'
	import Voting from './Voting.svelte'

	export let options;
	export let title;
	export let state;
    
    let switchState = () => {state = state == 'open' ? 'closed' : 'open'};

    function vote(optionIndex) {
      options[optionIndex.detail].votes += 1;
    };
</script> 



<div class="votecard">
    <div class="votecard-header">{title}</div>
        
    <div class="votecard-body" >

        {#if state=='open'}
            <Voting {options} on:vote="{vote}"></Voting>
        {:else}
            <Results {options}></Results>
        {/if}
    </div>
    <div class="votecard-footer">
        <div class="option-button button-blue" on:click={switchState}>Fechar</div>
    </div>
</div>

<style>
    .votecard{
        background-color: aquamarine;
        padding: 1rem;
    }
    .votecard-header{
        font-weight: bold;
        text-transform: uppercase;
        font-size: 2rem;
    }
    .votecard-body{
        display: flex;
        align-items: flex-start;
        justify-content: left;
        margin-top: 1rem;
        height: 10vh;
    }
    .votecard-footer{
        display:flex;
        justify-content: flex-end;
    }
    .option-button{
        padding: 0.5rem 0.5rem;
        width: 5%;
        background-color: hsl(160, 100%, 30%);
        color: white;
        border-radius: 4rem;
        transition-duration: 200ms;
        cursor: pointer;
    }
    .option-button:hover{
        background-color: hsl(160, 100%, 10%);
        transform: scale(1.1);
    }
    .button-blue{
        background-color: hsl(180, 100%, 25%);
        border-radius: 0;
    }
    .button-blue:hover{
        background-color: hsl(180, 100%, 15%);
        transform: translateX(-2rem);
    }
</style>
<script>
    export let options;

    let total_votes = () => options.reduce( ( sum, { votes } ) => sum + votes , 0);
    let percentage = (options,option) => {
        if (total_votes() === 0) return 0;
        return ((option.votes/total_votes())*100).toFixed(2)
    }
</script>

<ul>
    {#each options as option}
        <li >{option.name} - {option.votes} votos ({percentage(options,option)}%)</li>
    {/each}
</ul>

<style>
    li {
        text-align: left;
    }
</style>
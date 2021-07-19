<template>
    <div class="option-list">
        <div class="option-button" v-for="option in options" :key="option.name" @click="vote(option)">{{option.name}}</div>
    </div>
</template>

<script>
export default {
    name: 'Voting',
    props: {
        options: Array,
    },
    methods: {
        vote(option){
            option.votes+=1;
            // alert(`Votou em: ${option.name}`)
        }
    },  
}
</script>

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
    }
    .option-button:hover{
        background-color: hsl(160, 100%, 10%);
        transform: scale(1.1);
    }
    
</style>
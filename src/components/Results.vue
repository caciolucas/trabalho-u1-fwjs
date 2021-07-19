<template>
    <ul>
        <li v-for="option in options" :key="option.name">{{option.name}} - {{option.votes}} votos ({{percentage(options,option)}}%)</li>
    </ul>
</template>

<script>
export default {
    name: 'Results',
    props: {
        options: Array,
    },
    methods: {
        percentage(options,option){
            let total = options.reduce( ( sum, { votes } ) => sum + votes , 0)
            return ((option.votes/total)*100).toFixed(2)
        }
    },
    
}
</script>

<style>
li{
    text-align: left;
}
</style>
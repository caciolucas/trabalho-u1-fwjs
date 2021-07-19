<template>
  <vote-card :title="poll.title" :state="poll.state" :options="poll.options"/>
</template>

<script>
import VoteCard from './components/VoteCard.vue'

export default {
  name: 'App',
  components: {
    VoteCard,
  },
  data() {
    return {
      poll:{
        title: "Eleições 2022",
        state: "open",
        options: [
          {name: "Nulo", votes: 10},
          {name: "Branco", votes: 5},
        ]
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

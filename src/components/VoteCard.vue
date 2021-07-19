<template>
  <div class="votecard">
    <div class="votecard-header">{{title}}</div>
    <div class="votecard-body">
      <voting :options="options" v-if="n_state=='open'"/>
      <results :options="options" v-else/>
    </div>
    <div class="votecard-footer">
        <div class="option-button button-blue" @click="switchState()">{{statusButton()}}</div>
    </div>
  </div>
</template>

<script>
import Results from './Results.vue';
import Voting from './Voting.vue'
export default {
  components: { Voting, Results },
    name: 'VoteCard',
    data() {
        return {
            n_state: this.state,
        }
    },
    methods:{
        switchState(){
            this.n_state = this.n_state == 'open' ? 'closed' : 'open';
        },
        statusButton(){
            return this.n_state == 'open' ? 'Fechar' : 'Abrir';
        }
    },
    props: {
        title: String,
        state: String,
        options: Array,
    }
}
</script>

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
    .button-blue{
        background-color: hsl(180, 100%, 25%);
        border-radius: 0;
    }
    .button-blue:hover{
        background-color: hsl(180, 100%, 15%);
        transform: translateX(-2rem);
    }
</style>
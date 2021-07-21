<script>
	import VoteCard from './VoteCard.svelte'

	let title= "Eleições 2022";
	let state= "open";
	let options= [
		{name: "Nulo", votes: 0},
		{name: "Branco", votes: 0},
	]
</script>

<main>
	<VoteCard {options} {title} {state} />
</main>

<style>
	main{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
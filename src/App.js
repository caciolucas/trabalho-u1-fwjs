import logo from './logo.svg';
import './App.css';
import VoteCard from './VoteCard'

function App() {
  let options = [ {name: "Nulo", votes: 10}, {name: "Branco", votes: 5}, { name: "Candidato", votes: 0} ];
  let title = 'Eleições 2020'
  let state = 'open'

  return (
    <div className="App">
      <VoteCard options={options} title={title} state={state}/>
    </div>
  );
}

export default App;

import './Results.css'

function Results(props){
    let calcPercent = (total, value) => {return total > 0 ? ((value / total) * 100) : 0 };
    let totalVotes = props.options.reduce(function(a, b) {return a + b.votes;}, 0);

    let resultList = props.options.map(function(option, index){
        return <li key={option.name}>{option.name} - {calcPercent(totalVotes, option.votes).toFixed(2)}% ({option.votes})</li>
    });

    return (
        <ul>
            {resultList}
        </ul>
    )
}   

export default Results;
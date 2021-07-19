import './Voting.css'
function Voting(props) {
    console.log('')
    const optionButtons = props.options.map((option, i) => (
        <div key={i} className="option-button" onClick={() => props.onVote(i)}>{option.name}</div>
    ))

    return (
        <div className="option-list">
            {optionButtons}
        </div>
    )
}

export default Voting;
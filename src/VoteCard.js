import React, { useState } from 'react'
import Voting from './Voting'
import Results from './Results'
import './VoteCard.css'
function VoteCard(props) {
    const [state, setState] = useState('open')
    let vote = (index) => {
        props.options[index].votes++
    }
    let switchPollState = () => {state === 'open' ? setState('closed') : setState('open')}

    let cardBody;
    if (state === 'open') {
        cardBody = (
            <Voting options={props.options} onVote={vote} />
        )
    } else {
        cardBody = (
            <Results options={props.options} />
        )
    }
    return (
        <div className="votecard">
            <div className="votecard-header">{props.title}</div>
            <div className="votecard-body">
                {cardBody}
            </div>
            <div className="votecard-footer">
                <div className="option-button button-blue" onClick={switchPollState}>{state === 'open' ? 'Fechar' : 'Abrir'}</div>
            </div>
        </div>
    )
}

export default VoteCard;
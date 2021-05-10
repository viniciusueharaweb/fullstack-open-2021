import React, { useState } from "react";

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

    const handleNewAnecdote = () => {
        const arrayLength = anecdotes.length;
        const randNumber = Math.floor(Math.random() * arrayLength);
        setSelected(randNumber);
    };

    const handleVote = () => {
        const votesCopy = [...votes];
        votesCopy[selected]++;
        setVotes(votesCopy);
    };

    const mostVotedindex = votes.indexOf(Math.max(...votes));

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button text="vote" handleClick={handleVote} />
            <Button text="next anecdote" handleClick={handleNewAnecdote} />
            <MostVotedAnecdote
                mostVoted={anecdotes[mostVotedindex]}
                voteArray={votes}
                mostVotedIndex={mostVotedindex}
            />
        </div>
    );
};

const Button = ({ text, handleClick }) => {
    return (
        <div style={{ display: "inline" }}>
            <button onClick={() => handleClick()}>{text}</button>
        </div>
    );
};

const MostVotedAnecdote = ({ mostVoted, voteArray, mostVotedIndex }) => {
    if (voteArray[mostVotedIndex] === 0) {
        return <></>;
    }
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{mostVoted}</p>
            <p>has {voteArray[mostVotedIndex]} votes</p>
        </div>
    );
};

export default App;

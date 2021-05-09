import React, { useState } from "react";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGood = () => setGood(good + 1);
    const handleNeutral = () => setNeutral(neutral + 1);
    const handleBad = () => setBad(bad + 1);

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGood} text="good" />
            <Button handleClick={handleNeutral} text="neutral" />
            <Button handleClick={handleBad} text="bad" />
            <h1>statistics</h1>
            <Statistics
                goodVotes={good}
                neutralVotes={neutral}
                badVotes={bad}
            />
        </div>
    );
};

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ goodVotes, neutralVotes, badVotes }) => {
    const allVotes = goodVotes + neutralVotes + badVotes;
    const average = (good, neutral, bad) => {
        return (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad);
    };

    const positive = (good, total) => {
        return (good * 100) / total;
    };
    if (allVotes === 0) {
        return <p>No feedback given</p>;
    }
    return (
        <table>
            <tbody>
                <Statistic text="good" value={goodVotes} />
                <Statistic text="neutral" value={neutralVotes} />
                <Statistic text="bad" value={badVotes} />
                <Statistic text="all" value={allVotes} />
                <Statistic
                    text="average"
                    value={average(goodVotes, neutralVotes, badVotes)}
                />
                <Statistic
                    text="positive"
                    value={positive(goodVotes, allVotes)}
                />
            </tbody>
        </table>
    );
};

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td> {props.value}</td>
        </tr>
    );
};

export default App;

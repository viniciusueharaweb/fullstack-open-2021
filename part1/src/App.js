import React from "react";

const App = () => {
    const course = "Half Stack application development";
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10,
        },
        {
            name: "Using props to pass data",
            exercises: 7,
        },
        {
            name: "State of a component",
            exercises: 14,
        },
    ];

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    );
};

const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Content = (props) => {
    console.log(props.parts);
    // const firstExercisesNumber = props[0].exercises;
    // const secondExercisesNumber = props[1].exercises;
    // const thirdExercisesNumber = props[2].exercises;
    return (
        <div>
            <Part
                part={props.parts[0].name}
                exercise={props.parts[0].exercises}
            />
            <Part
                part={props.parts[1].name}
                exercise={props.parts[1].exercises}
            />
            <Part
                part={props.parts[2].name}
                exercise={props.parts[2].exercises}
            />
        </div>
    );
};

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    );
};

const Total = (props) => {
    const total =
        props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises;
    return <p>Number of exercises {total}</p>;
};

export default App;

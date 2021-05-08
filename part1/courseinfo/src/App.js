import React from "react";

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
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
        ],
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Content = (props) => {
    const [first, second, third] = props.parts;
    return (
        <div>
            <Part part={first.name} exercise={first.exercises} />
            <Part part={second.name} exercise={second.exercises} />
            <Part part={third.name} exercise={third.exercises} />
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
    const [first, second, third] = props.parts;
    const total = first.exercises + second.exercises + third.exercises;
    return <p>Number of exercises {total}</p>;
};

export default App;

import React from "react";
import Course from "./components/Course";

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                id: 1,
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                id: 2,
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                id: 3,
                name: "State of a component",
                exercises: 14,
            },
            {
                id: 4,
                name: "oi",
                exercises: 50,
            },
        ],
    };

    return <Course course={course} />;
};

export default App;

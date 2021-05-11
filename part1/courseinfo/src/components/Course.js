import React from "react";

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    );
};

const Header = ({ course }) => {
    return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
    return course.parts.map((eachPart) => (
        <Part key={eachPart.id} part={eachPart} />
    ));
};

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
};

const Total = ({ course }) => {
    const total = course.parts.reduce((total, eachExercisesNumber) => {
        return total + eachExercisesNumber.exercises;
    }, 0);

    return <p>Number of exercises {total}</p>;
};

export default Course;

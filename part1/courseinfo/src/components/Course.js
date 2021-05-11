import React from "react";

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            {/* <Total course={course} /> */}
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

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    );
};

const Total = ({ course }) => {
    const total =
        course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises;
    return <p>Number of exercises {total}</p>;
};

export default Course;

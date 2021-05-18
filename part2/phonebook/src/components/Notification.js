import React from "react";

const Notification = ({ successMessage, failMessage }) => {
    const succesful = {
        color: successMessage ? "green" : "red",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    };
    if (failMessage) {
        return <div style={succesful}>{failMessage}</div>;
    }
    if (successMessage) {
        return <div style={succesful}>{successMessage}</div>;
    }

    return <></>;
};

export default Notification;

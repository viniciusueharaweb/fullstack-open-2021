import React from "react";

const Forms = ({
    handleSubmit,
    nameInputController,
    numberInputController,
}) => {
    return (
        <form>
            <div>
                <h2>add a new</h2>
                <p>
                    name: <input onChange={nameInputController} />
                </p>
                <p>
                    number: <input onChange={numberInputController} />
                </p>
            </div>
            <div>
                <button onClick={handleSubmit} type="submit">
                    add
                </button>
            </div>
        </form>
    );
};

export default Forms;

import React from "react";

const Forms = ({
    handleSubmit,
    nameInputController,
    numberInputController,
    newName,
    newNumber,
}) => {
    return (
        <form>
            <div>
                <h2>add a new</h2>
                <p>
                    name:
                    <input value={newName} onChange={nameInputController} />
                </p>
                <p>
                    number:
                    <input value={newNumber} onChange={numberInputController} />
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

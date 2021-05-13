import React from "react";

const Forms = ({
    handleNameSubmit,
    nameInputController,
    numberInputController,
}) => {
    return (
        <form>
            <div>
                <p>
                    name: <input onChange={nameInputController} required />
                </p>
                <p>
                    number: <input onChange={numberInputController} />
                </p>
            </div>
            <div>
                <button onClick={handleNameSubmit} type="submit">
                    add
                </button>
            </div>
        </form>
    );
};

export default Forms;

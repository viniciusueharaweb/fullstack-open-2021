import React from "react";

const Forms = ({ handleNameSubmit, inputController }) => {
    return (
        <form>
            <div>
                name: <input onChange={inputController} />
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

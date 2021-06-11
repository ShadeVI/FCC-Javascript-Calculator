import React from "react";

import "./Pads.css";

const Pads = ({ handleValue }) => {
    return (
        <div className="pad-grid">
            <button
                type="button"
                className="pad-btn"
                id="clear"
                value="AC"
                onClick={(e) => handleValue(e.target.value)}
            >
                AC
            </button>
            <button
                type="button"
                className="pad-btn span-2"
                id="clear-one"
                value="C"
                onClick={(e) => handleValue(e.target.value)}
            >
                C
            </button>
            <button
                type="button"
                className="pad-btn"
                id="add"
                value="+"
                onClick={(e) => handleValue(e.target.value)}
            >
                +
            </button>
            <button
                type="button"
                className="pad-btn"
                id="seven"
                value="7"
                onClick={(e) => handleValue(e.target.value)}
            >
                7
            </button>
            <button
                type="button"
                className="pad-btn"
                id="eight"
                value="8"
                onClick={(e) => handleValue(e.target.value)}
            >
                8
            </button>
            <button
                type="button"
                className="pad-btn"
                id="nine"
                value="9"
                onClick={(e) => handleValue(e.target.value)}
            >
                9
            </button>
            <button
                type="button"
                className="pad-btn"
                id="subtract"
                value="-"
                onClick={(e) => handleValue(e.target.value)}
            >
                -
            </button>
            <button
                type="button"
                className="pad-btn"
                id="four"
                value="4"
                onClick={(e) => handleValue(e.target.value)}
            >
                4
            </button>
            <button
                type="button"
                className="pad-btn"
                id="five"
                value="5"
                onClick={(e) => handleValue(e.target.value)}
            >
                5
            </button>
            <button
                type="button"
                className="pad-btn"
                id="six"
                value="6"
                onClick={(e) => handleValue(e.target.value)}
            >
                6
            </button>
            <button
                type="button"
                className="pad-btn"
                id="multiply"
                value="*"
                onClick={(e) => handleValue(e.target.value)}
            >
                x
            </button>
            <button
                type="button"
                className="pad-btn"
                id="one"
                value="1"
                onClick={(e) => handleValue(e.target.value)}
            >
                1
            </button>
            <button
                type="button"
                className="pad-btn"
                id="two"
                value="2"
                onClick={(e) => handleValue(e.target.value)}
            >
                2
            </button>
            <button
                type="button"
                className="pad-btn"
                id="three"
                value="3"
                onClick={(e) => handleValue(e.target.value)}
            >
                3
            </button>
            <button
                type="button"
                className="pad-btn"
                id="divide"
                value="/"
                onClick={(e) => handleValue(e.target.value)}
            >
                /
            </button>
            <button
                type="button"
                className="pad-btn"
                id="zero"
                value="0"
                onClick={(e) => handleValue(e.target.value)}
            >
                0
            </button>
            <button
                type="button"
                className="pad-btn span-2"
                id="equals"
                value="="
                onClick={(e) => handleValue(e.target.value)}
            >
                =
            </button>

            <button
                type="button"
                className="pad-btn"
                id="decimal"
                value="."
                onClick={(e) => handleValue(e.target.value)}
            >
                .
            </button>
        </div>
    );
};

export default Pads;

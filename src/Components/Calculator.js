import React, { useState } from "react";
import Screen from "./Screen";
import Pads from "./Pads";

import "./Calculator.css";

const Calculator = () => {
    const [expression, setExpression] = useState("0");
    const handleValue = (value) => {
        switch (value) {
            case "AC":
                setExpression("0");
                break;
            case "C":
                setExpression((previousValue) => {
                    let cleared =
                        previousValue.length > 1
                            ? previousValue.slice(0, -1)
                            : "0";
                    return cleared;
                });
                break;
            case "=":
                try {
                    setExpression(String(eval(expression)));
                } catch (e) {
                    setExpression("Invalid Operation");
                }
                break;
            default:
                setExpression((previousExpression) => {
                    // Remove "invalid operation" if exists
                    if (previousExpression === "Invalid Operation") {
                        return value;
                    }
                    // Avoid beginning with multiple zeros
                    if (previousExpression === "0") {
                        return value;
                    }
                    // Avoid consecutive decimal points.
                    if (previousExpression.slice(-1) === "." && value === ".") {
                        return previousExpression;
                    }
                    // Save numbers in array regex
                    const match =
                        previousExpression.match(/([+-]*[0-9\.0-9]+)/g);
                    // Check if last number contains a decimal point. if it contains and the current value is decimal too, don't write it.
                    if (
                        match &&
                        /[0-9]*\.[0-9]*/.test(match[match.length - 1]) &&
                        value === "."
                    ) {
                        return previousExpression;
                    }
                    // Check if multiple operators are inserted except for minus.
                    if (
                        /[+*/]$/.test(previousExpression) &&
                        /[+*/]/.test(value)
                    ) {
                        return previousExpression.slice(0, -1) + value;
                    }
                    return previousExpression + value;
                });
                if (/[+*/-]{3,}/.test(expression)) {
                    setExpression((previousExpression) => {
                        return previousExpression.replace(
                            /[+*/-]{3,}/,
                            previousExpression.slice(-2, -1)
                        );
                    });
                }
                break;
        }
    };

    return (
        <div className="calculator">
            <Screen expression={expression} />
            <Pads handleValue={handleValue} />
        </div>
    );
};

export default Calculator;

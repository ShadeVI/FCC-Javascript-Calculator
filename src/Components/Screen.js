import React from "react";

import "./Screen.css";

const Screen = ({ expression }) => {
    return (
        <div id="display" className="screen">
            {expression}
        </div>
    );
};

export default Screen;

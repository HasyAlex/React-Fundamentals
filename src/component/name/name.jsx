import React from "react";

function Name(props) {
    return(
        <React.Fragment>
            <li>{props.name} - {props.age}(age)</li>
        </React.Fragment>
    )
}

export default Name;
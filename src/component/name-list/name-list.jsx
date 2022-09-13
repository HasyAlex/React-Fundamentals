import React from "react";
import Name from "../name/name";

function NameList() {
    return (
        <React.Fragment>
            <h1>SLIIT</h1>
            <ul>
                <Name name="Hasitha" age="32"></Name>
                <Name name="Dinu" age="30"></Name>
                <Name name="Dinithi" age="27"></Name>
            </ul>
        </React.Fragment>
    )
}

export default NameList;
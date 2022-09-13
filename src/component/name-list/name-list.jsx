import React from "react";
import Name from "../name/name";

function NameList() {
    return (
        <React.Fragment>
            <h1>SLIIT</h1>
            <ul>
                <Name></Name>
                <Name></Name>
                <Name></Name>
            </ul>
        </React.Fragment>
    )
}

export default NameList;
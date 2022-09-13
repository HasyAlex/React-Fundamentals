import React from "react";
import moment from "moment/moment";

function Name(props) {
    return(
        <li>
            <p><img src={props.picture}/> {props.firstName}</p>
            <p>{props.city}</p>
            <p>{props.country}</p>
            <p>{props.email}</p>
            <p>{props.age}</p>
            <p>{new Intl.DateTimeFormat('en-GB').format(new Date(props.dob))}</p>
            <p>{moment(props.dob).format('DD-MM-YYYY')}</p>
        </li>
    )
}

export default Name;
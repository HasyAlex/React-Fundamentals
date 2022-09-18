import React from "react";

function Name(props) {
    return(
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-2">
                    <img className="img-thumbnail border rounded-circle" src={props.picture} alt={props.firstName}/>
                </div>
                <div className="col-auto">
                    <h4>{props.firstName}</h4>
                    <p>{props.country} | {props.city}</p>
                    <p>Email: {props.email}</p>
                    <p>Age: {props.age}</p>
                    <p>Birthday: {new Intl.DateTimeFormat('en-GB').format(new Date(props.dob))}</p>
                </div>
            </div>
        </li>
    )
}

export default Name;
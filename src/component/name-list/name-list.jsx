import React from "react";
import Name from "../name/name";

import "./name-list.css";

function NameList() {

    const NameList = [
    {
        id:1,
        name: {
            title: "Miss",
            first: "Jennie 01",
            last: "Nichols"
        },
        location: {
            city: "Billings",
            state: "Michigan",
            country: "United States",
            postcode: "63104"
        },
        email: "jennie.nichols@example.com",
        dob :{
           date: "1992-03-08T15:13:16.688Z",
            age: 30
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/75.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
    },
    {
        id:2,
        name: {
            title: "Miss",
            first: "Jennie",
            last: "Nichols"
        },
        location: {
            city: "Billings",
            state: "Michigan",
            country: "United States",
            postcode: "63104"
        },
        email: "jennie.nichols@example.com",
        dob :{
            date: "1992-03-08T15:13:16.688Z",
            age: 30
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/75.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
    }]

    const nameListComponent = () => {
        return NameList.map(X =>{
            return(<Name 
                key={X.id}
                firstName={`${X.name.first} ${X.name.last}`} 
                city={X.location.city}
                country={X.location.country}
                email={X.email}
                age={X.dob.age}
                picture={X.picture.medium}
                dob={X.dob.date}></Name>)
        })
    }

    return (
        <React.Fragment>
            <div className="container mt-4">
              <ul className="list-group">{nameListComponent()}</ul>  
            </div>
        </React.Fragment>
    )
}

export default NameList;
import React from "react";
import Name from "../name/name";

function NameList() {

    const NameList = [
    {
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
            <h1>SLIIT</h1>
            <ul>
                {nameListComponent()}
            </ul>
        </React.Fragment>
    )
}

export default NameList;
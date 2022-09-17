import React, {useState} from "react";
import Name from "../name/name";

import "./name-list.css";

function NameList() {

    const [nameList, setNameList] = useState([{
        id:1,
        name: {
            title: "Miss",
            first: "Olivia",
            last: "Chan"
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
            large: "https://randomuser.me/api/portraits/men/11.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg"
        },
    }]);

    const nameListComponent = () => {
        return nameList.map(X =>{
            return(<Name 
                key={X.id}
                firstName={`${X.name.first} ${X.name.last}`} 
                city={X.location.city}
                country={X.location.country}
                email={X.email}
                age={X.dob.age}
                picture={X.picture.large}
                dob={X.dob.date}></Name>)
        })
    }

    const addUserHandler = () =>{
        const newUser = {
            id:3,
            name: {
                title: "Miss",
                first: "Vanessa",
                last: "Fidjeland"
            },
            location: {
                city: "Billings",
                state: "Michigan",
                country: "Sri Lanaka",
                postcode: "81000"
            },
            email: "jennie.nichols@example.com",
            dob :{
               date: "1992-03-08T15:13:16.688Z",
                age: 30
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/13.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg"
            },
        }
        
        setNameList(nameList => [...nameList,newUser]); //setNameList(nameList => nameList.concat(newUser));
        
    
    }

    return (
        <React.Fragment>
            <div className="container mt-4">
                <button type="button" className="btn btn-primary mb-2" onClick={addUserHandler}>Add Person</button>
                <ul className="list-group">{nameListComponent()}</ul>  
            </div>
        </React.Fragment>
    )
}

export default NameList;
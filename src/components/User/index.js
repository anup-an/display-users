import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const[user, setUser] = useState({
    "id": id,
    "name": "",
    "username": "",
    "email": "",
    "address": {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode":""
    },
    "phone": "",
    "website": "",
    "company": {
        "name": ""
    }
  })
    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                setUser(data.data);
                setIsLoading(false)
            } catch (error) {
                setError("Error while fetching data from server.")
                console.log(error)
            }
        })();
    }, [id])

    return (
        <div className="flex items-center justify-center h-screen flex items-center justify-center">
            {!error ? !isLoading ?
                <ul className="border p-8 border-gray-500 list-disc">
                    <li>{"name:"}{" "}{user.name}</li>
                    <li>{"username:"}{" "}{user.username}</li>
                    <li>{"email:"}{" "}{user.email}</li>
                    <li>{"phone:"}{" "}{user.phone}</li>
                    <li>{"company:"}{" "}{user.company && user.company.name ? user.company.name : ''}</li>
                    <li>{"website:"}{" "}{user.website}</li>
                
                    <li>{"address:"}</li>
                    <ul>
                        <li>{"- street:"}{" "}{user.address && user.address.street ? user.address.street: ''}</li>
                        <li>{"- suite:"}{" "}{user.address && user.address.suite ? user.address.suite: ''}</li>
                        <li>{"- city:"}{" "}{user.address && user.address.city ? user.address.city: ''}</li>
                        <li>{"- zipcode:"}{" "}{user.address && user.address.zipcode ? user.address.zipcode: ''}</li>
                    </ul>
                    
                </ul> : <p className="text-lg">Loading data from server......</p>
                : <p className="text-lg">Error has occurred while fetching data from the server.</p>
            }
        </div>
    )
}

export default User;
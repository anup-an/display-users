import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({user}) => {
    return (
        <span>
            {console.log(user.id)}
            <Link to={`/users/${user.id}`} className="px-4 py-1 bg-blue-500 text-sm text-white border rounded hover:bg-blue-800">
                MORE DETAILS
            </Link>
        </span>

    )
}

export default Button;
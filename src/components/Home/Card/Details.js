const Details = ({user}) => {
    return (
        <span>
        <ul className="flex flex-col gap-y-3 items-center justify-center">
                <li className="flex flex-col items-center justify-center">
                    <p>{user.name}</p>
                    <p className="italic text-sm text-gray-400">{`@${user.username}`}</p>
                </li>
                <li><a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                    <p className="text-sm text-blue-500 underline">
                        {`http://${user.website}`}
                    </p>
                    </a>
                </li>
        </ul>
        </span>
    )
}

export default Details;
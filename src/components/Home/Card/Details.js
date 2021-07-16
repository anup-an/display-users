const Details = ({user}) => {
    return (
        <span>
        <ul className="flex flex-col items-center justify-center">
                <li>{user.name}</li>
                <li><p className="italic text-sm text-gray-400">{`@${user.username}`}</p></li>
                <li><a href={`http://${user.website}`}>
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
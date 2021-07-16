const Logo = ({user}) => {
    return (
        <span className="flex border rounded-full w-12 h-12 bg-gray-300 text-gray-600 items-center justify-center">
            <p>{user.name[0]}</p>
        </span>
    )
}

export default Logo;
const Logo = ({user}) => {
    return (
        <span className="flex border rounded-full w-20 h-20 bg-gray-300 text-gray-600 items-center justify-center">
            <p className="text-2xl">{user.name[0]}</p>
        </span>
    )
}

export default Logo;
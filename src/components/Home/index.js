import Card from './Card'
const Home = ({users}) => {
    return (
        <div className="flex items-center justify-center mt-10 mb-10">
            <ul className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {users.map((user, index) => <li index={user.id}><Card user={user}/></li>)}
            </ul>          
        </div>
    )
}

export default Home;
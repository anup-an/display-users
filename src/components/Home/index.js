import Card from './Card'
const Home = ({users}) => {
    return (
        <div>
            <ul className="grid grid-cols-3 gap-10">
                {users.map(user => <li><Card user={user}/></li>)}
            </ul>          
        </div>
    )
}

export default Home;
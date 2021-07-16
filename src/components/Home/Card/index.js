import Button from './Button';
import Logo from './Logo';
import Details from './Details';
const Card = ({user}) => {
    return (
        <div>
            <span className="flex flex-col content-center border rounded shadow content-center items-center">
                <Logo user={user}/>
                <Details user={user}/>
                <Button user={user}/>
            </span>
        </div>
    )
}
export default Card;
import Button from './Button';
import Logo from './Logo';
import Details from './Details';
const Card = () => {
    return (
        <div>
            <span className="inline-block flex flex-col content-center border content-center items-center">
                <Logo />
                <Details />
                <Button />
            </span>
        </div>
    )
}
export default Card;
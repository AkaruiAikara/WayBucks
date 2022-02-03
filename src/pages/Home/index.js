import Jumbotron from '../../components/Jumbotron';
import ListProducts from '../../components/ListProducts';
import Modal from '../../components/Modal';

export default function Home(props) {
    const [isLogin, setIsLogin] = [props.isLogin, props.setIsLogin];
    return (
        <div>
            <Jumbotron />
            <ListProducts isLogin={isLogin} setIsLogin={setIsLogin}/>
            <Modal isLogin={isLogin} setIsLogin={setIsLogin}/>
        </div>
    )
}
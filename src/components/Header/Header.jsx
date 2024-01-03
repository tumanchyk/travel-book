import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HeaderEl, Logo, LogoutBtn } from "./Header.styled";
import logo from "../../imgs/world.png";
import { logoutUser } from "../../store/auth/authOperations";

const Header = () => {
    const dispatch = useDispatch();
    return <HeaderEl>
        <Link to="/">
            <Logo src={logo} alt="logo" />
        </Link>
        <LogoutBtn onClick={() => dispatch(logoutUser())}>Logout</LogoutBtn>
    </HeaderEl>
}

export default Header;
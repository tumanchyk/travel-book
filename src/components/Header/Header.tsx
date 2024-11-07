import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { HeaderEl, Logo, LogoutBtn, HeaderMainLink } from "./Header.styled";
import logo from "../../imgs/world.png";
import { logoutUser } from '../../services/authOperations';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;
    const { mutate } = useMutation({
        mutationKey: ['logout'],
        mutationFn: logoutUser,
        onSuccess: () => {
            localStorage.removeItem("authToken");
            navigate('/login');
        },
        onError: (error) => {
            console.error("Logout failed:", error);
        }
    });
    return <HeaderEl>
        <HeaderMainLink to="/">
            <Logo src={logo} alt="logo" />
            Traveler's Book
        </HeaderMainLink>
        {path !== '/login' && path !== '/register' &&
            <LogoutBtn onClick={() => mutate()}>
                <svg height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="#141414" fillRule="nonzero"><path d="m20 12c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1c0-4.418278-3.581722-8-8-8s-8 3.581722-8 8 3.581722 8 8 8c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1c-5.5228475 0-10-4.4771525-10-10s4.4771525-10 10-10 10 4.4771525 10 10z" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -5.556349 10.585786)" /><path d="m10 13c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1h13c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1z" /><path d="m19.2928932 9.70710678c-.3905243-.39052429-.3905243-1.02368927 0-1.41421356s1.0236893-.39052429 1.4142136 0l3 2.99999998c.3905243.3905243.3905243 1.0236893 0 1.4142136l-3 3c-.3905243.3905243-1.0236893.3905243-1.4142136 0s-.3905243-1.0236893 0-1.4142136l2.2928932-2.2928932z" /></g></svg>
                <span>Logout</span>
            </LogoutBtn>
        }
    </HeaderEl>
}

export default Header;
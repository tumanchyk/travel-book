import LoginForm from "../components/LoginForm/LoginForm";
import { Section } from "../components/common/SectionPage/AuthSection.styled";
import Header from "../components/Header/Header";
import bg from "../imgs/auth-bg.webp";

const Login = () => {
    return <div style={{
        background: `${`url('${bg}') no-repeat center center/cover`}`
          }}>
        <Header />
        <Section>
            <LoginForm/>      
        </Section>
    </div>
}

export default Login;

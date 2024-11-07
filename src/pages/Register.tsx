import { Section } from "../components/common/SectionPage/AuthSection.styled";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Header from "../components/Header/Header";
import bg from "../imgs/auth-bg.webp";

const Register = () => {
    return <div style={{
        background: `${`url('${bg}') no-repeat center center/cover`}`
          }}>
        <Header />
        <Section>
            <RegisterForm/>      
        </Section>
    </div>
}

export default Register;

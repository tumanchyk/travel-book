import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CustomInput from "../FormComponents/CustomInput";
import FormBtn from '../FormComponents/FormButton';
import { loginUser } from '../../store/auth/authOperations';
import { Form } from "../FormComponents/AuthForm.styled";
import { AccountLink } from '../FormComponents/AccountLink.styled';

const LoginForm = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const handleChange = e => {
        const { id, value } = e.currentTarget;
        setUser(prevUser => ({
        ...prevUser,
        [id]: value,
        }));
  };
  
    const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      setErrors({
        email: !user.email ? "Email is required" : "",
        password: !user.password ? "Password is required" : "",
      });
    } else {
      dispatch(loginUser(user))
    }
    };
    
    return <Form autoComplete="off" onSubmit={handleSubmit}>
      <h1>Login</h1>
          <CustomInput
            label="Email"
            id="email"
            value={user.email}
            handleChange={handleChange}
            error={errors.email}
            type="email"
            required={true}
          />
          <CustomInput
            label="Password"
            id="password"
            value={user.password}
            handleChange={handleChange}
            error={errors.password}
            type="password"
            required={true}
          />

          <FormBtn name="Log in" type="submit" />
          <AccountLink to="/register">Don't have an account?</AccountLink>
        </Form>
}
export default LoginForm;
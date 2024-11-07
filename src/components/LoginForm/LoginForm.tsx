import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useMutation } from '@tanstack/react-query';
import CustomInput from "../FormComponents/CustomInput";
import FormBtn from '../FormComponents/FormButton';
import { Form } from "../FormComponents/AuthForm.styled";
import { AccountLink } from '../FormComponents/AccountLink.styled';
import { loginUser } from "../../services/authOperations";
import { User } from "../../types/user";

const LoginForm = () => {
  const navigate = useNavigate();

  const {  mutateAsync } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: User) => loginUser(data),
    onSuccess: (response) => {
      const token = response.token;   
      if (token) {
        localStorage.setItem("authToken", token);
      }
      navigate('/list');

  },
  })

   const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().max(50).min(4).required("Password is required"),
      email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email")
        .required("Email is required"),
    }),
     onSubmit: async (values) => {
       try {
        await mutateAsync(values);
      } catch (err) {
        console.log(err)
      }
    },
   });
    
    return <Form autoComplete="off" onSubmit={formik.handleSubmit}>
          <h1>Login</h1>
          <CustomInput
            label="Email"
            id="email"
            value={formik.values.email}
            handleChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            type="email"
            required={true}
          />
          <CustomInput
            label="Password"
            id="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            error={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            type="password"
            required={true}
          />

      <FormBtn name="Log in" type="submit" disabled={!(formik.isValid && formik.dirty)}/>
          <AccountLink to="/register">Don't have an account?</AccountLink>
        </Form>
}
export default LoginForm;
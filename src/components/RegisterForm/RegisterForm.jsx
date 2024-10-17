import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from "../FormComponents/CustomInput";
import FormBtn from '../FormComponents/FormButton';
import { registerUser } from '../../store/auth/authOperations';
import { Form } from "../FormComponents/AuthForm.styled";
import { AccountLink } from '../FormComponents/AccountLink.styled';
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
   const dispatch = useDispatch();
  const navigate = useNavigate();
   const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: ""
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required("Password is required"),
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email")
        .required("Email is required"),
    }),
     onSubmit: (values) => {
      console.log(values)
      try {
        setLoading(true);
        dispatch(registerUser(values));
        navigate('/login');
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    },
   });
  
 
    
    return <Form autoComplete="off" onSubmit={formik.handleSubmit}>
          <h1>Register</h1>
          <CustomInput
            label="Name *"
            id="name"
            value={formik.values.name}
            handleChange={formik.handleChange}
            error={formik.errors.name}
            type="text"
            required={true}
          />
          <CustomInput
            label="Email *"
            id="email"
            value={formik.values.email}
            handleChange={formik.handleChange}
            error={formik.errors.email}
            type="email"
            required={true}
          />
          <CustomInput
            label="Password *"
            id="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            error={formik.errors.password}
            type="password"
            required={true}
          />

          <FormBtn name="Register" type="submit" disabled={loading}/>
          <AccountLink to="/login">Already have an account?</AccountLink>
        </Form>
}
export default RegisterForm;
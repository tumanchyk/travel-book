import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import CustomInput from "../FormComponents/CustomInput";
import FormBtn from '../FormComponents/FormButton';
import { loginUser } from '../../store/auth/authOperations';
import { Form } from "../FormComponents/AuthForm.styled";
import { AccountLink } from '../FormComponents/AccountLink.styled';


const LoginForm = () => {
   const [loading, setLoading] = useState(false);
   const dispatch = useDispatch();

   const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required("Password is required"),
      email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email")
        .required("Email is required"),
    }),
     onSubmit: (values) => {
      try {
        setLoading(true);
        dispatch(loginUser(values));
        setLoading(false);
      } catch (err) {
        setLoading(false);
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
            error={formik.errors.email}
            type="email"
            required={true}
          />
          <CustomInput
            label="Password"
            id="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            error={formik.errors.password}
            type="password"
            required={true}
          />

      <FormBtn name="Log in" type="submit" disabled={loading} />
          <AccountLink to="/register">Don't have an account?</AccountLink>
        </Form>
}
export default LoginForm;
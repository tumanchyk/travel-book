import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import CustomInput from "../FormComponents/CustomInput";
import FormBtn from '../FormComponents/FormButton';
import { registerUser } from '../../services/authOperations';
import { Form } from "../FormComponents/AuthForm.styled";
import { AccountLink } from '../FormComponents/AccountLink.styled';
import Loader  from '../common/Loader';
import { User } from '../../types/user';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ['register'],
    mutationFn: async (data: User) => registerUser(data)
  })

   const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: ""
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().max(50).min(4).required("Password is required"),
      name: Yup.string().max(50).min(2).required("Name is required"),
      email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email")
        .required("Email is required"),
    }),
     onSubmit: (values) => {
       try {
        mutate(values)
        navigate('/login');
       } catch (err) {
         console.log(err)
      }
    },
   });
  
  return <>
  {
    isPending?
      <Loader /> :
       <Form autoComplete="off" onSubmit={formik.handleSubmit}>
          <h1>Register</h1>
          <CustomInput
            label="Name *"
            id="name"
            value={formik.values.name}
            handleChange={formik.handleChange}
            error={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
            type="text"
            required={true}
          />
          <CustomInput
            label="Email *"
            id="email"
            value={formik.values.email}
            handleChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            type="email"
            required={true}
          />
          <CustomInput
            label="Password *"
            id="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            error={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            type="password"
            required={true}
          />

          <FormBtn name="Register" type="submit" disabled={!(formik.isValid && formik.dirty)}/>
          <AccountLink to="/login">Already have an account?</AccountLink>
        </Form>
  
  }
  </>
}
export default RegisterForm;
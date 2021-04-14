import { gql, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Logo from '../../assets/logo.png';

const SIGNUP_MUTATION = gql`
  mutation signup($name: String, $email: String!, $password: String!){
    signup(name: $name, email: $email, password: $password){
      token
    }
  }
`
interface SignupValues {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
}

export default function SignUp() {
  const history = useHistory()
  const [signup, { data }] = useMutation(SIGNUP_MUTATION)

  const initialValues: SignupValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().max(15).required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().max(20).required('Password is required'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords do not match'
    )
  })

  return <div className='container'>
    <img src={Logo} alt='logo' style={{ width: '50px' }} className='logo' />
    <h2>Sign Up</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        const response = await signup({
          variables: values
        })
        localStorage.setItem('token', response.data.signup.token)
        setSubmitting(false)
        history.push('/users')
      }}
    >
      <Form>
        <Field name='name' type='text' placeholder='Name' />
        <ErrorMessage name='name' component={'div'} />
        <Field name='email' type='text' placeholder='Email' />
        <ErrorMessage name='email' component={'div'} />
        <Field name='password' type='password' placeholder='Password' />
        <ErrorMessage name='password' component={'div'} />
        <Field name='confirmPassword' type='password' placeholder='Confirm Password' />
        <ErrorMessage name='confirmPassword' component={'div'} />
        <button type='submit' className='btn'>Sign Up</button>
      </Form>
    </Formik>
    <div className="register">
      <h3>
        Already have an account?
        <Link to='/login'> Login</Link>
      </h3>
    </div>
  </div>
}

import { gql, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Logo from '../../assets/logo.png';
import './styles.css';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
    }
  }
`
interface LoginValues {
  email: string,
  password: string
}

export default function Login() {
  const history = useHistory()
  const [login, { data }] = useMutation(LOGIN_MUTATION)

  const initialValues: LoginValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().max(20).required('Password is required')
  })

  return <div className='container'>
    <img src={Logo} alt='logo' style={{ width: '50px' }} className='logo' />
    <h2>Login</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        const response = await login({
          variables: values
        })
        localStorage.setItem('token', response.data.login.token)
        setSubmitting(false)
        history.push('/users')
      }}
    >
      <Form>
        <Field name='email' type='text' placeholder='Email' />
        <ErrorMessage name='email' component={'div'} />

        <Field name='password' type='password' placeholder='Password' />
        <ErrorMessage name='password' component={'div'} />

        <button type='submit' className='btn'>
          <span>Login</span>
        </button>
      </Form>
    </Formik>
    <div className="register">
      <h3>
        Don't have an account?
        <Link to='/signup'>Sign Up</Link>
      </h3>
    </div>
  </div>
}

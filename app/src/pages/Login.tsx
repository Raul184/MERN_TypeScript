import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';


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

  return <>
    <h1>Login</h1>
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

        <button type='submit'>Login</button>
      </Form>
    </Formik>
  </>
}

import { gql, useMutation } from '@apollo/client';
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { history } from 'react-router-dom';


const SIGNUP_MUTATIONS = gql`
  mutation signup($name: String, $email: String!, $password: String!){
    signup(name: $name, email: $email, password: $password){
      token
    }
  }
`

export default function SignUp() {
  const { loading, error, token } = useMutation(SIGNUP_MUTATIONS)
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) return <p>{error.message}</p>
  return <>
    <h1>Sign Up</h1>
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
        <Field name='password' type='text' placeholder='Password' />
        <ErrorMessage name='password' component={'div'} />
        <Field name='confirmPassword' type='text' placeholder='Confirm Password' />
        <ErrorMessage name='confirmPassword' component={'div'} />
      </Form>
    </Formik>
  </>
}

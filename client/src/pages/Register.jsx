import React, { useContext, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useMutation, gql } from '@apollo/client'
import { useForm } from '../utilites/hooks'
import { AuthContext } from '../context/auth'

function Register (props) {
  const context = useContext(AuthContext)
  const [errors, setErrors] = useState('')

  const { onSubmit, onChange, values } = useForm(registerUser, {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update (_, { data: { register: RegisterUser } }) {
      context.login(RegisterUser)
      props.history.push('/')
    },
    onError (err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables: values
  })

  function registerUser () {
    addUser()
  }

  return (
    <div>
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <h1>Register</h1>
        <Form.Input
          type='text'
          label='Username'
          placeholder='Username..'
          name='username'
          value={values.username}
          onChange={onChange}
          error={!!errors.username}
        />
        <Form.Input
          label='Email'
          type='email'
          placeholder='Email..'
          name='email'
          value={values.email}
          onChange={onChange}
          error={!!errors.email}
        />
        <Form.Input
          type='password'
          label='Password'
          placeholder='Password..'
          name='password'
          value={values.password}
          onChange={onChange}
          error={!!errors.password}
        />
        <Form.Input
          label='Confirm Password'
          type='password'
          placeholder='Confirm Password..'
          name='confirmPassword'
          value={values.confirmPassword}
          onChange={onChange}
          error={!!errors.confirmPassword}
        />
        <Button type='submit' primary>
          Register
        </Button>
      </Form>
      {Object.values(errors).length > 0 && (
        <div className='ui error message'>
          <ul className='ui list'>
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      token
    }
  }
`

export default Register

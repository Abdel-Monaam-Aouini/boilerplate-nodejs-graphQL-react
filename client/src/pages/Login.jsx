import React, { useContext, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useMutation, gql } from '@apollo/client'
import { useForm } from '../utilites/hooks'
import { AuthContext } from '../context/auth'

function Login (props) {
  const context = useContext(AuthContext)
  const [errors, setErrors] = useState('')

  const { onSubmit, onChange, values } = useForm(loginUserCallback, {
    username: '',
    password: ''
  })

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update (_, { data: { login: loginUser } }) {
      context.login(loginUser)
      props.history.push('/')
    },
    onError (err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables: values
  })

  function loginUserCallback () {
    loginUser()
  }

  return (
    <div>
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <h1>Login</h1>
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
          type='password'
          label='Password'
          placeholder='Password..'
          name='password'
          value={values.password}
          onChange={onChange}
          error={!!errors.password}
        />
        <Button type='submit' primary>
          Login
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

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      token
    }
  }
`

export default Login

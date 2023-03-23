import React, { createContext, useReducer } from 'react'
import jwtDecode from 'jwt-decode'

const initialState = {
  user: null
}

if (window.localStorage.getItem('AUTH_TOKEN')) {
  const decodeToken = jwtDecode(window.localStorage.getItem('AUTH_TOKEN'))
  if (decodeToken.exp * 1000 < Date.now()) {
    window.localStorage.removeItem('AUTH_TOKEN')
  } else {
    initialState.user = decodeToken
  }
}

const AuthContext = createContext({
  user: null,
  login: (userLogin) => {},
  logout: () => {}
})

function authReducer (state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    default:
      return state
  }
}

function AuthProvider (props) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  function login (userLogin) {
    window.localStorage.setItem('AUTH_TOKEN', userLogin.token)
    dispatch({
      type: 'LOGIN',
      payload: userLogin
    })
  }

  function logout () {
    window.localStorage.removeItem('AUTH_TOKEN')
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider }

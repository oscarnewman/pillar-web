import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import TextInput from './ui/form/TextInput'
import PrimaryButton from './ui/PrimaryButton'
import Axios from 'axios'
import { AuthService } from '../services/AuthService'

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = new AuthService()

  const [login] = useMutation(LOGIN, {
    onCompleted: async () => {
      // router.push('/')
      setLoading(false)
    },
    onError: () => {
      setError('You done fucked up')
      setLoading(false)
    },
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    auth.login(email, password)
    setLoading(true)
    login({
      variables: { email, password },
    })
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full block ">
        <TextInput
          title="Email"
          type="email"
          name="email"
          error={error}
          required
          className="mb-6"
          value={email}
          onChange={setEmail}
        />
        <div className="mb-12">
          <TextInput
            title="Password"
            name="password"
            type="password"
            error={error}
            required
            value={password}
            onChange={setPassword}
          />
          <Link href="/login">
            <a className="link text-sm inline-block mt-2">
              Forgot your password?
            </a>
          </Link>
        </div>
        <PrimaryButton
          loading={loading}
          block
          type="submit"
          className="relative"
        >
          Sign in
        </PrimaryButton>
        {/* <p className="mt-4 w-full text-center">
          No account?{' '}
          <Link href="/signup">
            <a className="link">Sign up</a>
          </Link>
        </p> */}
      </div>
    </form>
  )
}

export default LoginForm

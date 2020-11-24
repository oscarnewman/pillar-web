import { useMutation } from '@apollo/react-hooks'
import { Stack } from '@oscarnewman/twist'
import { gql } from 'apollo-boost'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AuthService } from '../services/AuthService'
import TextInput from './ui/form/TextInput'
import PrimaryButton from './ui/PrimaryButton'

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = new AuthService()

  const fakeLogin = () => {
    setError('This account does not exist.')
  }

  const [login] = useMutation(LOGIN, {
    onCompleted: async () => {
      router.push('/')
      setLoading(false)
    },
    onError: () => {
      setError('Something went wrong')
      setLoading(false)
    },
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    fakeLogin()
    // await auth.establishCSRFProtection()
    // await auth.login(email, password)
    // setLoading(true)
    // login({
    // variables: { email, password },
    // })
  }

  // const { data, props } = useForm({
  //   email: {
  //     type: 'email',
  //     required: true,
  //   },
  //   password: {
  //     type: 'password',
  //     required: true,
  //   },
  // })

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Stack space={12}>
        <Stack space={6}>
          <TextInput
            // {...props.email}
            title="Email"
            type="email"
            name="email"
            error={error}
            required
            value={email}
            onChange={setEmail}
          />

          <Stack space={2}>
            <TextInput
              title="Password"
              name="password"
              type="password"
              error={error}
              required
              value={password}
              onChange={setPassword}
            />
            {/* <Link href="/login">
              <a className="link text-sm inline-block">Forgot your password?</a>
            </Link> */}
          </Stack>
        </Stack>

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
      </Stack>
    </form>
  )
}

export default LoginForm

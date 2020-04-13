import Link from 'next/link'
import React, { useState } from 'react'
import PrimaryButton from './ui/PrimaryButton'
import TextInput from './ui/form/TextInput'
import axios from 'axios'
import { AuthService } from '../services/AuthService'
import { Router, useRouter } from 'next/router'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const authService = new AuthService()
    authService
      .login(email, password)
      .then(console.log)
      .then(() => router.push('/'))
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full block ">
        <TextInput
          title="Email"
          type="email"
          name="email"
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

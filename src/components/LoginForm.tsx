import Link from 'next/link'
import React, { useState } from 'react'
import PrimaryButton from './ui/PrimaryButton'
import TextInput from './ui/form/TextInput'
import axios from 'axios'
import { AuthService } from '../services/AuthService'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const authService = new AuthService()
    const user = await authService.login(email, password)
    console.log(user)
  }

  return (
    <form className="max-w-sm w-full margin-auto" onSubmit={handleSubmit}>
      <div className="w-full block ">
        <TextInput
          title="Email"
          type="email"
          name="email"
          className="mb-6"
          value={email}
          onChange={setEmail}
        />
        <div className="mb-12">
          <TextInput
            title="Password"
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <Link href="/login">
            <a className="link text-sm inline-block mt-2">
              Forgot your password?
            </a>
          </Link>
        </div>
        <PrimaryButton block type="submit">
          Sign in
        </PrimaryButton>
        <p className="mt-4 w-full text-center">
          No account?{' '}
          <Link href="/signup">
            <a className="link">Sign up</a>
          </Link>
        </p>
      </div>
    </form>
  )
}

export default LoginForm

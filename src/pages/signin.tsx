import React from 'react'
import LoginForm from '../components/LoginForm'
import Head from '../components/util/Head'
import Logo from '../components/ui/Logo'

const SignIn = () => {
  return (
    <div>
      <Head title="Login | Pillar"></Head>
      <div className="flex w-full h-full items-start pt-12 justify-center">
        {/* <div className="w-1/2 flex-1 bg" /> */}
        <div className="p-12 flex flex-col items-center w-full">
          <div className="mb-12">
            <Logo />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default SignIn

import React from 'react'
import LoginForm from '../components/LoginForm'
import Head from '../components/util/Head'
import Logo from '../components/ui/Logo'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className="w-full h-full bg-purple-600 flex">
      <Head title="Login | Pillar"></Head>
      <div className="flex items-center pt-12 justify-center bg-white flex-1 max-w-xl shadow-2xl pb-24">
        <div className="px-12 flex flex-col items-center max-w-lg  w-full">
          <div className="flex mb-6 flex-col items-start w-full">
            <Logo />
            <div className="h-6"></div>
            <h2 className="mt-6 text-center text-3xl leading-9 font-bold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-gray-600">
              Or{' '}
              <Link href="/signup">
                <a className="link focus:outline-none focus:underline transition ease-in-out duration-150">
                  sign up and build a profile
                </a>
              </Link>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="bg bg-cover bg-center flex-1 w-full h-full"></div>
      <style jsx>{`
        .bg {
          background-image: url('https://res.cloudinary.com/saythanks/image/upload/v1586754572/pillar/photo-1507608869274-d3177c8bb4c7.jpg');
        }
      `}</style>
    </div>
  )
}

export default SignIn

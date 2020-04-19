import React from 'react'
import LoginForm from '../components/LoginForm'
import Head from '../components/util/Head'
import Logo from '../components/ui/Logo'
import Link from 'next/link'
import { withApollo } from '../lib/initApollo'

const SignIn = () => {
  return (
    <div className="w-full h-full bg bg-cover bg-center bg-purple-600 flex">
      <Head title="Login | Pillar"></Head>
      <div className="flex items-center pt-12 justify-center bg-page-primary flex-1 max-w-xl shadow-2xl pb-24">
        <div className="px-12 flex flex-col items-center max-w-lg  w-full">
          <div className="flex mb-6 flex-col items-start w-full">
            <Logo />
            <div className="h-6"></div>
            <h2 className="mt-6 text-center text-3xl leading-9 font-bold text-fg-primary">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-fg-secondary">
              Or{' '}
              <Link href="/signup">
                <a className="text-fg-accent focus:outline-none focus:underline transition ease-in-out duration-150">
                  sign up and build a profile
                </a>
              </Link>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
      <style jsx>{`
        .bg {
          background-image: url('https://res.cloudinary.com/saythanks/image/upload/v1586754572/pillar/photo-1507608869274-d3177c8bb4c7.jpg');
        }
      `}</style>
    </div>
  )
}

export default withApollo({ ssr: false })(SignIn)

import React from 'react'
import Logo from '../components/ui/Logo'
import Nav from '../components/ui/Nav'
import cn from 'classnames'
import PrimaryButton from '../components/ui/PrimaryButton'
import SecondaryButton from '../components/ui/SecondaryButton'
import Footer from '../components/ui/Footer'

const Home = () => (
  <div className="min-h-full flex flex-col">
    <div className="flex-1">
      <Nav></Nav>
      <Hero></Hero>
    </div>
    <Footer></Footer>
  </div>
)

const Hero = () => (
  <div className="">
    <div className="mt-10 flex flex-col lg:items-center lg:flex-row container px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left order-2">
        <h2 className="font-display text-4xl text-purple-600 tracking-tight leading-10 sm:text-5xl sm:leading-none md:text-6xl font-extrabold">
          Meet Pillar, <br className="" />
          <span className="text-gray-900">
            Your Personal Philanthropic Advisor
          </span>
        </h2>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Pillar handles the hard parts of giving. Tell Pillar what matters to
          you, and it manages your giving in real time.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <PrimaryButton
            href="/quiz"
            afterIcon={
              <i className="fas fa-arrow-right ml-3 text-indigo-300" />
            }
            large
          >
            Start your portfolio
          </PrimaryButton>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <SecondaryButton block href="/test" large>
              How it works
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'order-1 mt-0 mb-16 max-w-lg mx-auto',
          'sm:order-3 sm:mt-16',
          'lg:pl-24 lg:mt-0 lg:mb-0 lg:max-w-xl lg:w-full',
        )}
      >
        <img
          src="/mockup.svg"
          alt="Pillar Dashbaord Illustration"
          className="shadow-2xl block w-full rounded-md"
        />
      </div>
    </div>
  </div>
)

export default Home

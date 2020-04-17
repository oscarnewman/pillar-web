import React from 'react'
import Logo from '../components/ui/Logo'
import Nav from '../components/ui/Nav'
import cn from 'classnames'
import PrimaryButton from '../components/ui/PrimaryButton'
import SecondaryButton from '../components/ui/SecondaryButton'
import Footer from '../components/ui/Footer'
import BrowserFrame from '../components/ui/BrowserFrame'
import DashMockup from '../components/DashMockup'

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
  <div className="pb-24">
    <div className="mt-10 flex flex-col lg:items-center lg:flex-row container px-4 sm:mt-12 px-6 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left order-2">
        <h2 className="font-display text-4xl text-fg-accent sm:tracking-tight leading-10 sm:text-5xl leading-tighter sm:leading-none md:text-6xl font-extrabold">
          Meet Pillar, <br className="" />
          <span className="text-fg-primary">
            Your Personal Philanthropic Advisor
          </span>
        </h2>
        <p className="mt-3 text-base text-fg-secondary sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Pillar handles the hard parts of giving. Tell Pillar what matters to
          you, and it manages your giving in real time.
        </p>
        <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div>
            <PrimaryButton block href="/quiz" large>
              Start your portfolio
            </PrimaryButton>
          </div>
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
        {/* <BrowserFrame>
          <img
            src="/mockup.svg"
            alt="Pillar Dashbaord Illustration"
            className="shadow-2xl block w-full rounded-md"
          />
        </BrowserFrame> */}
        <DashMockup />
      </div>
    </div>
  </div>
)

export default Home

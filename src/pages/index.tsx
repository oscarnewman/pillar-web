import cn from 'classnames'
import React from 'react'
import DashMockup from '../components/DashMockup'
import Footer from '../components/ui/Footer'
import Nav from '../components/ui/Nav'
import PrimaryButton from '../components/ui/PrimaryButton'
import SecondaryButton from '../components/ui/SecondaryButton'
import Container from '../components/util/Container'

const Home = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex-1">
        <Nav />
        <Hero />
        <Story />
      </div>

      <Footer />
    </div>
  )
}

const Story = () => {
  return (
    <section>
      <Container>
        <div className="max-w-2xl mx-auto text-xl py-24  leading-10 ">
          <p>Giving is pretty hard.</p>
          <p>
            Sure, you can give now and then to a couple of the charity's you've
            heard of before, or that you friend helps out with. And that's
            awesome. Honestly.
          </p>
          <p>
            But we don't need to tell you that the world needs help more than
            ever right now. Climate change, reproductive rights,
            coronavirus&mdash;there's no shortage of problems keeping us up at
            night.
          </p>
          <p>
            There's a lot of great nonprofits fighting every day to help. But
            these issues are so huge that no one group can solve it all. And
            some nonprofits are simply better than others. And the world is
            changing so quickly that the best way to give changes daily.
          </p>
          <p>
            Rich philanthropists pay thousands for advisors to manage this all
            for them. Most of us can't.
          </p>
          <p>
            We built Pillar to help make <em>good, proactive</em> giving
            effortless. We work with leading experts and use data science to
            build smart, dynamic, and personalized giving portfolios.
          </p>
          <p>
            All you do is tell Pillar what you care about and sit back. We
            monitor the news, world events, financial statements, and expert
            advice 24/7 to build your portfolio.
          </p>
        </div>
      </Container>
      <style jsx>{`
        section {
          background: linear-gradient(theme(colors.purple.25), white);
        }

        p {
          @apply mb-6;
        }

        .cap {
          @apply uppercase tracking-wide text-lg font-bold;
        }

        @screen dark {
          section {
            background: linear-gradient(
              theme(colors.black),
              theme(colors.page.primary)
            );
             {
              /* background: black; */
            }
          }
        }

        .drop {
          float: left;
          @apply font-display;
          font-size: 60px;
          line-height: 60px;
          margin: 0;
          padding: 0;
          @apply pr-2;
        }
      `}</style>
    </section>
  )
}

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
        <DashMockup />
      </div>
    </div>
  </div>
)

export default Home

import cn from 'classnames'
import React, { useState } from 'react'
import { animated } from 'react-spring'
import BasicPage from '../components/layout/BasicPage'
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion'
import useMultistepForm, {
  FormStepProps,
} from '../components/MultistepForm/useMultistepForm'
import SecondaryButton from '../components/ui/SecondaryButton'
import Container from '../components/util/Container'

const Section = ({ children, enabled = true }) => (
  <section
    className={cn('mb-24 flex flex-col items-center text-center', {
      'pointer-events-none opacity-50': !enabled,
    })}
  >
    {children}
  </section>
)
const Title = ({ children }) => (
  <h1 className="text-3xl md:text-5xl font-display font-normal">{children}</h1>
)
const Description = ({ children }) => (
  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
    {children}
  </p>
)
const Kicker = ({ children }) => (
  <p className="uppercase font-bold text-gray-300 tracking-wide">{children}</p>
)

interface Cause {
  name: string
  active: boolean
}

const causes = [
  {
    name: '👩‍⚕️ COVID-19 Response',
    active: true,
    nonprofits: 4,
    gradient: ['#f093fb', '#f5576c'],
  },
  {
    name: '🌳 Climate Change',
    active: true,
    nonprofits: 15,
    gradient: ['#5ee7df', '#b490ca'],
  },
  {
    name: '🐣 Reproductive Rights',
    active: false,
    gradient: ['#5ee7df', '#b490ca'],
  },
  {
    name: '🚚 Disaster Relief',
    active: false,
    gradient: ['#5ee7df', '#b490ca'],
  },
  {
    name: '🏠 Food & Shelter',
    active: false,
    gradient: ['#5ee7df', '#b490ca'],
  },
]

const CauseToggleBox = ({ cause, toggled = false, onClick }) => (
  <div className="flex flex-col items-center w-full">
    <button
      onClick={onClick}
      className={cn(
        'sm:p-6 px-4 py-2 border border-gray-100 dark:border-gray-800 shadow-sm hover:bg-gray-25',
        'rounded transition-all duration-150 w-full text-left',
        { 'pointer-events-none opacity-50': !cause.active },
        // { 'bg-gray-900 text-white hover:bg-gray-800': toggled },
        { 'gradient text-white': toggled },
      )}
      disabled={!cause.active}
    >
      <p className="font-medium">{cause.name}</p>
      {cause.active || <p className="text-gray-400 font-medium">Coming Soon</p>}
      {cause.active && (
        <p
          className={cn('font-medium', {
            'text-white soft-light': toggled,
            'text-gray-400': !toggled,
          })}
        >
          {cause.nonprofits} Organizations
        </p>
      )}
    </button>

    <style jsx>{`
      .gradient {
        background: linear-gradient(
          135deg,
          ${cause.gradient?.[0] ?? 'white'} 0%,
          ${cause.gradient?.[1] ?? 'white'} 100%
        );
      }
    `}</style>
  </div>
)

const InitialSection: React.SFC<FormStepProps> = ({ advanceForm }) => (
  <Section>
    <div
      className={cn(
        'sm:p-12 p-6 bg-gray-900 dark:bg-gray-darkest text-white border-gray-100 shadow-2xl',
        'rounded transition-all duration-150  text-left',
      )}
    >
      <Title>Building your plan</Title>
      <div className="max-w-lg text-left mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-indigo-100 font-normal">
        <p>
          <strong>Stop stressing about where, how, why, or if to give.</strong>{' '}
          Our experts can make your giving impactful and important, and always
          up to date with what goes on in the world.
        </p>
        <div className="h-6"></div>
        <p>
          To design and automate your portfolio, we need to learn a little about
          you, so we wrote a few quick questions.
        </p>
      </div>
      <div className="h-10"></div>
      <SecondaryButton block onClick={advanceForm}>
        Let's go 🎉
      </SecondaryButton>
    </div>
  </Section>
)

const Quiz = () => {
  const [chosenCauses, setCauses] = useState({})
  const needed = 1
  const chosen = Object.values(chosenCauses).filter((a) => a).length
  const left = needed - chosen

  return (
    <BasicPage title="Build your Plan | Pillar" contained={false}>
      <div className="h-6 md:h-12"></div>
      <div className="relative max-w-full overflow-hidden">
        <AnimatedQuiz></AnimatedQuiz>
      </div>
    </BasicPage>
  )
}

const CauseSection: React.SFC<FormStepProps> = ({
  form,
  setForm,
  advanceForm,
  back,
}) => {
  const needed = 1
  const chosen = Object.values(form.causes).filter((a) => a).length
  const left = needed - chosen
  return (
    <Section>
      {/* <Kicker>1. Causes</Kicker> */}
      <Title>What do you want to give to?</Title>
      <Description>
        Pick a few main areas. We’ll build and fine tune your custom giving plan
        from here.
      </Description>

      <div className="flex -mx-6 flex-wrap items-center justify-center mt-8 md:mt-2">
        {causes.map((cause) => (
          <div className="mx-6 my-2 md:my-6 w-full md:w-64" key={cause.name}>
            <CauseToggleBox
              cause={cause}
              toggled={!!form.causes[cause.name]}
              onClick={() =>
                setForm({
                  ...form,
                  causes: {
                    ...form.causes,
                    [cause.name]: !form.causes[cause.name],
                  },
                })
              }
            ></CauseToggleBox>
          </div>
        ))}
      </div>
      <div className="h-6"></div>
      <SecondaryButton large onClick={advanceForm} disabled={left > 0}>
        {left > 0 ? <p>Pick a Cause</p> : <p>Continue</p>}
      </SecondaryButton>
    </Section>
  )
}

const questions = [
  {
    title:
      'Would you rather give to an established, national charity, or an local upstart with promising early results',
    options: [
      { name: `I'd trust the national charity`, id: 'big' },
      {
        name: `I'd give to the local charity, even if its riskier.`,
        id: 'small',
      },
      {
        name: `I'd give to both`,
        id: 'same',
      },
      {
        name: `I'm not sure`,
        id: 'idk',
      },
    ],
  },
]

const PreferencesSection: React.SFC<FormStepProps> = ({
  form,
  setForm,
  back,
  advanceForm,
}) => {
  const setForQuestion = (question) => (value) =>
    setForm({
      ...form,
      preferences: { ...form.preferences, [question]: value },
    })

  return (
    <Section enabled={true}>
      <Title>How do you give?</Title>
      <Description>
        Answer some questions to tell us what you value when you give.
      </Description>

      <div className="w-full mx-auto flex flex-col items-start max-w-lg">
        <div className="h-12"></div>
        {questions.map((q) => (
          <MultipleChoiceQuestion
            key={q.title}
            question={q.title}
            options={q.options}
          ></MultipleChoiceQuestion>
        ))}
        <MultipleChoiceQuestion
          question="Do you agree with the concept of charity?"
          selected={form.preferences.charity}
          setSelected={setForQuestion('charity')}
          options={[
            { name: 'Yes, always', id: 'yes' },
            { name: 'Only when it benefits me', id: 'sometimes' },
            { name: 'If my friends guilt me into it', id: 'barely' },
            { name: 'Hardly ever', id: 'no' },
          ]}
        />
        <div className="h-6"></div>
        <MultipleChoiceQuestion
          question="Which part of the environment do you care about the most?"
          options={[
            { name: 'Trees', id: 'yes' },
            { name: 'Water, I think?', id: 'sometimes' },
            { name: 'Possums', id: 'barely' },
            { name: 'Bugs', id: 'no' },
          ]}
          setSelected={setForQuestion('environment')}
          selected={form.preferences.environment}
        />
      </div>

      <SecondaryButton onClick={advanceForm}>Continue</SecondaryButton>
    </Section>
  )
}

const AnimatedQuiz = () => {
  const steps = {
    initial: InitialSection,
    causes: CauseSection,
    plan: PreferencesSection,
  }

  const { transitions, step, next, back } = useMultistepForm('initial')

  const nextStep = (): boolean => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    switch (step.name) {
      case 'initial':
        next('causes')
        break
      case 'causes':
        next('plan')
        break
      case 'plan':
        console.log('Submitting')
        return true
        break
      default:
        break
    }

    return false
  }

  const advanceForm = () => {
    if (nextStep()) {
      // submit
    }
  }

  const [form, setForm] = useState({
    causes: [],
    preferences: {
      charity: '',
      environment: '',
    },
  })

  return (
    <div className="relative w-full max-w-full ">
      <Container>
        {transitions.map(({ item, props, key }) => {
          const CurrentStep = steps[item.name]
          return (
            <animated.div
              key={key}
              style={{
                ...props,
              }}
            >
              <CurrentStep
                advanceForm={advanceForm}
                form={form}
                setForm={setForm}
                back={back}
              />
            </animated.div>
          )
        })}
      </Container>
    </div>
  )
}

export default Quiz

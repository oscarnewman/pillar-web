import { useState } from 'react'
import { useTransition } from 'react-spring'

interface FormStep {
  name: string
  dir: 1 | -1
}

export interface FormStepProps {
  form: any
  setForm: (any) => void
  advanceForm: () => void
  back: () => void
}

const ForwardStepTo = (name: string): FormStep => ({ name, dir: 1 })
const ReverseStepTo = (name: string): FormStep => ({ name, dir: -1 })

const useSteps = (
  initialStep: string,
): [FormStep, (to: string) => void, () => void] => {
  const [step, setStep] = useState<FormStep>({ name: initialStep, dir: 1 })
  const [history, setHistory] = useState([initialStep])

  const next = (to: string) => {
    if (to === step.name) return
    setStep(ForwardStepTo(to))
    setHistory([...history, to])
  }

  const back = () => {
    if (history.length <= 1) return
    const prev = history[history.length - 2]
    setStep(ReverseStepTo(prev))
    setHistory(history.slice(0, -1))
  }
  return [step, next, back]
}

const useMultistepForm = (initialStep: string) => {
  const sign = (n: number) => (n >= 0 ? '' : '-')

  const [step, next, back] = useSteps(initialStep)

  const transitions = useTransition(step, (s) => s.name, {
    from: {
      transform: `translate3d(${sign(step.dir)}15%,0,0)`,
      opacity: 0,
      position: 'absolute',
    },
    enter: {
      transform: `translate3d(0,0px,0)`,
      opacity: 1,
      position: 'relative',
    },
    leave: {
      transform: `translate3d(${sign(-step.dir)}15%,0,0)`,
      opacity: 0,
      position: 'absolute',
    },
  })

  return { transitions, step, next, back }
}

export default useMultistepForm

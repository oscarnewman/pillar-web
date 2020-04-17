import React from 'react'
import cn from 'classnames'

interface Option {
  name: string
  id: string
}

interface MCProps {
  question: string
  helpText?: string
  options: Option[]
  selected?: string
  setSelected?: (string) => void
}

const MCOption: React.SFC<{
  selected?: boolean
  onClick?: () => any
  optionKey?: string
}> = ({ children, optionKey, selected, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      'px-4 py-2 border border-gray-100 dark:border-gray-800 shadow-sm',
      'rounded transition-all duration-150 w-full text-left',
      'text-gray-800 dark:text-gray-100 font-medium',
      'flex items-center justify-start focus:outline-none',
      {
        'bg-purple-50 dark:bg-gray-darkest text-purple-400 dark:text-gray-100 border-purple-100': selected,
      },
    )}
  >
    {optionKey && (
      <div className="w-6 h-6 flex items-center justify-center bg-purple-50 dark:bg-gray-800 rounded text-purple-200 mr-4">
        {optionKey}
      </div>
    )}
    {children}
  </button>
)

const MultipleChoiceQuestion: React.SFC<MCProps> = ({
  question,
  helpText,
  options,
  selected: defaultSelected,
  setSelected,
}) => {
  return (
    <div className="text-left w-full">
      <h3 className="text-gray-600 dark:text-gray-100 text-lg font-medium">
        {question}
      </h3>
      <div className="h-4"></div>

      {options.map((option, i) => (
        <div key={option.id}>
          <MCOption
            onClick={() => setSelected(option.id)}
            optionKey={String.fromCharCode(65 + i)}
            selected={defaultSelected == option.id}
          >
            {option.name}
          </MCOption>
          <div className="h-3"></div>
        </div>
      ))}
    </div>
  )
}

export default MultipleChoiceQuestion

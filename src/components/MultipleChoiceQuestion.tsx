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
      'px-4 py-2 border border-gray-100 shadow-sm hover:bg-gray-25',
      'rounded transition-all duration-150 w-full text-left',
      'text-gray-600 font-medium',
      'flex items-center justify-start',
      {
        'bg-purple-50 text-purple-400  border-purple-100 hover:bg-purple-50 hover:text-purple-600': selected,
      },
    )}
  >
    {optionKey && (
      <div className="w-6 h-6 flex items-center justify-center bg-purple-50 rounded text-purple-200 mr-4">
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
      <h3 className="text-gray-800 text-lg font-medium">{question}</h3>
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

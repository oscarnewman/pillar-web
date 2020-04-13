import React from 'react'
import cn from 'classnames'

interface InputLabelProps {
  error?: boolean
}
const InputLabel: React.FC<InputLabelProps> = ({ children, error }) => (
  <p
    className={cn('text-sm font-medium text-gray-600 mb-2', {
      'text-red-700': error,
    })}
  >
    {children}
  </p>
)

export const ErrorText: React.FC = ({ children }) => (
  <p className="text-sm text-red-700 mt-1">{children}</p>
)

export default InputLabel

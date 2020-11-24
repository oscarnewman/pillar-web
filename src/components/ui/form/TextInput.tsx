import cn from 'classnames'
import React, { ReactElement, useEffect, useState } from 'react'
import InputLabel, { ErrorText } from './InputLabel'

interface InputProps {
  title?: string
  error?: string
  format?: (string) => string
  unformat?: (string) => string
  onChange?: (string) => void
  onBlur?: (string) => void
  icon?: ReactElement
  value?: string
  type?: string
  className?: string
  [id: string]: any // For any arbitary input prop
}

const TextInput: React.FC<InputProps> = ({
  title,
  error,
  onChange = (_: string) => _,
  onBlur = (_: string) => _,
  format = (_) => _,
  unformat = (_) => _,
  icon,
  value,
  type = 'text',
  className,
  ...props
}) => {
  const [realValue, setRealValue] = useState(value)

  useEffect(() => setRealValue(value), [value])

  const handleChange = (e) => {
    const { value } = e.target
    onChange(unformat(value))
  }

  return (
    <label className={cn('block relative', className)}>
      {title && <InputLabel error={!!error}>{title}</InputLabel>}
      {icon && <div className="absolute icon ml-3">{icon}</div>}
      <input
        type={type}
        value={format(realValue)}
        className={cn('form-input block w-full', {
          'border-red-500 text-red-600 ': error,
          'pl-8': icon,
        })}
        // placeholder={title}
        aria-label={title}
        onChange={handleChange}
        onBlur={(e) => onBlur(e.target.value)}
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <style jsx>{`
        .icon {
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </label>
  )
}

export default TextInput

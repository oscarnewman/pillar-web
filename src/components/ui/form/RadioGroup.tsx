import React from 'react'
import InputLabel from './InputLabel'

interface RadioOption {
  name: string
  value: any
}

interface RadioItemProps {
  option: RadioOption
  group: string
  selected: boolean
  onSelect?: () => void
}

const RadioItem: React.SFC<RadioItemProps> = ({
  option,
  group,
  onSelect = () => null,
  selected = false,
}) => (
  <div>
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio"
        name={group}
        onChange={onSelect}
        checked={selected}
      />
      <span className="ml-2">{option.name}</span>
    </label>
  </div>
)

interface RadioGroupProps {
  title?: string
  name: string
  error?: string
  options: RadioOption[]
  onChange?: (string) => void
  value?: string
}
const RadioGroup: React.SFC<RadioGroupProps> = ({
  title,
  options,
  value,
  onChange = (_) => _,
}) => (
  <div>
    {title && <InputLabel>{title}</InputLabel>}
    {options.map((option) => (
      <RadioItem
        option={option}
        group={name}
        selected={option.value === value}
        onSelect={() => onChange(option.value)}
      />
    ))}
  </div>
)

export default RadioGroup

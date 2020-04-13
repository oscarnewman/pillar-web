import React from 'react'

interface CheckboxProps {
  checked: boolean
  onChange?: (c: boolean) => any
}

const Checkbox = ({ checked = false, children, onChange = (_) => null }) => (
  <label className="flex items-center">
    <input
      type="checkbox"
      className="form-checkbox"
      onChange={(e) => onChange(e.target.checked)}
    />
    <span className="ml-2">{children}</span>
  </label>
)

export default Checkbox

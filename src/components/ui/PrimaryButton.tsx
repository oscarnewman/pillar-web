import React from 'react'
import Button, { ButtonProps } from './Button'
import cn from 'classnames'
const PrimaryButton: React.SFC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Button
      className={cn(
        'bg-purple-600 text-white rounded-md shadow',
        'hover:bg-purple-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out',
        className,
      )}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton

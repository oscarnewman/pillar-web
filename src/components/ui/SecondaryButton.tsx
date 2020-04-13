import React from 'react'
import Button, { ButtonProps } from './Button'
import cn from 'classnames'

const SecondaryButton: React.SFC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      className={cn(
        'text-purple-700 bg-purple-50 hover:text-purple-600 hover:bg-purple-25',
        'rounded-md',
        'transition duration-150 ease-in-out',
        'focus:outline-none focus:shadow-outline focus:border-purple-300',
      )}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default SecondaryButton

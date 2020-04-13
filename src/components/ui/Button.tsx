import cn from 'classnames'
import React from 'react'
import { withStyles } from '../util/withStyles'
import ButtonOrLink, { ButtonOrLinkProps } from './buttonOrLink'
import Spinner from './Spinner'

export type ButtonProps = ButtonOrLinkProps &
  withStyles & {
    /** Render as a block with full width. */
    block?: boolean
    /** Render as borderless. */
    borderless?: boolean
    /** Invert text colors. */
    inverted?: boolean
    /** Increase font size and padding to large. */
    large?: boolean
    /** Decrease font size and padding to small. */
    small?: boolean
  }

const Button: React.SFC<ButtonProps> = ({
  block,
  borderless,
  children,
  disabled,
  inverted,
  large,
  loading,
  small,
  className,
  ...restProps
}) => {
  return (
    <ButtonOrLink
      {...restProps}
      aria-busy={loading}
      disabled={loading}
      loading={loading}
      className={cn(
        {
          'block w-full': block,
          'px-8 py-3 text-base leading-6 font-medium md:py-4 md:text-lg md:px-10': large,
          'px-4 py-2 text-base leading-6 font-medium md:py-3 md:px-6':
            !large && !small,
          'pointer-events-none opacity-50': disabled,
        },
        className,
      )}
    >
      {loading ? <Spinner size={20} /> : children}
    </ButtonOrLink>
  )
}

export default Button

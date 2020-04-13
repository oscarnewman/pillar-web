import React, { useMemo, useCallback } from 'react'

export type ButtonOrLinkTypes = HTMLAnchorElement | HTMLButtonElement

export type ButtonOrLinkProps = {
  [prop: string]: unknown
  /** Icon to display at the end the content. */
  afterIcon?: React.ReactNode
  /** Icon to display at the start the content. */
  beforeIcon?: React.ReactNode
  /** Content within the button or link. */
  children: NonNullable<React.ReactNode>
  /** Whether the element is disabled. */
  disabled?: boolean
  /** Apply flexbox styles to icons. */
  //   flexAlign?: boolean
  /** Render as an anchor link with a URL. */
  href?: string
  /** Whether the element is loading. */
  loading?: boolean
  /** Callback fired when the element is clicked. */
  onClick?: (event: React.MouseEvent<ButtonOrLinkTypes>) => void
  /** Callback fired when the element is released. */
  onMouseUp?: (event: React.MouseEvent<ButtonOrLinkTypes>) => void
  /** When a link, open the target in a new window. */
  openInNewWindow?: boolean
  /** Rel attribute override for if the component has an href */
  rel?: string
  /** When a button, the type of button. */
  type?: 'button' | 'submit' | 'reset'
}

const ButtonOrLink: React.SFC<ButtonOrLinkProps> = ({
  afterIcon,
  beforeIcon,
  children,
  disabled,
  href,
  loading,
  onClick,
  onMouseUp,
  openInNewWindow,
  rel,
  type = 'button',
  ...restProps
}) => {
  // Intercept click to handle disabled state
  const handleClick = useCallback(
    (event: React.MouseEvent<ButtonOrLinkTypes>) => {
      if (disabled) event.preventDefault()
      else if (onClick) onClick(event)
    },
    [disabled, onClick],
  )

  const handleMouseUp = useCallback(
    (event: React.MouseEvent<ButtonOrLinkTypes>) => {
      if (onMouseUp) onMouseUp(event)
    },
    [onMouseUp],
  )

  const Tag = href ? 'a' : 'button'
  const props: JSX.IntrinsicElements['a'] & JSX.IntrinsicElements['button'] = {}

  // Determine props based on element type
  if (href) {
    props.href = href
    props.rel = rel

    if (openInNewWindow) {
      props.target = '_blank'

      if (props.rel === undefined) {
        props.rel = 'noopener noreferrer'
      }
    }
  } else {
    props.disabled = disabled || loading || false
    props.type = type || 'button'
  }

  return (
    <Tag {...restProps} {...props} onClick={handleClick} onMouseUp={onMouseUp}>
      {!loading && beforeIcon && beforeIcon}
      <span>{children}</span>
      {!loading && afterIcon && afterIcon}
    </Tag>
  )
}

export default ButtonOrLink

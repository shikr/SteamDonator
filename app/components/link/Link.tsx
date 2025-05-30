import { LinkProps, Link as RemixLink } from '@remix-run/react'
import style from './Link.module.scss'

function Link({ className, ...props }: LinkProps) {
  return (
    <RemixLink
      className={className ? `${style.link} ${className}` : style.link}
      {...props}
    />
  )
}

export default Link

import clsx from 'clsx'
import style from './Button.module.scss'

function Button({ className, ...props }: React.JSX.IntrinsicElements['button']) {
  return (
    <button
      className={clsx(style.default, className !== undefined && className)}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button

import { Icon } from '@iconify/react'
import { Form } from '@remix-run/react'
import clsx from 'clsx'
import Link from '../link/Link'
import style from './Nav.module.scss'

function NavBar() {
  // TODO: use logged user
  const user = undefined

  return (
    <nav className={style.container}>
      <Link to="/" className={style.item}>
        <Icon icon="ri:home-9-fill" /> Home
      </Link>
      <div className={clsx(style.right, user !== undefined && style.inline)}>
        <Form role="search">
          <div className={style.search}>
            <span className={style.icon}>
              <Icon icon="ri:search-line" />
            </span>
            <input name="q" type="text" autoComplete="off" />
          </div>
        </Form>
        {user === undefined ? (
          <Link to="/login" className={style.login}>
            Login
          </Link>
        ) : (
          // TODO: update with user.id
          <Link to={`/user/${user}`} className={style.account}>
            <Icon icon="ri:account-circle-fill" width={20} />
          </Link>
        )}
      </div>
    </nav>
  )
}

export default NavBar

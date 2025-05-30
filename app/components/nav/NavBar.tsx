import { Icon } from '@iconify/react'
import { Form } from '@remix-run/react'
import clsx from 'clsx'
import { useState } from 'react'
import Button from '../button/Button'
import Link from '../link/Link'
import style from './Nav.module.scss'

function NavBar() {
  // TODO: use logged user
  const user = undefined
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <div className={clsx(style.menu, enabled && style.disabled)}>
        <Button onClick={() => setEnabled(true)}>
          <Icon icon="ri:menu-fill" />
        </Button>
      </div>
      <div className={clsx(style.container, enabled && style.enabled)}>
        <div className={style.item}>
          <Button onClick={() => setEnabled(false)}>
            <Icon icon="ri:close-large-fill" />
          </Button>
          <Link to="/" className={style.home}>
            <Icon icon="ri:home-9-fill" /> Home
          </Link>
          <div></div>
        </div>
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
      </div>
    </>
  )
}

export default NavBar

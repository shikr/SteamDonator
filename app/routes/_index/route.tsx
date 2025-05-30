import type { MetaFunction } from '@remix-run/node'
import { title } from './index.module.scss'

export const meta: MetaFunction = () => {
  return [
    { title: 'Steam Donator' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}

export default function Index() {
  return <div className={title}>Steam</div>
}

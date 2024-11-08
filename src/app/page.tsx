import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/links')
  return <p>This is the homepage</p>
}

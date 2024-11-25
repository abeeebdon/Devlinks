import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="p-4">
      <section className="flex items-center justify-between gap-4 w-full">
        <h2>devlinks</h2>
        <div className="flex items-center gap-4">
          <Link
            href="/signup"
            className="p-4 outline-none py-2 border text-white bg-purple rounded-lg hover:bg-phover"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="border outline-none border-purple px-4 py-2 rounded-lg hover:bg-lpurple"
          >
            Login
          </Link>
        </div>
      </section>
    </header>
  )
}

export default Header

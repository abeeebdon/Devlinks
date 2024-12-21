import Image from 'next/image'
import React from 'react'
import { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-lgray">
      <article className="w-full max-w-[476px] p-[32px] xs:p-0">
        <header className="w-full flex items-center justify-center mb-[51px] gap-4 text-center">
          <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
          <Image
            src="/images/devlinks.svg"
            alt="logo"
            width={135}
            height={26.5}
          />
        </header>
        <main>{children}</main>
      </article>
    </section>
  )
}

export default AuthLayout

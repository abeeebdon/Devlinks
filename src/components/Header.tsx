'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
const Headers = () => {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center  p-4 bg-white">
      <div className="flex gap-2">
        <Image src="/images/logo.svg" width={32} height={32} alt="Logo" />
        <Image src="/images/devlinks.svg" width={108} height={21} alt="Logo" />
      </div>
      <div className="flex gap-6 items-center">
        <Link
          href="/links"
          className={`flex gap-2 items-center border, ${
            pathname === '/links' ? 'bg-red' : 'bg-transparent'
          }`}
        >
          <Image src="/images/links.svg" width={20} height={20} alt="link" />
          <span className="hidden sm:block">Links</span>
        </Link>
        <Link
          href="/profile"
          className={`flex gap-2 items-center border, ${
            pathname === '/profile' ? 'bg-red' : 'bg-transparent'
          }`}
        >
          <Image src="/images/user.svg" width={20} height={20} alt="link" />
          <span className="hidden sm:block">Profile Details</span>
        </Link>
      </div>
      <div>
        <Link href="/preview">
          <span className="hidden sm:block">Preview</span>
          <Image
            src="/images/eye.svg"
            width={20}
            height={20}
            alt="link"
            className="sm:hidden"
          />
        </Link>
      </div>
    </header>
  )
}

export default Headers

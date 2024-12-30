import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaLink } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'
const Headers = () => {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex gap-2 items-center">
        <Image src="/images/logo.svg" width={32} height={32} alt="Logo" />
        <h2 className="text-[#333333] font-bold text-lg">devlinks</h2>
      </div>
      <div className="flex xs:gap-2 text-base items-center text-[#737373]">
        <Link
          href="/links"
          className={`hover:text-purple flex gap-2 items-center md:px-[27px] px-4  md:py-[11px] py-2 rounded-lg paragraph font-[600]  , ${
            pathname === '/links' ? 'bg-lpurple text-purple' : 'bg-transparent'
          }`}
        >
          <FaLink size={16} />
          <span className="hidden sm:block">Links</span>
        </Link>
        <Link
          href="/profile"
          className={`hover:text-purple flex gap-2 items-center  md:px-[27px] px-4  md:py-[11px] py-2 rounded-lg paragraph font-[600] , ${
            pathname === '/profile'
              ? 'bg-lpurple text-purple'
              : 'bg-transparent'
          }`}
        >
          <FaRegUserCircle size={16} />
          <span className="hidden sm:block">Profile Details</span>
        </Link>
      </div>
      <div>
        <Link
          href="/preview"
          className="hover:bg-lpurple flex gap-2 items-center  md:px-[27px] px-4  md:py-[11px] py-2 rounded-lg paragraph border border-purple text-purple font-[600]"
        >
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

import {
  Faq as FAQ,
  faqs,
  objectives,
  Review as Rev,
  reviews,
} from '@/components/data'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleDown, FaQuoteLeft } from 'react-icons/fa'
import { IoIosStar } from 'react-icons/io'
import FAqs from './FAqs'
import { FaPhoneVolume } from 'react-icons/fa6'
import { CiMail, CiPhone } from 'react-icons/ci'

const page = () => {
  return (
    <section className="  bg-lpurple">
      {/* Header  */}
      <section className="bg-lgray fixed top-0 left-0 right-0 w-full flex justify-center">
        <header className=" p-4 w-full flex items-center justify-between min-h-[13vh] max-w-[1400px]">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.svg" width={32} height={32} alt="Logo" />

            <h2 className="text-xl">devlinks</h2>
          </div>
          <div className="flex items-center gap-4 ">
            <Link
              href="/signup"
              className="bg-purple p-3 text-sm text-white rounded-md hover:bg-lpurple hover:text-purple"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="border p-3 border-purple text-purple rounded-md hover:border-2"
            >
              Login
            </Link>
          </div>
        </header>
      </section>
      {/* What is Devlinks  */}
      <article className="mt-[10vh] py-10 flex justify-center">
        <section className="mt-10 p-4 flex flex-col md:flex-row gap-[7%] justify-center w-full max-w-[1400px]">
          <div className="basis-1/2 max-w-[500px] w-full">
            <h2 className="text-center text-xl text-purple font-bold">
              What is Devlinks
            </h2>
            <p className=" mt-4">
              Devlinks is an innovative organization dedicated to simplifying
              the way developers share and manage their personal and
              professional links. Recognizing the growing need for a streamlined
              method to share portfolios, repositories, blogs, and social
              profiles, Devlinks provides a platform that consolidates all these
              resources into a single, customizable page. <br />
              Devlinks ensures that developers spend less time sharing links and
              more time focusing on what truly matters: building and innovating.
              Beyond just sharing links, Devlinks offers advanced organizational
              tools that make managing digital assets effortless. The platform
              includes features such as categorization, analytics, and
              integration with popular developer tools, ensuring that users can
              keep track of their most visited or clicked links.
            </p>
          </div>
          <div className="basis-1/2 h-[300px] ">
            <Image
              src="/images/tired.webp"
              width={100}
              height={50}
              alt="Logo"
              className="w-full h-full rounded-lg"
            />
          </div>
        </section>
      </article>

      {/* Our objectives  */}
      <article className="flex justify-center bg-lgray py-20">
        <section className="mt-10 p-4 w-full max-w-[1400px]">
          <h2 className="text-xl font-semibold text-purple">Our Objectives</h2>
          <article className="mt-4 flex flex-col md:flex-row items-center gap-4 flex-wrap lg:flex-nowrap">
            {objectives.map((obj, index) => {
              return (
                <div
                  key={index}
                  className="w-full md:w-1/3 shadow bg-purple text-white p-4  rounded-md"
                >
                  <FaQuoteLeft />
                  <p className="mt-4">{obj}</p>
                </div>
              )
            })}
          </article>
        </section>
      </article>

      {/* Reviews  */}
      <article className="flex justify-center">
        <section className="mt-10 p-4 w-full max-w-[1400px]">
          <h2 className="text-xl font-semibold text-purple">Reviews </h2>
          <p className="text-gray">
            Here what our esteemed users are saying about us
          </p>
          <article className="mt-6 flex flex-col md:flex-row items-center gap-4 justify-center flex-wrap lg:flex-nowrap">
            {reviews.map((review, index) => {
              return <Review key={index} {...review} />
            })}
          </article>
        </section>
      </article>

      {/* FaQs  */}
      <article className="flex justify-center">
        <section className="mt-10 p-4 w-full max-w-[1400px]">
          <h2 className="text-xl font-semibold text-purple">
            Frequently Asked Questions (FAQs)
          </h2>
          <article className="mt-4">
            {faqs.map((faq, index) => {
              return <FAqs key={index} {...faq} />
            })}
          </article>
        </section>
      </article>
      <footer className="mt-10 min-h-[10vh] p-4 flex justify-center bg-purple">
        <div className="flex text-white justify-between max-w-[1400px] w-full">
          <div className="flex items-center gap-4 text-white">
            <Image src="/images/logo.svg" width={32} height={32} alt="Logo" />
            <p>devlinks</p>
          </div>

          {/* Contact us  */}
          <div>
            <p>Contact us</p>
            <div className="flex items-center text-white gap-4">
              <CiMail />
              <p>abeebdon@gmail.com</p>
            </div>
            <div className="flex items-center text-white gap-4">
              <CiPhone />
              <p>+2349075318511</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default page

//

const Review = ({ author, text, rating }: Rev) => {
  return (
    <div className="flex-col bg-lgray shadow p-3 rounded-md max-w-[350px]">
      <h3>{author}</h3>
      <p className="text-sm my-2">{text}</p>
      <Rating rating={rating} />
    </div>
  )
}

const Rating = (prop: any) => {
  const { rating } = prop
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<IoIosStar key={i} color="gold" />)
    } else {
      stars.push(<IoIosStar color="butter" />)
    }
  }

  return <div className="flex items-center">{stars}</div>
}

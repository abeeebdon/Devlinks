import { faqs, objectives, Review as Rev, reviews } from '@/components/data'
import Image from 'next/image'
import Link from 'next/link'
import { FaQuoteLeft } from 'react-icons/fa'
import { IoIosStar } from 'react-icons/io'
import FAqs from './FAqs'
import { CiMail, CiPhone } from 'react-icons/ci'
import LandingHeader from './LandingHeader'

const page = () => {
  return (
    <section className="  bg-lpurple">
      {/* Header  */}
      <section className="bg-purple fixed top-0 left-0 right-0 w-full flex justify-center">
        <LandingHeader />
      </section>
      {/* What is Devlinks  */}
      <article className="mt-[10vh] py-10 flex bg-purple justify-center">
        <section className="mt-10 p-4 flex flex-col md:flex-row gap-[7%] justify-center w-full max-w-[1400px]">
          <div className="basis-1/2 max-w-[500px] w-full">
            <h2 className=" text-2xl text-white font-bold">What is Devlinks</h2>
            <p className="text-white mt-4 mb-8">
              Devlinks is an innovative organization dedicated to simplifying
              the way developers share and manage their personal and
              professional links. Recognizing the growing need for a streamlined
              method to share portfolios, repositories, blogs, and social
              profiles, Devlinks provides a platform that consolidates all these
              resources into a single, customizable page. <br />
              Devlinks ensures that developers spend less time sharing links and
              more time focusing on what truly matters: building and innovating.
              Beyond just sharing links.
            </p>
            <Link
              href="/signup"
              className="mt-10 bg-green-600 hover:bg-green-400 text-white border-none p-3 text-lg  rounded-md "
            >
              Get Started
            </Link>
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

      <article className="flex bg-lgray justify-center ">
        <section className="w-full max-w-[1400px] text-gray text-center py-[50px]">
          <h2 className="text-2xl font-semibold ">Devlinks</h2>
          <p>Especially for Developers</p>
        </section>
      </article>

      {/* Our objectives  */}
      <article className="flex justify-center bg-lgray py-20">
        <section className="mt-10 p-4 w-full max-w-[1400px]">
          <h2 className="text-2xl font-semibold text-purple text-center">
            Our Objectives
          </h2>
          <article className="mt-8 flex flex-col md:flex-row items-center gap-4 flex-wrap lg:flex-nowrap">
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
      <article className="mt-10  py-[50px] flex justify-center">
        <section className="p-4 w-full max-w-[1400px] text-center">
          <h2 className="text-2xl font-semibold text-purple">Reviews </h2>
          <p className="text-gray text-xl">
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
      <article className="mt-10 flex justify-center">
        <section className=" pb-20 p-4 w-full max-w-[1400px]">
          <h2 className="text-2xl font-semibold text-purple text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <article className="mt-4">
            {faqs.map((faq, index) => {
              return <FAqs key={index} {...faq} />
            })}
          </article>
        </section>
      </article>
      <footer className="relative mt-20 min-h-[15vh] p-4 flex justify-center bg-purple">
        <div className="flex flex-col md:flex-row gap-6 text-white justify-between max-w-[1400px] w-full">
          <div className="flex items-center gap-4 text-white">
            <Image src="/images/logo2.svg" width={24} height={24} alt="Logo" />

            <h2 className="text-lg">devlinks</h2>
          </div>
          <p className="text-lgray opacity-10 absolute md:text-lg lg:text-6xl top-1/3 left-0 right-0 text-center m-auto">
            Especially for Developers
          </p>

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
    <div className="flex-col text-left bg-lgray shadow p-3 rounded-md max-w-[350px]">
      <h3 className="text-lg text-gray">{author}</h3>
      <p className=" my-2 text-dgrap">{text}</p>
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

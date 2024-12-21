import { Faq as FAQ, faqs, Review as Rev, reviews } from '@/components/data'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import { IoIosStar } from 'react-icons/io'
import FAqs from './FAqs'

const page = () => {
  return (
    <section className="  bg-lpurple">
      {/* Header  */}
      <section className="flex justify-center">
        <header className="bg-lpurple p-4 w-full flex items-center justify-between min-h-[13vh] max-w-[1400px]">
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
      <article className="flex justify-center">
        <section className="mt-10 p-4 flex flex-col md:flex-row gap-4 justify-between w-full max-w-[1400px]">
          <div className="basis-1/2">
            <h2>What is Devlinks</h2>
            <p className="text-xs mt-4">
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
              className="w-full h-full"
            />
          </div>
        </section>
      </article>

      {/* Our objectives  */}
      <article className="flex justify-center">
        <section className="mt-10 p-4 w-full max-w-[1400px]">
          <h2>Our Objectives</h2>
          <article className="mt-4 flex flex-col md:flex-row items-center gap-4 flex-wrap lg:flex-nowrap">
            <div className="w-full md:w-1/3 shadow bg-lpurple p-4 text-sm rounded-md">
              Devlinks is an innovative organization dedicated to simplifying
              the way developers share and manage their personal and
              professional links. Recognizing the growing need for a streamlined
              method to share portfolios, repositories, blogs, and social
              profiles, Devlinks provides a platform that consolidates all these
              resources into a single, customizable page
            </div>
            <div className="w-full md:w-1/3 shadow bg-lpurple p-4 text-sm rounded-md">
              Devlinks is an innovative organization dedicated to simplifying
              the way developers share and manage their personal and
              professional links. Recognizing the growing need for a streamlined
              method to share portfolios, repositories, blogs, and social
              profiles, Devlinks provides a platform that consolidates all these
              resources into a single, customizable page
            </div>
            <div className="w-full md:w-1/3 shadow bg-lpurple p-4 text-sm rounded-md">
              Devlinks is an innovative organization dedicated to simplifying
              the way developers share and manage their personal and
              professional links. Recognizing the growing need for a streamlined
              method to share portfolios, repositories, blogs, and social
              profiles, Devlinks provides a platform that consolidates all these
              resources into a single, customizable page
            </div>
          </article>
        </section>
      </article>

      {/* Reviews  */}
      <article className="flex justify-center">
        <section className="mt-10 p-4 w-full max-w-[1400px]">
          <h2>Reviews </h2>
          <p>Here what our esteemed users are saying about us</p>
          <article className="mt-4 flex flex-col md:flex-row items-center gap-4 justify-center flex-wrap lg:flex-nowrap">
            {reviews.map((review, index) => {
              return <Review key={index} {...review} />
            })}
            <div></div>
            <div></div>
            <div></div>
          </article>
        </section>
      </article>

      {/* FaQs  */}
      <article className="flex justify-center">
        <section className="mt-10 p-4 w-full max-w-[1400px]">
          <h2>Frequently Asked Questions</h2>
          <article>
            {faqs.map((faq, index) => {
              return <FAqs key={index} {...faq} />
            })}
          </article>
        </section>
      </article>
      <footer className="mt-10 min-h-[10vh] p-4 flex justify-center bg-purple">
        <div className="flex items-center justify-between max-w-[1400px] w-full">
          <div>
            <p>Devlinks</p>
          </div>
          <div>
            <p>Contact us</p>
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
    <div className="flex-col  shadow p-3 rounded-md max-w-[350px]">
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

import { reviews } from '@/components/data'
import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="px-4">
      <section>
        <Header />
        <article className="p-8 flex sm:flex-row flex-col items-center justify-center gap-6">
          <div>
            <Image
              src="/images/ad1.png"
              className="w-full max-w-[350px] h-full max-h-[300px]"
              alt="ad"
              width={300}
              height={300}
            />
          </div>
          <div>
            <h2>What is devlinks</h2>
            <p>Devlinks is a universal web application that</p>
          </div>
        </article>
        {/* Reviews */}
        <article className="my-10 flex justify-center  gap-4 items-center ">
          {reviews.map((review, index) => {
            return (
              <div
                className="shadow rounded-lg w-full max-w-[300px]"
                key={index}
              >
                <Image
                  src={`/images/${review.img}`}
                  alt=""
                  width={200}
                  height={200}
                  className="h-full rounded-lg max-h-[200px] w-full max-w-[300px]"
                />
                <div className="mt-4 px-2 pb-4">
                  <h2>{review.name}</h2>
                  <p>{review.comment}</p>
                </div>
              </div>
            )
          })}
        </article>
        <article>
          <div>Form</div>
          <form>
            <div>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="email">Your email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email Address"
              />
            </div>
            <div>
              <label htmlFor="message">Your message</label>
              <input
                type="text"
                id="message"
                placeholder="Enter your message"
              />
            </div>
          </form>
        </article>
        <Footer />
      </section>
    </main>
  )
}

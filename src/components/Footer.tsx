import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="mt-8 p-4">
      <section className="text-center">
        <article className="my-2">
          <Image
            src="/images/logo.svg"
            width={100}
            height={100}
            alt="logo"
            className="mx-auto"
          />
          <div></div>
        </article>
        <article className="my-2 flex flex-col gap-2">
          <p> About Us</p>
          <p>Contact</p>
          <p>Blog</p>
        </article>
        <article className="my-2 flex flex-col gap-2">
          <p>Careers </p>
          <p>Support </p>
          <p>Privacy Policy</p>
        </article>
        <article className="my-2">
          <div className="mb-2">
            <button>Request Invite</button>
          </div>
          <p>© Easybank. All Rights Reserved</p>
        </article>
      </section>
    </footer>
  )
}

export default Footer

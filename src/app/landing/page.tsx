import { faqs, objectives, reviews } from "@/components/data";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import FAqs from "./FAqs";
import { CiMail, CiPhone } from "react-icons/ci";
import LandingHeader from "./LandingHeader";
import { Review } from "./Review";

const page = () => {
  const features = [
    "Unified Link Page",
    "Custom Branding",
    "Easy Link Management",
    "Link Analytics",
    "Mobile-Optimized",
    "Fast & Secure",
  ];
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
            <h2 className="text-2xl text-white font-bold mb-4">
              Simplify How You Share. Focus on What You Build.
            </h2>
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
          <p className="text-lg px-6">
            We simplify your digital presence with one shareable link for all
            your developer resources— GitHub repos, blogs, portfolios, and
            social profiles—all in one place.
          </p>
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
              );
            })}
          </article>
        </section>
      </article>
      {/* === Features Section === */}
      <section className="py-16 px-4 bg-gray-100" id="features">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-10">
            What You Get with Devlinks
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold mb-2">{feature}</h4>
                <p className="text-gray-600 text-sm">
                  {feature === "Unified Link Page"
                    ? "One link for all your developer resources."
                    : "Effortless tools to showcase and manage your work."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews  */}
      <article className="mt-10  py-[50px] flex justify-center">
        <section className="p-4 w-full max-w-[1400px] text-center">
          <h2 className="text-2xl font-semibold text-purple">Reviews </h2>
          <p className="text-gray text-xl">
            Here what our esteemed users are saying about us
          </p>
          <article className="mt-6 flex flex-col md:flex-row items-center gap-4 justify-center flex-wrap lg:flex-nowrap">
            {reviews.map((review, index) => {
              return <Review key={index} {...review} />;
            })}
          </article>
        </section>
      </article>

      {/* FaQs  */}
      <FAqs />

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
  );
};

export default page;

//

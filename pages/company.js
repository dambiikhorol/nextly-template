import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";
import ContactForm from "../components/contactform";
import Banner from "../components/banner";


export default function VerticalTimeline() {
  const data = [
    {
      date: "April 2022",
      title: "Project Concept",
      description:
        "The Crypto Group is established. Start of our project concept.",
    },
    {
      date: "May 2022",
      title: "Platform Launch",
      description:
        "Our trading platform is launched with full solutions in USA and Europe.",
    },
    {
      date: "June 2022",
      title: "Published Whitepaper",
      description:
        "Our Whitepaper is released to our investors, clients and beta users",
    },
    {
      date: "August 2022",
      title: "First Pre-Sale",
      description:
        "Start of the ICO token first pre-sale. Test advertising campaign.",
    },
    {
      date: "September 2022",
      title: "Mobile App Release",
      description:
        "Our Mobile App is released and its avilable in iOS and Android devices. ",
    },
    {
      date: "Now",
      title: "ICO Launch",
    },
  ];

  return (
    <>
    <Head>
        <title>CoreTech</title>
        <meta
          name="description"
          content="CoreTech"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <div className="px-5">
        <div className="relative max-w-xl mx-auto my-16 lg:max-w-3xl before:absolute before:top-0 before:w-1 before:h-full before:left-2 before:bg-indigo-500 lg:before:left-1/2">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 mb-12 lg:flex even:flex-row-reverse">
              <div className="absolute top-0 left-0 w-5 h-5 bg-white border-4 border-indigo-500 rounded-full dark:bg-slate-900 lg:left-1/2 lg:-translate-x-2"></div>
              <p
                className={`text-sm tracking-wide text-indigo-400 uppercase lg:w-1/2 lg:mt-px  lg:pr-8 ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}>
                {item.date}
              </p>
              <div
                className={`lg:w-1/2 lg:-mt-1  ${
                  index % 2 === 0
                    ? "lg:text-left lg:ml-5 "
                    : "lg:text-right lg:pr-10"
                }`}>
                <h4 className="mt-4 text-xl text-indigo-500 lg:mt-0">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="mt-2 leading-7 text-primary-light">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );

 }
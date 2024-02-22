import { useRouter } from 'next/router';
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Cta from "../../../components/cta";
import PopupWidget from "../../../components/popupWidget";
import Banner from "../../../components/banner";
import Container from "../../../components/container";


export default function ProjectDetial() {
  const router = useRouter();
  const id = router.query.projectid;

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
      <Container >

        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 lg:grid-cols-3">
          <div className="lg:col-span-2">

            <div className="flex flex-col justify-between w-full h-full">

              <img src="../../../../img/cover.jpg" />

              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Project name
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>

            </div>
          </div>

          <div>
            <div className='shadow-lg flex max-w-xl flex-col items-start justify-between p-8 mb-8'>
              <h3 className="max-w-2xl mt-3 text-3xl font-bold">
                Project Details
              </h3>


              <ul className="list-inside  justify-end flex-1 pt-6 list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)]">

                <li>Category: Machine</li>
                <li>Client: Alex Brons</li>
                <li>Location: New York, USA</li>
                <li>Budget: $75,000</li>
                <li>Completed: 28 June, 2019</li>
              </ul>



            </div>

            <div className='shadow-lg flex max-w-xl flex-col items-start justify-between p-8 mb-8'>
              test
            </div>

            <div className='shadow-lg flex max-w-xl flex-col items-start justify-between p-8 mb-8'>
              test
            </div>

          </div>


        </div>
      </Container>
      <Cta />
      <Footer />
      <PopupWidget />
    </>

  )
}
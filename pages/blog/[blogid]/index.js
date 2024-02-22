import { useRouter } from 'next/router';
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Cta from "../../../components/cta";
import PopupWidget from "../../../components/popupWidget";
import Banner from "../../../components/banner";
import Container from "../../../components/container";


export default function BlogDetial() {
  const router = useRouter();
  const id = router.query.blogid;

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
        <div className="group relative">
          <h3 className="mt-3 text-8xl font-semibold text-gray-900">
            <span className="absolute inset-0 " />Boost your conversion rate

            <div className="relative mt-8 flex items-center gap-x-4">
              <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Michael Foster
                  </a>
                </p>
                <p className="text-gray-600">Co-Founder / CTO</p>
              </div>
            </div>
          </h3>

          <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 pt-10">
            <img src="../../../../img/cover.jpg" alt="" width="521" height="auto" className={"object-cover"} />
          </div>

          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="" className="text-gray-500">
              2024.2.22
            </time>
            <a
              href=""
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              title
            </a>
          </div>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
      </Container>
      <Cta />
      <Footer />
      <PopupWidget />
    </>

  )
}
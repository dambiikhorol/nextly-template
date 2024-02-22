import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Cta from "../../components/cta";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import Banner from "../../components/banner";

const test = [
  {
    id: 1,
    title: 'Project 1',
    category: 'Big Data',
    href: '/projects/1',
    imageUrl:
      '../../../img/cover.jpg',

  },

  {
    id: 2,
    title: 'Project 2',
    category: 'AI',
    href: '/projects/2',
    imageUrl:
      '../../../img/cover.jpg',

  },

  {
    id: 3,
    title: 'Project 3',
    category: 'Big Data',
    href: '/projects/3',
    imageUrl:
      '../../../img/cover.jpg',

  },

  // More posts...
]

const Projects = () => {
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
      <Container className="!p-0">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pb-8 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {test.map((testproj) => (

            <a href={testproj.href}>

              <div className="lg:col-span-2 xl:col-auto">
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 items-center shadow-lg">

                  <img src={testproj.imageUrl}
                  />

                  <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                    {testproj.title}
                  </h3>

                  <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                    {testproj.category}
                  </p>

                </div>
              </div>

            </a>
          ))}
        </div>

      </Container>

      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}



export default Projects;
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Cta from "../../components/cta";
import PopupWidget from "../../components/popupWidget";
import Banner from "../../components/banner";
import Testimonials from "../../components/testimonials";

const ServicesPage = () => {
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
      <Testimonials />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default ServicesPage;
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";
import ContactForm from "../components/contactform";
import Banner from "../components/banner";

const Contact = () => {
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
      <ContactForm />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Contact;
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

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
          <Cta />
          <Footer />
          <PopupWidget />
        </>
      );
  }
  
  export default Contact;
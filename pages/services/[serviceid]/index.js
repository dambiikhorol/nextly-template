import { useRouter } from 'next/router';
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Cta from "../../../components/cta";
import PopupWidget from "../../../components/popupWidget";
import Banner from "../../../components/banner";
import Container from "../../../components/container";


export default function ServiceDetial() {
    const router = useRouter();
    const id = router.query.serviceid;

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

                <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 lg:grid-cols-4">
                    <div className="lg:col-span-2">

                        <div className="flex flex-col justify-between w-full h-full">

                            <img src="../../../../img/service2.png" />

                        </div>
                    </div>

                    <div className='lg:col-span-2'>
                        <div className='flex max-w-xl flex-col items-start justify-between p-8 mb-8'>
                            <h3 className="max-w-2xl mt-3 text-3xl p-8">
                                Delivering the insights you to help business growth
                            </h3>
                            <p className='p-8'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae adipisci laudantium corporis, officiis ut dolore fuga doloremque, aperiam excepturi quisquam optio distinctio. Iure sequi illum rem. Libero perferendis quae dignissimos?
                            </p>
                            <p className='p-8'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae adipisci laudantium corporis, officiis ut dolore fuga doloremque, aperiam excepturi quisquam optio distinctio. Iure sequi illum rem. Libero perferendis quae dignissimos?
                            </p>

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
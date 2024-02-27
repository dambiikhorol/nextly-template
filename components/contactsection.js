import Image from "next/image";
import React from "react";
import Container from "./container";

const ContactSection = () => {
    return (
        <Container className="max-w-screen-2xl py-20">
            <div className="grid grid-cols-2" id="contact">

                <div className="bg-gray-100 rounded-2xl md:p-14 col-span-2 md:col-span-1">
                    <h1 className="text-xl md:text-6xl font-light text-black p-20">
                        Interested in growing your business? <br />Write to us!
                    </h1>

                </div>
                <div className="bg-yellow-400 rounded-2xl p-2 md:p-14 col-span-2 md:col-span-1">
                    <form>
                        <div className="space-y-12">


                            <div className="">

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-3xl font-light">
                                    <div className="sm:col-span-4 ">

                                        <div className="mt-2 border-b border-black">
                                            <input
                                                placeholder="Your name*"
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="bg-yellow-400 block w-full py-3 text-black placeholder:text-black "
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">

                                        <div className="mt-2 border-b border-black">
                                            <input
                                                placeholder="Last name*"
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="bg-yellow-400 block w-full py-3 text-black placeholder:text-black"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">

                                        <div className="mt-2 border-b border-black">
                                            <input
                                                placeholder="Email*"
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="bg-yellow-400 block w-full py-3 text-black placeholder:text-black"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">

                                        <div className="mt-2 border-b border-black">
                                            <textarea
                                                placeholder="Messages*"
                                                id="message"
                                                name="message"
                                                rows={3}
                                                className="bg-yellow-400 block w-full py-3 text-black placeholder:text-black"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

                        <div className="mt-6 flex items-center justify-start gap-x-6">

                            <button
                                type="submit"
                                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </Container>
    );
}

function Avatar(props) {
    return (
        <Image
            src={props.image}

            alt="Avatar"
        />
    );
}

export default ContactSection;
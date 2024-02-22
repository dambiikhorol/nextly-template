import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/bigdata.png";
import userTwoImg from "../public/img/ai.png";
import userThreeImg from "../public/img/iot.png";
import userFourImg from "../public/img/bisuness.png";

const Testimonials = () => {
  return (
    <Container className="text-center">
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-4">
        <div className="lg:col-span-2 xl:col-auto">
          <a href="/services/1">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 items-center shadow-lg">

              <Avatar
                image={userOneImg}
              />

              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Data Science
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Read more ...
              </p>

            </div>
          </a>
        </div>
        <div className="">
          <a href="/services/2">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 items-center shadow-lg">

              <Avatar
                image={userTwoImg}
              />
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Artificial Intelligence
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Read more ...
              </p>

            </div>
          </a>
        </div>
        <div className="">
          <a href="/services/3">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 items-center shadow-lg">

              <Avatar
                image={userThreeImg}
              />
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                IoT
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Read more ...
              </p>

            </div>
          </a>
        </div>
        <div className="">
          <a href="/services/4">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 items-center shadow-lg">

              <Avatar
                image={userFourImg}
              />
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Information Technology
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Read more ...
              </p>

            </div>
          </a>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <Image
      src={props.image}
      width="80"
      height="80"
      alt="Avatar"
      placeholder="blur"
    />
  );
}

export default Testimonials;
import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";


import benefitOneImg from "../public/img/1.png";
import benefitTwoImg from "../public/img/2.png";

const benefitOne = {
  title: "About Company",
  desc: "We Provide Real Time Data Solutions, Analysis, Analytics And Prediction",
  image: benefitOneImg,
  bullets: [
    {
      title: "Various Analysis Options",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Professional Consultancy Service",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Advanced Advisory Team",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "24/7 Support Centers",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: <ClockIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Check Our Awesome Features Here",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Save Your Time",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Manage Business Easily",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Trusted Partner",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };

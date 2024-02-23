import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "clsx";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import LogoImg from "../public/img/logo.svg";

const navigation = [
  { title: "Projects", path: "/projects" },
  { title: "Services", path: "/services" },
  { title: "Company", path: "/company" },
  { title: "Blog", path: "/blog" },
  {
    title: "Dropdown",
    path: "#",
    children: [
      { title: "Action", path: "#" },
      { title: "Another action", path: "#" },
      { title: "Dropdown Submenu", path: "#" },
    ],
  },
];

export default function NavbarModern() {
  return (
    <>
      <div className="px-3 max-w-screen-xl py-3 mx-auto ">
        <nav className="relative flex flex-wrap items-center justify-between py-6 mx-auto lg:justify-between">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <Logo />
            {/* Mobile Menu  */}
            <MobileMenu />
          </div>

          {/* Desktop Menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
              <NavItems navigation={navigation} />
            </ul>
            <ActionButtons />
          </div>
        </nav>
      </div>
    </>
  );
}

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
   
        <Image src={LogoImg} alt="logo" />
        <span>CoreTech</span>
    </Link>
  );
};

const Hamburger = ({ open }) => {
  return (
    <Disclosure.Button
      aria-label="Toggle Menu"
      className="px-2 py-1 ml-auto text-gray-800 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-50 focus:outline-none ">
      <svg
        className="w-6 h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        {open && (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
        )}
        {!open && (
          <path
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        )}
      </svg>
    </Disclosure.Button>
  );
};

const MobileMenu = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Hamburger open={open} />

          <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden">
            <>
              <NavItems navigation={navigation} mobile={true} />
              <ActionButtons mobile={true} />
            </>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const ActionButtons = ({ mobile }) => {
  return (
    <div
      className={cx(
        mobile ? "flex gap-3 mt-2" : "hidden mx-3 gap-3 lg:flex"
      )}>
      
      <Link href="/contact" className="px-5 py-1.5 text-white bg-indigo-600 rounded-md  font-medium">
    
          Contact
       
      </Link>
    </div>
  );
};

const NavItems = (props) => {
  return (
    <>
      {props.navigation.map((item, index) => {
        return (
          <div key={index}>
            {item.children && item.children.length > 0 ? (
              <DropdownMenu
                menu={item}
                items={item.children}
                mobile={props.mobile}
              />
            ) : (
              <MenuItem item={item} mobile={props.mobile} />
            )}
          </div>
        );
      })}
    </>
  );
};

const MenuItem = ({ item, mobile }) => {
  return (
    <Link href={item?.path ? item.path : "#"} className={cx(
      "text-gray-800 dark:text-gray-300 rounded-md outline-none hover:text-indigo-500 focus:text-indigo-500  transition-all focus-visible:ring-1 ring-indigo-300 dark:focus-visible:bg-gray-800 focus:outline-none",
      mobile
        ? "w-full block px-4 py-2 -ml-4"
        : "inline-block px-4 py-2"
    )}>
      
        {item.title}
    
    </Link>
  );
};

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu as="div" className="relative text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 transition-all rounded-md outline-none focus:outline-none focus-visible:ring-1  focus-visible:text-indigo-500 dark:focus-visible:bg-gray-800",
              open
                ? "text-indigo-500 hover:text-indigo-500"
                : "text-gray-800 dark:text-gray-300 hover:text-indigo-500",
              mobile
                ? "w-full px-4 py-2 -ml-4"
                : "inline-block px-4 py-2"
            )}>
            <span>{menu.title}</span>
            <ChevronDownIcon className="w-4 h-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 lg:w-56 origin-top-left  rounded-md  lg:absolute lg:right-0  focus:outline-none",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={index}>
                    {({ active }) => (
                      <Link href={item?.path ? item.path : "#"} className={cx(
                        "flex space-x-2 lg:space-x-4 items-center px-5 py-2",
                        active
                          ? "text-indigo-500"
                          : "text-gray-800 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500"
                      )}>
                        
                          <span> {item.title}</span>
                      
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
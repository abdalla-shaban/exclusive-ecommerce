import { useState } from "react";
import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { HiMiniBars3 } from "react-icons/hi2";
const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Contact",
    path: "contact",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Sign up",
    path: "signup",
  },
];

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="py-4 mt-3 border-b">
      <div className="tb-container relative flex justify-between items-center">
        <a href="" className="heading-8 font-bold">
          Exclusive
        </a>
        <ul className="hidden lg:flex items-center gap-3">
          {navLinks.map(({ title, path }, i) => (
            <li key={i}>
              <a href={path} className="px-3 capitalize">
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <form>
            <label className="input input-bordered hidden md:flex items-center gap-2 !outline-none bg-[#f5f5f5] border-0">
              <input
                type="text"
                className="grow w-56"
                placeholder="what are you looking for ?"
                name="user_search"
              />
              <button>
                <FiSearch />
              </button>
            </label>
          </form>
          <div className="indicator">
            <span className="indicator-item badge border-white bg-red-700 text-white title-5">
              3
            </span>
            <div className="text-xl">
              <FiShoppingCart />
            </div>
          </div>
          <div className="indicator">
            <span className="indicator-item badge border-white bg-red-700 text-white title-5">
              2
            </span>
            <div className="text-xl">
              <FiHeart />
            </div>
          </div>
          <div className="">
            <button
              className="lg:hidden text-xl"
              onClick={() => setShow((prev) => !prev)}
            >
              <HiMiniBars3 />
            </button>
            <ul
              className={`${
                show ? "flex" : "hidden"
              } flex-col gap-3 z-50 bg-white absolute w-full left-0 top-12 md:top-16 lg:hidden shadow rounded`}
            >
              {navLinks.map(({ title, path }, i) => (
                <li key={i} className="py-[30px]">
                  <a href={path} className={`block text-center capitalize`}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "gatsby";
// import PrimaryHeader from "./PrimaryHeader";
import logo from "../../content/assets/logo.svg";
import { useFranleplant } from "../dal/authors";

export default function NavMenu(): JSX.Element {
  const franleplant = useFranleplant();

  return (
    <div className="p-4 sm:p-2 lg:px-2 lg:py-0 flex flex-col mx-auto sm:w-5/6 justify-between">
      <h1 className="max-w-md md:mx-auto h-28 md:h-40 w-56 md:w-full mt-1 sm:mt-3">
        <Link to={`/`} className="">
          <img src={logo} alt={"NoSleepJavascript Blog"} />
        </Link>
      </h1>

      {/* <PrimaryHeader isHome={props.isHome} /> */}

      <div className="md:flex md:flex-row flex-col md:mx-auto ">
        <Link
          to="/about"
          className="flex-1 text-center leading-10 p-2 text-md hover:text-opacity-80"
        >
          About
        </Link>
        <a
          href={`mailto:nosleeptechblog@gmail.com?subject=Contact from website`}
          className="flex-1 text-center leading-10 p-2 text-md hover:text-opacity-80"
        >
          Contact
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-between border-b border-t border-secondary py-3 mt-4 w-full sm:w-3/4 max-w-screen-xl md:mx-auto">
        <p>I talk about Programming, Tech Culture and random stuff.</p>
        <p className="!mt-1 sm:!mt-0">
          By{" "}
          <a href={`https://twitter.com/${franleplant.twitter}`}>
            {franleplant.id}
          </a>
        </p>
      </div>
    </div>
  );
}

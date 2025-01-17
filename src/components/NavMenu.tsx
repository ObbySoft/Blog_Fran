import React from "react";
import { Link } from "gatsby";
import logo from "../../content/assets/logo.svg";

export default function NavMenu(): JSX.Element {
  return (
    <div className="p-4 sm:p-2 lg:px-2 lg:py-0 flex flex-col mx-auto sm:w-5/6 justify-between">
      <h1 className="md:mx-auto sm:w-3/4 w-full max-w-screen-xl mt-1 sm:mt-3 flex">
        <Link to={`/`} className="flex items-end mx-auto !no-underline">
          <img src={logo} alt={"Randomleplants Blog"} className="h-24" />
          <h1>Random Leplants</h1>
        </Link>
      </h1>

      <div className="flex flex-col md:flex-row md:mx-auto sm:w-3/4 w-full max-w-screen-xl ml-2 sm:ml-0">
        {/*
        <Link
          to="/about"
          className="flex-1 leading-10 md:p-2 text-md hover:text-opacity-80 flex-grow-0 mx-auto"
        >
          About
        </Link>
         <a
          href={`mailto:nosleeptechblog@gmail.com?subject=Contact from website`}
          className="flex-1 text-start leading-10 md:p-2 text-md hover:text-opacity-80 flex-grow-0"
        >
          Contact
        </a> */}
      </div>
      <div className="flex flex-col justify-between border-b border-t border-secondary py-3 mt-4 w-full sm:w-3/4 max-w-screen-xl md:mx-auto items-center">
        <p className="text-center">
          A blog by the multiple people I inhabit, in English and Spanish.
        </p>
        <p className="text-center">
          Un blog escrito por las múltiples personas que habito, en Ingles y en
          Español
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { WindowLocation } from "@reach/router";

import { IAuthorFragmentFragment } from "../../graphql-types";

import SEO from "./Seo";
import NavMenu from "./NavMenu";

interface IProps {
  children: Array<JSX.Element> | JSX.Element | string | null;
  location: WindowLocation;
  title?: string;
  description?: string;
  author?: IAuthorFragmentFragment;
}

export default function Layout(props: IProps) {
  const { children } = props;

  return (
    <div>
      <SEO
        title={props.title}
        description={props.description}
        author={props.author}
      />
      <div className="">
        <section className="">
          <NavMenu />
        </section>
        <main className="">{children}</main>
      </div>
      <footer className="p-3 text-center mt-auto hidden md:block">
        © {new Date().getFullYear()}, nosleepjavascript.com
      </footer>
    </div>
  );
}

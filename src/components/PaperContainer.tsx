import React from "react";
import { oneline } from "../utils/strTag";

export interface IProps {
  className?: string;
  children: Array<JSX.Element> | JSX.Element | string | null;
}

export default function PaperContainer(props: IProps): JSX.Element {
  return (
    <div
      className={oneline`
        lg:max-w-4xl m-auto lg:mt-10 p-3 md:p-10 rounded-md
        ${props.className}
      `}
    >
      <>{props.children}</>
    </div>
  );
}

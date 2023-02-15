// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AntDesigntwitterOutlinedIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.41 18.882c8.303 0 12.845-6.927 12.845-12.923 0-.194 0-.39-.009-.584A9.228 9.228 0 0023.5 3.018a9.105 9.105 0 01-2.597.717 4.565 4.565 0 001.99-2.515c-.888.529-1.858.9-2.87 1.098a4.491 4.491 0 00-5.425-.897 4.537 4.537 0 00-1.985 2.133 4.579 4.579 0 00-.285 2.909c-1.795-.09-3.55-.56-5.153-1.378a12.839 12.839 0 01-4.151-3.37 4.581 4.581 0 00-.492 3.313 4.554 4.554 0 001.891 2.754 4.545 4.545 0 01-2.043-.564v.062a4.572 4.572 0 001.021 2.877A4.516 4.516 0 006 11.735a4.37 4.37 0 01-1.19.16c-.283 0-.565-.026-.844-.08.289.903.85 1.693 1.607 2.258a4.496 4.496 0 002.61.895 9.019 9.019 0 01-5.61 1.948 8.64 8.64 0 01-1.072-.062 12.784 12.784 0 006.91 2.028z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesigntwitterOutlinedIcon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IcnFavorite2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 1.633A.633.633 0 01.633 1h1.9a.633.633 0 01.615.48l.513 2.053h14.706a.633.633 0 01.622.75l-1.9 10.133a.633.633 0 01-.622.517h-11.4a.633.633 0 01-.622-.517L2.546 4.302 2.04 2.267H.633A.633.633 0 010 1.633zM3.93 4.8l1.663 8.867h10.349L17.605 4.8H3.929zm2.404 10.133a2.533 2.533 0 100 5.067 2.533 2.533 0 000-5.067zm8.867 0a2.533 2.533 0 100 5.067 2.533 2.533 0 000-5.067zM6.333 16.2a1.267 1.267 0 110 2.534 1.267 1.267 0 010-2.534zm8.867 0a1.267 1.267 0 110 2.534 1.267 1.267 0 010-2.534z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcnFavorite2Icon;
/* prettier-ignore-end */

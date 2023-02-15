// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 8"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#bPY3VtEnLea)"}>
        <path
          d={
            "M8.438 3.388L0 0v2.448C0 5.12 3.627 7.135 8.438 7.135c4.81 0 8.437-2.015 8.437-4.687V0L8.437 3.388z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"bPY3VtEnLea"}>
          <path fill={"currentColor"} d={"M0 0h16.875v7.135H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Frame2Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#yDisioUcEKa)"}>
        <path
          d={
            "M4.075 25.546h21.797c.067 0 .132-.01.194-.025l.014.001a.844.844 0 00.843-.843V.843A.844.844 0 0026.08 0H4.076a4.075 4.075 0 00-4.07 4.07c0 .03.005.059.008.088C.011 6.231-.014 25.28.011 27.783c-.001.05-.007.097-.007.146a4.073 4.073 0 003.815 4.058.83.83 0 00.128.013H26.08a.844.844 0 00.843-.843v-3.175a.844.844 0 00-1.687 0v2.332H4.075a2.385 2.385 0 01-2.38-2.287c.002-.023.006-.044.006-.067l-.003-.171a2.385 2.385 0 012.377-2.243zM4.65 4.07a.844.844 0 011.687 0V21.2a.844.844 0 01-1.687 0V4.07z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"yDisioUcEKa"}>
          <path fill={"currentColor"} d={"M0 0h26.923v32H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Frame3Icon;
/* prettier-ignore-end */

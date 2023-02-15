// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 53"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.318 52.569a26.365 26.365 0 01-18.6-7.707A26.297 26.297 0 010 26.284 26.297 26.297 0 017.717 7.707 26.365 26.365 0 0126.318 0a26.365 26.365 0 0118.6 7.707 26.297 26.297 0 017.718 18.577 26.297 26.297 0 01-7.717 18.578 26.365 26.365 0 01-18.601 7.707zm0-50.283A24.075 24.075 0 009.33 9.32a24.013 24.013 0 00-7.049 16.963 24.013 24.013 0 007.047 16.962 24.075 24.075 0 0016.983 7.037 24.075 24.075 0 0016.982-7.038 24.013 24.013 0 007.047-16.96 24.013 24.013 0 00-7.044-16.959 24.075 24.075 0 00-16.978-7.04z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */

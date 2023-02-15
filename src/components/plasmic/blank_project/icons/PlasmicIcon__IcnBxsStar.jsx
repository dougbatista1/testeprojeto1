// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IcnBxsStarIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.13 8.42a.918.918 0 00-.795-.62l-5.23-.416-2.262-5.01a.914.914 0 00-1.672 0L7.91 7.384l-5.23.415a.917.917 0 00-.567 1.571l3.864 3.768-1.367 5.917a.917.917 0 001.404.97l4.994-3.33 4.994 3.33a.918.918 0 001.392-1.014l-1.678-5.87 4.16-3.745a.919.919 0 00.256-.977z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcnBxsStarIcon;
/* prettier-ignore-end */

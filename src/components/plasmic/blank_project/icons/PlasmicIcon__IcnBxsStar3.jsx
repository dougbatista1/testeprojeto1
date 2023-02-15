// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IcnBxsStar3Icon(props) {
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
          "M20.13 8.42a.918.918 0 00-.797-.62l-5.229-.416-2.263-5.01a.914.914 0 00-1.67 0l-2.264 5.01-5.229.415A.917.917 0 002.11 9.37l3.865 3.768-1.367 5.917a.917.917 0 001.403.97l4.995-3.33L16 20.026a.918.918 0 001.392-1.014l-1.678-5.87 4.16-3.745a.919.919 0 00.256-.977z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcnBxsStar3Icon;
/* prettier-ignore-end */

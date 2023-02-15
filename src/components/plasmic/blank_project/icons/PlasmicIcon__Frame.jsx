// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FrameIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 28"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#1sL3c5nuxla)"}>
        <path
          d={
            "M32 19.545a2.807 2.807 0 00-1.875-2.64V7.193L32 6.42 16 0 0 6.42l16 6.42 12.25-4.894v8.959a2.808 2.808 0 00-1.875 2.64 2.81 2.81 0 001.606 2.53l-1.557 4.673 1.777.593.986-2.958.986 2.958 1.778-.593-1.557-4.673A2.808 2.808 0 0032 19.545z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"1sL3c5nuxla"}>
          <path fill={"currentColor"} d={"M0 0h32v27.341H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */

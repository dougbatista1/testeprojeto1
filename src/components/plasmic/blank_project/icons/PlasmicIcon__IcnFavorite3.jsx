// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IcnFavorite3Icon(props) {
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
        d={"M12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M2 10s3-5.5 8-5.5 8 5.5 8 5.5-3 5.5-8 5.5S2 10 2 10zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcnFavorite3Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AntDesignfacebookFilledIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M23.5 11.57C23.5 5.18 18.352 0 12.001 0 5.648.001.5 5.18.5 11.572c0 5.774 4.206 10.56 9.702 11.428v-8.085H7.284v-3.343h2.92V9.02c0-2.9 1.718-4.5 4.344-4.5 1.26 0 2.575.225 2.575.225v2.846h-1.45c-1.428 0-1.873.893-1.873 1.808v2.17h3.188l-.51 3.344h-2.68v8.085c5.496-.869 9.702-5.655 9.702-11.429z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignfacebookFilledIcon;
/* prettier-ignore-end */

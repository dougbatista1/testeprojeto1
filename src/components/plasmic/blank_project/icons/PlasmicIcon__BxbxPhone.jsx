// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BxbxPhoneIcon(props) {
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
        d={
          "M18.848 12.352a1.2 1.2 0 00-1.697 0l-1.912 1.912c-.887-.263-2.542-.864-3.59-1.912-1.05-1.05-1.65-2.704-1.914-3.59l1.913-1.913a1.2 1.2 0 000-1.697l-4.8-4.8a1.199 1.199 0 00-1.696 0L1.897 3.606a2.398 2.398 0 00-.703 1.722c.028 1.709.48 7.644 5.158 12.322 4.677 4.677 10.612 5.128 12.322 5.157h.034c.633 0 1.232-.25 1.686-.703l3.254-3.254a1.198 1.198 0 000-1.697l-4.8-4.801zm-.152 8.054c-1.498-.025-6.622-.427-10.648-4.454-4.039-4.04-4.43-9.181-4.454-10.649L6 2.897 9.103 6 7.552 7.552a1.2 1.2 0 00-.327 1.094c.029.138.733 3.41 2.725 5.402 1.992 1.993 5.265 2.697 5.403 2.726a1.19 1.19 0 001.094-.326L18 14.897 21.103 18l-2.407 2.406z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BxbxPhoneIcon;
/* prettier-ignore-end */

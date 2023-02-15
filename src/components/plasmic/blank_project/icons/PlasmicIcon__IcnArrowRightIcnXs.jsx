// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IcnArrowRightIcnXsIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 10"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#-Cbc7VtH-ja)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M0 5c0-.19.079-.371.22-.505a.77.77 0 01.53-.21h8.688l-3.22-3.064a.698.698 0 01-.22-.506c0-.19.08-.371.22-.506A.77.77 0 016.75 0c.2 0 .39.075.531.21l4.5 4.284A.713.713 0 0112 5a.685.685 0 01-.22.506L7.28 9.79a.77.77 0 01-.53.209.77.77 0 01-.532-.21.698.698 0 01-.22-.505c0-.19.08-.372.22-.506l3.22-3.065H.75a.77.77 0 01-.53-.209A.697.697 0 010 5z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"-Cbc7VtH-ja"}>
          <path fill={"currentColor"} d={"M0 0h12v10H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IcnArrowRightIcnXsIcon;
/* prettier-ignore-end */

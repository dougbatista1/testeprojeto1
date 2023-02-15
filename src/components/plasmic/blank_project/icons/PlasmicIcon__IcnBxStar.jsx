// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IcnBxStarIcon(props) {
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
          "M5.977 13.138l-1.366 5.918a.916.916 0 001.402.97l4.994-3.33 4.995 3.33a.919.919 0 001.391-1.015l-1.677-5.87 4.16-3.745a.917.917 0 00-.541-1.596l-5.23-.416-2.262-5.01a.915.915 0 00-1.671 0l-2.263 5.01-5.23.415a.917.917 0 00-.567 1.572l3.865 3.767zM8.594 9.17a.915.915 0 00.763-.538l1.65-3.651 1.65 3.651a.916.916 0 00.764.538l3.643.289-3 2.7a.919.919 0 00-.27.934l1.15 4.022-3.427-2.285a.913.913 0 00-1.017 0l-3.58 2.388.962-4.17a.917.917 0 00-.253-.862L4.843 9.469l3.751-.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcnBxStarIcon;
/* prettier-ignore-end */

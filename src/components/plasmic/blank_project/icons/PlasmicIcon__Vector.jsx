// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 631 444"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M313.718 443.645a70.049 70.049 0 01-11.495-.958c-34.87-5.825-55.437-34.306-77.215-64.457-15.307-21.186-31.133-43.1-52.413-56.531-20.434-12.897-44.946-17.268-68.656-21.52-12.914-2.301-26.266-4.683-38.935-8.408-38.25-11.25-73.314-45.453-63.26-81.08 7.72-27.353 37.834-40.451 55.095-45.823 6.887-2.145 14.028-3.963 20.938-5.722 16.584-4.222 33.733-8.586 48.297-17.75 20.804-13.105 34.35-34.626 47.442-55.434 7.43-11.873 15.15-24.08 24.171-34.825C224.569 19.116 268.044 0 313.992 0c38.593 0 74.169 13.098 100.183 36.881 11.346 10.39 21.384 22.745 31.095 34.707 18.42 22.686 35.814 44.117 61.798 54.076 13.798 5.291 28.926 6.612 43.549 7.895 7.155.631 14.556 1.277 21.755 2.382 16.132 2.472 44.708 10.212 54.932 34.262 12.535 29.498-13.188 63.953-45.086 77.629-13.078 5.603-27.136 9.187-40.741 12.616-17.698 4.504-36.007 9.164-52.011 18.321-29.573 16.95-48.253 47.13-66.323 76.323-4.748 7.674-9.659 15.584-14.682 23.153-13.085 19.717-48.483 65.4-94.743 65.4zm.237-441.33c-45.272 0-88.1 18.812-114.552 50.32-8.916 10.627-16.577 22.805-23.985 34.574-13.226 21.023-26.897 42.766-48.163 56.146-14.86 9.35-32.18 13.765-48.943 18.032-6.88 1.752-13.991 3.562-20.805 5.692-16.822 5.239-46.142 17.951-53.572 44.265-9.66 34.284 24.52 67.322 61.671 78.267 12.55 3.711 25.843 6.063 38.697 8.349 23.925 4.267 48.668 8.675 69.48 21.809 21.66 13.677 37.62 35.769 53.053 57.14 21.495 29.758 41.795 57.883 75.736 63.537 3.683.616 7.411.926 11.146.928 45.153 0 79.957-44.97 92.826-64.309 5-7.509 9.904-15.435 14.645-23.093 18.219-29.431 37.055-59.871 67.132-77.102 16.25-9.313 34.707-14.011 52.562-18.552 13.516-3.443 27.492-6.998 40.406-12.534 30.887-13.239 55.89-46.387 43.883-74.631-10.15-23.887-40.569-30.959-53.171-32.896-7.126-1.091-14.489-1.737-21.607-2.36-14.786-1.299-30.07-2.642-44.173-8.044-26.563-10.182-44.961-32.845-62.756-54.773-9.659-11.873-19.646-24.2-30.865-34.462-25.59-23.428-60.624-36.295-98.645-36.295v-.008z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
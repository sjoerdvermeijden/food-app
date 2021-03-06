import * as React from "react";

const SvgLocation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={24}
    viewBox="4 0 16 24"
    {...props}
  >
    <path
      d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLocation;
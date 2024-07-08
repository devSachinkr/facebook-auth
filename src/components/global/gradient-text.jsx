import React from "react";

const GradientText = ({ text, size, children }) => {
  return (
    <span
      className={`bg-gradient-to-r from-red-500 via-blue-500 to-blue-700 text-transparent bg-clip-text relative`}
    >
      <span style={{ fontSize: size }}>
        {" "}
        {children && children} {text && text}
      </span>
    </span>
  );
};

export default GradientText;

import React, { ReactNode } from "react";
import "../css/Wrapper.css";

interface Props {
  children: ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;

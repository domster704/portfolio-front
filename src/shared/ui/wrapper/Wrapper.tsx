import React, {FC, ReactNode} from "react";
import style from "./Wrapper.module.scss";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return (
    <div className={[style.wrapper, className ?? ""].join(" ")}>{children}</div>
  );
};

export default Wrapper;

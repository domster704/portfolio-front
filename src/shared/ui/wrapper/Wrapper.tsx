import React, { FC, ReactNode } from "react";
import style from "./Wrapper.module.scss";

type WrapperProps = {
  children: ReactNode;
  withoutMaxWidth?: boolean;
};

const Wrapper: FC<WrapperProps> = ({ children, withoutMaxWidth }) => {
  return (
    <div className={style.wrapper}>
      <div
        className={[
          style.wrapperContent,
          withoutMaxWidth ? style.withoutMaxWidth : "",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;

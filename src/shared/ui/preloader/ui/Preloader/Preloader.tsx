import React, { FC } from "react";
import style from "./Preloader.module.scss";

interface PreloaderProps {
  title?: string;
  description?: string;
  withText?: boolean;
}

const Preloader: FC<PreloaderProps> = ({
  title = "Загружаем данные",
  description = "Это займет пару секунд",
  withText = true,
}) => {
  return (
    <div className={style.loader} role="status" aria-live="polite">
      <div className={style.loaderSpin}></div>

      {withText && (
        <>
          <br />
          <b className={"text"}>{title}</b>
          <p className={"text primary"}>{description}</p>
        </>
      )}
    </div>
  );
};

export default Preloader;

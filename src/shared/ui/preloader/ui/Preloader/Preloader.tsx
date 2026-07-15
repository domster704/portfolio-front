import React, { FC } from "react";
import style from "./Preloader.module.css";

import preloaderGif from "../assets/preloader.gif";
import Image from "next/image";

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
      <Image
        src={preloaderGif}
        alt=""
        width={preloaderGif.width}
        height={preloaderGif.height}
        loading="eager"
      />

      {withText && (
        <>
          <b>{title}</b>
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

export default Preloader;

import { type FC } from "react";
import style from "./NotFound.module.css";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  return <div className={style.content}>404</div>;
};

export default NotFound;

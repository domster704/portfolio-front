import { type FC } from "react";
import style from "./ItemIndex.module.scss";

interface IndexProps {
  index: number;
}

const ItemIndex: FC<IndexProps> = ({ index }) => {
  return (
    <span className={style.index} aria-hidden="true">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
};

export default ItemIndex;

import { type FC } from "react";
import style from "./Blog.module.scss";

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  return <div className={style.content}>content</div>;
};

export default Blog;

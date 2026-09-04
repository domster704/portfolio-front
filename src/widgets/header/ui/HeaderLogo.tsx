"use client";

import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";

import { Link } from "@i18n/navigation";

import style from "./Header.module.scss";

const HeaderLogo = () => {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isHomePage = pathname === "/" || pathname === "/en";

    if (!isHomePage) {
      return;
    }

    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link href="/" className={style.logo} onClick={handleClick}>
      Domster704
    </Link>
  );
};

export default HeaderLogo;

import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.head}>
      <div>
        <input className={s.search} type="text" placeholder="Поиск.." />
      </div>
    </header>
  );
};
export default Header;

import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.link}>
        <NavLink to="/base" activeClassName={s.activeLink}>
          База знаний
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/taskspage" activeClassName={s.activeLink}>
          Заявки
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/employees" activeClassName={s.activeLink}>
          Сотрудники
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/clients" activeClassName={s.activeLink}>
          Клиенты
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/active" activeClassName={s.activeLink}>
          Активы
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Настройки
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;

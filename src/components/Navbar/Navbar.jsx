import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { File } from "@styled-icons/boxicons-regular/File";
import { Display } from "@styled-icons/icomoon/Display";
import { Users } from "@styled-icons/fa-solid/Users";
import { Gear } from "@styled-icons/evil/Gear";
import { BuildingHouse } from "@styled-icons/boxicons-regular/BuildingHouse";
import { BookBookmark } from "@styled-icons/boxicons-regular/BookBookmark";
import { Check } from "@styled-icons/fa-solid/Check";


const Navbar = props => {
  return (
    <nav className={s.nav}>
      <Check className={s.link} size="35" color="white" />
      <div className={s.link}>
        <NavLink to="/base" className={s.link}>
          <BookBookmark size="25" color="white" />
          База знаний
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/taskspage" className={s.link}>
          <File size="25" color="white" />
          Заявки
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/employees" className={s.link}>
          <Users size="25" color="white" />
          Сотрудники
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/clients" className={s.link}>
          <BuildingHouse size="25" color="white" />
          Клиенты
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/active" className={s.link}>
          <Display size="25" color="white" />
          Активы
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/settings" className={s.link}>
          <Gear size="30" color="white" />
          Настройки
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;

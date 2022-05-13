import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={s.sidebar_container}>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="*"
      >
        Ближайшие записи
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/clients"
      >
        Мои пациенты
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/chat"
      >
        Веб чат
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/rating"
      >
        Мой рейтинг
      </NavLink>
    </div>
  );
};

export default Sidebar;

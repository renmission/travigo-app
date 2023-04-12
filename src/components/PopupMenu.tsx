import React from "react";
import { INavLink } from "../types";
import { NavLink } from "react-router-dom";

interface IPopupMenu {
  navlinks: INavLink[];
  popup: boolean;
}

const PopupMenu = ({ navlinks, popup }: IPopupMenu) => {
  return (
    <>
      <nav
        className={`fixed top-14 right-14 bg-white bg-opacity-70 opacity-100 z-50 backdrop-filter backdrop-blur-md rounded-lg w-44 h-auto py-5 px-6 hidden lg:flex items-center justify-center transition-transform duration-300 ${
          popup ? "lg:showpopup" : "lg:noshowpopup"
        }`}
      >
        <ul className="flex items-start flex-col gap-3">
          {navlinks?.map((link) => (
            <li key={link.id}>
              <NavLink to={`#`}>{link.link}</NavLink>
            </li>
          ))}
          <li>
            <NavLink to={"/auth"}>
              <button className="button-light sm:w-auto shadow-slate-300 rounded-lg">
                Join now
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PopupMenu;

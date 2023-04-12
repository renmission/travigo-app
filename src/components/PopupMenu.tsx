import React, { useEffect, useState } from "react";
import { INavLink } from "../types";
import { NavLink } from "react-router-dom";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { logout } from "../features/auth/authSlice";
import { useAppDispatch } from "../app/hooks";

interface IPopupMenu {
  navlinks: INavLink[];
  popup: boolean;
}

const PopupMenu = ({ navlinks, popup }: IPopupMenu) => {
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    
    const auth = getAuth();
    const listen = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  console.log("USER:::", user);

  const handleUserLogout = () => {
    dispatch(logout());
  };
  
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
            {user ? (
                <button onClick={handleUserLogout} type="button" className="button-emrald px-7 text-base">
                  Logout
                </button>
              ) : (
                <NavLink to={"/auth"}>
                  <button
                    type="button"
                    className="button-light sm:w-auto shadow-slate-300 rounded-lg"
                  >
                    Join Now
                  </button>
                </NavLink>
              )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PopupMenu;

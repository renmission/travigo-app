import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import menu from "../../images/menu.svg";
import { INavLink } from "../../types";
import PopupMenu from "../PopupMenu";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

interface INavBar {
  navlinks: INavLink[];
}

const Navbar = ({ navlinks }: INavBar) => {
  const [popup, setPopup] = useState<boolean>(false);
  const [navState, setNavState] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const dispatch = useAppDispatch();

  const handlePopup = () => setPopup(!popup);
  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    const auth = getAuth();
    const listen = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      window.removeEventListener("scroll", onNavScroll);
      listen();
    };
  }, []);

  console.log("USER:::", user);

  const handleUserLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className={`${navState ? "nav-sticky" : "nav-default"}`}>
        <nav className="flex items-center justify-between travigo-container">
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt="logo/img" className="w-22 h-9 object-fill" />
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((link: INavLink) => (
              <li key={link.id}>
                <NavLink
                  to={`${link.href}`}
                  className="text-lg to-slate-900 cursor-pointer"
                >
                  {link.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden">
            <li>
              {user ? (
                <button onClick={handleUserLogout} type="button" className="button-emrald px-7 text-base">
                  Logout
                </button>
              ) : (
                <NavLink to={"/auth"}>
                  <button
                    type="button"
                    className="button-emrald px-7 text-base"
                  >
                    Join Now
                  </button>
                </NavLink>
              )}
            </li>
          </ul>
          <ul className="hidden lg:flex items-center">
            <li>
              <button
                onClick={handlePopup}
                type="button"
                className="flex items-center justify-center transition-all duration-200 active:scale-90"
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className="object-cover shadow-sm filter"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popup={popup} />
    </>
  );
};

export default Navbar;

import React from "react";

interface IFooterProps {
  titles: { title: string }[];
  links: { link: string }[][];
  sociallinks: { icon: string }[];
}

const Footer = ({ titles, links, sociallinks }: IFooterProps) => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7">
        <div className="w-9/12 lg:w-[95vw] m-auto mt-9 grid items-center grid-cols-3 justify-items-center">
          {titles?.map((t, i) => (
            <div key={i} className="grid items-center justify-items-center">
              <h1 className="text-xl lg:text-base uppercase font-semibold">
                {t.title}
              </h1>
            </div>
          ))}
          {links?.map((list, i) => (
            <ul
              key={i}
              className="grid items-center justify-items-center gap-1"
            >
              {list?.map((l, i) => (
                <li key={i} className="font-medium text-sm sm:text-xs cursor-pointer">
                  {l.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="w-7/12 lg:w-[95vw] m-auto mt-9">
          <div className="h-[0.1vh] bg-black/30 my-7 md:my-5"></div>
          <div className="flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse">
            <p className="text-sm md:text-center">Copyright &copy; All Reserved Rights {year} — <span className="font-semibold">Renato Mission</span></p>
            <div className="flex items-center gap-3">
              {sociallinks?.map((link, i) => (
                <img key={i} src={link.icon} alt="social/icons"  className="w-5 h-5 cursor-pointer"/>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

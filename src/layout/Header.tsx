import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import boldo from "@/assets/icons/boldo.svg";
import { navLinks } from "@/constants/links";
import Button from "@/components/Button";
import { HOME } from "@/constants/path";

const Header = ({
}: {
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-30 top-0 w-full text-white font-semibold px-5 md:px-10 lg:px-20 py-5 flex items-center justify-between ${
        isScrolled ? "bg-primary" : "!bg-transparent"
      }`}
    >
      <Link to={HOME}>
        <img src={boldo} alt="boldo" className="w-20 md:w-40" />
      </Link>
      <div className="">
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ label, path }) => (
            <Link to={path} key={label}>
              {label}
            </Link>
          ))}
          <Button className="px-10 py-2 text-base !text-primary">Log in</Button>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="">
            {isOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
          <div
            className={`rounded text-center transition linear duration-300 drop-shadow-lg fixed top-16 left-0 bg-[#FFF4D4] h-screen z-20 p-5 w-full ${
              isOpen ? "" : "hidden"
            }`}
          >
            {navLinks.map(({ label, path }) => (
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)}
                key={label}
                className={({ isActive }) =>
                  `text-sm block font-semibold transition-all duration-300 hover:text-primary/70 py-3 ${
                    isActive ? "text-black font-bold" : "text-dark"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="">
                        <Button className="px-10 py-2 text-base !bg-primary">Log in</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

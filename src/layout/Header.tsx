import { useState, useEffect } from "react";
import { Menu,X } from "lucide-react";
import { Link } from "react-router-dom";

import boldo from "@/assets/icons/boldo.svg";
import { navLinks } from "@/constants/links";
import Button from "@/components/Button";

const Header = ({
  isOpen,
  handleToggle,
}: {
  isOpen: boolean;
  handleToggle: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <img src={boldo} alt="boldo" className="w-40" />
      <div className="">
        <div className="hidden lg:flex items-center gap-10">
        {
          navLinks.map(({ label, path }) => (
            <Link to={path} key={label}>{label}</Link>
          ))
        }
        <Button className="px-10 py-2 text-base text-primary">Log in</Button>
        </div>
        <button onClick={handleToggle} className="block lg:hidden">
          {isOpen ? (
            <X size={20} className="text-primary" />
          ) : (
            <Menu size={20} className="text-primary" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

import { ABOUT } from "@/constants/path";
import { Link } from "react-router-dom";

import boldo from "@/assets/icons/boldo-primary.svg";
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer>
      <Slide direction="up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-0 py-20 px-5 md:px-10 lg:px-20 bg-secondary border-t-4 border-t-white">
          <div className="md:col-span-2">
            <img src={boldo} alt="boldo" />
            <p className="text-[#777777] mb-10 mt-10 lg:w-3/5">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p className="mt-16 text-[#777777]">All rights reserved.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-8">Landing</h2>
            <Link
              to={ABOUT}
              className="block cursor-pointer mb-4 text-lg text-[#777777]"
            >
              Home
            </Link>
            <Link
              to={ABOUT}
              className="block cursor-pointer mb-4 text-lg text-[#777777]"
            >
              Products
            </Link>
            <Link
              to={ABOUT}
              className="block cursor-pointer mb-4 text-lg text-[#777777]"
            >
              Services
            </Link>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-8">Company</h2>
            <Link
              to={ABOUT}
              className="block cursor-pointer mb-4 text-lg text-[#777777]"
            >
              Home
            </Link>
            <Link
              to={ABOUT}
              className="block cursor-pointer mb-4 text-lg text-[#777777]"
            >
              Careers{" "}
              <span className="py-1 px-4 bg-[#65E4A3] text-primary text-[13px] font-bold rounded-full ml-2">
                Hiring!
              </span>
            </Link>
            <Link
              to={ABOUT}
              className="block cursor-pointer mb-4 text-lg text-[#777777]"
            >
              Services
            </Link>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-8">Resources</h2>
            <Link
              to={ABOUT}
              className="block cursor-pointer mb-4 text-lg text-[#777777]"
            >
              Blog
            </Link>
            <Link
              to={ABOUT}
              className="block cursor-pointer mb-4 text-lg text-[#777777]"
            >
              Products
            </Link>
            <Link
              to={ABOUT}
              className="block cursor-pointer mb-4 text-lg text-[#777777]"
            >
              Services
            </Link>
          </div>
        </div>
      </Slide>
    </footer>
  );
};

export default Footer;

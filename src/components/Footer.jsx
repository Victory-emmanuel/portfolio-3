import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className=""
      >
        <div className="  py-6 grid grid-cols-4 content-center bg-white fixed  bottom-0 left-0 right-0 z-10 justify-between md:mt-0 ss:mt-8 xx:mt-[12rem]  md:px-12 xx:px-3 ">
          <div className="col-span-3">
            <div className="xs:flex">
              <p className="text-secondary mr-4">
                Copyright<b className="text-lg ml-0.5">©</b> 2024
              </p>

              <ul className=" mt-1">
                <li className="mr-[15px] inline-block">
                  <Link className="text-darkAccent" to="#">
                    <FaWhatsapp className="text-lg" />
                  </Link>
                </li>
                <li className="mr-[15px] inline-block">
                  <Link className="text-darkAccent" to="#">
                    <FaFacebook className="text-lg" />
                  </Link>
                </li>
                <li className="mr-[15px] inline-block">
                  <Link className="text-darkAccent" to="#">
                    <FaXTwitter className="text-lg" />
                  </Link>
                </li>
                <li className="mr-[15px] inline-block">
                  <Link className="text-darkAccent" to="#">
                    <FaInstagram className="text-lg" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="ml-auto col-span-1 ">
            <p className="text-accent opacity-50 font-thin">@codeSquid</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;

/* eslint-disable react/no-unescaped-entities */
import ProfileImage from "../components/ProfileImage";
import { FaSearchLocation, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="md:h-[85dvh] md:pt-0 xx:pt-24 md:px-0 ss:px-6 xx:px-3"
      >
        <div className="grid md:grid-cols-3 xx:grid-cols-1 gap-0" id="contact">
          <div className="md:block xx:hidden col-span-1 ">
            <ProfileImage />
          </div>
          <div className="md:col-span-2 md:pl-12 md:pr-2  md:mr-12 md:max-w-[100%] md:h-[100%] bg-primary scroll-bg  md:mb-0 ss:mb-[3rem] xx:mb-[8rem]">
            <div className="scroll-div md:max-w-[100%] md:h-[75vh] md:my-6 md:overflow-hidden md:overflow-y-scroll  bg-primary ">
              <motion.div
                initial={{ y: -200 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.75 }}
                className="scroll-object  w-full clear-both float-left md:pr-4"
              >
                <div className=" w-full flex items-center gap-8 h-auto clear-both float-left overflow-hidden">
                  <motion.span
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.75 }}
                    className="inline-block relative  uppercase ss:text-xl xs:text-base xx:text-sm text-darkAccent font-semibold tracking-[8px]"
                  >
                    Contact Me
                  </motion.span>
                  <div className="inline-block h-0.5 ss:w-[60%] xx:w-[40%] bg-darkAccent "></div>
                </div>
                <div className=" w-full h-auto clear-both float-left mt-[62px] md:pr-6 ">
                  <ul className=" grid ss:grid-cols-3 xs:grid-cols-2 xx:grid-cols-1 gap-4">
                    <motion.li
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "backInOut" }}
                      className="mb-[30px] "
                    >
                      <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                        <FaSearchLocation className="inline-block w-[18px] h-[18px] mb-[10px]" />
                        <span className="block">
                          Lekki Road, Lagos, Nigeria
                        </span>
                      </div>
                    </motion.li>
                    <motion.li
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "backInOut" }}
                      className="mb-[30px] "
                    >
                      <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                        <MdEmail className="inline-block w-[18px] h-[18px] mb-[10px]" />
                        <span className="block">
                          <a
                            className="text-secondary transition-all duration-300 hover:text-darkAccent"
                            href="#"
                          >
                            <span className="">lorem@gmail.com</span>
                          </a>
                        </span>
                      </div>
                    </motion.li>
                    <motion.li
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "backInOut" }}
                      className="mb-[30px] "
                    >
                      <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                        <FaPhone className="inline-block w-[18px] h-[18px] mb-[10px]" />
                        <span className="block">+77 022 444 05 05</span>
                      </div>
                    </motion.li>
                  </ul>
                </div>
                <div className=" ">
                  <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    action="https://getform.io/f/anlejqxa"
                    method="POST"
                    className=" md:pr-6 "
                    id="form"
                  >
                    <motion.p
                      initial={{ x: -50 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 1 }}
                      className="text-darkAccent font-bold ss:text-xl xx:text-base mb-2 "
                    >
                      Let's connect!
                    </motion.p>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name ..."
                      name="name"
                      className="mb-2 w-full rounded-md border focus:outline-0 border-accent bg-primary py-2 pl-2 pr-4"
                    />
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email ..."
                      name="email"
                      className="mb-2 w-full rounded-md border focus:outline-0 border-accent bg-primary py-2 pl-2 pr-4"
                    />
                    <textarea
                      name="textarea"
                      id="textarea"
                      cols="30"
                      rows="4"
                      placeholder="Your Message ..."
                      className="mb-2 w-full rounded-md border focus:outline-0 border-accent bg-primary py-2 pl-2 pr-4"
                    />
                    <motion.button
                      initial={{ scale: 1, opacity: 0 }}
                      whileTap={{ scale: 1.15 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "backInOut" }}
                      type="submit"
                      className="w-[10rem] py-3 rounded-md text-primary font-medium text-base bg-darkAccent hover:bg-accent hover:text-secondary duration-300"
                    >
                      Send Message
                    </motion.button>
                  </motion.form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;

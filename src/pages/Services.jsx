/* eslint-disable react/no-unescaped-entities */
import { FaPenNib } from "react-icons/fa6";
import ProfileImage from "../components/ProfileImage";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="md:h-[85dvh] md:pt-0 xx:pt-24 md:px-0 ss:px-3"
      >
        <div className="grid md:grid-cols-3 xx:grid-cols-1 gap-0" id="service">
          <div className="md:block xx:hidden col-span-1 ">
            <ProfileImage />
          </div>
          <div className="md:col-span-2 md:pl-12 md:pr-2  md:mr-12 md:max-w-[100%] md:h-[100%] bg-primary scroll-bg">
            <div className="  scroll-div md:max-w-[100%] md:h-[75vh] md:my-6 md:overflow-hidden md:overflow-y-scroll  bg-primary ">
              <motion.div
                initial={{ y: -200 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.75 }}
                className="scroll-object  w-full clear-both float-left md:pr-4 md:px-0 xx:px-3"
              >
                <div className=" w-full flex items-center gap-8 h-auto clear-both float-left overflow-hidden">
                  <motion.span
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.75 }}
                    className="inline-block relative  uppercase text-xl text-darkAccent font-bold tracking-[8px]"
                  >
                    Services
                  </motion.span>
                  <div className="inline-block h-0.5 w-[60%] bg-darkAccent "></div>
                </div>
                <div className=" w-full h-auto clear-both float-left mt-16 mb-16">
                  <ul className=" grid ss:grid-cols-2 gap-4">
                    {/* service 1 */}
                    <motion.li
                      initial={{ x: -50 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 1 }}
                      className=""
                    >
                      <div className="h-auto clear-both float-left relative border-solid border-darkAccent border py-12 ss:px-10 xs:px-8 xx:px-6 text-center transition-all duration-300 hover w-[100%] text-secondary hover:text-primary bg-primary hover:bg-darkAccent cursor-pointer">
                        <FaPenNib className="w-[2rem] h-[2rem]  mb-[27px] transition-all  mx-auto" />
                        <h3 className="title font-medium text-[24px]  mb-[15px] transition-all ">
                          Logo Design
                        </h3>
                        <p className="text transition-all mb-12 ">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Suscipit deserunt sapiente, incidunt soluta
                          molestiae reiciendis deleniti eligendi quisquam at
                          dicta nam aliquam eos similique tenetur fugit dolorem
                          debitis culpa exercitationem.
                        </p>
                        <HashLink
                          smooth
                          to="#logo-design"
                          className=" text-accent font-semibold"
                        >
                          Read More
                        </HashLink>
                      </div>
                    </motion.li>
                    {/* service 2 */}
                    <motion.li
                      initial={{ x: 50 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 1 }}
                      className=""
                    >
                      <div className="h-auto clear-both float-left relative border-solid border-darkAccent border py-12 ss:px-10 xs:px-8 xx:px-6  text-center transition-all duration-300 hover w-[100%] text-secondary hover:text-primary bg-primary hover:bg-darkAccent cursor-pointer">
                        <FaPenNib className="w-[2rem] h-[2rem]  mb-[27px] transition-all  mx-auto" />
                        <h3 className="title font-medium text-[24px]  mb-[15px] transition-all ">
                          Graphics Design
                        </h3>
                        <p className="text transition-all mb-12 ">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Suscipit deserunt sapiente, incidunt soluta
                          molestiae reiciendis deleniti eligendi quisquam at
                          dicta nam aliquam eos similique tenetur fugit dolorem
                          debitis culpa exercitationem.
                        </p>
                        <HashLink
                          smooth
                          to="#graphics-design"
                          className=" text-accent font-semibold"
                        >
                          Read More
                        </HashLink>
                      </div>
                    </motion.li>
                    {/* service 3 */}
                    <motion.li
                      initial={{ x: -50 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 1 }}
                      className=""
                    >
                      <div className="h-auto clear-both float-left relative border-solid border-darkAccent border py-12 ss:px-10 xs:px-8 xx:px-6  text-center transition-all duration-300 hover w-[100%] text-secondary hover:text-primary bg-primary hover:bg-darkAccent cursor-pointer">
                        <FaPenNib className="w-[2rem] h-[2rem]  mb-[27px] transition-all  mx-auto" />
                        <h3 className="title font-medium text-[24px]  mb-[15px] transition-all ">
                          UX Design
                        </h3>
                        <p className="text transition-all mb-12 ">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Suscipit deserunt sapiente, incidunt soluta
                          molestiae reiciendis deleniti eligendi quisquam at
                          dicta nam aliquam eos similique tenetur fugit dolorem
                          debitis culpa exercitationem.
                        </p>
                        <HashLink
                          smooth
                          to="#UX-design"
                          className=" text-accent font-semibold"
                        >
                          Read More
                        </HashLink>
                      </div>
                    </motion.li>
                    {/* service 4 */}
                    <motion.li
                      initial={{ x: 50 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 1 }}
                      className=""
                    >
                      <div className="h-auto clear-both float-left relative border-solid border-darkAccent border py-12 ss:px-10 xs:px-8 xx:px-6  text-center transition-all duration-300 hover w-[100%] text-secondary hover:text-primary bg-primary hover:bg-darkAccent cursor-pointer">
                        <FaPenNib className="w-[2rem] h-[2rem]  mb-[27px] transition-all  mx-auto" />
                        <h3 className="title font-medium text-[24px]  mb-[15px] transition-all ">
                          UI Design
                        </h3>
                        <p className="text transition-all mb-12 ">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Suscipit deserunt sapiente, incidunt soluta
                          molestiae reiciendis deleniti eligendi quisquam at
                          dicta nam aliquam eos similique tenetur fugit dolorem
                          debitis culpa exercitationem.
                        </p>
                        <HashLink
                          smooth
                          to="#UI-design"
                          className=" text-accent font-semibold"
                        >
                          Read More
                        </HashLink>
                      </div>
                    </motion.li>
                  </ul>
                </div>
                <div className="inline-block h-0.5 w-[80%] bg-darkAccent my-6 "></div>
                {/* Service Details 1 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="py-16"
                >
                  <div className="">
                    <a
                      href="#"
                      className="relative block overflow-hidden shadow-lg p-4 sm:p-6 lg:p-8"
                    >
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-accent via-primary  to-darkAccent"></span>

                      <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-secondary sm:text-xl">
                            Logo Design
                          </h3>

                          <p className="mt-1 text-sm font-medium text-darkAccent">
                            Lucas Ludwig
                          </p>
                        </div>

                        <div className="block sm:shrink-0">
                          <img
                            alt=""
                            src="https://i.postimg.cc/LsrJQNzj/2148190718.jpg"
                            className="size-16 rounded-full object-cover shadow-sm"
                          />
                        </div>
                      </div>

                      <div id="logo-design" className="my-8">
                        <p className="text-pretty text-base text-secondary">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quaerat ad blanditiis voluptatem porro est eaque
                          animi, veniam reiciendis quis possimus quo odio
                          voluptates natus aut dicta, dolorem labore maxime
                          officiis? Dolorem, deserunt distinctio dolor itaque
                          alias architecto rerum numquam eum. Ut voluptatum ea
                          facere voluptatibus! Rerum doloremque dicta deleniti
                          iste?
                        </p>
                      </div>
                      <a
                        href=""
                        className="bg-darkAccent text-primary text-sm py-2 px-6 md:mb-0 xx:mb-6 "
                      >
                        Let's Talk
                      </a>
                    </a>
                  </div>
                </motion.div>
                {/* Service Details 2 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="py-16"
                >
                  <div className="">
                    <a
                      href="#"
                      className="relative block overflow-hidden shadow-lg ss:p-4 xx:py-8 xx:px-4 sm:p-6 lg:p-8"
                    >
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-accent via-primary  to-darkAccent"></span>

                      <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-secondary sm:text-xl">
                            Graphics Design
                          </h3>

                          <p className="mt-1 text-sm font-medium text-darkAccent">
                            Lucas Ludwig
                          </p>
                        </div>

                        <div className="block sm:shrink-0">
                          <img
                            alt=""
                            src="https://i.postimg.cc/LsrJQNzj/2148190718.jpg"
                            className="size-16 rounded-full object-cover shadow-sm"
                          />
                        </div>
                      </div>

                      <div id="graphics-design" className="my-8">
                        <p className="text-pretty text-base text-secondary">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quaerat ad blanditiis voluptatem porro est eaque
                          animi, veniam reiciendis quis possimus quo odio
                          voluptates natus aut dicta, dolorem labore maxime
                          officiis? Dolorem, deserunt distinctio dolor itaque
                          alias architecto rerum numquam eum. Ut voluptatum ea
                          facere voluptatibus! Rerum doloremque dicta deleniti
                          iste?
                        </p>
                      </div>
                      <a
                        href=""
                        className="bg-darkAccent text-primary text-sm py-2 px-6 md:mb-0 xx:mb-6   "
                      >
                        Let's Talk
                      </a>
                    </a>
                  </div>
                </motion.div>
                {/* Service Details 3 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="py-16"
                >
                  <div className="">
                    <a
                      href="#"
                      className="relative block overflow-hidden shadow-lg p-4 sm:p-6 lg:p-8"
                    >
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-accent via-primary  to-darkAccent"></span>

                      <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-secondary sm:text-xl">
                            UX Design
                          </h3>

                          <p className="mt-1 text-sm font-medium text-darkAccent">
                            Lucas Ludwig
                          </p>
                        </div>

                        <div className="block sm:shrink-0">
                          <img
                            alt=""
                            src="https://i.postimg.cc/LsrJQNzj/2148190718.jpg"
                            className="size-16 rounded-full object-cover shadow-sm"
                          />
                        </div>
                      </div>

                      <div id="UX-design" className="my-8">
                        <p className="text-pretty text-base text-secondary">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quaerat ad blanditiis voluptatem porro est eaque
                          animi, veniam reiciendis quis possimus quo odio
                          voluptates natus aut dicta, dolorem labore maxime
                          officiis? Dolorem, deserunt distinctio dolor itaque
                          alias architecto rerum numquam eum. Ut voluptatum ea
                          facere voluptatibus! Rerum doloremque dicta deleniti
                          iste?
                        </p>
                      </div>
                      <a
                        href=""
                        className="bg-darkAccent text-primary text-sm py-2 px-6 md:mb-0 xx:mb-6 "
                      >
                        Let's Talk
                      </a>
                    </a>
                  </div>
                </motion.div>
                {/* Service Details 4 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="py-16"
                >
                  <div className="">
                    <a
                      href="#"
                      className="relative block overflow-hidden shadow-lg p-4 sm:p-6 lg:p-8"
                    >
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-accent via-primary  to-darkAccent"></span>

                      <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-secondary sm:text-xl">
                            UI Design
                          </h3>

                          <p className="mt-1 text-sm font-medium text-darkAccent">
                            Lucas Ludwig
                          </p>
                        </div>

                        <div className="block sm:shrink-0">
                          <img
                            alt=""
                            src="https://i.postimg.cc/LsrJQNzj/2148190718.jpg"
                            className="size-16 rounded-full object-cover shadow-sm"
                          />
                        </div>
                      </div>

                      <div id="UI-design" className="my-8">
                        <p className="text-pretty text-base text-secondary">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quaerat ad blanditiis voluptatem porro est eaque
                          animi, veniam reiciendis quis possimus quo odio
                          voluptates natus aut dicta, dolorem labore maxime
                          officiis? Dolorem, deserunt distinctio dolor itaque
                          alias architecto rerum numquam eum. Ut voluptatum ea
                          facere voluptatibus! Rerum doloremque dicta deleniti
                          iste?
                        </p>
                      </div>
                      <a
                        href=""
                        className="bg-darkAccent text-primary text-sm py-2 px-6 md:mb-0 xx:mb-6 "
                      >
                        Let's Talk
                      </a>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;

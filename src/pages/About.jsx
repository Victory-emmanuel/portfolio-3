/* eslint-disable react/no-unescaped-entities */
import ProfileImage from "../components/ProfileImage";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="md:h-[85dvh] md:pt-0 xx:pt-24 md:px-0 ss:px-6"
      >
        <div className="grid md:grid-cols-3 xx:grid-cols-1 gap-0 " id="about">
          <div className="md:block xx:hidden col-span-1 ">
            <ProfileImage />
          </div>
          <motion.div className="md:col-span-2 md:pl-12 md:pr-2  md:mr-12 md:max-w-[100%] md:h-[100%]  bg-primary scroll-bg ">
            <div className=" scroll-div md:max-w-[100%] md:h-[75vh] md:my-6 md:overflow-hidden md:overflow-y-scroll  bg-primary ">
              <motion.div
                initial={{ y: -200 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.75 }}
                className=" scroll-object  w-full clear-both float-left pr-4"
              >
                <div className="biography w-full h-auto clear-both float-left mb-[87px]">
                  <div className=" w-full flex items-center gap-8 h-auto clear-both float-left overflow-hidden">
                    <motion.span
                      initial={{ x: -50 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 0.75 }}
                      className="inline-block relative  uppercase text-xl text-darkAccent font-bold tracking-[8px]"
                    >
                      About Me
                    </motion.span>
                    <div className="inline-block h-0.5 w-[60%] bg-darkAccent "></div>
                  </div>
                  <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
                    <motion.div
                      initial={{ x: -50 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.75 }}
                      className="left w-[40%]"
                    >
                      <p className="mb-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, voluptatum accusamus praesentium in
                        expedita dolore rem, natus obcaecati qui quisquam
                        aliquam neque quod vitae animi!
                      </p>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsum tempore mollitia numquam nam consequuntur
                        minima!
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ x: 50 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.75 }}
                      className="right w-[50%]"
                    >
                      <ul>
                        <li className="mb-[8px] w-full float-left">
                          <span className="inline-block min-w-[100px] font-bold">
                            Name:
                          </span>
                          <span className=" inline-block">
                            Lorem ipsum dolor.
                          </span>
                        </li>
                        <li className="mb-[8px] w-full float-left">
                          <span className="inline-block min-w-[100px] font-bold">
                            Address:
                          </span>
                          <span className=" inline-block">
                            Lorem ipsum dolor sit amet co.
                          </span>
                        </li>
                        <li className="mb-[8px] w-full float-left">
                          <span className="first inline-block min-w-[100px] font-bold">
                            Study:
                          </span>
                          <span className="second inline-block">
                            Lorem ipsum dolor.
                          </span>
                        </li>
                        <li className="mb-[8px] w-full float-left">
                          <span className="first inline-block min-w-[100px] font-bold">
                            Degree:
                          </span>
                          <span className="second inline-block">
                            Lorem ipsum dolor sit.
                          </span>
                        </li>
                        <li className="mb-[8px] w-full float-left">
                          <span className="first inline-block min-w-[100px] font-bold">
                            Mail:
                          </span>
                          <span className="second inline-block">
                            <a
                              className="text-[#7d7789] transition-all duration-300 hover:text-secondary"
                              href="#"
                            >
                              <span
                                className="__cf_email__"
                                data-cfemail="91f9f4fdfdfed1f2f0e7f0fff8bff2fefc"
                              >
                                Lorem@gmail.com
                              </span>
                            </a>
                          </span>
                        </li>
                        <li className="w-full float-left">
                          <span className="first inline-block min-w-[100px] font-bold">
                            Phone:
                          </span>
                          <span className="second inline-block">
                            +2348109125793
                          </span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
                {/* Services and Skills */}
                <div className="services w-full h-auto clear-both float-left mb-[87px]">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className=" w-full h-auto clear-both float-left flex justify-start gap-24"
                  >
                    <motion.div className=" w-[40%]">
                      <div className=" w-full h-auto clear-both float-left overflow-hidden">
                        <span className="inline-block relative font-poppins text-secondary uppercase font-bold tracking-[8px]">
                          Services
                        </span>
                      </div>
                      <div className="list w-full h-auto clear-both float-left mt-[55px]">
                        <ul>
                          <li className=" text-base w-full float-left relative pl-[25px]">
                            Logo Design
                          </li>
                          <li className="mt-6 text-base w-full float-left relative pl-[25px]">
                            Logo Design
                          </li>
                          <li className="mt-6 text-base w-full float-left relative pl-[25px]">
                            Logo Design
                          </li>

                          <li className="mt-6 text-base w-full float-left relative pl-[25px]">
                            Logo Design
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                    <motion.div className="w-[40%]">
                      <div className=" w-full h-auto clear-both float-left overflow-hidden">
                        <span className="inline-block relative font-poppins text-secondary uppercase font-bold tracking-[8px]">
                          Skills
                        </span>
                      </div>
                      <div className=" w-full h-auto clear-both float-left mt-[55px]">
                        <div className="">
                          {/* Skill 1 */}
                          <motion.div
                            initial={{ scale: 1, rotate: "0deg" }}
                            whileHover={{ scale: 1.1, rotate: "5deg" }}
                            transition={{ duration: 1 }}
                            className=""
                          >
                            <span className="text-base font-medium text-darkAccent">
                              HTML
                            </span>
                            <div className="w-[100%] rounded-lg bg-accent">
                              <motion.div className="bg-darkAccent rounded-lg text-primary h-6 w-[95%]">
                                <span className="text-xs ml-2">95%</span>
                              </motion.div>
                            </div>
                          </motion.div>
                          {/* Skill 2 */}
                          <motion.div
                            initial={{ scale: 1, rotate: "0deg" }}
                            whileHover={{ scale: 1.1, rotate: "-5deg" }}
                            transition={{ duration: 1, ease: "backInOut" }}
                            className="mt-6"
                          >
                            <span className="text-base font-medium text-darkAccent">
                              CSS
                            </span>
                            <div className="w-[100%] rounded-lg bg-accent">
                              <motion.div className="bg-darkAccent rounded-lg text-primary h-6 w-[75%]">
                                <span className="text-xs ml-2">75%</span>
                              </motion.div>
                            </div>
                          </motion.div>
                          {/* Skill 3 */}
                          <motion.div
                            initial={{ scale: 1, rotate: "0deg" }}
                            whileHover={{ scale: 1.1, rotate: "5deg" }}
                            transition={{ duration: 1, ease: "backInOut" }}
                            className="mt-6"
                          >
                            <span className="text-base font-medium text-darkAccent">
                              Figma
                            </span>
                            <div className="w-[100%] rounded-lg bg-accent">
                              <motion.div className="bg-darkAccent rounded-lg text-primary h-6 w-[100%]">
                                <span className="text-xs ml-2">100%</span>
                              </motion.div>
                            </div>
                          </motion.div>
                          {/* Skill 4 */}
                          <motion.div
                            initial={{ scale: 1, rotate: "0deg" }}
                            whileHover={{ scale: 1.1, rotate: "-5deg" }}
                            transition={{ duration: 1, ease: "backInOut" }}
                            className="mt-6"
                          >
                            <span className="text-base font-medium text-darkAccent">
                              Adobe
                            </span>
                            <div className="w-[100%] rounded-lg bg-accent">
                              <motion.div className="bg-darkAccent rounded-lg text-primary h-6 w-[90%]">
                                <span className="text-xs ml-2">90%</span>
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="testimonials w-full h-auto clear-both float-left mb-[90px]"
                >
                  <div className=" w-full h-auto clear-both items-center flex gap-8 float-left overflow-hidden">
                    <span className="inline-block relative font-poppins text-darkAccent uppercase font-bold tracking-[8px]">
                      Testimonials
                    </span>
                    <div className="inline-block h-0.5 w-[60%] bg-darkAccent "></div>
                  </div>
                  <div className="mt-16 grid grid-cols-2 gap-4">
                    {/* testimoial 1 */}
                    <div className="w-full mt-8  flex flex-col items-center justify-center gap-8">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                          <img src="https://i.postimg.cc/tR1dcyQb/user.png" />
                        </div>
                        <div className="flex flex-col tracking-wider">
                          <label className="text-darkAccent font-bold text-base">
                            Rai Raksa Muhamad
                          </label>
                          <label className="text-secondary font-normal text-sm">
                            ........
                          </label>
                        </div>
                      </div>
                      <p className="text-lg text-secondary leading-relaxed text-center w-4/5">
                        "Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s"
                      </p>
                    </div>
                    {/* testimoial 2 */}
                    <div className="w-full mt-8  flex flex-col items-center justify-center gap-8">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                          <img src="https://i.postimg.cc/tR1dcyQb/user.png" />
                        </div>
                        <div className="flex flex-col tracking-wider">
                          <label className="text-darkAccent font-bold text-base">
                            Rai Raksa Muhamad
                          </label>
                          <label className="text-secondary font-normal text-sm">
                            ........
                          </label>
                        </div>
                      </div>
                      <p className="text-lg text-secondary leading-relaxed text-center w-4/5">
                        "Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s"
                      </p>
                    </div>
                    {/* testimoial 3 */}
                    <div className="w-full mt-8  flex flex-col items-center justify-center gap-8">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                          <img src="https://i.postimg.cc/tR1dcyQb/user.png" />
                        </div>
                        <div className="flex flex-col tracking-wider">
                          <label className="text-darkAccent font-bold text-base">
                            Rai Raksa Muhamad
                          </label>
                          <label className="text-secondary font-normal text-sm">
                            ........
                          </label>
                        </div>
                      </div>
                      <p className="text-lg text-secondary leading-relaxed text-center w-4/5">
                        "Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s"
                      </p>
                    </div>
                    {/* testimoial 4 */}
                    <div className="w-full mt-8  flex flex-col items-center justify-center gap-8">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                          <img src="https://i.postimg.cc/tR1dcyQb/user.png" />
                        </div>
                        <div className="flex flex-col tracking-wider">
                          <label className="text-darkAccent font-bold text-base">
                            Rai Raksa Muhamad
                          </label>
                          <label className="text-secondary font-normal text-sm">
                            ........
                          </label>
                        </div>
                      </div>
                      <p className="text-lg text-secondary leading-relaxed text-center w-4/5">
                        "Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;

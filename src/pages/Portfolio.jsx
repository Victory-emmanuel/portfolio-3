import ProfileImage from "../components/ProfileImage";
import { motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */
const Portfolio = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="md:h-[85dvh] md:pt-0 xx:pt-24 md:px-0 ss:px-6"
      >
        <div
          className="grid md:grid-cols-3 xx:grid-cols-1 gap-0"
          id="portfolio"
        >
          <div className="md:block xx:hidden col-span-1 ">
            <ProfileImage />
          </div>

          <div className="md:col-span-2 md:pl-12 md:pr-2  md:mr-12 md:max-w-[100%] md:h-[100%] bg-primary scroll-bg  md:mb-0 ss:mb-[3rem] xx:mb-[8rem]">
            <div className="scroll-div md:max-w-[100%] md:h-[75vh] md:my-6 md:overflow-hidden md:overflow-y-scroll  bg-primary">
              <motion.div
                initial={{ y: -200 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className=" scroll-object  w-full clear-both float-left md:pr-4 px-3"
              >
                <motion.div
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.75 }}
                  className=" w-full flex items-center gap-8 h-auto clear-both float-left overflow-hidden"
                >
                  <span className="inline-block relative  uppercase ss:text-xl xx:text-base text-darkAccent ss:font-bold xx:font-semibold tracking-[8px]">
                    My Works
                  </span>
                  <div className="inline-block h-0.5 ss:w-[60%] xx:w-[40%] bg-darkAccent "></div>
                </motion.div>
                {/* My works */}
                <div
                  style={{ justifyItems: "center" }}
                  className="mt-24 w-full h-auto grid sm:grid-cols-3 xs:grid-cols-2 xx:grid-cols-1 gap-8  clear-both float-left"
                >
                  {/* 1 */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                    className=""
                  >
                    <div
                      style={{
                        background: `url("https://i.postimg.cc/3wzSgcDy/4864181-2543695.jpg") no-repeat center center/cover`,
                      }}
                      className="ss:w-[15rem] ss:h-[15rem] xs:w-[12rem] xs:h-[12rem] xx:w-[15rem] xx:h-[15rem]"
                    ></div>
                    <p className="mt-4 text-darkAccent ">Black & Gold Design</p>
                  </motion.div>
                  {/* 2 */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                  >
                    <div
                      style={{
                        background: `url("https://i.postimg.cc/3wzSgcDy/4864181-2543695.jpg") no-repeat center center/cover`,
                      }}
                      className="ss:w-[15rem] ss:h-[15rem] xs:w-[12rem] xs:h-[12rem] xx:w-[15rem] xx:h-[15rem]"
                    ></div>
                    <p className="mt-4 text-darkAccent ">Black & Gold Design</p>
                  </motion.div>
                  {/* 3 */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                  >
                    <div
                      style={{
                        background: `url("https://i.postimg.cc/3wzSgcDy/4864181-2543695.jpg") no-repeat center center/cover`,
                      }}
                      className="ss:w-[15rem] ss:h-[15rem] xs:w-[12rem] xs:h-[12rem] xx:w-[15rem] xx:h-[15rem]"
                    ></div>
                    <p className="mt-4 text-darkAccent ">Black & Gold Design</p>
                  </motion.div>
                  {/* 4 */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                  >
                    <div
                      style={{
                        background: `url("https://i.postimg.cc/3wzSgcDy/4864181-2543695.jpg") no-repeat center center/cover`,
                      }}
                      className="ss:w-[15rem] ss:h-[15rem] xs:w-[12rem] xs:h-[12rem] xx:w-[15rem] xx:h-[15rem]"
                    ></div>
                    <p className="mt-4 text-darkAccent ">Black & Gold Design</p>
                  </motion.div>
                  {/* 5 */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                  >
                    <div
                      style={{
                        background: `url("https://i.postimg.cc/3wzSgcDy/4864181-2543695.jpg") no-repeat center center/cover`,
                      }}
                      className="ss:w-[15rem] ss:h-[15rem] xs:w-[12rem] xs:h-[12rem] xx:w-[15rem] xx:h-[15rem]"
                    ></div>
                    <p className="mt-4 text-darkAccent ">Black & Gold Design</p>
                  </motion.div>
                  {/* 6 */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                  >
                    <div
                      style={{
                        background: `url("https://i.postimg.cc/3wzSgcDy/4864181-2543695.jpg") no-repeat center center/cover`,
                      }}
                      className="ss:w-[15rem] ss:h-[15rem] xs:w-[12rem] xs:h-[12rem] xx:w-[15rem] xx:h-[15rem]"
                    ></div>
                    <p className="mt-4 text-darkAccent ">Black & Gold Design</p>
                  </motion.div>
                  {/* 7 */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                  >
                    <div
                      style={{
                        background: `url("https://i.postimg.cc/3wzSgcDy/4864181-2543695.jpg") no-repeat center center/cover`,
                      }}
                      className="ss:w-[15rem] ss:h-[15rem] xs:w-[12rem] xs:h-[12rem] xx:w-[15rem] xx:h-[15rem]"
                    ></div>
                    <p className="mt-4 text-darkAccent ">Black & Gold Design</p>
                  </motion.div>
                  {/* 8 */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                  >
                    <div
                      style={{
                        background: `url("https://i.postimg.cc/3wzSgcDy/4864181-2543695.jpg") no-repeat center center/cover`,
                      }}
                      className="ss:w-[15rem] ss:h-[15rem] xs:w-[12rem] xs:h-[12rem] xx:w-[15rem] xx:h-[15rem]"
                    ></div>
                    <p className="mt-4 text-darkAccent ">Black & Gold Design</p>
                  </motion.div>
                  {/* 9 */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "backInOut" }}
                  >
                    <div
                      style={{
                        background: `url("https://i.postimg.cc/3wzSgcDy/4864181-2543695.jpg") no-repeat center center/cover`,
                      }}
                      className="ss:w-[15rem] ss:h-[15rem] xs:w-[12rem] xs:h-[12rem] xx:w-[15rem] xx:h-[15rem]"
                    ></div>
                    <p className="mt-4 text-darkAccent ">Black & Gold Design</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;

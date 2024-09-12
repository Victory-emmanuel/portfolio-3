import ProfileImage from "../components/ProfileImage";
import { backInOut, motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */
const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="xx:bg-primary md:bg-white md:h-[85dvh] xx:h-[85dvh]"
    >
      <div className="md:grid md:grid-cols-3 gap-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="col-span-1"
        >
          <ProfileImage />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="md:pl-12 xx:px-6 md:col-span-2 text-secondary bg-primary  md:mr-12 "
          id="home"
        >
          <div className=" relative w-full h-full grid md:grid-cols-1 md:content-center ss:justify-items-start xx:justify-items-center xx:pt-[45%] md:pt-0">
            {/* Mobile mode image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
              className=" ss:hidden xx:block mb-24 "
            >
              <div>
                <div
                  style={{
                    background: `url("https://i.postimg.cc/LsrJQNzj/2148190718.jpg") no-repeat center center/cover`,
                  }}
                  className="xs:w-[20rem] xs:h-[20rem] xx:w-[15rem] xx:h-[15rem] rounded-full" // Set a fixed height here
                ></div>
              </div>
              {/* Mobile mode image end */}
            </motion.div>
            <motion.div
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: "backInOut" }}
              className="inline-block h-0.5 ss:w-[60%] xx:w-[90%] bg-darkAccent md:mb-12 ss:mb-16 xx:mb-12 "
            ></motion.div>
            <div className="md:block xx:grid ss:grid-cols-3 xx:grid-cols-1  gap-2 content-center">
              <motion.div className="col-span-2 ">
                <motion.h1
                  initial={{ scale: 1, x: -150 }}
                  whileHover={{ scale: 1.1 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.75, ease: "backInOut" }}
                  className=" md:text-7xl ss:text-5xl xs:text-[2.5rem] xx:text-[2rem] font-bold uppercase mb-4"
                >
                  Lesley Ludwig
                </motion.h1>
                <motion.div
                  initial={{ scale: 1, x: -150 }}
                  whileHover={{ scale: 1.1 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className="h-1 w-12 bg-darkAccent mb-6"
                ></motion.div>
                <motion.h3
                  initial={{ scale: 1, y: -150 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className=" text-xl mb-[35px] font-medium"
                >
                  <motion.span className="">I'm A</motion.span>
                  <motion.span className="text-darkAccent font-SourceSans3 ml-1">
                    Logo Designer
                  </motion.span>
                </motion.h3>
                <motion.button
                  initial={{ scale: 1, x: 150 }}
                  whileHover={{ scale: 1.1 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className="bg-darkAccent px-6 py-2 text-primary"
                >
                  Let's talk
                </motion.button>
              </motion.div>
              {/* tablet mode image */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="md:hidden ss:block xx:hidden xs:col-span-1"
              >
                <div>
                  <div
                    style={{
                      background: `url("https://i.postimg.cc/LsrJQNzj/2148190718.jpg") no-repeat center center/cover`,
                    }}
                    className="sm:w-[15rem] sm:h-[15rem] xs:w-[12rem] xs:h-[12rem] rounded-full" // Set a fixed height here
                  ></div>
                </div>
              </motion.div>
              {/* tablet mode image end*/}
            </div>
            <motion.div
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: "backInOut" }}
              className="inline-block h-0.5 ss:w-[60%] xx:w-[90%] bg-darkAccent md:mt-12 xx:mt-12 "
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default HomePage;

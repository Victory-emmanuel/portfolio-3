/* eslint-disable react/no-unescaped-entities */
import illustrator from "../assets/img/svg/skills/illustrator.svg";
import photoshop from "../assets/img/svg/skills/photoshop.svg";
import figma from "../assets/img/svg/skills/figma.svg";
import profile from "../assets/img/slider/avatar.png";
import { FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <section
        className=" flex items-center  lg:h-screen py-24 px-6 ss:px-12 relative dizme_tm_header"
        id="heroSection"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-[25px]">
            <div className="order-2 lg:order-1">
              <h3 className="text-custom text-[21px] text-center lg:text-left lg:text-[25px] xl:text-[45px] leading-[1.3] font-medium font-secondary">
                Hello, I'm
              </h3>
              <h1 className="text-[42px] lg:text-[60px] xl:text-[85px] text-center lg:text-left mb-[11px] lg:mb-[18px] leading-[1.3] font-medium font-secondary">
                James Smith
              </h1>
              <p className="lg:mb-9 mb-[15px] text-lg lg:text-[19px] xl:text-[28px] text-center lg:text-left font-medium">
                A <span className="text-[#1cbe59]">Creative Designer</span> From
                <span className="text-[#8067f0] dark:text-[#f0c45c]">
                  New York
                </span>
              </p>
              <p className="lg:mb-[42px] text-muted dark:text-white mb-[30px] text-base text-center lg:text-left xl:text-[23px] leading-[1.5] max-w-[640px] mx-auto lg:ml-0">
                I'm creative designer based in New York, and I'm very passionate
                and dedicated to my work.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-[25px]">
                <a href="#about" className="btn-custom relative">
                  About Me
                </a>
                <ul className="flex items-center gap-2">
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={profile}
                  className="mx-auto max-w-[250px] lg:max-w-[400px] xl:max-w-[650px]"
                  alt
                />
                <span className="left-24 shadow-[24px_0px_72px_rgb(54,32,152,0.3)] top-5 hidden lg:flex items-center rounded-lg bg-[#390000] w-[75px] h-[75px] absolute anim_moveBottom">
                  <img className="w-10 h-10 mx-auto" src={illustrator} alt />
                </span>
                <span className="right-[110px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] top-20 hidden lg:flex items-center rounded-lg bg-[#001631] w-[75px] h-[75px] absolute anim_moveBottom">
                  <img className="w-10 h-10 mx-auto" src={photoshop} alt />
                </span>
                <span className="left-[100px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] bottom-20 hidden lg:flex items-center rounded-lg bg-white w-[75px] h-[75px] absolute anim_moveBottom">
                  <img className="w-10 mx-auto h-10" src={figma} alt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

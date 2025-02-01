
// import { useState, useEffect } from 'react';
import ReactTyped from "react-typed";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section>
      <div className=" h-screen sm:min-h-[550px] bg-gray-100 dark:bg-gray-950 flex justify-center items-center duration-200">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 gap-8"
            >
              {/* Text Page Hero  */}
              <a className=" text-black dark:text-white text-3xl ">
                Hy, My Name Is ...🙌{" "}
                <span className=" text-5xl block font-bold my-5">
                  Fauzan Aldi
                </span>{" "}
                I'm{" "}
                <span className="text-secondary text-2xl">
                  <ReactTyped
                    strings={["Penetration Tester", "Bug Hunter", "Cyber Security Enthusiast", "Informatics Student"]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true}
                  />
                </span>
              </a>
              {/* buttom   */}

              <div>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                    type: "spring",
                    stiffness: 20,
                    damping: 15,
                    mass: 2,
                    scale: {
                      type: "spring",
                      stiffness: 10,
                      damping: 5,
                      mass: 0.1,
                    },
                  }}
                 
                >
                  <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
                    
                  </span>
                  <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
              </div>
            </div>
            {/* image Sections */}
            <div className="sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              
              <div className="relative h-full w-full flex justify-center items-center">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
{
  /* <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={profile}
                  alt="Logo"
                  className=" w-[300px] lg:w-[350px] sm:w-[450px] sm:scale-100   mx-auto"
                /> */
}

export default Hero;

import { motion } from 'framer-motion';
import profile from "../assets/aldi.png";

function About() {
  return (
    <>
      <section id="About" className="bg-gray-100 py-10 -translate-y-40 md:-translate-y-0">
        <div className="container mx-auto h-max py-1 md:h-screen mt-10 md:mt-0">
          <h1 className="text-2xl  hidden md:block font-bold text-center mb-4 ">About</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative ">
        <h1 className="text-2xl font-bold text-center mb-1 w-full absolute md:block top-0 md:hidden">About</h1>
        
            {/* Image Section with Animation */}
            <div className="flex justify-center items-center relative">
              {/* Motion Div */}
              <motion.div
                animate={{
                  scaleX: [1, 0.5, 0.8, 1.2, 1],
                  scaleY: [1, 1, 2.5, 1, 1],
                  rotate: [0, 45, 90, -45, 0],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.7, 1],
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="bg-primary size-40 md:size-96 flex justify-center items-center rounded-full absolute bottom-5 md:bottom-0 transition ease-in-out duration-300"
              ></motion.div>
              <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 8,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  src={profile}
                  alt="Image Inside Circle"
                  className="h-44 md:h-full object-cover bottom-5 md:bottom-0 absolute"
                />
            </div>

            {/* Text Section */}
            <div className="text-gray-900">
              <h1 className="text-x1 text-center md:text-2xl md:text-start font-bold ">
                Penetration Tester & Bug Hunter
              </h1>
              <p className="text-[16px] text-justify leading-relaxed mb-4">
                Saya <span className="font-bold">Fauzan Aldi</span>, seorang mahasiswa jurusan Teknik Informatika.
                Saya memiliki ketertarikan besar dalam bidang Cyber Security, khususnya sebagai Penetration Tester
                dan Bug Hunter. Saya senang menganalisis sistem serta jaringan komputer untuk mengidentifikasi celah
                keamanan yang berpotensi dimanfaatkan oleh pihak tidak bertanggung jawab, dengan tujuan membantu meningkatkan keamanan suatu sistem.
              </p>
              <p className="text-[16px] text-justify leading-relaxed mb-4">
                Saya aktif dalam program bug bounty untuk mengasah kemampuan melalui praktik langsung pada kasus-kasus nyata.
                Selain itu, saya rutin mengikuti pelatihan dan bootcamp secara gratis guna menambah wawasan dan meningkatkan
                keahlian saya sebagai Pentester di bidang keamanan siber. Saya juga berpartisipasi dalam kompetisi Capture the 
                Flag (CTF).
              </p>
              <ul className="list-none mt-4">
                <li className="mb-2">
                  <span className="font-bold"> ➢ Age:</span> 20
                </li>
                <li className="mb-2">
                  <span className="font-bold"> ➢ City:</span> Kepulauan Riau, Indonesia
                </li>
                <li className="mb-2">
                  <span className="font-bold"> ➢ Phone:</span> +62 8 *** **** ****
                </li>
                <li className="mb-2">
                  <span className="font-bold"> ➢ Degree:</span> Mahasiswa Universitas
                </li>
                <li>
                  <span className="font-bold"> ➢ Email:</span>{" "}
                  fauzanalditester@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

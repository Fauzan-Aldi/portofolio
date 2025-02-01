import { motion } from 'framer-motion';
import profile from "../assets/aldi.png";

function About() {
  return (
    <>
      <section id="About" className="bg-gray-100 py-10">
        <div className="container mx-auto h-screen">
        <h1 className="text-2xl font-bold text-center mb-4">About</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Section with Animation */}
            <div className="flex justify-center items-center relative">
              {/* Motion Div */}
              <motion.div
                animate={{
                  scaleX: [1, 0.5, 0.8, 1.2, 1],
                  scaleY: [1, 0.8, 2.5, 0.9, 1],
                  rotate: [0, 45, 90, -45, 0],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.7, 1],
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="bg-primary h-96 w-96 flex justify-center items-center rounded-full absolute transition ease-in-out duration-300"
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
                  className="h-[460px] object-cover absolute"
                />
            </div>

            {/* Text Section */}
            <div className="text-gray-900">
              <h1 className="text-2xl font-bold mb-4">
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

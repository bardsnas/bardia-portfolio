'use client';
import { Github, Mail } from "lucide-react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-800 px-6 py-12 max-w-5xl mx-auto font-sans">
      <header className="mb-16 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <Image
          src="/profile.jpg"
          alt="Bardia Nasrulai"
          width={256}
          height={256}
          className="rounded-full border border-slate-300 shadow-sm object-cover object-[25%]"
        />
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-slate-900">
            Bardia Nasrulai
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Electrical & Computer Engineering Student specializing in Embedded Systems & Digital Logic.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="mailto:bards.nas@gmail.com" className="hover:text-blue-600">
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/bardsnas"
              target="_blank"
              className="hover:text-blue-600"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/bardia-nasrulai/"
              target="_blank"
              className="hover:text-blue-600"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-extrabold mb-4 text-slate-800">About Me</h2>
        <p className="text-slate-700 leading-relaxed max-w-2xl">
          I&apos;m a student of Electrical and Computer Engineering focused on embedded systems, firmware, and digital logic. My curriculum spans real-time task scheduling with FreeRTOS, wireless sensor networks with ESP-NOW, CPU design in SystemVerilog. I&apos;m driven by elegant system-level problem-solving that bridges hardware and software. I have taken additional coursework in Database Management, Data Structures & Algorithms, Artificial Intelligence, tinyML, and Neural Engineering to bolster my proffesional skillsets.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 grid gap-8 md:grid-cols-2 items-start"
      >
        <div>
          <p className="text-slate-700 leading-relaxed max-w-2xl">
            My personal passions lie in the realm of sustainability and energy efficiency. I serve as President of the Student Organization  <strong className="font-bold">UW Solar</strong>, which focues on project development of solar infrastructure project to power University of Washington&apos;s facilities. The project I manage in this organization is the E18 Solar Canopy, a proposal to build a solar-mounted carport structure on UW&apos;s largest parking lot. For the past 3 years, I have worked to conduct feasability studies on building the substructure in the marshy region, writing project proposals to garner funding from the UW Treasurer, and presenting a design review to UW Transportation & Facilities.
          </p>
        </div> 
      
        <div className="w-full h-auto">
          <Image
            src="/solar.png"
            alt="Embedded system or project photo"
            width={350}
            height={225}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 grid gap-8 md:grid-cols-2 items-start"
      >
        <div className="w-full h-auto">
          <Image
            src="/award.jpeg"
            alt="Award photo"
            width={400}
            height={250}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        <div>
          <p className="text-slate-700 leading-relaxed max-w-2xl">
            My work in supporting sustainability and inclusion efforts on campus led me to becoming awarded the <strong className="font-bold">Toimi and Eila Ahola Endowed Fund for Engineering and Social Justice</strong>. The College of Engineering and its donors created this fund to elevate engineering students who are contributing positive change to their community. The scholarship board were impressed by my years of leadership experience and my dedication to clean energy.
          </p>
        </div> 
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 grid gap-8 md:grid-cols-2 items-start"
      >
        <div>
          <p className="text-slate-700 leading-relaxed max-w-2xl">
            Music is a huge part of my world, I have been playing and learning instruments since the age of 4. I fell in love with the cello when I was 10, insisting on lugging the huge instrument to and from rehearsals. I have played in Cascade Youth Symphony Orchestra during high school, where I had the opportunity to perform symphonies on the stage at Beneroya Hall. I continue to fulfill my musical interests by participating in the <strong className="font-bold">UW Campus Philharmonic Orchestra</strong>, where each academic quarter, we have the opportunity to perform a selection of classical and contemporary orchestral pieces for the public.
          </p>
        </div> 
        <div className="w-full h-auto">
          <Image
            src="/orchestra.jpg"
            alt="orchestra photo"
            width={300}
            height={200}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </motion.section>
    </main>
  );
}

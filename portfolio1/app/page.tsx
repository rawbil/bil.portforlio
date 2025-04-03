"use client"
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {GitHubStats} from "../components/GitHubStats";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#5F6652] text-[#E8D8A0] flex flex-col items-center justify-center p-8">
        <nav className="w-full max-w-6xl flex justify-between items-center py-4 px-8 bg-[#6C7360] shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold italic">Bildad</h1>
          <div className="flex space-x-6 text-[#A8B092]">
            <Link href="#" className="hover:text-white">Home</Link>
            <Link href="#" className="hover:text-white">Projects</Link>
            <Link href="#" className="hover:text-white">Skills</Link>
            <Link href="https://www.linkedin.com/in/bildad-simiyu-324431299/" className="border border-[#E8D8A0] px-4 py-1 rounded hover:bg-[#E8D8A0] hover:text-[#5F6652]">LINKEDIN</Link>
          </div>
        </nav>
        <div className="mt-12 text-center max-w-3xl">
          <p className="text-lg">Hi! My name is Bildad Simiyu,</p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mt-4"
          >
            A DRIVEN FULLSTACK DEVELOPER <br /> & FUTURE ML EXPERT
          </motion.h1>
          <p className="text-md text-[#A8B092] mt-4">
            Specializing in building high-performing applications. Passionate about creating intuitive user experiences and architecture to deliver successful software solutions.
          </p>
          <div className="mt-6 flex space-x-6 justify-center">
            <button className="border border-[#E8D8A0] px-6 py-2 text-lg rounded hover:bg-[#E8D8A0] hover:text-[#5F6652]">SEE PROJECTS</button>
            <button className="border border-[#E8D8A0] px-6 py-2 text-lg rounded hover:bg-[#E8D8A0] hover:text-[#5F6652]">RESUME</button>
          </div>
        </div>
        <div className="mt-12">
          <Image src="/developer.svg" alt="Developer Illustration" width={500} height={400} />
        </div>

        {/* Projects Section */}
        <section id="projects" className="mt-24 max-w-6xl w-full text-center">
          <h2 className="text-4xl font-bold text-[#E8D8A0]">Projects</h2>
          <p className="mt-4 text-[#A8B092] max-w-2xl mx-auto">
            People usually ask, "What's your superpower?" Well, mine is jumping head-first into interesting ideas and turning them into creative avenues for myself. Each project helps me learn tons about my craft. Honestly, they give me fulfillment, and it makes me excited for future projects I will do (In shaa Allah). To see all my projects, visit <Link href="https://github.com/rawbil" className="text-[#E8D8A0] underline">My GitHub Profile</Link>.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#6C7360] p-4 rounded-lg shadow-lg">
              <Image src="/sodeg.png" alt="Sodeg" width={300} height={200} className="rounded" />
              <h3 className="text-xl font-semibold mt-2">Sodeg</h3>
              <p className="text-[#A8B092]">A real estate listing app</p>
            </div>
            <div className="bg-[#6C7360] p-4 rounded-lg shadow-lg">
              <Image src="/fashion.png" alt="Fashion Store" width={300} height={200} className="rounded" />
              <h3 className="text-xl font-semibold mt-2">Fashion Store</h3>
              <p className="text-[#A8B092]">An ecommerce app for clothing</p>
            </div>
            <div className="bg-[#6C7360] p-4 rounded-lg shadow-lg">
              <Image src="/leadership.png" alt="Leadership App" width={300} height={200} className="rounded" />
              <h3 className="text-xl font-semibold mt-2">Leadership Training</h3>
              <p className="text-[#A8B092]">A platform for leadership courses</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

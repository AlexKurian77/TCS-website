"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ImagesSlider } from "./Components/ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://ncr.christuniversity.in/uploads/campus/large/1358090958_2021-06-25_08-39-31.png",
    "https://ncr.christuniversity.in/images/cour-btch-bnnr.jpg",
    "https://assets.collegedunia.com/public/college_data/images/appImage/16220967431589889779166.jpg",
  ];

  const texts = [
    "Hackgenesis 2023",
    "Codemania 2024",
    "TCS",
  ];

  const [index, setIndex] = useState(0);

  return (
    <ImagesSlider className="h-[40rem]" images={images} onIndexChange={setIndex}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center">
        <motion.p
          className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {texts[index]}
        </motion.p>
        {/* <button
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div
            className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}

import React, { FC } from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
interface Props {
  skill : Skill;
  directionLeft?: boolean;
}
const Skill: FC<Props> = ({skill,directionLeft}) => {
  const random = Math.random();
  const xrandom = 800 * random;
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={urlFor(skill.image).url()}
        className="rounded-full border border-gray-500 object-cover
        w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition
        duration-300 ease-in-out"
      />
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          x: 0,
        }}
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out 
            group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 
            rounded-full z-0"
        title={skill.title}
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{skill.progress}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;

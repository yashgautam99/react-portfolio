import { RiReactjsLine } from "react-icons/ri";
import { RiBootstrapFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiHtml5Fill } from "react-icons/ri";
import { RiGitBranchFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";
import { RiJavaLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

import { motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center"
      >
        <div className="text-center">
          <motion.div
            variants={iconVariant(2.5)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <RiReactjsLine className="text-6xl text-cyan-400" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">React.js</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(5)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <RiBootstrapFill className="text-6xl text-purple-400" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">Bootstrap</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(6)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <RiTailwindCssFill className="text-6xl text-cyan-400" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">Tailwind CSS</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(3)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <RiNodejsFill className="text-6xl text-green-500" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">Node.js</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(3.5)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <SiExpress className="text-6xl text-white-700" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">Expressjs</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(4)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <SiMongodb className="text-6xl text-green-400" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">MongoDB</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(2.8)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <RiHtml5Fill className="text-6xl text-orange-400" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">HTML</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(6)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <RiGitBranchFill className="text-6xl text-blue-600" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">Git</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(2.5)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <RiGithubFill className="text-6xl text-white-400" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">GitHub</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(3.5)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <RiJavascriptFill className="text-6xl text-yellow-600" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">JavaScript</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(4.2)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <RiCss3Fill className="text-6xl text-blue-400" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">CSS</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(2.4)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <BiLogoPostgresql className="text-6xl text-sky-700" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">PostgreSQL</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(5)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <BiLogoFigma className="text-6xl text-pink-400" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">Figma</p>
        </div>
        <div className="text-center">
          <motion.div
            variants={iconVariant(5.4)}
            initial="initial"
            animate="animate"
            className="bg-gray-800 rounded-xl border-4 border-neutral-800 p-4 flex justify-center items-center"
          >
            <RiJavaLine className="text-6xl text-red-700" />
          </motion.div>
          <p className="mt-4 text-lg font-semibold">Java</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Technologies;

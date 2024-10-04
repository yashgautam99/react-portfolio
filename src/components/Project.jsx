import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
export default function Project() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Project
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center items-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-4 font-semibold text-xl">
                <a
                  href={project.url}
                  className="text-blue-500 hover:text-blue-700 hover:underline bg-gray-800 rounded-lg px-4 py-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h6>

              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex justify-center lg:justify-start flex-wrap max-w-[100%]">
                {project.technologies.map((technique, index) => (
                  <span
                    key={index}
                    className="inline-block bg-purple-500 text-white px-3 py-1 m-1 rounded-md text-sm font-medium shadow-md"
                  >
                    {technique}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

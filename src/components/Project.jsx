import { PROJECTS } from "../constants";
export default function Project() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className=" my-20 text-center text-4xl">Project</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center items-center"
          >
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
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
              <div className="flex justify-center lg:justify-start">
                {project.technologies.map((technique, index) => (
                  <span
                    key={index}
                    className="inline-block bg-purple-500 text-white px-3 py-1 m-1 rounded-md text-sm font-medium shadow-md"
                  >
                    {technique}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

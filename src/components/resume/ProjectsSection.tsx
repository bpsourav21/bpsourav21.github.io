import data from "@/src/lib/data";
import { Link } from "lucide-react";

export default function ProjectsSection() {
  const projects = data.ProjectsSection.projects;

  return (
    <div className="mt-8">
      <h2 className="text-md font-bold text-blue-900 mb-4 border-b border-gray-300 pb-2">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-b last:border-b-0 border-gray-200 pb-4"
          >
            <h3 className="flex items-center font-bold text-blue-900 text-md mb-2">
              {project.title}
              {project.link && (
                <span className="text-xs text-blue-600 ml-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    <Link size={12} />
                  </a>
                </span>
              )}
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              {project.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

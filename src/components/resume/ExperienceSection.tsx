import data from "@/src/lib/data";
import { MapPin, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = data.ExperienceSection.experiences;

  return (
    <div>
      <h2 className="text-md font-bold text-blue-900 mb-4 border-b border-gray-300 pb-2">
        EXPERIENCE
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="font-bold text-blue-900 text-md">{exp.title}</h3>
                <p className="text-sm font-medium text-gray-800 font-bold">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-800 italic">
                  {exp.description}
                </p>
              </div>
              <div className="text-right text-xs text-gray-600 ml-4">
                <div className="flex items-center gap-1 mb-1">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

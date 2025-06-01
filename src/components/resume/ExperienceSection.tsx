import data from "@/src/lib/data";
import { MapPin, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = data.ExperienceSection.experiences;

  return (
    <div>
      <h2 className="text-md font-bold text-primary mb-4 border-b border-primary pb-2">
        EXPERIENCE
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-b border-secondary pb-4 last:border-b-0"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="font-bold text-primary text-md">{exp.title}</h3>
                <p className="text-sm text-secondary font-bold">
                  {exp.company}
                </p>
                <p className="text-sm text-secondary italic">
                  {exp.description}
                </p>
              </div>
              <div className="text-right text-xs text-secondary ml-4">
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
            <ul className="list-disc list-bullet text-sm space-y-1 ml-4">
              {exp.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

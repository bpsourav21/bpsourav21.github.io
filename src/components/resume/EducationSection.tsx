import data from "@/src/lib/data";
import { Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  const educations = data.EducationSection.educations;

  return (
    <div className="mt-8 grid grid-cols-1 gap-8">
      <div>
        <h2 className="title-style">
          EDUCATION
        </h2>
        <div className="space-y-2">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="border-b border-secondary pb-4 last:border-b-0"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-primary text-md">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-bold text-secondary mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-secondary">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <div className="flex items-center font-bold gap-1">
                    <span className="text-md text-secondary">GPA</span>
                  </div>
                  <div className="font-bold text-primary mb-1">
                    {edu.gpa} / {edu.scale}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

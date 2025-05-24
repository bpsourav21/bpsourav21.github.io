import { MapPin, Calendar } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "BSC Engineering, Computer Science & Engineering",
      institution: "Rajshahi University of Engineering & Technology",
      period: "01/2012 - 12/2016",
      location: "Rajshahi",
      gpa: "3.15",
      scale: "4.0",
    },
    {
      degree: "Higher-Secondary School Certificate, Science",
      institution: "Notre Dame College, Dhaka",
      period: "01/2009 - 12/2011",
      location: "Dhaka",
      gpa: "5.0",
      scale: "5.0",
    },
    {
      degree: "Secondary School Certificate Science",
      institution: "Motijheel Govt Boys' High School",
      period: "01/2000 - 12/2009",
      location: "Dhaka",
      gpa: "5.0",
      scale: "5.0",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-8">
      <div>
        <h2 className="text-md font-bold text-blue-900 mb-4 border-b border-gray-300 pb-2">
          EDUCATION
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-3 last:border-b-0"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-blue-900 text-md">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-bold text-blue-900 mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
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
                    <span className="text-md text-gray-400">GPA</span>
                  </div>
                  <div className="font-bold text-blue-900 mb-1">
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

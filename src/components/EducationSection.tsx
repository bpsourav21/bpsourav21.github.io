import { MapPin, Calendar } from "lucide-react"

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
  ]

  return (
    <div>
      <h2 className="text-lg font-bold text-primary uppercase border-b border-gray-300 pb-1 mb-3">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="pb-3 border-b border-secondary last:border-b-0 last:pb-0">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="font-bold text-primary text-sm">{edu.degree}</h3>
                <p className="text-sm">{edu.institution}</p>
              </div>
              <div className="mt-1 md:mt-0 text-xs text-secondary md:text-right flex flex-col md:items-end">
                <div className="font-bold text-primary">
                  GPA {edu.gpa}/{edu.scale}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

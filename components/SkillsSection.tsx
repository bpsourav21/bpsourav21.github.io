export default function SkillsSection() {
  const skills = [
    "React",
    "React-Native",
    "Expo",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Node.js",
    "C#",
    "F#",
    "Dotnet",
    "Python",
    "Redux",
    "Zustand",
    "Mobx",
    "SQL",
    "Postgres",
    "MongoDB",
    "CouchDB",
    "PouchDB",
    "Neon",
    "Prisma",
    "Redis",
    "Tailwind",
    "Bootstrap",
    "Figma",
    "Adobe XD",
    "Shadcn",
    "Axiom",
    "Analytics",
    "Kusto Query",
    "Git",
    "Azure",
    "Google Cloud Platform",
  ]

  return (
    <div>
      <h2 className="text-lg font-bold text-blue-900 uppercase border-b border-gray-300 pb-1 mb-3">Skills</h2>
      <div className="grid grid-cols-2 gap-1.5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-xs bg-gray-100 border border-gray-300 rounded px-2 py-1 text-center text-gray-800"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

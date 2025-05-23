import "../styles/skills.css"

const SkillsSection = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        "React",
        "React Native",
        "Expo",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Node.js",
        "CSS",
        "HTML",
        "Redux",
        "Zustand",
        "MobX",
      ],
    },
    {
      category: "Backend",
      skills: ["Python", "PHP", "SQL", "Postgres", "MongoDB", "GraphQL", "PouchDB", "Realm", "Prisma", "Redis"],
    },
    {
      category: "Tools",
      skills: [
        "Tailwind",
        "Bootstrap",
        "Figma",
        "Adobe XD",
        "Shadcn",
        "Atom",
        "Analytics",
        "Auto Query",
        "API",
        "Azure",
        "Google Cloud Platform",
      ],
    },
  ]

  return (
    <div className="skills-section">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection

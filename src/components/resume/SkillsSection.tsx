import data from "@/src/lib/data";

export default function SkillsSection() {
  const skillsByGroup = data.SkillsSection.skillsByGroup;

  return (
    <div>
      <h2 className="title-style">
        SKILLS
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {Object.entries(skillsByGroup).map(([groupName, skills], index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="mb-0" />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-2 py-1 text-xs text-center text-primary font-bold border border-blue-900 rounded"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

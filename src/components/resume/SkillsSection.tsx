import data from "@/src/lib/data";

export default function SkillsSection() {
  const skillsByGroup = data.SkillsSection.skillsByGroup;

  return (
    <div>
      <h2 className="text-md font-bold text-blue-900 mb-4 border-b border-gray-300 pb-2">
        SKILLS
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {Object.entries(skillsByGroup).map(([groupName, skills], index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="mb-2" />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-2 py-1 text-xs text-center text-blue-900 font-bold border border-blue-900 rounded"
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

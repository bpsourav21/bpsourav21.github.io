import EducationSection from "@/src/components/resume/EducationSection";
import ExperienceSection from "@/src/components/resume/ExperienceSection";
import ProfileSection from "@/src/components/resume/ProfileSection";
import ProjectsSection from "@/src/components/resume/ProjectsSection";
import ReferencesSection from "@/src/components/resume/ReferencesSection";
import SkillsSection from "@/src/components/resume/SkillsSection";
import SummarySection from "@/src/components/resume/SummarySection";

export default function ResumeHome() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <ProfileSection />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-1">
            <SkillsSection />
          </div>
          <div className="md:col-span-2">
            <SummarySection />
            <div className="mt-6">
              <ExperienceSection />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <ProjectsSection />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <EducationSection />
          <ReferencesSection />
        </div>
      </div>
    </div>
  );
}

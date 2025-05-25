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
      <div className="max-w-4xl mx-auto p-10 bg-white border border-gray-300 shadow-lg rounded-lg my-20">
        <ProfileSection />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2">
          <div className="lg:col-span-1 space-y-8">
            <SkillsSection />
            <ProjectsSection />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <SummarySection />
            <ExperienceSection />
            <EducationSection />
            <ReferencesSection />
          </div>
        </div>
      </div>
    </div>
  );
}

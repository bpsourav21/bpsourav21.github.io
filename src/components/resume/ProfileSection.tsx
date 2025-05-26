import Image from "next/image";
import { Phone, Mail, Linkedin, Github, Globe } from "lucide-react";
import data from "@/src/lib/data";

export default function ProfileSection() {
  const profile = data.ProfileSection;
  return (
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">
          {profile.name}
        </h1>
        <div className="grid grid-cols-2">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Phone size={16} className="text-secondary flex-shrink-0" />
            <span>{profile.contactInfo.phone}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Mail size={16} className="text-secondary flex-shrink-0" />
            <a
              href="mailto:bpsourav21@gmail.com"
              className="hover:underline transition-colors"
            >
              {profile.contactInfo.email}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Linkedin size={16} className="text-secondary flex-shrink-0" />
            <a
              href="https://www.linkedin.com/in/bpsourav21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              {profile.contactInfo.linkedin}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Github size={16} className="text-secondary flex-shrink-0" />
            <a
              href="https://github.com/bpsourav21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              {profile.contactInfo.github}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Globe size={16} className="text-secondary flex-shrink-0" />
            <a
              href="https://bpsourav21.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              {profile.contactInfo.website}
            </a>
          </div>
        </div>
      </div>
      <div className="ml-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-secondary">
          <Image
            src={profile.profilePic}
            layout="responsive"
            alt={profile.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

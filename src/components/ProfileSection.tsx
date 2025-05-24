import Image from "next/image"
import { Phone, Mail, Linkedin, Github, Globe } from "lucide-react"

export default function ProfileSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">MAHADI HASAN SOURAV</h1>
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-sm">
            <Phone size={16} className="text-blue-600 flex-shrink-0" />
            <span className="text-gray-700">+8801671820025</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail size={16} className="text-blue-600 flex-shrink-0" />
            <a
              href="mailto:bpsourav21@gmail.com"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              bpsourav21@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Linkedin size={16} className="text-blue-600 flex-shrink-0" />
            <a
              href="https://www.linkedin.com/in/bpsourav21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              linkedin.com/in/bpsourav21
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Github size={16} className="text-blue-600 flex-shrink-0" />
            <a
              href="https://github.com/bpsourav21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              github.com/bpsourav21
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Globe size={16} className="text-blue-600 flex-shrink-0" />
            <a
              href="https://bpsourav21.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              bpsourav21.github.io
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:ml-8">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-3 border-blue-200 shadow-lg">
          <Image
            src="/profile-photo.jpg"
            alt="Mahadi Hasan Sourav"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

import { MapPin, Calendar } from "lucide-react"
import "../styles/experience-item.css"

interface Responsibility {
  text: string
}

interface ExperienceProps {
  experience: {
    title: string
    company: string
    location: string
    period: string
    description: string
    responsibilities: string[]
  }
}

const ExperienceItem = ({ experience }: ExperienceProps) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div className="experience-title-section">
          <h2 className="experience-title">{experience.title}</h2>
          <h3 className="experience-company">{experience.company}</h3>
          <p className="experience-description">{experience.description}</p>
        </div>
        <div className="experience-meta">
          <div className="experience-period">
            <Calendar size={16} />
            <span>{experience.period}</span>
          </div>
          <div className="experience-location">
            <MapPin size={16} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
      <ul className="responsibilities-list">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="responsibility-item">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceItem

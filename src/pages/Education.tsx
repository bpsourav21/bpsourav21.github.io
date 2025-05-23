import { MapPin, Calendar } from "lucide-react"
import "../styles/education.css"

const Education = () => {
  const educations = [
    {
      degree: "BSC Engineering, Computer Science & Engineering",
      institution: "Rajshahi University of Engineering & Technology",
      location: "Rajshahi",
      period: "12/2016 - 12/2012",
      grade: "3.16 / 4.0",
    },
    {
      degree: "Higher-Secondary School Certificate, Science",
      institution: "Notre Dame College, Dhaka",
      location: "Dhaka",
      period: "02/2008 - 12/2011",
      grade: "5.0 / 5.0",
    },
    {
      degree: "Secondary School Certificate Science",
      institution: "Motijheel Govt Boys High School",
      location: "Dhaka",
      period: "01/2000 - 12/2008",
      grade: "5.0 / 5.0",
    },
  ]

  const references = [
    {
      name: "Kefin Tran",
      position: "Director, Software Engineering",
      company: "Optimizezy",
      email: "kefin.tran@optimizezy.com",
    },
    {
      name: "Tejus Vaishnav",
      position: "CTO & Co-founder",
      company: "Chaldal Limited",
      email: "tejus@chaldal.com",
    },
  ]

  return (
    <div className="education-page">
      <div className="container">
        <h1 className="page-title">EDUCATION</h1>
        <div className="education-list">
          {educations.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <div className="education-info">
                  <h2 className="education-degree">{edu.degree}</h2>
                  <h3 className="education-institution">{edu.institution}</h3>
                </div>
                <div className="education-meta">
                  <div className="education-grade">{edu.grade}</div>
                  <div className="education-period">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="education-location">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="page-title references-title">REFERENCES</h1>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <h2 className="reference-name">{ref.name}</h2>
              <p className="reference-position">{ref.position}</p>
              <p className="reference-company">{ref.company}</p>
              <p className="reference-email">{ref.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education

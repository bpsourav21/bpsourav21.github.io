import ProfileImage from "../components/ProfileImage"
import SkillsSection from "../components/SkillsSection"
import "../styles/home.css"

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="profile-section">
          <div className="profile-info">
            <h1 className="name">MAHADI HASAN SOURAV</h1>
            <div className="contact-details">
              <p>+8801787162035</p>
              <p>bpsourav21@gmail.com</p>
              <p>
                <a href="https://www.linkedin.com/in/bpsourav21" target="_blank" rel="noopener noreferrer">
                  https://www.linkedin.com/in/bpsourav21
                </a>
              </p>
              <p>
                <a href="https://github.com/bpsourav21" target="_blank" rel="noopener noreferrer">
                  https://bpsourav21.github.io
                </a>
              </p>
            </div>
          </div>
          <ProfileImage />
        </div>

        <div className="summary-section">
          <h2 className="section-title">SUMMARY</h2>
          <p>
            Versatile and results-driven full-stack web developer with a strong emphasis on frontend architecture,
            experimentation platforms, and performance optimization. Proven track record of leading cross-functional
            initiatives, mentoring junior developers, and delivering high-quality software solutions with speed,
            scalable solutions. Passionate about building intuitive user experiences, solving complex problems, and
            continuously improving processes and systems in innovation-driven environments. Seeking a
            leadership-oriented role where technical expertise and problem-solving converge to drive business growth.
          </p>
        </div>

        <SkillsSection />
      </div>
    </div>
  )
}

export default Home

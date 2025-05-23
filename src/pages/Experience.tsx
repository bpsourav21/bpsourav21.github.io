import ExperienceItem from "../components/ExperienceItem"
import "../styles/experience.css"

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer II",
      company: "Chaldal Limited",
      location: "Dhaka, Bangladesh",
      period: "10/2014 - Present",
      description: "Online Grocery E-commerce",
      responsibilities: [
        "Led the Experience Platform (CXP)",
        "Developed and maintained high-performance, user-focused frontend features for Chaldal's experimentation and personalization platforms such as A/B testing, feature flags, and personalized recommendations",
        "Collaborated with product managers and UX/UI designers to translate wireframes into functional prototypes and ship new features UI components, ensuring accessibility and responsiveness across devices",
        "Created reusable UI libraries and internal tools that improved frontend developer workflow and consistency across teams",
        "Mentored junior developers, conducted code reviews, and implemented standards, reducing technical debt and improving code quality",
        "Conducted testing (unit/functional), ensuring performance and API integration test coverage using Mocha, Chai, Sinon, and Enzyme",
        "Documented complex features and created technical materials to support knowledge sharing and team growth",
      ],
    },
    {
      title: "Software Engineer (level 1)",
      company: "Chaldal Limited",
      location: "Dhaka, Bangladesh",
      period: "10/2018 - 10/2014",
      description: "Online Grocery E-commerce",
      responsibilities: [
        "Worked on frontend development using various programming languages such as React, React Native, Redux, MobX, Node.js, JS, TS, C#, ASP.net, SQL etc. to build frontend applications",
        "Collaborated with cross-functional teams to design, develop, and maintain updated software",
        "Analyzed business requirements, identified challenges and proposed alternatives by working closely with product managers",
        "Participated in code reviews and provided constructive feedback to team members",
        "Exceeded client expectations for software function, performance and features by working closely with product and quality assurance teams",
        "Implemented automated testing to ensure consistent, high-quality deliverables",
        "Built and maintained code libraries used to produce consistent and reliable code across multiple projects",
      ],
    },
    {
      title: "Frontend Developer (Contractual - Remote)",
      company: "Foodem Technologies",
      location: "Lahore, Pakistan",
      period: "04/2023 - 10/2023",
      description: "Online Food Service",
      responsibilities: [
        "Participation in project analysis and technical assessments to validate requirements for newly defined features",
        "Built reusable code to utilize for other projects and to minimize costs",
        "Improved layout and graphics to enhance aesthetics and appearance of the site",
        "Implemented responsive design principles to enhance the user experience",
        "Responded to queries on private messages or comments to address issues and client complaints",
      ],
    },
    {
      title: "Software Engineer",
      company: "Secure Technologies",
      location: "Dhaka, Bangladesh",
      period: "01/2017 - 06/2018",
      description: "B2B Service Provider",
      responsibilities: [
        "Developed and maintained custom web applications using React, React Native, Node.js, MongoDB, MySQL DB, Fusion DB, Redux",
        "Managed team members to deliver on time and within budget to meet client expectations",
        "Supported technical issues and provided solutions to deliver above benchmark results",
        "Supported software code review, system integration and validation efforts with development team",
        "Built and maintained code libraries used to produce consistent and reliable code",
      ],
    },
    {
      title: "Intern Engineer",
      company: "Secure Technologies",
      location: "Dhaka, Bangladesh",
      period: "12/2016 - 01/2016",
      description: "B2B Service Provider",
      responsibilities: ["Used to develop website using Codeignitor, Javascript, PHP and MySQL"],
    },
  ]

  return (
    <div className="experience-page">
      <div className="container">
        <h1 className="page-title">EXPERIENCE</h1>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience

import { MapPin, Calendar } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer II",
      company: "Optimizely",
      period: "10/2024 - Present",
      location: "Dhaka, Bangladesh",
      description: "Digital Experience Platform (DXP)",
      responsibilities: [
        "Developed and maintained high-performance, user-focused frontend features for Optimizely's experimentation and personalization platform such as A/B test, PersonalizationCampaign, Multi ArmedBandit, MultiVariatetests etc using React, Nuclear JS, Python, Webpack and TypeScript.",
        "Partnered with product managers and designers to rapidly prototype and ship A/B testing UI components, ensuring accessibility and responsiveness across devices.",
        "Created reusable UI libraries and internal tools that improved frontend developer velocity and consistency across teams.",
        "Optimized performance for large-scale experimentation dashboards, reducing initial load time by 35% through lazy-loading strategies and memoization.",
        "Championed testing best practices with comprehensive unit and integration test coverage using Mocha, Chai, Sinon, and Enzyme.",
        "Contributed to resolve vulnerabilities, internal documentation and on boarding materials to support knowledge sharing and team growth",
      ],
    },
    {
      title: "Software Engineer (level-3)",
      company: "Chaldal Limited",
      period: "10/2018 - 10/2024",
      location: "Dhaka, Bangladesh",
      description: "Online Grocery E-commerce",
      responsibilities: [
        "Wrote clean and dynamic code, leveraging expertise across multiple programming languages such as React, React-Native, Redux, Mobx, Node js, C#, F#, Dot net, SQL etc. to meet diverse requirements.",
        "Kept pace with changing coding standards and requirements and maintained updated software.",
        "Evaluated project requirements, identified challenges and proposed alternatives using research and data.",
        "Contributed to sprint planning, prioritizing backlogs to meet new demands",
        "Exceeded client expectations for software function, performance and features by working closely with product and quality assurance teams.",
        "Developed testable software using agile methodologies to create high-quality deliverables.",
        "Built and maintained code libraries used to produce consistent and reliable code within expected timeframe.",
      ],
    },
    {
      title: "Frontend Developer (Contractual - Remote)",
      company: "Pattern Technologies",
      period: "04/2023 - 11/2023",
      location: "Lahore, Pakistan",
      description: "Online Food Service",
      responsibilities: [
        "Participated in pre-project analysis and technical assessments to validate creation of user-friendly interface.",
        "Built reusable code to utilize for other projects and to minimize costs.",
        "Designed layout and graphics to enhance aesthetics and appearance of the app.",
        "Managed project and web strategic planning for entire team.",
        "Responded to queries on private messages or comments to address issues and resolve complaints",
      ],
    },
    {
      title: "Software Engineer",
      company: "Bond Technologies",
      period: "01/2017 - 06/2018",
      location: "Dhaka, Bangladesh",
      description: "POS Service Provider",
      responsibilities: [
        "Helped team complete smooth, professional software deployments using React, React React-Native, Node js, Mongo DB, Couch DB, Pouch DB.",
        "Managed team resources to deliver on sprint goals within expected timeframes.",
        "Aligned projects with requirements and specifications to deliver above-benchmark results.",
        "Supported software code review, system integration and validation in line with company and regulatory requirements.",
        "Built and maintained code libraries used to produce consistent and reliable code.",
      ],
    },
    {
      title: "Intern Engineer",
      company: "RT SoftBD",
      period: "12/2016 - 12/2016",
      location: "Dhaka, Bangladesh",
      description: "Website service provider",
      responsibilities: ["Used to develop website using CodeIgnitor, Javascript, PHP and Mysql."],
    },
  ]

  return (
    <div>
      <h2 className="text-md font-bold text-blue-900 mb-4 border-b border-gray-300 pb-2">EXPERIENCE</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="font-bold text-blue-900 text-sm">{exp.title}</h3>
                <p className="text-sm font-medium text-gray-800">{exp.company}</p>
                <p className="text-xs text-gray-600 italic">{exp.description}</p>
              </div>
              <div className="text-right text-xs text-gray-600 ml-4">
                <div className="flex items-center gap-1 mb-1">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 ml-2">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

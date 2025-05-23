import ProjectItem from "../components/ProjectItem"
import "../styles/projects.css"

const Projects = () => {
  const projects = [
    {
      title: "Optimizezy Visual Editor",
      description: [
        "A WYSIWYG visual editor for website and ad team adjust the visitor experience by running experiments and A/B tests at optimizezy.com",
        "A multi-tenant application built on React, Zustand, websocket",
      ],
    },
    {
      title: "MRCS Web App",
      description: [
        "A platform for MRCS medical exam where a separate admin panel manages questions and results",
        "Built with React, Redux, using NEXT.js, Postgres, Prisma and Next-auth with high-security authentication across browsers",
        "Implemented complex state management with Redux to handle user sessions and components",
        "Designed and optimized RESTful APIs for efficient data communication",
      ],
    },
    {
      title: "Purnodoy App",
      description: [
        "A React Native Expo application that serves NGOs and different foundation with meals",
        "Localized in Bangla for 3+ years",
      ],
    },
    {
      title: "Pattern the App",
      description: [
        "Contributed on creating dynamic pattern-based wallpapers",
        "Developed several features including cart tracking, patterns, Fit & Fill, integration etc.",
        "Implemented complex subscription model using React Native, Firebase, Stripe",
      ],
    },
    {
      title: "Chaldal Wallet",
      description: [
        "Developed with React.js, Node.js, Express, MongoDB, Redis, GraphQL, Typescript, Zustand",
        "Implemented wallet features like Money support, Address support, Chaldal Credit, Chaldal Coin, Chaldal payment, Nagad/bKash etc.",
        "Developed a shopping cart with payment integration for products and more functionalities",
      ],
    },
    {
      title: "Chaldal App (iOS & Android)",
      description: [
        "Developed with React Native, Redux, Typescript",
        "Implemented Google Analytics, Google Maps API, Firebase, Push notification, Realm, SQLite",
      ],
    },
    {
      title: "Chaldal Vegetable Network",
      description: ["Developed with React, Redux, Node, React Native, SQL, Liquibase"],
    },
    {
      title: "Chaldal Food Aid",
      description: ["Developed with React, Redux, FB, UX, Chaldal - Food Aid"],
    },
    {
      title: "Chaldal Voting System",
      description: ["Developed with React, Redux, FB, Postgres"],
    },
  ]

  return (
    <div className="projects-page">
      <div className="container">
        <h1 className="page-title">PROJECTS</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

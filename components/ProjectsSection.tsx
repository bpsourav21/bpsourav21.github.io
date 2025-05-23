export default function ProjectsSection() {
  const projects = [
    {
      title: "Optimizely Visual Editor",
      description: [
        "A WSYWIG editor that loads user's website and let them adjust the visitor experience for various experiment however they like for app.optimizely.com",
        "A Micro Front End application build on React, Zustand, webpack.",
      ],
    },
    {
      title: "MRCS Web App",
      description: [
        "A platform for MRCS medical exam where a separate admin panel helps organizing questions and results.",
        "Developed core UI components using NEXT.js, Postgres, Prisma and Neon ensuring high performance and accessibility across browsers.",
        "Implemented modular state management with Redux to maintain app consistency across user sessions and components.",
        "Designed and optimized RESTful API interactions for seamless communication.",
        "Link: MRCS Web App",
      ],
    },
    {
      title: "Pomodoro Time Counter",
      description: [
        "A React-Native-Expo application that runs on both IOS and Android",
        "Helps to focus using different countdown with breaks",
        "Lucrative report and UI for users",
      ],
    },
    {
      title: "Pattern the App",
      description: [
        "Contributed on creating dynamic components and animated UI",
        "Developed several features including cart grouping, addons, rewards, login, geolocation capture, FB SDK integration etc.",
        "Link: Home - Pattern- Unlimited Rewards when you dine out! (thepattern.app)",
      ],
    },
    {
      title: "Chaldal website",
      description: [
        "Developed with ReactJS, Node JS, Typesctipt, SQL, Dotnet Core, C#, F#, SQL, Service Fabric",
        "Contributed most of the new features like Mulcity support, Address updation, Chaldal Credit, Recipes, Donation, Refund, Due payment, Geolocation etc.",
        "Link: Online Grocery Shopping and Delivery in Bangladesh | Buy fresh food items, personal care, baby products and more (chaldal.com)",
      ],
    },
    {
      title: "Chaldal App, IOS & Android",
      description: [
        "Developed with React Native, Mobx, Typescript",
        "Android App: Chaldal: Online Grocery - Apps on Google Play",
        "IOS App: Chaldal: Online Grocery on the App Store (apple.com)",
      ],
    },
    {
      title: "Chaldal Vegetable Network",
      description: ["Developed with F#, React, Redux, React-Native, SQL, Liquibase"],
    },
    {
      title: "Chaldal Food Aid",
      description: ["Developed with React, Redux, F#, SQL", "Link: Chaldal - Food Aid"],
    },
    {
      title: "Chaldal Voting System",
      description: ["Developed with React, Redux, F#, Postgres"],
    },
  ]

  return (
    <div>
      <h2 className="text-lg font-bold text-blue-900 uppercase border-b border-gray-300 pb-1 mb-3">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-200 pb-3">
            <h3 className="font-bold text-blue-900 text-sm">{project.title}</h3>
            <ul className="mt-1 ml-4 list-disc text-xs space-y-1">
              {project.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

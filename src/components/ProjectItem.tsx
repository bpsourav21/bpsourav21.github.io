import "../styles/project-item.css"

interface ProjectProps {
  project: {
    title: string
    description: string[]
  }
}

const ProjectItem = ({ project }: ProjectProps) => {
  return (
    <div className="project-item">
      <h2 className="project-title">{project.title}</h2>
      <ul className="project-description-list">
        {project.description.map((item, index) => (
          <li key={index} className="project-description-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectItem

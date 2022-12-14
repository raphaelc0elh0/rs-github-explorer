interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  return (
    <li>
      <strong>{repository.name ?? "Title"}</strong>
      <p>{repository.description ?? "Description"}</p>
      <a href={repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  )
}

type Props = {
  work: {
    id: number
    title: string
    summary: string
    content: string
    url: string
    github: string
    thumbnail: string
    date: string
  }
}

export const Card = ({ work }: Props) => {
  const formattedDate = new Date(work.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <>
      <li className="card m-4">
        <div className="card-inner w-80 h-full">
          <div className="card-header">
            <img
              src={work.thumbnail}
              alt={work.title}
              className="card-thumbnail w-full"
            />
          </div>
          <div className="card-body w-full text-white bg-black">
            <h3 className="card-title text-3xl ml-3 mb-3 mr-3">{work.title}</h3>
            <p className="card-summary m-3">{work.summary}</p>
            <p className="card-date p-3">制作日：{formattedDate}</p>
          </div>
          <div className="flex card-footer justify-between bg-black p-3">
            <a
              href={work.url}
              className="card-link border rounded bg-white p-3"
            >
              Site URL
            </a>
            <a
              href={work.github}
              className="card-link border rounded bg-white p-3"
            >
              GitHub
            </a>
          </div>
        </div>
      </li>
    </>
  )
}

import Link from 'next/link'

type Props = {
  page: {
    name: string
    path: string
    detail: string
  }
}

export const Card = ({ page }: Props) => {
  return (
    <>
      {' '}
      <Link href={page.path}>
        <li className="card m-4 border border-slate-500 bg-slate-100">
          <div className="card-inner w-80 h-full">
            <div className="card-header bg-teal-500">
              <h1 className="text-2xl">{page.name}</h1>{' '}
            </div>
            <div className="flex card-footer justify-between p-3">
              {page.detail}
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

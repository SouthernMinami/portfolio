import { Card } from './components/elements/Card'

export default function Home() {
  const pages: { name: string; path: string; detail: string }[] = [
    {
      name: 'My Resume',
      path: '/resume',
      detail: '私の経歴についてまとめています。'
    },
    {
      name: 'Works',
      path: '/works',
      detail: '制作してきた作品の一覧を掲載しています。'
    },
    {
      name: 'Skills',
      path: '/skills',
      detail: 'これまでに使用してきた開発関連の技術についてまとめています。'
    }
  ]

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center pt-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl">I am Kano</h1>
          <div className="pt-4">
            <p className="text-2xl">
              a web developper
              <br /> a video contents rater
              <br /> an applicant for web engineer
            </p>
          </div>
        </div>
        <div className="py-14">
          <ul className="flex flex-wrap justify-center">
            {pages.map((page, index) => {
              return <Card key={index} page={page} />
            })}
          </ul>
        </div>
      </main>
    </>
  )
}

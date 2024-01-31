'use client'

import { useEffect, useState } from 'react'
import { Card } from './features/Card'

const Works = () => {
  const [works, setWorks] = useState([])

  useEffect(() => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'portfolio.json')
    xhr.onload = () => {
      if (xhr.status === 200) {
        setWorks(JSON.parse(xhr.response))
      } else {
        console.error('データの取得に失敗しました。')
      }
    }
    xhr.send()
  }, [])

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl">Works</h1>
      </div>
      <ul className="flex flex-wrap justify-center">
        {works.map((work, index) => {
          return <Card key={index} work={work} />
        })}
      </ul>
    </div>
  )
}

export default Works

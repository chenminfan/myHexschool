import React from 'react'
import 'bootstrap/dist/js/bootstrap.js'
import { useState } from 'react'

const LinkProject = [
  { name: 'Javascript 高雄旅遊網', link: '/hexschool/js/index.html' },
  { name: 'Javascript BMI', link: '/hexschool/js-BMI/index.html' },
  { name: 'Javascript 9x9 乘法表', link: '/hexschool/js-Multiplication/index.html' },
  { name: 'React Cart', link: '/reactCart' },
  { name: 'React Daily', link: '/reactDaily' }
]
export default function HtmlPageIndex() {
  const [isActive, sexIsActive] = useState('')
  return (
    <div className="container text-center p-5" style={{ width: "100%" }}>
      <div className="row">
        <div className="col">
          <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
            {LinkProject.map((item, index) => (
              <a
                key={`btn ${index}`}
                className={`btn btn-outline-primary p-3 ${item.name === isActive ? 'active' : ''}`}
                target="_blank"
                href={item.link.includes('/hexschool/') ? process.env.PUBLIC_URL + item.link : `#${item.link}`}
                onClick={() => {
                  sexIsActive(item.name)
                }}
              > {item.name}</a>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

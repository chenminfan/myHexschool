import React from 'react'
import 'bootstrap/dist/js/bootstrap.js'
import { useState } from 'react'

const LinkProject = [
  { name: 'Javascript 高雄旅遊網', link: '/hexschool/js/index.html', state: 'old', tool: 'JavaScript' },
  { name: 'Javascript BMI', link: '/hexschool/js-BMI/index.html', state: 'old', tool: 'JavaScript' },
  { name: 'Javascript 9x9 乘法表', link: '/hexschool/js-Multiplication/index.html', state: 'new', tool: 'JavaScript' },
  { name: 'Javascript 時鐘', link: '/hexschool/js-clock/index.html', state: 'new', tool: 'JavaScript' },
  { name: 'Javascript 計算機', link: '/hexschool/js-clock/index.html', state: "pending", tool: 'JavaScript' },
  // { name: 'React Cart', link: '/reactCart' },
  // { name: 'React Daily', link: '/reactDaily' }
]
export default function HtmlPageIndex() {
  const [isActive, sexIsActive] = useState('')
  return (
    <div className="container text-center p-5" style={{ width: "100%" }}>
      <div className="row">
        <div className="col">

          <div className="list-group" role="group" aria-label="Vertical button group">
            {LinkProject.map((item, index) => (
              <a
                key={`btn ${index}`}
                className={`p-3 list-group-item list-group-item-action d-flex justify-content-between align-items-start ${item.name === isActive ? 'active' : ''} ${item.state === 'pending' && 'disabled'}`}
                aria-disabled={item.state === 'pending'}
                target="_blank"
                href={item.link.includes('/hexschool/') ? process.env.PUBLIC_URL + item.link : `#${item.link}`}
                aria-current="true"
                onClick={() => {
                  sexIsActive(item.name)
                }}
              >
                <div className="ms-2 me-auto">
                  <h5 className="h5">{item.name}</h5>
                </div>
                {item.state === 'new' && <span className='badge text-bg-danger rounded ms-2'>{item.state}</span>}
                {item.state === 'pending' && <span className='badge text-bg-light rounded ms-2'>{item.state}</span>}
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

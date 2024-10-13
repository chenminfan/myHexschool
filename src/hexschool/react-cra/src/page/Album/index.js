import { Outlet, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api = 'https://api.unsplash.com/search/photos/';
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function Album() {
  const [listData, setListData] = useState([])
  const [search, setSearch] = useState('photo')

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}?client_id=${accessKey}&query=${search}`)
      const { results } = response.data
      setListData(results)
    })()
  }, [search])

  return (
    <div className="container-fluid py-2">
      <div className='row'>
        <div className="col-3">
          <div className="input-group input-group-lg">
            <input type="search" className="form-control" defaultValue={search} onKeyUp={(e) => {
              if (e.code === 'Enter') {
                setSearch(e.target.value)
              }
            }} />
          </div>
          <Link to={`search`}>搜尋頁面</Link>
          <ul>
            {listData.map((item) => {
              return (
                <li className="" key={item.id}><Link to={`/album/photo/${item.id}`}>{item.id}</Link></li>
              )
            })}
          </ul>
        </div>
        <div className="col-9">
          <Outlet context={listData} />
        </div>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import axios from 'axios'
const api = process.env.REACT_APP_REACT_APP_UNSPLASH_PATH;
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumSearch() {
  const [listData, setListData] = useState([])
  const [search, setSearch] = useState('view')
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}?client_id=${accessKey}&query=${search}`)
      const { results } = response.data
      setListData(results)
    })()
  }, [search])

  useEffect(() => {
    setSearch(searchParams.get('query'))
  }, [searchParams])
  return (
    <div className="container-fluid py-2">
      <div className='row'>
        <div className="col-3">
          <div className="input-group input-group-lg">
            <input type="search" className="form-control" defaultValue={search} onKeyUp={(e) => {
              if (e.code === 'Enter') {
                // setSearch(e.target.value)
                setSearchParams({ query: e.target.value })
              }
            }} />
          </div>
          <ul>
            {listData.map((item) => {
              return (
                <li className="" key={item.id}><Link to={`/album/photo/${item.id}`}>{item.id}</Link></li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

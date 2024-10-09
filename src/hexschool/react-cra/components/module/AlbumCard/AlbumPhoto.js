import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const api = 'https://api.unsplash.com/photos/';
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function AlbumPhoto(props) {
  const { id } = useParams();
  const [photo, sexPhoto] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}/${id}?client_id=${accessKey}`)
      sexPhoto(response.data)
    })()
  }, [id])
  return (
    <div className='card cardAlbum'>
      <div className="card-img">
        <img src={photo?.urls?.regular} alt="" />
      </div>
      <buuton type="button" className="btn btn-primary" onClick={() => { navigate(-1) }}>回上一頁</buuton>
    </div>
  )
}
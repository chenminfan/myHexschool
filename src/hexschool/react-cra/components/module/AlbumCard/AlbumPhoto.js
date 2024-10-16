import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const api = process.env.REACT_APP_REACT_APP_UNSPLASH_PHOTO_PATH;
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
      <button type="button" className="btn btn-primary" onClick={() => { navigate(-1) }}>回上一頁</button>
    </div>
  )
}
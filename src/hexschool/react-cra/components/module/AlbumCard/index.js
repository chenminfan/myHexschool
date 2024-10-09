import React, { useEffect, useState } from 'react'
import AlbumPhoto from './AlbumPhoto'

export default function AlbumCard(props) {
  const { item } = props;
  return (
    <>
      <a className="card cardAlbum" href={`/album/photo/${item.id}`}>
        <div className="card-img">
          <img src={`${item.urls.raw}&w=600&q=80`} alt="" />
        </div>
      </a>
    </>
  )
}
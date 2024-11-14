import React from 'react'
import { useOutletContext } from 'react-router-dom'
import AlbumCard from '../../components/module/AlbumCard'

export default function AlbumIndex() {
  const list = useOutletContext()
  return (
    <div className='row row-cols-2 g-3'>

      {list.map((item) => {
        return (
          <div className="col" key={`${item.id}_${item.alternative_slugs}`}>
            <AlbumCard item={item} />
          </div>
        )
      }
      )}
    </div>
  )
}

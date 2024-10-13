import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFund() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/reactCra')
    }, 3000)
  }, [])
  return (
    <div className="container-fluid py-2">
      <div className="row">
        <div className="col">
          NotFund
        </div>
      </div>
    </div>
  )
}

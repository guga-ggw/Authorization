import React from 'react'
import { notFound } from 'next/navigation'

const footer = () => {
  return (
    <div>
      footer
      {notFound()}
      </div>
    
  )
}

export default footer
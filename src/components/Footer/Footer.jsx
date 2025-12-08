import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='fixed bottom-0 w-full bg-gray-100 py-4'>
      <h3 className='text-center text-sm'>
        All rights reserved by <Link
          to={`https://github.com/syedmhafiz`}
          target="_blank"
          style={
            {
              textDecoration: 'none',
              color: "green"
            }
          }
        >সৈ.মা.হা.</Link> © {currentYear}
      </h3>
    </div>
  )
}

export default Footer
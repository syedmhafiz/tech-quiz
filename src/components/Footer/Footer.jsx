import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='fixed bottom-0 w-full bg-gray-100 py-4'>
        <h3 className='text-center text-sm'>
          All rights reserved by <Link
                to={`https://github.com/syedomee`}
                target="_blank"
                style={
                  { textDecoration: 'none',
                    color: "black",
                    fontWeight: "bold" }
                }
              >Kraken.</Link> © 2023 
        </h3>
    </div>
  )
}

export default Footer
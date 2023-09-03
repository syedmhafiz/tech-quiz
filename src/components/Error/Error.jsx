import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <section className='flex flex-col justify-center align-middle'>
        <div className='mx-auto text-center py-16'>
          <h1 className='font-bold text-8xl my-10'>404 Not found</h1>
          <h3 className='text-4xl'>
            Sorry, we couldn't load what you are looking for...
          </h3>
        </div>
        <div className='mx-auto text-center py-6'>
          <h3 className='text-2xl'>
            You can go back to the <Link to='/' className='text-amber-800'>Home</Link> page.
          </h3>
        </div>
      </section>
    </div>
  )
}

export default Error
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  }

  return (
    <div>
        <div className='flex justify-between items-center h-24 mx-auto max-w-[1240px] text-[#000d5f] font-bold'>
            <h1 className='w-full text-3xl font-bold'>Tech Quiz.</h1>
            <ul className='hidden md:flex text-xl'>
                <button onClick={goHome}>
                  <li className='p-4'>Home</li>
                </button>
                <button>
                  <li className='p-4'>Results</li>
                </button>
                <button>
                  <li className='p-4'>About</li>
                </button>
                <button>
                  <li className='p-4'>Login</li>
                </button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
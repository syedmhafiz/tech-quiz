import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Results = () => {
  const resultData = useOutletContext();
  const navigate = useNavigate();
  const { greenAns, totalQ, nameQuiz } = resultData;
  const score = (greenAns / totalQ) * 100;
  let text;

  if (score >= 80) {
    text = 'and a master';
  }
  else if (score >= 60) {
    text = 'and almost a master';
  }
  else if (score >= 35) {
    text = 'but soon to be a master';
  }
  else {
    text = 'but a noob';
  }

  const backHome = () => {
    navigate('/home');
  };

  return (
    <div className='flex justify-center text-center text-2xl'>
      <div className='w-[1250px] h-[75vh] bg-gradient-to-br from-[#036666] to-[#99e2b4] mt-2 p-12'>
        <div className='h-[100%] bg-gradient-to-br from-[#88d4ab] to-[#14746f] p-2 text-cyan-50'>
          <div className='mx-auto py-4'>
            <h1 className='mt-4'>
              <b className='text-4xl text-[#f2542d]'>Congratulations</b>, 
              you have completed the quiz {text} of {nameQuiz}.
            </h1>
          </div>
          <div className='mx-auto py-20'>
            <h2>
              You have correctly answered <b className='text-2xl'>{greenAns}</b> questions out of <b className='text-2xl'>{totalQ}</b>. <br />& achieved
            </h2>
            <p className='mt-8 font-bold'>
              <b className='text-4xl'>{Math.ceil(score)}</b> percentile.
            </p>
          </div>
          <div>
            <h2 className='text-xl'>
              Wanna give it another try?
            </h2>
            <button onClick={backHome} className='bg-[#003049] text-white py-2 mx-auto w-[15%] rounded-md mt-9'>
              Go back!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
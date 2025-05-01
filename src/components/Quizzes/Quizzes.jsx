import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import removeNb from '../../utils/helper';

function Quizzes() {
  const quizProps = useOutletContext();
  const navigate = useNavigate();
  const { questions, name, total } = quizProps;
  const [counter, setCounter] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [endQ, setEndQ] = useState(false);

  const nextQ = () => {
    if (counter + 2 === total) {
      setEndQ(!endQ);
    }
    setCounter(prevCount => prevCount + 1);
    if (counter + 1 === total) {
      sumbitAnswer();
    }
  };

  const sumbitAnswer = () => {
    navigate('/results', {state: { greenAns: correctAns, totalQ: total, nameQuiz: name}});
  };

  const quit = () => {
    navigate('/home');
  }

  const checkCorrectAns = (ev) => {
    let val = ev.currentTarget.id - 1;

    if (questions[counter]?.correctAnswer === questions[counter]?.options[val]) {
      setCorrectAns(prev => prev + 1);
      nextQ();
    } else {
      nextQ();
    }
  };  

  useEffect(() => {
    document.title = `Tech Quiz :: ${name}`;
  }, [name, counter])

  return (
    <div className='flex justify-center'>
        <div className='w-[1250px] h-[75vh] bg-[#0f8775] text-white'>
          <div className='p-12'>
            <h1 className='font-bold text-2xl my-4 text-[#f0f3bd]'>Select the correct answers from below...</h1>
            <h3 className='font-bold text-2xl py-4 mt-4'>
              Q.{' '}{removeNb(questions[counter]?.question?.slice(3, -4))}
            </h3>
            <div className='grid grid-cols-2 grid-row-2 gap-x-24 gap-y-12 p-10 text-xl'>
                <button onClick={checkCorrectAns} id='1' className=''>
                  <div className='h-[80px] border-2 rounded-xl w-[500px] p-2 bg-white text-[#22577a] text-center hover:bg-[#c7f9cc]'>
                    {questions[counter]?.options[0]}
                  </div>
                </button>

                <button onClick={checkCorrectAns} id='2' className=''>
                  <div className='h-[80px] border-2 rounded-xl w-[500px] p-2 bg-white text-[#22577a] text-center hover:bg-[#c7f9cc]'>
                    {questions[counter]?.options[1]}
                  </div>
                </button>

                <button onClick={checkCorrectAns} id='3' className=''>
                  <div className='h-[80px] border-2 rounded-xl w-[500px] p-2 bg-white text-[#22577a] text-center hover:bg-[#c7f9cc]'>
                    {questions[counter]?.options[2]}
                  </div>
                </button>

                <button onClick={checkCorrectAns} id='4' className=''>
                  <div className='h-[80px] border-2 rounded-xl w-[500px] p-2 bg-white text-[#22577a] text-center hover:bg-[#c7f9cc]'>
                    {questions[counter]?.options[3]}
                  </div>
                </button>
            </div>
            <div className='text-center'>
              <h2 className='text-xl text-[#ebedd1]'>
                {counter + 1} out of {total}
              </h2>
            </div>
            <div className='flex justify-between align-middle p-8 mt-6'>
              {
                !endQ && 
                <button type="button" onClick={quit} class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium 
                rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
               dark:focus:ring-red-900">Quit</button>
              }
              {
                !endQ && 
                <button type="button" onClick={nextQ} class="text-blue-700 border border-white
                 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-white
                dark:text-white dark:hover:text-[#22577a] dark:focus:ring-blue-800 dark:hover:bg-[#c7f9cc]">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
                      </path></svg>
                  <span class="sr-only">Icon description</span>
              `</button>
              }
              {
                endQ && 
                <button type="button" onClick={sumbitAnswer} class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium 
                rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
               dark:focus:ring-red-900">Submit</button>
              }
            </div>            
          </div>
        </div>
    </div>
  )
}

export default Quizzes
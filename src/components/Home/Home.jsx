import React from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

function Home() {
  const quizzes = useLoaderData();

  useEffect(() => {
    document.title = 'Tech Quiz';
  }, []);

  const dataForQuizzes = quizzes?.status ? quizzes?.data : [];
  return (
    <div>
      <div className='max-w-[1250px] w-full flex flex-col justify-between align-middle my-2 p-2 mx-auto text-center mb-2'>
        <h3 className='text-4xl font-bold max-w-[650px] mx-auto text-primary'>
          Take the quiz and master the technology which you hate!
        </h3>
        <p className='max-w-[900px] my-10 mx-auto p-3 text-black text-lg'>
          Technology quizzes are an engaging way to expand knowledge and stay updated in
          the ever-evolving tech world. They cover various topics, including programming
          and version control, promoting learning and problem-solving. Quizzes are beneficial
          for assessing knowledge, fostering growth in academic and professional settings, and
          encouraging collaboration. Technology quizzes provide an exciting adventure to
          test your tech expertise and dive into the vast world of technology.
        </p>
        {
          <div className='grid grid-cols-4 gap-4'>
            {
              dataForQuizzes.map(dataForQuiz =>
                <QuizCard key={dataForQuiz.id} dataForQuiz={dataForQuiz?.data}
                >
                </QuizCard>
              )
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Home
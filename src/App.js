 import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./Layouts/Main";
import Quiz from "./Layouts/Quiz";
import Quizzes from "./components/Quizzes/Quizzes";
import Results from "./components/Results/Results";
import Error from "./components/Error/Error";
import Result from "./Layouts/Result";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://quiz-api-two.vercel.app/quiz')
        },
        {
          path: '/home',
          element: <Home></Home>,
          loader: () => fetch('https://quiz-api-two.vercel.app/quiz')
        }
      ]
    },
    {
      path: '/quizzes',
      element: <Quiz></Quiz>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/quizzes',
          element: <Quizzes></Quizzes>,
          loader: () => fetch('https://quiz-api-two.vercel.app/quiz')
        },
        {
          path: '/quizzes/quiz',
          element: <Quizzes></Quizzes>,
          loader: () => fetch('https://quiz-api-two.vercel.app/quiz')
        }
      ]
    },
    {
      path: '/results',
      element: <Result></Result>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/results',
          element: <Results></Results>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

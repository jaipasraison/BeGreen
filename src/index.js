import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import FormComponent from './components/FormPageTest';
import QuizzFormComponent from './components/quizz/QuizzFormComponent';
import Result from './components/Result'
import HomePage from './components/HomePage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/form",
    element: <FormComponent current_page={1} />
  },
  {
    path: "/quizz/:theme",
    element: <QuizzFormComponent />
  },
  {
    path: "/result",
    element: <Result />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

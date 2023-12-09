// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import FormComponent from './components/FormPageTest';
import QuizzFormComponent from './components/quizz/QuizzFormComponent';
import Result from './components/Result';
import './styles/index.css';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/form',
    element: <FormComponent current_page={1} />,
  },
  {
    path: '/quizz/:theme',
    element: <QuizzFormComponent />,
  },
  {
    path: '/result',
    element: <Result />,
  },
];

const router = createBrowserRouter(routes);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;

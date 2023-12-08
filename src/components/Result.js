import React from 'react';

import '../styles/form.css';
// import questionsData from '../../data/quizz.json';
import { useParams } from 'react-router';


const Result = (state) => {

    const storedDataString = localStorage.getItem('formResult');
if (storedDataString) {
  const storedData = JSON.parse(storedDataString);
  console.log(storedData);
} else {
  console.log('Aucune donnée trouvée dans le localStorage.');
}
    const result = state.formResult
    console.log (state)
    console.log(result)
    const { id } = useParams();
    return (<div>{result}</div>)

}

export default Result;
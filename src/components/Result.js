import React from 'react';

import '../styles/form.css';
// import questionsData from '../../data/quizz.json';
import { useParams } from 'react-router';


const Result = (state) => {
    const result = state.formResult
    console.log (state)
    console.log(result)
    const { id } = useParams();
    return (<div>{result}</div>)

}

export default Result;
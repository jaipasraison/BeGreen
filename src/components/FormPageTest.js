import React, { useState } from 'react';
import formData from '../questions.json';
import '../styles/form.css';

import { NavLink } from 'react-router-dom';


const FormComponent = () => {
  const [current_page, setPage] = useState(1);
  const totalSteps = formData.pages.length;
  const [formResponses, setFormResponses] = useState(Array(totalSteps).fill({}));

  const validateCurrentPage = () => {
    const currentPageQuestions = formData.pages.find(
      (page) => page.id === current_page
    )?.questions;

    if (currentPageQuestions) {
      return currentPageQuestions.every((question) =>
        formResponses[current_page - 1].hasOwnProperty(question.id)
      );
    }

    return true;
  };

  const previousPage = (e) => {
    e.preventDefault();
    current_page !== 1 ? setPage(current_page - 1) : console.log('cc');
  };

  const nextPage = (e) => {
    e.preventDefault();

    if (validateCurrentPage()) {
      setPage(current_page + 1);
    } else {
      console.log('Veuillez répondre à toutes les questions avant de passer à la page suivante.');
    }
  };

  const handleInputChange = (questionId, value) => {
    setFormResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[current_page - 1] = {
        ...prevResponses[current_page - 1],
        [questionId]: value,
      };
      return updatedResponses;
    });
  };
  const getResult = () => {
      // Stockez newFormResult dans le localStorage
      localStorage.setItem('formResult', JSON.stringify(formResponses));
  };

  const renderFormField = (question) => {
    const response = formResponses[current_page - 1][question.id];

    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            value={response || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );
      case 'number':
        return (
          <input
            type="number"
            min={question.min}
            max={question.max}
            value={response || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );
      case 'select':
        return (
          <select
            value={response || 'Choisir'}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          >
            <option key={200} value="Choisir">Choisir</option>
            {question.options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        );
      case 'checkbox':
        return question.options.map((option, index) => (
          <div key={index} className='container'>
            <label htmlFor={`checkbox-${index}`} className='test'>{option}</label>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              checked={response && response.includes(option)}
              onChange={(e) => {
                const updatedResponse = e.target.checked
                  ? [...(response || []), option]
                  : (response || []).filter((selectedOption) => selectedOption !== option);

                handleInputChange(question.id, updatedResponse);
              }}
            />
          </div>
        ));
      case 'textarea':
        return (
          <textarea
            value={response || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );
      case 'range':
        return (
          <div>
            <input
              type="range"
              min={question.min}
              max={question.max}
              step={question.step}
              value={response || question.min}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
            />
            <output>{response || question.min}</output>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <h2 className="card-title">Mon Profil</h2>
      <div className="progress-bar">
        <div
          className="progress-indicator"
          style={{ width: `${(current_page / totalSteps) * 100}%` }}
        ></div>
      </div>
      <div className="card-content">
        <form>
          {formData.pages
            .filter((page) => page.id === current_page)
            .map((page) => (
              <div key={page.id}>
                {page.questions.map((question) => (
                  <div key={question.id}>
                    <label className='default'>{question.text} </label>
                    {renderFormField(question)}
                  </div>
                ))}
              </div>
            ))}
          {current_page < totalSteps ? (
            <div>
              <button onClick={(e) => previousPage(e)}>Précédent</button>
              <button onClick={(e) => nextPage(e)}>Suivant</button>
            </div>
          ) : (
            <div>
              <button onClick={(e) => previousPage(e)}>Précédent</button>
              <NavLink onClick={getResult}
                to={{
                  pathname: "/result",
                }}
              >
                Envoyer
              </NavLink>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormComponent;


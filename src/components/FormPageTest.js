import React, { useState } from 'react';
import formData from '../questions.json';
import '../styles/form.css';

const FormComponent = () => {
  const [current_page, setPage] = useState(1);
  const totalSteps = formData.pages.length;
  const [formResponses, setFormResponses] = useState({});

  const previousPage = (e) => {
    e.preventDefault();
    current_page !== 1
      ? setPage(current_page - 1)
      : setPage(1)
  };

  const nextPage = (e) => {
    e.preventDefault();
    setPage(current_page + 1);
  };

  const handleInputChange = (questionId, value) => {
    setFormResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  const renderFormField = (question) => {
    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );
      case 'number':
        return (
          <input
            type="number"
            min={question.min}
            max={question.max}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );
      case 'select':
        return (
          <select
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          >
            <option key={200}>Choisir</option>
            {question.options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        );
      case 'checkbox':
        return question.options.map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              onChange={(e) =>
                handleInputChange(question.id, e.target.checked)
              }
            />
            <label htmlFor={`checkbox-${index}`}>{option}</label>
          </div>
        ));
      case 'textarea':
        return (
          <textarea
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Réponses finales :', formResponses);
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
                    <label>{question.text}</label>
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
              <button onClick={(e) => handleSubmit(e)}>Envoyer</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormComponent;


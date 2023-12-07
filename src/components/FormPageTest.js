import React from 'react';
import formData from '../questions.json';
import '../styles/form.css';

const FormComponent = ({ current_page }) => {
  const totalSteps = formData.pages.length;
  const renderFormField = (question) => {
    switch (question.type) {
      case 'text':
        return <input type="text" />;
      case 'number':
        return <input type="number" />;
      case 'select':
        return (
          <select>
            {question.options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        );
      case 'checkbox':
        return question.options.map((option, index) => (
          <div key={index}>
            <input type="checkbox" id={`checkbox-${index}`} />
            <label htmlFor={`checkbox-${index}`}>{option}</label>
          </div>
        ));
      case 'textarea':
        return <textarea />;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <h2 class="card-title">Mon Profil</h2>
      <div className="progress-bar">
        <div className="progress-indicator" style={{ width: `${(current_page / totalSteps) * 100}%` }}></div>
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
          <button type="submit">Suivant</button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;

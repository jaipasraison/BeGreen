import React from 'react';
import formData from '../questions.json';

const FormComponent = ({ current_page }) => {
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
      <form>
        {formData.pages
          .filter((page) => page.id === current_page)
          .map((page) => (
            <div key={page.id}>
              <h2>{page.title}</h2>
              {page.questions.map((question) => (
                <div key={question.id}>
                  <label>{question.text}</label>
                  {renderFormField(question)}
                  {question.required && <span style={{ color: 'red' }}>*</span>}
                </div>
              ))}
            </div>
          ))}
        <button type="submit">Soumettre</button>
      </form>
    );
  };
  
  export default FormComponent;


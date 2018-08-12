import React from 'react';
import { Formiz, useForm, FormizStep } from '@formiz/core';

const Form = props => {
  const myForm = useForm();

  const handleSubmit = (values) => {
    console.log(values) // Retrieves values after submit
  }

  return (
    <Formiz connect={myForm} onValidSubmit={handleSubmit}>
      <form
        noValidate
        onSubmit={myForm.submit}
      >
        <div className="demo-form__tabs">
          {myForm.steps.map(step => (
            <button
              key={step.name}
              className={`demo-form__tab ${step.name === myForm.currentStep.name ? 'is-active' : ''}`}
              type="button"
              onClick={() => myForm.goToStep(step.name)}
            >
              {!step.isValid && step.isSubmitted && (
                <small className="mr-2">⚠️</small>
              )}
              { step.label }
            </button>
          ))}

          {props.children}

        </div>
        <button
          type="submit"
          disabled={!myForm.isValid}
        >
          Submit
        </button>
      </form>
    </Formiz>
  )
}

export default Form;

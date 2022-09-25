import { useState } from "react";

const SimpleInput = () => {
  const [enteredN, setEnteredN] = useState('');
  const [enteredNTouched, setenteredNTouched] = useState(false);

  // First, get rid of enteredNisValid state and make constant if you came from 'SimpleInput initialDumbway.js'
  const enteredNisValid = enteredN.trim() !== '';
  const nameInpIsInvalid = !enteredNisValid && enteredNTouched;
  // get rid of all setEnteredNisValid() codes.

  let formIsValid = false; 

  if (enteredNisValid) {
    formIsValid = true;
  }
  else {
    formIsValid = false;
  }

  const nameInpChangeHandler = event => {
    setEnteredN(event.target.value);
  }
  const nameInputBlurHandler = () => {
    setenteredNTouched(true);
  }

  const formSubHandler = event => {
    event.preventDefault();

    setenteredNTouched(true);

    if(!enteredNisValid) {
      return;
    }

    setEnteredN('');
    setenteredNTouched(false);
  }

  const nameInputClasses = nameInpIsInvalid? 'form-control invalid': 'form-control'

  return (
    <form onSubmit={formSubHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
        onChange={nameInpChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enteredN}/>
        {nameInpIsInvalid && <p className="error-text">Not empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

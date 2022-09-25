import { useState } from "react";

const SimpleInput = () => {
  const [enteredN, setEnteredN] = useState('');
  const [enteredNisValid, setEnteredNisValid] = useState(false);
  const [enteredNTouched, setenteredNTouched] = useState(false);

  const nameInpChangeHandler = event => {
    setEnteredN(event.target.value);
    if (event.target.value.trim() !== '') {
      setEnteredNisValid(true);
      return;
    }
    setEnteredNisValid(false);
  }
  const nameInputBlurHandler = () => {
    setenteredNTouched(true);

    if (enteredN.trim() === '') {
      setEnteredNisValid(false);
      return;
    }
  }

  const formSubHandler = event => {
    event.preventDefault();

    setenteredNTouched(true);

    if (enteredN.trim() === '') {
      setEnteredNisValid(false);
      return;
    }
    setEnteredNisValid(true);

    setEnteredN('');
  }

  const nameInpIsInvalid = !enteredNisValid && enteredNTouched;

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

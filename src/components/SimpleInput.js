import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {val:enteredN,
    hasError: nameInpHasError,
    isValid: enteredNisValid,
    inpValChangeHandler: nameInpChangeHandler,
    inpValBlurHandler: nameInputBlurHandler,
    reset: resetNInpAndTouched } = useInput(value => value.trim() !== '');

  let formIsValid = false;

  if (enteredNisValid) {
    formIsValid = true;
  }
  else {
    formIsValid = false;
  }

  const formSubHandler = event => {
    event.preventDefault();

    if(!enteredNisValid) {
      return;
    }

    resetNInpAndTouched();
  }

  const nameInputClasses = nameInpHasError? 'form-control invalid': 'form-control'

  return (
    <form onSubmit={formSubHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'
        onChange={nameInpChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enteredN}/>
        {nameInpHasError && <p className="error-text">Not empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

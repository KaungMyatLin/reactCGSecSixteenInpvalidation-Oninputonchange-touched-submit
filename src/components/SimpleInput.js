import useInput from "../hooks/useInputHkXreducer";

const SimpleInput = () => {
  const {
    val: enteredN,
    hasError: nameInpHasError,
    isValid: enteredNisValid,
    inpValChangeHandler: nameInpChangeHandler,
    inpValBlurHandler: nameInputBlurHandler,
    reset: resetNInpAndTouched,
  } = useInput((value) => value.trim() !== "");

  const {
    val: enteredEm,
    hasError: emInpHasError,
    isValid: enteredEmisValid,
    inpValChangeHandler: emInpChangeHandler,
    inpValBlurHandler: emInputBlurHandler,
    reset: resetEmInpAndTouched,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNisValid && enteredEmisValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubHandler = (event) => {
    event.preventDefault();

    if (!enteredNisValid) {
      return;
    }

    resetNInpAndTouched();
    resetEmInpAndTouched();
  };

  const nameInputClasses = nameInpHasError
    ? "form-control invalid"
    : "form-control";
  const emInputClasses = emInpHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInpChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredN}
        />
        {nameInpHasError && <p className="error-text">Not empty</p>}
      </div>
      <div className={emInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="name"
          onChange={emInpChangeHandler}
          onBlur={emInputBlurHandler}
          value={enteredEm}
        />
        {emInpHasError && <p className="error-text">Not empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

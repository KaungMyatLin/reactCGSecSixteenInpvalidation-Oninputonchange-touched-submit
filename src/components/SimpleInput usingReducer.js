import useInput from "../hooks/useInputHkXreducer";

const SimpleInput = () => {
  const {value: entEmail
      , entValIsValid: emailValIsValid
      , inpFiIsWrong: emailInpFiIsWrong
      , inpChangeHdl: emailInpChangeHdl
      , inpBlurHdl: emailInpBlurHdl
      , resetInpFiValXTouched: resetEmInpFiStates
  } = useInput(value => value.includes('@'))

  const {value: entPw
      , entValIsValid: pwValIsValid
      , inpFiIsWrong: pwInpFiIsWrong
      , inpChangeHdl: pwInpChangeHdl
      , inpBlurHdl: pwInpBlurHdl
      , resetInpFiValXTouched: resetPwInpFiStates
  } = useInput(value => value.trim() !== '')

  let formIsValid = false;

  if (emailValIsValid && pwValIsValid) {
      formIsValid = true;
  }
  else {
      formIsValid = false
  }

  const emInpClasses = emailInpFiIsWrong ? 'form-control invalid' : 'form-control'
  const pwInpClasses = pwInpFiIsWrong ? 'form-control invalid' : 'form-control'

  const formSubHandler = (e) => {
      e.preventDefault();
      if (!emailValIsValid) {
          return
      }
      resetEmInpFiStates();
      resetPwInpFiStates();
  }


  return (
      <form onSubmit={formSubHandler}>
          <div className={emInpClasses}>
              <label htmlFor="name">Email</label>
              <input
              type="text"
              id="name"
              onChange={emailInpChangeHdl}
              onBlur={emailInpBlurHdl}
              value={entEmail}
              />
              {emailInpFiIsWrong && <p className="error-text">Must includes '@'</p>}
          </div>
          <div className={pwInpClasses}>
              <label htmlFor="name">Password</label>
              <input
              type="text"
              id="name"
              onChange={pwInpChangeHdl}
              onBlur={pwInpBlurHdl}
              value={entPw}
              />
              {pwInpFiIsWrong && <p className="error-text">Must not empty</p>}
          </div>
          <div className="form-actions">
              <button disabled={!formIsValid}>Submit</button>
          </div>
      </form>
  )
}

export default SimpleInput
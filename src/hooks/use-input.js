import { useState } from "react";

const useInput = (validateVal) {
    // copy states, then inferred state, then argument, then return, then functions.
    const [enteredVal, setenteredVal] = useState('');
    const [isTouched, setisTouched] = useState(false);

    // inferred state.
    const inpValisValid = validateVal(enteredVal);
    const hasError = !inpValisValid && enteredNTouched;

    const inpValChangeHandler = event => {
        setenteredVal(event.target.value);
    }
    const inpValBlurHandler = event => {
        setisTouched(true);
    }

    const reset = () => {
        setenteredVal('');
        setisTouched('');
    }

    return {
        val: enteredVal,
        isValid: inpValisValid,
        hasError,
        inpValChangeHandler,
        inpValBlurHandler,
        reset,
    }
}

export default useInput;
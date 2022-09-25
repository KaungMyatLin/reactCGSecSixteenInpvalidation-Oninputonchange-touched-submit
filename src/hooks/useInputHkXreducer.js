import { useReducer } from "react";

const initialInpStates = {
    val: '',
    isTouched: false,
}

const inputReducer = (state, action) => {
    if (action.type === "Input") {
        return {val: action.value, isTouched: state.isTouched};      // it is like taking in and giving back val, and also giving existing touched state.
    }
    if (action.type === "Blur") {
        return {isTouched: true, val: state.val}                  // giving existing val state.
    }
    if (action.type === "Reset") {
        return {isTouched: false, val: ''}
    }
    return inputReducer
}

const useInput = (validateVal) => {
    const [inpState, dispatch] = useReducer(inputReducer, initialInpStates);

    const inpValisValid = validateVal(inpState.val);
    const hasError = !inpValisValid && inpState.isTouched;

    const inpValChangeHandler = event => {
        dispatch({type: "Input", value: event.target.value})
    }
    const inpValBlurHandler = event => {
        dispatch({type: "Blur"})
    }
    const reset = () => {
        dispatch({type: "Reset"})
    }
    return {
        val: inpState.val,
        isValid: inpValisValid,
        hasError,
        inpValChangeHandler,
        inpValBlurHandler,
        reset,
    }
}

export default useInput;
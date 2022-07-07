import { useReducer } from "react";

const initialInpStates = {
    val: '',
    isTouched: false,
}

const inputReducer = (state, action) => {
    if (action.type === 'input') {
        return {value: action.val, isTouched: state.isTouched};      // it is like taking in and giving back val, and also giving existing touched state.
    }
    if (action.type === 'blur') {
        return {isTouched: true, value: state.val}                  // giving existing val state.
    }
    if (action.type === 'reset') {
        return {isTouched: false, value: ''}
    }
    return initialInpStates
}

const useInput = (validateVal) => {
    const [inpState, dispatch] = useReducer(inputReducer, initialInpStates);

    const inpValisValid = validateVal(inpState.val);
    const hasError = !inpValisValid && inpState.isTouched;

    const inpValChangeHandler = event => {
        dispatch({type: "input", value: event.target.value})
    }
    const inpValBlurHandler = event => {
        dispatch({type: "blur"})
    }

    const reset = () => {
        dispatch({type: "reset"})
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
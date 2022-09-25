import { useState } from 'react'

const useInput = (ValidateMethodFn) => {
    const [entVal, setEntVal] = useState('')
    const [inpFiTouched, setInpFiTouched] = useState(false)

    const entValIsValid = ValidateMethodFn(entVal);
    const inpFiIsWrong = !entValIsValid && inpFiTouched
    const inpChangeHdl = (e) => {
        setEntVal(e.target.value)
    }
    const inpBlurHdl = () => {
        setInpFiTouched(true)
    }
    const resetInpFiValXTouched = () => {
        setEntVal('')
        setInpFiTouched(false)
    }
    return {
        value: entVal
        , entValIsValid
        , inpFiIsWrong
        , inpChangeHdl
        , inpBlurHdl
        , resetInpFiValXTouched
    }
}

export default useInput
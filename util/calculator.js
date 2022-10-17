export const loadingState = {
    basicValue: "0",
    operator: null,
    previousValue: "0",
}

export const handlerForNumber = (value, state) => {
    if(state.basicValue === "0") {
        return { basicValue: `${value}` };
    }

    return {
        basicValue: `${state.basicValue}${value}`
    } 
}

const handleTester = (state) => {
    const { basicValue, previousValue, operator } = state

    const currentNumber = parseFloat(basicValue)
    const previousNumber = parseFloat(previousValue)
    const resetState = { operator: null, previousValue: "0" }

    switch (operator) {
        case "+":
            return {
                basicValue: `${previousNumber + currentNumber}`,
                ...resetState
            }
        case "-":
            return {
                basicValue: `${previousNumber - currentNumber}`,
                ...resetState
            }
        case "*":
            return {
                basicValue: `${previousNumber * currentNumber}`,
                ...resetState
            }
        case "/":
            return {
                basicValue: `${previousNumber / currentNumber}`,
                ...resetState
            }
    }

}

const calculate = (type, value, state) => {

    switch(type) {
        case "number": {
            return handlerForNumber(value, state)
        }
        case "clear": {
            return loadingState;
        }
        case "posneg": {
            return {
                basicValue: `${parseFloat(state.basicValue) * -1}`
            } 
        }
        case "percentage": {
            return {
                basicValue: `${parseFloat(state.basicValue) * 0.01}`
            } 
        }
        case "operator": {
            return {
                previousValue: state.basicValue,
                operator: value,
                basicValue: "0"
            }
        }
        case "equal": {
            return handleTester(state);
        }
        default:
            return state;
    }
}

export default calculate;
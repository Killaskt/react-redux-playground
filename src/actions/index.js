export const increment = (numOFIncrement = 0) => {
    return { 
        type: 'INCREMENT',
        payload: numOFIncrement
    }
};
export const decrement = () => {
    return { 
        type: 'DECREMENT'
    }
};
export const signin = () => {
    return { 
        type: 'SIGN_IN'
    }
};
const counterReducer = (state = 0, action) => {
    try {
        switch (action.type) {
            case 'INCREMENT': 
                return state + action.payload;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
        
    } catch (error) {
        console.log(error);       
    }
};

export default counterReducer;
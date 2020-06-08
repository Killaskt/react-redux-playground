const loggedReducer = (action, state = false) => {
    switch (action) {
        case 'SIGN_IN': 
            return true;
        default:
            return false;
    }
};

export default loggedReducer;


const initialState = {
    isLoading: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;
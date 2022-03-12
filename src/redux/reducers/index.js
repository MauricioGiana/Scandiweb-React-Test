import { GET_CATEGORIES } from "../actions";

const initialState = {
    categories: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;
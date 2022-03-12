import axios from 'axios';

export const GET_CATEGORIES = 'GET_CATEGORIES';

const fetchCategories = async () => {
    let query = `
        query {
            categories {
                name
            }
        }`;
    const { data } = await axios.post('http://localhost:4000/', { query });
    return data.data.categories;
}

export const getCategories = () => {
    return async dispatch => {
        const categories = await fetchCategories();
        dispatch({
            type: GET_CATEGORIES,
            payload: categories
        });
    }
}



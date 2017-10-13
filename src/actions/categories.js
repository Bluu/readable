import {
    getCategories,
} from '../api';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetchCategories = (categories) => (
    {
        type: FETCH_CATEGORIES,
        categories,
    }
)

export const startFetchCategories = () => {
    return dispatch => {
        getCategories().then(({ categories }) => dispatch(fetchCategories(categories)));
    }
}
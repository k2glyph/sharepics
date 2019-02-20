import unsplash from "../api/unsplash";
import {CLEAR_IMAGES, FETCH_IMAGES, SET_SEARCH_QUERIES} from "./types";


export const fetchImages = (param) => async (dispatch, getState) => {
    if (getState().images.searchQuery === param) {
        return;
    }
    dispatch(setSearchQuery(param));
    const response = await unsplash.get('/search/photos', {
        params: {
            query: param
        }
    });
    dispatch(clearImages());
    dispatch({type: FETCH_IMAGES, payload: response.data.results});
};


export const clearImages = () => {
    return {
        type: CLEAR_IMAGES
    }
};
export const setSearchQuery = (query) => {
    return {
        type: SET_SEARCH_QUERIES,
        payload: query
    }
};

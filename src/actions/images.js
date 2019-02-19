import unsplash from "../api/unsplash";
import {CLEAR_IMAGES, FETCH_IMAGES} from "./types";


export const fetchImages = (params) => async dispatch => {
    console.log("action");
    console.log(params);
    dispatch(clearImages());
    const response = await unsplash.get('/search/photos', {
        params
    });
    console.log(response);

    dispatch({type: FETCH_IMAGES, payload: response.data.results});
};


export const clearImages = () => {
    return {
        type: CLEAR_IMAGES
    }
};

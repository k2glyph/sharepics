
import _ from 'lodash';
import {
    CLEAR_IMAGES,
    CREATE_IMAGE,
    DELETE_IMAGE,
    EDIT_IMAGE,
    FETCH_IMAGE,
    FETCH_IMAGES,
    SET_SEARCH_QUERIES
} from "../actions/types";
const INITIAL_STATE = {
    searchQuery: "",
    list: []
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_IMAGES:
            // return {...state, ..._.mapKeys(action.payload, 'id')};
            return {...state,  list: action.payload};
        case FETCH_IMAGE:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_IMAGE:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_IMAGE:
            return _.omit(state, action.payload);
        case EDIT_IMAGE:
            return {...state, [action.payload.id]: action.payload};
        case CLEAR_IMAGES:
            // return _.remove(state.images);
            return {...state, list: []};
        case SET_SEARCH_QUERIES:
            return {...state, searchQuery : action.payload};
        default:
            return state;
    }
}

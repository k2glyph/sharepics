
import _ from 'lodash';
import {CLEAR_IMAGES, CREATE_IMAGE, DELETE_IMAGE, EDIT_IMAGE, FETCH_IMAGE, FETCH_IMAGES} from "../actions/types";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_IMAGES:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_IMAGE:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_IMAGE:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_IMAGE:
            return _.omit(state, action.payload);
        case EDIT_IMAGE:
            return {...state, [action.payload.id]: action.payload};
        case CLEAR_IMAGES:
            return _.remove(state);
        default:
            return state;
    }
}

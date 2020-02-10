import _ from 'lodash'
import {
    FETCH_NEW,
    FETCH_NEWS,
    CREATE_NEW,
    EDIT_NEW,
    DELETE_NEW
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_NEW:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_NEW:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_NEW:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_NEW:
            return _.omit(state, action.payload)
        default: 
            return state
    }
}
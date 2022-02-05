import { CREATE_USER_SUCCESS, UPDATE_USER_SUCCESS, LOAD_USERS_SUCCESS, DELETE_USER_OPTIMISTIC } from "../actions/actionTypes"
import initialState from './initialState'
import User from '../../model/User'
import * as userMapper from '../../utility/UserMapper'

export default function userReducer(state = initialState.users, action) {
    switch(action.type) {
        case CREATE_USER_SUCCESS:
            return [...state, createUser()]
        case UPDATE_USER_SUCCESS:
            return state.map (
                user => user.id === action.user.id ? action.user : user 
            )
        case LOAD_USERS_SUCCESS:
            return action.users.map(user => userMapper.mapUserParse(user))
        case DELETE_USER_OPTIMISTIC:
            return state.filter (user => user.id !== action.user.id)
        default:
            return state
    }

}

function createUser() {
    return {user: new User, parseObject: null}
}
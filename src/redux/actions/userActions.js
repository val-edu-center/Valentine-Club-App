import { CREATE_USER_SUCCESS, UPDATE_USER_SUCCESS, LOAD_USERS_SUCCESS, DELETE_USER_OPTIMISTIC } from "./actionTypes";
import * as userApi from "../../api/userApi"
import { apiCallError, beginApiCall } from "./apiStatusActions";

export function createUserSuccess(user) {
    return { type: CREATE_USER_SUCCESS, user}
}

export function updateUserSuccess(user) {
    return { type: UPDATE_USER_SUCCESS, user}
}

export function loadUsersSuccess(users) {
    return { type: LOAD_USERS_SUCCESS, users}
}

export function deleteUserOptimistic(user) {
    return { type: DELETE_USER_OPTIMISTIC, user}
}

export function loadUsers() {
    return function (dispatch) {
        dispatch(beginApiCall)
        return userApi
        .getUsers()
        .then(response => {
            dispatch(loadUsersSuccess(response.results));
        })
        .catch (error => {
            dispatch(apiCallError())
            throw error
        })
    }
}

export function saveUser(user) {
    return function (dispatch) {
        dispatch(beginApiCall())
        return userApi
        .saveUser(user)
        .then(updatedAt => {
            if (user.objectId) {
                dispatch(updateUserSuccess({...user, updatedAt}))
            } else {
                dispatch(createUserSuccess(updatedAt))
            }
        }).catch (error => {
            dispatch(apiCallError())
            throw error
        })
    }
}

export function updateUser(user) {
    return function (dispatch) {
        return dispatch(updateUserSuccess(user))
    }
}

export function deleteUser(user) {
    return function (dispatch) {
        dispatch(deleteUserOptimistic(user))
        return userApi.deleteUser(user.objectId)
    }
}
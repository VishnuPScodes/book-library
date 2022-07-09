


export const authActions={
    AUTH_ACTION_REQUEST:"AUTH_ACTION_REQUEST",
    AUTH_ACTION_FAILURE:"AUTH_ACTION_FAILURE",
    AUTH_ACTION_SUCCESS:"AUTH_ACTION_SUCCESS"
}

export const authActionSuccess=(()=>{
    return {
        type:authActions.AUTH_ACTION_SUCCESS
    }
})
export const authActionFailure=(()=>{
    return {
        type:authActions.AUTH_ACTION_FAILURE
    }
})

export const authActionRequest=(()=>{
    return {
        type:authActions.AUTH_ACTION_REQUEST
    }
})


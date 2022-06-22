
export const dataActions={
    DATA_ADD_REQUEST:"DATA_ADD_REQUEST",
    DATA_ADD_SUCCESS:"DATA_ADD_SUCCESS",
    DATA_ADD_FAILURE:"DATA_ADD_FAILURE"

}

export const dataAddSuccess=(()=>{
    return {
        type:dataActions.DATA_ADD_SUCCESS
    } 
})

export const dataAddRequest=(()=>{
    return {
        type:dataActions.DATA_ADD_REQUEST
    } 
})
export const dataAddFailure=(()=>{
    return {
        type:dataActions.DATA_ADD_FAILURE
    } 
})


export const dataActions={
    DATA_ADD_REQUEST:"DATA_ADD_REQUEST",
    DATA_ADD_SUCCESS:"DATA_ADD_SUCCESS",
    DATA_ADD_FAILURE:"DATA_ADD_FAILURE",

    BOOK_SEARCH_REQUEST:"BOOK_SEARCH_REQUEST",
    BOOK_SEARCH_SUCCESS:"BOOK_SEARCH_SUCCESS",
    BOOK_SEARCH_FAILURE:"BOOK_SEARCH_FAILURE",

    NIGHT_MODE_ON:"NIGHT_MODE_ON",
    LIGHT_MODE_ON:"LIGHT_MODE_ON"

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



export const bookSearchSuccess=(()=>{
    return {
        type:dataActions.BOOK_SEARCH_SUCCESS
    } 
})

export const bookSearchRequest=(()=>{
    return {
        type:dataActions.BOOK_SEARCH_REQUEST
    } 
})
export const booksearchFailure=(()=>{
    return {
        type:dataActions.BOOK_SEARCH_FAILURE
    } 
})




export const nightModeOn=(()=>{
    return {
        type:dataActions.NIGHT_MODE_ON
    } 
})
export const lightModeOn=(()=>{
    return {
        type:dataActions.LIGHT_MODE_ON
    } 
})


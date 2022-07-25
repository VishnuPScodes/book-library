
export const dataActions={
    DATA_ADD_REQUEST:"DATA_ADD_REQUEST",
    DATA_ADD_SUCCESS:"DATA_ADD_SUCCESS",
    DATA_ADD_FAILURE:"DATA_ADD_FAILURE",

    BOOK_SEARCH_REQUEST:"BOOK_SEARCH_REQUEST",
    BOOK_SEARCH_SUCCESS:"BOOK_SEARCH_SUCCESS",
    BOOK_SEARCH_FAILURE:"BOOK_SEARCH_FAILURE",

    NIGHT_MODE_ON:"NIGHT_MODE_ON",
    LIGHT_MODE_ON:"LIGHT_MODE_ON",


    WS_ADD_REQUEST:"WS_ADD_REQUEST",
    WS_ADD_SUCCESS:"WS_ADD_SUCCESS",
    WS_ADD_FAILURE:"WS_ADD_FAILURE",

    DATA_REMOVE_SUCCESS:"DATA_REMOVE_SUCCESS",

    ADD_SINGLE_ITEM:"ADD_SINGLE_ITEM"

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



export const wsAddSuccess=((payload)=>{
    return {
        type:dataActions.WS_ADD_SUCCESS,
        payload:payload
    } 
})

export const wsAddRequest=(()=>{
    return {
        type:dataActions.BOOK_SEARCH_REQUEST
    } 
})
export const wsAddFailure=(()=>{
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

export const dataRemoveSuccess=(()=>{
    return {
        type:dataActions.DATA_REMOVE_SUCCESS
    }
})

export const addSingleItem=((data)=>{
    return {
        type:dataActions.ADD_SINGLE_ITEM,
        payload:data
    }
})
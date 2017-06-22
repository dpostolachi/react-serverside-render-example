export function push404(){
    return (dispatch) => {
        return dispatch( { type: "PUSH_404" } )
    }
}
export function clear404(){
    return (dispatch) => {
        return dispatch( { type: "CLEAR_404" } )
    }
}

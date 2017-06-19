export function setTitle(title){
    return (dispatch) => {
        return new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(dispatch({type: "PUSH_PAGE_TITLE", payload: title}))
            } ,0)
        })
    }
}

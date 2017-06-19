export default (state, action) => {

    switch(action.type){

        case 'PUSH_PAGE_TITLE':
            return { ...state, title: action.payload }
        break

        default:
            return { ...state }
        break

    }

}

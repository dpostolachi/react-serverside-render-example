export default (state, action) => {

    switch(action.type){

        case 'PUSH_404':
            return { ...state, is404: true }
        break

        case 'CLEAR_404':
            return { ...state, is404: false }
        break

        default:
            return { ...state }
        break

    }

}

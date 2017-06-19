import Home from '../../components/home.jsx';

import { setTitle } from '../../actions/metaActions'

const route = {
        path: '/',
        exact: false,
        component: Home,
        loadData: (ctx, context, Store)=>{
            return setTitle('This title was pushed from reducer')(Store.dispatch) // Promises that must be fulfilled before render starts
        }
}

export default route

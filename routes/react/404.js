//this route will work if not any other route has been matched

import Error404 from '../../components/pages/error.jsx'

import { push404 } from '../../actions/extraActions'

const route = {
        path: '*',
        exact: false,
        component: Error404,
        loadData: (ctx, context, Store)=>{
            return push404()(Store.dispatch)
        }
}

export default route

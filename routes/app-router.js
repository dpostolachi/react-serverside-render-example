import React from 'react'

import { Route, Switch } from 'react-router'

import { Provider } from 'react-redux';

import AppRoutes from 'routes/routes'

import AppLayout from 'components/layout/layout.jsx'

const Routes = (props) =>{

    const { Store } = props

    return (
        <Provider store = { Store }>
            <AppLayout preloadedState = { Store }>
                <Switch>
                    { AppRoutes.map((_route, key)=>{
                        return <Route key={ key } path={ _route.path } component={ _route.component } exact={ (_route.exact) ? true : false }/>
                    })}
                </Switch>
            </AppLayout>
        </Provider>
    )
}

export default Routes

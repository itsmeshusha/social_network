import React from 'react';
import { Redirect } from 'react-router-dom';

type RedirectComponentType = {
    isAuth: boolean
}

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<RedirectComponentType> {
        render() {
            if (!this.props.isAuth) {
            return <Redirect to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }

    return RedirectComponent
}
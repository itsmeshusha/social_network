import React from 'react';
import { Redirect } from 'react-router-dom';
import { StateType } from '../redux/redux-store';
import {connect} from "react-redux";

type RedirectComponentType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: StateType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<RedirectComponentType> {
        render() {
            if (!this.props.isAuth) {
            return <Redirect to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
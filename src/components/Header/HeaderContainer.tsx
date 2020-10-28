import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, logout, getAuthUserDataThunkCreator } from '../../redux/authReducer';
import { StateType } from '../../redux/redux-store';




type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    getAuthUserDataThunkCreator: () => void
    logout: () =>void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserDataThunkCreator()
    }

    render() {

        return <Header {...this.props} />

    }
}


const mapStateToProps = (state: StateType): MapStateToPropsType => ({

    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserDataThunkCreator, logout}) (HeaderContainer);

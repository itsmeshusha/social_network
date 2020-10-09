import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, initialStateType, getAuthUserDataThunkCreator } from '../../redux/authReducer';
import { StateType } from '../../redux/redux-store';


type PropsType = {
    setAuthUserData: (data: initialStateType) => void
    isAuth: boolean
    login: string | null
    getAuthUserDataThunkCreator: () => void
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserDataThunkCreator()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />

    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData, getAuthUserDataThunkCreator}) (HeaderContainer);

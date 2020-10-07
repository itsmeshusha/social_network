import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData, initialStateType } from '../../redux/authReducer';
import { StateType } from '../../redux/redux-store';

type PropsType = {
    setAuthUserData: (data: initialStateType) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
    })
        .then(response => {
            if (response.data.resuktCode === 0) {
                this.props.setAuthUserData(response.data.data);
            }
        });
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />

    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);

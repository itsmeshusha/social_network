import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';
import { StateType } from '../../redux/redux-store';
import {InitialStateType} from '../../redux/profileReducer';

type PropsType = {
    setUserProfile: (profile: any) => void
    profilePage: InitialStateType
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
            this.props.setUserProfile(response.data);
        });

    }

    render() {
        return (
        <div>
            <Profile profile={this.props.profilePage.profile} />

        </div>
    )}
}

let mapStateToProps = (state: StateType) => ({
    profilePage: state.profilePage
});

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);

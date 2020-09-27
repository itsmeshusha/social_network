import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';
import { StateType } from '../../redux/redux-store';
import {PhotosType} from '../../redux/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type ProfileType = {
    userId: number
    photos: PhotosType
    
}

type MapStatePropsType = {
    profilePage: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;

        if(!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            this.props.setUserProfile(response.data);
        });

    }

    render() {
        return (
        <div>
            <Profile profile={this.props.profilePage} />

        </div>
    )}
}

let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profilePage: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStatePropsType, MapDispatchToPropsType, {},StateType>(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);

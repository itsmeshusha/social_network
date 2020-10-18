import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile, getUserProfileThunkCreator} from '../../redux/profileReducer';
import { StateType } from '../../redux/redux-store';
import {PhotosType} from '../../redux/profileReducer';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'



type PathParamsType = {
    userId: string
    
}

type ProfileType = {
    userId: number
    photos: PhotosType
    
    
}

type MapStatePropsType = {
    profilePage: ProfileType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfileThunkCreator: (userId: number) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;

        if(!userId) {
            userId = 2;
        }

        this.props.getUserProfileThunkCreator(userId)

    }

    render() {
        
        return (
        <div>
            <Profile profile={this.props.profilePage} isAuth={this.props.isAuth} />

        </div>
    )}
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profilePage: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

//@ts-ignore
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect<MapStatePropsType, MapDispatchToPropsType, {},StateType>(mapStateToProps, {setUserProfile, getUserProfileThunkCreator}) (WithUrlDataContainerComponent);

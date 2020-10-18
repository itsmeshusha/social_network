import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile, getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator} from '../../redux/profileReducer';
import { StateType } from '../../redux/redux-store';
import {PhotosType} from '../../redux/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {compose} from 'redux';


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
    status: string
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfileThunkCreator: (userId: number) => void
    getUserStatusThunkCreator: (userId: number) => void
    updateUserStatusThunkCreator: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;

        if(!userId) {
            userId = 2;
        }

        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);

    }

    render() {
        
        return (
        <div>
            <Profile profile={this.props.profilePage} 
                        isAuth={this.props.isAuth} 
                        status={this.props.status} 
                        updateUserStatus={this.props.updateUserStatusThunkCreator} />

        </div>
    )}
}


let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profilePage: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
});


 export default compose <any> (
    withAuthRedirect,
    withRouter,
    connect<MapStatePropsType, MapDispatchToPropsType, {},StateType>(mapStateToProps, {setUserProfile, getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator}) 
 )(ProfileContainer)
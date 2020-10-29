import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    setUserProfile,
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
    ProfileType
} from '../../redux/profileReducer';
import { StateType } from '../../redux/redux-store';
import {PhotosType} from '../../redux/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {compose} from 'redux';


type PathParamsType = {
    userId: any
    
}



type MapStatePropsType = {
    profile: ProfileType
    isAuth: boolean
    status: string
    autorizedUserId: number | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType ) => void
    getUserProfileThunkCreator: (userId: number) => void
    getUserStatusThunkCreator: (userId: number) => void
    updateUserStatusThunkCreator: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId= +this.props.match.params.userId;

        if(!userId && this.props.autorizedUserId) {
            userId = this.props.autorizedUserId;
        }

        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);

    }

    render() {
        
        return (
        <div>
            {this.props.autorizedUserId && <Profile {...this.props}
                        profile={this.props.profile}
                        isAuth={this.props.isAuth} 
                        status={this.props.status} 
                        updateUserStatus={this.props.updateUserStatusThunkCreator} />}

        </div>
    )}
}


let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,

});


 export default compose <any> (
    withAuthRedirect,
    withRouter,
    connect<MapStatePropsType, MapDispatchToPropsType, {},StateType>(mapStateToProps, {setUserProfile, getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator})
 )(ProfileContainer)
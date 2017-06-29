import React from 'react';
import * as ReactRedux from 'react-redux';
import {fetchUserInfo} from '../../../../res/actions/UserInfoActions.js';

class Intro extends React.Component{
    componentWillMount(){
        if(!this.props.userInfo.fatched){
            this.props.dispatch(fetchUserInfo('Vishvas'));
        }
    };
    render(){
        let userInfo = this.props.userInfo;
        if(userInfo.fatched){
            let user = userInfo.data[0];
            return(
                <div class="row">
                    <div class="jumbotron">
                        <h1>{`${user.name} ${user.lastName}`}</h1>
                        <h2>{user.currentTitle}</h2>
                        <p>{user.intro}</p>
                    </div>
                    <div class="list-group">
                        <div class="list-group-item">
                            <h3 class="list-group-item-heading">{user.currentCompany.name}</h3>
                            <h4 class="list-group-item-heading"><span class="">{user.currentCompany.role}</span><span class="pull-right">{`${user.currentCompany.startDate} - Present`}</span></h4>
                            <p class="list-group-item-text">Responsible for taking care of the front end of the application which is a price comparison engine. I use NodeJS, ReactJS, ExpressJS, HTML5, CSS3, Object oriented Javascript, Jquery, SASS, Bootstrap, Photoshop, AJAX, Json.</p>
                        </div>

                    </div>
                </div>

            )
        }else{
            let userInfo = this.props.userInfo;
            return(
                <div class="row"><h3 class="text-center">{userInfo.err? userInfo.err.message : "Searching for user"}</h3></div>
            )
        }

    }
}

export default ReactRedux.connect(function(store){
    return {
        userInfo:store.userInfo
    };
})(Intro);
import React from 'react';
import * as ReactRedux from 'react-redux';
import SkillRow from '../common/SkillRow.jsx';
import {fetchSkills} from '../../../../res/actions/SkillsActions.js';

class Skills extends React.Component{
    componentWillMount(){
        if(!this.props.skills.fatched){
            this.props.dispatch(fetchSkills('vishvas'));
        }

    }

    render(){
        let skills = this.props.skills.data ? this.props.skills.data : [] ;
        let err = this.props.skills.error;
        let skillsArray;
        if(err === false && skills.length) {
            skillsArray = skills.map(function (item) {
                let style = {width: item.value + '%'};
                return (
                    <div class="row" key={item.id}>
                        <div class="col-xs-4">{item.type}</div>
                        <SkillRow styleObj={style} colClass="col-xs-8"></SkillRow>
                    </div>)
            });
        }
        return(
            <div class="skills">
                { !err && skillsArray ? skillsArray : <h2 class="text-center">{err.message}</h2>}
            </div>
        )
    }
}

export default ReactRedux.connect(function(store){
    return {
        skills:store.skills
    }
})(Skills);
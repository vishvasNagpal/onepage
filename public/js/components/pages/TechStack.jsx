import React from 'react';
import * as ReactRedux from 'react-redux';
import {fetchTechStack} from '../../../../res/actions/TechStackActions.js';
import SkillRow from '../common/SkillRow.jsx'
class TechStack extends React.Component{
    componentWillMount(){
        this.props.dispatch(fetchTechStack('vishvas'));
    }
    render(){
        const techStack = this.props.techStack.data ? this.props.techStack.data : [];
        const err = this.props.techStack.error;
        let primaryTechArray = false;
        let secondaryTechArray = false;
        let othersArray = false;
        if(!err && Object.keys(techStack).length) {
            const primaryTech = techStack.primaryTech;
            const secondaryTech = techStack.secondaryTech;
            const others = techStack.others;
            let style = {};
            primaryTechArray = primaryTech && primaryTech.map(function (item) {
                    style.width = item.value + '%';
                    return (
                        <div class="row" key={item.id}>
                            <div class="col-xs-4">{item.type}</div>
                            <SkillRow styleObj={style} colClass="col-xs-8"></SkillRow>
                        </div>
                    )
            });
            secondaryTechArray = secondaryTech && secondaryTech.map(function (item) {
                    style.width = item.value + '%';
                    return (
                        <div class="row" key={item.id}>
                            <div class="col-xs-4">{item.type}</div>
                            <SkillRow styleObj={style} colClass="col-xs-8"></SkillRow>
                        </div>
                    )
                });
        }
        return(
            <div class="skills">
                { !err && primaryTechArray ? primaryTechArray : null}
                { !err && secondaryTechArray ? secondaryTechArray : null}
            </div>
        )
    }
}

export default ReactRedux.connect(function(store){
    return{
        techStack:store.techStack
    }
})(TechStack);
import React from 'react';

export default class SkillRow extends React.Component{
    render(){
        return(
            <div class={this.props.colClass}>
                <div class="progress progress-striped">
                    <div class="progress-bar progress-bar-info" style={this.props.styleObj}></div>
                </div>
            </div>
        )
    }
}
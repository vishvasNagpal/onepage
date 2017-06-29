import React from 'react';
import * as ReactRedux from 'react-redux';
import {fetchProjects} from '../../../../res/actions/ProjectsActions.js';
class Projects extends React.Component{

    componentWillMount(){
        if(!this.props.projects.fetched){
            this.props.dispatch(fetchProjects('vishvas'));
        }
    }

    render(){
        const projects = this.props.projects.data ? this.props.projects.data : [] ;
        //const projects = this.props.projects;
        let projectsArray;
        try{
            if(this.props.projects.error === false && projects.length){
                projectsArray = projects.map(function(item){
                    return(
                        <div class="list-group-item" key={item.id}>
                            <h4 class="list-group-item-heading">{item.name}</h4>
                            <ul>
                                {item.description.map(function(desp){
                                    return <li key={desp.id} class="list-group-item-text">{desp.value}</li>
                                })}
                            </ul>
                        </div>
                    )
                })
            }
        }catch (e){
            console.log(e)
        }
        return(
            <div class="list-group">
                {projectsArray}
            </div>
        )
    }
}

export default ReactRedux.connect(function(store){
    return{
        projects:store.projects
    }
})(Projects);
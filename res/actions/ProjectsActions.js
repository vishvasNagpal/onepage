import axios from 'axios';

export function fetchProjects(userName){

    return function (dispatch){
        axios.get('/projects?user=' + userName)
            .then((response)=>{
                dispatch({type:'FETCH_PROJECTS_FULFILLED',data:JSON.parse(response.data)});
            })
            .catch((err)=>{
                dispatch({type:'FETCH_PROJECTS_REJECTED',err:err});
            })
    }
}
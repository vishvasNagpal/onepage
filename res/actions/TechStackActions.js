import axios from 'axios';

export function fetchTechStack(userName){

    return function (dispatch){
        axios.get('/techStack?user=' + userName)
            .then((response)=>{
                dispatch({type:'FETCH_TECH_STACK_FULFILLED',data:JSON.parse(response.data)});
            })
            .catch((err)=>{
                dispatch({type:'FETCH_TECH_STACK_REJECTED',err:err});
            })
    }
}
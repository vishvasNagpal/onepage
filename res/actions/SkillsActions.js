import axios from 'axios';

export function fetchSkills(userName){

    return function (dispatch){
        axios.get('/skills?user=' + userName)
            .then((response)=>{
                dispatch({type:'FETCH_SKILLS_FULFILLED',data:JSON.parse(response.data)});
            })
            .catch((err)=>{
                dispatch({type:'FETCH_SKILLS_REJECTED',err:err});
            })
    }
}
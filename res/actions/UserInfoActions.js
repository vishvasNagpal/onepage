import axios from 'axios';

export function fetchUserInfo (user){
    return function (dispatch){
        axios.get('/userInfo?user=' + user)
            .then((response) => {
                dispatch({type:'FETCH_USER_INFO_FULFILLED',data:response.data})
            })
            .catch((err)=>{
                dispatch({type:'FETCH_USER_INFO_REJECTED',err:err});
            })
    }
}
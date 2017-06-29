let UserInfoReducer = function(state={fatched:false,error:false},action){
    switch(action.type){
        case 'FETCH_USER_INFO_FULFILLED':
            state = Object.assign({},{data:action.data},{fatched:true,error:false});
            break;
        case 'FETCH_USER_INFO_REJECTED':
            state = Object.assign({},{err:action.err},{fatched:false,error:true})
    }
    return state;
}

export {UserInfoReducer} ;
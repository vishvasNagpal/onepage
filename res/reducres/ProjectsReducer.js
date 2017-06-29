let ProjectsReducer = function(state={fatched:false,error:false},action){
    switch(action.type){
        case 'FETCH_PROJECTS_FULFILLED':
            state = Object.assign({},{data:action.data},{fatched:true,error:false});
            break;
        case 'FETCH_PROJECTS_REJECTED':
            state = Object.assign({},{err:action.err},{fatched:false,error:true})
    }
    return state;
}

export {ProjectsReducer} ;
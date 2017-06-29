let TechStackReducer = function(state={fetched:false,error:false},action){
    switch(action.type){
        case 'FETCH_TECH_STACK_FULFILLED':
            state = Object.assign({},{data:action.data},{fetched:true,error:false});
            break;
        case 'FETCH_TECH_STACK_FULFILLED':
            state = Object.assign({},{data:action.err},{fetched:false,error:true});
            break;
    }
    return state;
}


export {TechStackReducer};
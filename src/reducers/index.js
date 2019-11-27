/**
 * 
 * 
 */
export default (state,action) => {
    console.log(action);
    switch (action.type){
        case 'SET_TECHNOLOGY':
            return {...state, tech: action.text}
        default: 
            return state;
    }
}
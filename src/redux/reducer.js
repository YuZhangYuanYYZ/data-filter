import { actionTypes} from './actions';

const initialState = {
    titles:{},
    isMounted:false
}

function reducer(originState = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.REQUEST_DATA:
                return {
                    ...originState,
                    isMounted:false
                };   
        case actionTypes.SAVE_DATA:
        return {
            ...originState,           
            titles: {
                    ...originState.todos,
                    payload
            },
            isMounted:true
        }; 
        default:
            return initialState;
    }  
}    
export default reducer;
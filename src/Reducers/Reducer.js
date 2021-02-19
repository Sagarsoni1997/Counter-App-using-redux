import { INCREMENT, DECREMENT, LIKE, DISLIKE } from "../Actions/ActionType";
const InitialState = {
    counter: 0,
    counter2: 0
}

export const reducer = (state= InitialState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return{...state, counter : state.counter + 1};
            
        case DECREMENT:
            return{...state, counter : state.counter - 1}; ;

            case LIKE:
            return{...state, counter2 : state.counter2 + 1}; ;
    
            case DISLIKE:
            return{...state, counter2 : state.counter2 - 1}; ;
        default:
           return state;
    }
}
import { Favourte } from "./fav.action";

const intialValue={
    wishlist:[],
};
export function favreducer(state=intialValue , action : Favourte ){

 switch(action.type){

    case"SET_FAVOURITE":
    return{
        ...state.wishlist,
        wishlist:action.paylaod
    };
    default:
        return state;
 }


}
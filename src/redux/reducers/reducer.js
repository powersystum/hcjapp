const INIT_STATE = {
    carts: []
};


export const cartreducer =(state=INIT_STATE,action)=>{
    switch(action.type){
        case  "ADD_CART":
            const IndexIteam =state.carts.findIndex((elemn)=>elemn.id === action.payload.id)
            if(IndexIteam >= 0){
                state.carts[IndexIteam].qnty +=1
            }else{
                const temp ={...action.payload,qnty:1}
               return{
                ...state,
                carts:[...state.carts,temp]
            }
            
            
            }
            case "RVM_CART":
                const data = state.carts.filter((val)=>val.id !== action.payload);
                return{
                    ...state,
                    carts:data
                }

            case "RVM_ONE":
                const IndexIteam_dec =state.carts.findIndex((remv)=>remv.id === action.payload.id);

                if(state.carts[IndexIteam_dec].qnty >= 1){
                    const dltitem = state.carts[IndexIteam_dec].qnty -= 1
                    console.log([...state.carts,dltitem]);

                    return{
                        ...state,
                        carts:[...state.carts]
                    }
                }else if(state.carts[IndexIteam_dec].qnty === 1){
                    const data = state.carts.filter((val)=>val.id !== action.payload.id);

                return{
                    ...state,
                    carts:data
                }

                }


            default:
                return state
    }
}
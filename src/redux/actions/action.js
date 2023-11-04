export const ADD =(item)=>{
    return{
        type :"ADD_CART",
        payload:item
    }
}

export const DEL =(id)=>{
    return{
        type:"RVM_CART",
        payload:id
    }
}

//remove indivadual items
export const REMOVE =(items)=>{
    return{
        type:"RVM_ONE",
        payload:items
    }
}

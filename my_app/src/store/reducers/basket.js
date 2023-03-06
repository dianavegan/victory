const defaultState = [];

const LOAD_BASKET = 'LOAD_BASKET';
const CLEAR_BASKET = 'CLEAR_BASKET';
const DELETE_BASKET_CARD = 'DELETE_BASKET_CARD';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT'

export const loadBasket = payload => ({ type: LOAD_BASKET, payload})
export const clearBasket = () => ({ type: CLEAR_BASKET})
export const deleteBasketCard = payload => ({ type: DELETE_BASKET_CARD, payload})
export const decrementCount = payload => ({ type: DECREMENT_COUNT, payload})
export const incrementCount = payload => ({ type: INCREMENT_COUNT, payload})


const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id );
    if (productInState){
        productInState.count++
        return [...state]
    } else {
        return [...state, {
            ...payload,
            count: 1 
        } ]
    }
}


export const basketReducer = (state = defaultState, action) => {
      if(action.type === LOAD_BASKET){
        return checkProduct(state, action.payload)
        
      } else if(action.type === CLEAR_BASKET){
        return defaultState
      } else if(action.type === DELETE_BASKET_CARD){
        return state.filter(el => el.id !== action.payload)
      } else if(action.type === INCREMENT_COUNT){
        state.find(el => el.id === action.payload).count++
        return [...state]
      } else if(action.type === DECREMENT_COUNT){
        state.find(el => el.id === action.payload ).count--
        return [...state]
      } 
        else{
        return state
      }

}
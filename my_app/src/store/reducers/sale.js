const defaultState = [];
const LOAD_SALE = 'LOAD_SALE';
export const loadSale = payload => ({ type: LOAD_SALE, payload})


export const saleReducer = (state = defaultState, action) => {
      if(action.type === LOAD_SALE){
        return action.payload
      } else{
        return state
      }

}
import { loadSale } from '../store/reducers/sale'

export const load_sale = dispatch => {
    fetch('http://localhost:3333/products/all')
    .then(resp => resp.json())
    .then(json => dispatch(loadSale(json)))
}
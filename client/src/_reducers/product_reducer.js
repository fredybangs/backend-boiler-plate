import { FETCH_PRODUCTS, NEW_PRODUCT } from '../_actions/types';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return { ...state, products: action.payload };
		case NEW_PRODUCT:
			return { ...state, newProduct: action.payload };
		default:
			return state;
	}
}

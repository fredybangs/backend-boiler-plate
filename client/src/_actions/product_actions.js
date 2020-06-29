import axios from 'axios';
import { FETCH_PRODUCTS, NEW_PRODUCT } from './types';

// export const fetchPosts = () => (dispatch) => {
// 	fetch('http://localhost:8000/api/faqs/')
// 		.then((res) => res.json())
// 		.then((posts) =>
// 			dispatch({
// 				type: 'FETCH_POSTS',
// 				payload: posts,
// 			}),
// 		);
// };

export function fetchPosts() {
	const products = axios
		.get(`${USER_SERVER}/products`)
		.then((response) => response.data);

	return {
		type: FETCH_PRODUCTS,
		payload: products,
	};
}

export function createProduct(productData) {
	const product = axios
		.post(`${USER_SERVER}/products`, productData)
		.then((response) => response.data);

	return {
		type: NEW_PRODUCT,
		payload: newProduct,
	};
}
// export const createPost = (postData) => (dispatch) => {
// 	fetch('http://localhost:8000/api/faqs/', {
// 		method: 'POST',
// 		headers: {
// 			'content-type': 'application/json',
// 		},
// 		body: JSON.stringify(postData),
// 	})
// 		.then((res) => res.json())
// 		.then((post) =>
// 			dispatch({
// 				type: 'NEW_POST',
// 				payload: post,
// 			}),
// 		);
// };

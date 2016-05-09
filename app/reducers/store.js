import * as actions from '../actions/store'

const initialState = {
	locations: [],
	current: {},
	pagination: {}
}

export default function store (state = initialState, action) {
	switch (action.type) {
		case actions.SET_STORES :
			return {
				...state,
				locations:action.stores,
				pagination:action.pagination
			}
		case actions.SET_CURRENT :
			return {
				...state,
				current:action.current,
			}
		default :
			return state
	}
}
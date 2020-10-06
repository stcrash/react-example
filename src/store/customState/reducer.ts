import { CHANGE_CUSTOM } from 'constants/actions'

export interface CustomState {
	formIsSubmitted: boolean
}

const initState: CustomState = {
	formIsSubmitted: false,
}

export default function customReducer(state: CustomState = initState, action: any): CustomState {
	switch (action.type) {
		case CHANGE_CUSTOM:
			return {
				...state,
				formIsSubmitted: action.payload.formIsSubmitted,
			}

		default:
			return state
	}
}

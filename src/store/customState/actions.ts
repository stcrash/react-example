import { CHANGE_CUSTOM } from 'constants/actions'
import { CustomState } from './reducer'
import { IAction } from 'interfaces/action'

export const changeCustom = (data: CustomState): IAction => {
	return {
		type: CHANGE_CUSTOM,
		payload: {
			formIsSubmitted: data.formIsSubmitted,
		},
	}
}

// ...other actions

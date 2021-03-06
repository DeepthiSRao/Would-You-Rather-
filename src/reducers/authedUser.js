import {
	SET_AUTHED_USER,
	LOGOUT_AUTHED_USER
} from "../utils/constants";

export const authedUserReducer = (state = null, action) =>{
	switch (action.type) {
		case SET_AUTHED_USER:
			return action.id;
		case LOGOUT_AUTHED_USER:
			return null;
		default:
			return state;
	}
}
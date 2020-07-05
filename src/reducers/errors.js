const errorReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_ERRORS':
			return {
				error: action.error
			}
		case 'RESET _ERRORS':
			return {};
		default:
			return state;
	}
}

export default errorReducer;

const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log('Action is:', action);
	var result = next(action);
	console.log('New state is:', store.getState());
	console.groupEnd();
	return result;
}

export default logger;
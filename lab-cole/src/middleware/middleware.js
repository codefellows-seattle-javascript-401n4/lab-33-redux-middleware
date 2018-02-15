export default store => next => action => {

  try {
    console.log("__STATE__", store.getState());
    next(action);
  }

  catch(error) {
    error.action = action;
    console.log("__ACTION__", action);
    console.error("__ERROR__", error);
  }

}
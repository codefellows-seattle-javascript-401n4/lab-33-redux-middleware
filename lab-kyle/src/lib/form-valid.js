export default store => next => action => {
  try {
    console.log('__ACTION__', action);
    next(action);
  }
  catch(err){
    console.log(err.message);
  }
}

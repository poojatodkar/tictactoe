import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const combinedReducers = combineReducers({
  form: formReducer
});


const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;

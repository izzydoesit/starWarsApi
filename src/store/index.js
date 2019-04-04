import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'

const logger = createLogger();

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        logger,
        reduxImmutableStateInvariant()
      ) 
    )
  )
}

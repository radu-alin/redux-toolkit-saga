import { Action, configureStore, EnhancedStore, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './sagas';

import { postsReducer } from '../../features/posts/redux/postsSlice';

export const configureStoreWithMiddlewares = (initialState = {}): EnhancedStore => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: { posts: postsReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware),
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = configureStoreWithMiddlewares();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

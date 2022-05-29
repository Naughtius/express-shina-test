import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// Reducers
import listReducer from "@store/list/list";
// Saga
import listSagaWatcher from "@store/list/listSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
  middleware: [saga],
});

saga.run(listSagaWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

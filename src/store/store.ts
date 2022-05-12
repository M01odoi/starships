import { Action, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit/dist";
import { ThunkAction } from "@reduxjs/toolkit";
import accInfoSlice from "./reducers/accInfoSlice";
import helpfulStateSlice from "./reducers/helpfulStateSlice";
import peopleStarshipsSlice from "./reducers/peopleStarshipsSlice";


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;

const allReducers = combineReducers({
    accInfo: accInfoSlice,
    helpfulState: helpfulStateSlice,
    peopleAndStarships: peopleStarshipsSlice,
})
  


const store = configureStore({ reducer: allReducers });

export default store;

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAccInfo} from "../../interfaces/IAccInfo";


const initialState: IAccInfo[] = [];

const accInfoSlice = createSlice({
    name: "accInfo",
    initialState,
    reducers: {
        setAccountsFromLocalStore(state) {
            localStorage.getItem("accInfo")
            && JSON.parse(localStorage.getItem("accInfo") || "[]").map(
                (obj: IAccInfo) => state.push(obj)
            )
        },
        addAccount(state, action: PayloadAction<IAccInfo>) {
            state.push(action.payload);
            !localStorage.getItem("accInfo") && localStorage.setItem("accInfo", JSON.stringify([]));
            const localStoreArrayOfAcc = JSON.parse(localStorage.getItem("accInfo") || "");
            localStoreArrayOfAcc.push(action.payload);
            localStorage.setItem("accInfo", JSON.stringify(localStoreArrayOfAcc));
        },
        enterAccount(state, action: PayloadAction<IAccInfo>) {
            state.find(
                (obj) =>
                    obj.login === action.payload.login &&
                    obj.password === action.payload.password
            );
        },
    },
});

export const {addAccount, setAccountsFromLocalStore, enterAccount} =
    accInfoSlice.actions;

export default accInfoSlice.reducer;

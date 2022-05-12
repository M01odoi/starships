import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IAccInfo {
    login: string,
    password: string,
}

const initialState: IAccInfo[] = [];

const accInfoSlice = createSlice({
    name: "accInfo",
    initialState,
    reducers: {
        setAccountsFromLocalStore(state) {
            localStorage.getItem('accInfo')
                ? JSON.parse(localStorage.getItem('accInfo') || '[]').map((obj: IAccInfo) => state.push(obj))
                : localStorage.setItem('accInfo', JSON.stringify([]));
        },
        addAccount(state, action: PayloadAction<IAccInfo>) {
            state.push(action.payload);
            const localStoreArrayOfAccs = JSON.parse(localStorage.getItem('accInfo')||'');
            localStoreArrayOfAccs.push(action.payload);
            localStorage.setItem('accInfo',JSON.stringify(localStoreArrayOfAccs));
        },
        enterAccount(state, action: PayloadAction<IAccInfo>) {
            state.find(obj => obj.login === action.payload.login && obj.password === action.payload.password)
        }
    }
})

export const {
    addAccount,
    setAccountsFromLocalStore,
    enterAccount,
} = accInfoSlice.actions;

export default accInfoSlice.reducer;
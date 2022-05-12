import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPeople} from "../../interfaces/IPeople";
import {IStarships} from "../../interfaces/IStarships";

interface Props {
    people: IPeople | null,
    starships: IStarships | null
}

const initialState: Props = {people: null, starships: null}

const peopleStarshipsSlice = createSlice({
    name: 'peopleStarships',
    initialState,
    reducers: {
        setPeople(state, action: PayloadAction<IPeople>) {
            state.people = action.payload;
        },
        setStarships(state, action: PayloadAction<IStarships>) {
            console.log(action.payload)
            state.starships = action.payload;
        }
    }
})

export const {
    setPeople,
    setStarships
} = peopleStarshipsSlice.actions;

export default peopleStarshipsSlice.reducer;
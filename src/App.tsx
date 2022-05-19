import React, {useEffect} from "react";
import SignUp from "./components/SignComponents/signUp/SignUp";
import {library} from "@fortawesome/fontawesome-svg-core";
import {Route, Routes} from "react-router-dom";
import {
    faPen,
    faUserAlt,
    faSquare,
    faList,
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
    peopleAndStarshipsCards,
    peopleCards,
    personCard,
    shipCard,
    signIn,
    signup,
    starshipsCards,
} from "./routes";
import {useDispatch} from "react-redux";
import {setAccountsFromLocalStore} from "./store/reducers/accInfoSlice";
import SignIn from "./components/SignComponents/signIn/SignIn";
import PeopleAndStarshipsCards from "./components/PeopleAndStarshipsCards/PeopleAndStarshipsCards";
import AuthHoc from "./hoc/AuthHoc";
import PeopleCards from "./components/ListCards/PeopleCards";
import StarshipsCards from "./components/ListCards/StarshipsCards";
import PersonCard from "./components/PersonalCard/PersonCard";
import ShipCard from "./components/PersonalCard/ShipCard";
import {setActiveAccountFromLocalStore} from "./store/reducers/helpfulStateSlice";

library.add(faUserAlt, faPen, faSquare, faList, faArrowLeft);

function App() {
    const dispatch = useDispatch();
    dispatch(setActiveAccountFromLocalStore());

    useEffect(() => {
        localStorage.getItem('accInfo') &&
        dispatch(setAccountsFromLocalStore());
    }, []);

    return (
        <main>
            <Routes>
                <Route path={signIn} element={<SignIn/>}/>
                <Route path={signup} element={<SignUp/>}/>
                <Route
                    path={peopleAndStarshipsCards}
                    element={
                        <AuthHoc>
                            <PeopleAndStarshipsCards/>
                        </AuthHoc>
                    }
                />
                <Route
                    path={peopleCards}
                    element={
                        <AuthHoc>
                            <PeopleCards/>
                        </AuthHoc>
                    }
                />
                <Route
                    path={starshipsCards}
                    element={
                        <AuthHoc>
                            <StarshipsCards/>
                        </AuthHoc>
                    }
                />
                <Route
                    path={personCard}
                    element={
                        <AuthHoc>
                            <PersonCard/>
                        </AuthHoc>
                    }
                />
                <Route
                    path={shipCard}
                    element={
                        <AuthHoc>
                            <ShipCard/>
                        </AuthHoc>
                    }
                />
                <Route path="*" element={<SignIn/>}/>
            </Routes>
        </main>
    );
}

export default App;

import {Navigate} from "react-router-dom";
import {signIn} from "../routes";
import {useAppSelector} from "../hooks/redux";

interface Props {
    children: JSX.Element;
}
//TODO
const AuthHoc: Function = ({children}: Props):  any=> {
    const {isAuth} = useAppSelector((state) => state.helpfulState);

    if (isAuth)
        return children
    else
        return <Navigate to={signIn}/>
}

export default AuthHoc;
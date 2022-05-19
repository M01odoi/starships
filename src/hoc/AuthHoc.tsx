import { Navigate } from "react-router-dom";
import { signIn } from "../routes";
import { useAppSelector } from "../hooks/redux";

interface Props {
  children: JSX.Element;
}

const AuthHoc: Function = ({ children }: Props): any => {
  const { authAcc } = useAppSelector((state) => state.helpfulState);

  if (authAcc) return children;
  else return <Navigate to={signIn} />;
};

export default AuthHoc;

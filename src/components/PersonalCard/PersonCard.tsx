import React from "react";
import {useLocation} from "react-router-dom";

interface Props {
    name: string;
}

const PersonCard: React.FC = (): JSX.Element => {
    const location: any = useLocation();
    console.log(typeof useLocation());
    return (
        <>name is
            {' '+location.state.name}</>
    )
}

export default PersonCard;
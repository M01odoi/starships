import { setIsSquare } from "../../store/reducers/helpfulStateSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const ChangeStyleButtons = () => {
  const dispatch = useAppDispatch();
  const { isSquare } = useAppSelector((state) => state.helpfulState);

  return (
    <div className="header">
      <ul>
        <li>
          <button
            className={isSquare ? "activeColor" : "passiveColor"}
            onClick={() => dispatch(setIsSquare(true))}
          >
            <FontAwesomeIcon icon="square" className="fa-3x" />
          </button>
        </li>
        <li>
          <button
            className={isSquare ? "passiveColor" : "activeColor"}
            onClick={() => dispatch(setIsSquare(false))}
          >
            <FontAwesomeIcon icon="list" className="fa-3x" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ChangeStyleButtons;

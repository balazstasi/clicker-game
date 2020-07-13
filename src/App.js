import React, { useEffect, useRef, useReducer } from "react";

import { reducer, initialState } from "./reducer";
import Clicker from "./Clicker";
import AutoClicker from "./AutoClicker";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const callback = useRef();

  useEffect(() => {
    callback.current = () => {
      const currentClicks = state.clicks.amount;
      const totalCount = Object.keys(state).reduce(
        (accumulator, currentValue, index) =>
          index === 0 ? accumulator : accumulator + state[currentValue].amount * (state[currentValue].cost * 0.1),
        currentClicks
      );

      dispatch({ type: "update", payload: totalCount });
    };
  }, [state]);

  useEffect(() => {
    const interval = setInterval(() => callback.current(), 1000);
    return () => clearInterval(interval);
  }, [callback]);

  return (
    <div className="game">
      <h1 className="title">Start Clicking!</h1>
      <Clicker amount={state.clicks.amount} dispatch={dispatch} />
      {Object.keys(state).map((tier, index) => {
        if (index === 0) {
          return null;
        }
        const { cost, amount } = state[tier];
        return (
          (state.clicks.amount >= cost || amount > 0) && (
            <AutoClicker
              key={tier}
              tier={tier}
              amount={amount}
              cost={cost}
              enabled={state.clicks.amount >= cost}
              dispatch={dispatch}
            />
          )
        );
      })}
    </div>
  );
};

export default App;

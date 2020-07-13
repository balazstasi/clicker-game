import React, { memo } from "react";

const AutoClicker = memo(({ tier, amount, cost, dispatch, enabled }) => {
  const buy = () => dispatch({ type: "increase", tier });
  const sell = () => dispatch({ type: "decrease", tier });

  return (
    <div className="clicker">
      <div className="info">
        <h2>{`${amount} × ${tier}Clicker`}</h2>
        <p>{`This ${tier}Clicker buys and sells for ${cost}`}</p>
      </div>
      <button
        className={`Buy ${enabled ? undefined : "disabled"}`}
        type="button"
        onClick={buy}
      >
        {`buy ${tier}Clicker`}
      </button>
      {amount > 0 && (
        <button className="sell" type="button" onClick={sell}>
          -
        </button>
      )}
    </div>
  );
});

export default AutoClicker;

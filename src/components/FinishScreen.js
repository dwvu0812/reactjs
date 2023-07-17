import React from "react";

function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} points (
        {percentage}%)
      </p>
      <p className="highscore">High score: {highscore} points</p>
      <div>
        <button
          className="btn btn-ui"
          onClick={() => {
            dispatch({ type: "restart" });
          }}
        >
          Restart quiz
        </button>
      </div>
    </>
  );
}

export default FinishScreen;

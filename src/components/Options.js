import React from "react";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => {
        return (
          <button
            className={`btn btn-option
            ${i === answer ? "answer" : ""}
            ${
              hasAnswered
                ? i === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
            `}
            key={i.toString()}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
            disabled={hasAnswered}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;

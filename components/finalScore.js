import React, { useContext, useState } from "react";

const ScoreContext = React.createContext();
const ScoreUpdateContext = React.createContext();
const ScoreCleanContext = React.createContext();

export function useScore() {
  return useContext(ScoreContext);
};

export function useScoreUpdate() {
  return useContext(ScoreUpdateContext);
};
export function useCleanScore() {
  return useContext(ScoreCleanContext)
}

export function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);

  function updateScore() {
    setScore(score+1);
  }

  function cleanScore() {
    setScore(0);
  }

  return (
    <ScoreContext.Provider value={score}>
      <ScoreUpdateContext.Provider value={updateScore}>
      <ScoreCleanContext.Provider value={cleanScore}>
      {children}
      </ScoreCleanContext.Provider>
      </ScoreUpdateContext.Provider>
    </ScoreContext.Provider>
  )
}

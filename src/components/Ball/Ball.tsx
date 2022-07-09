import React from "react"
import "./Ball.css"

type BallProps = {
  startAnswer: () => void
}

export const Ball: React.FC<BallProps> = ({ startAnswer }) => <div className="Ball" onClick={() => startAnswer()} />

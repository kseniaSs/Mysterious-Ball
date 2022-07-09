import React from "react"
import "./Answer.css"
import { Answer as AnswerType } from "../../hooks"

type AnswerProps = {
  answer: AnswerType | ""
}

export const Answer: React.FC<AnswerProps> = ({ answer }) => <div className="Answer">{answer}</div>

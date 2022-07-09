import React from "react"
import { Ball } from "./components/Ball"
import { useQuestionHook } from "./hooks"
import "./App.css"
import { Waiting } from "./components/Waiting"
import { Answer } from "./components/Answer"

function App() {
  const { processAnswer, startAnswer, answer } = useQuestionHook()

  return (
    <div className="App">
      <Ball startAnswer={startAnswer} />
      <div className="AnswerContainer">{processAnswer ? <Waiting /> : <Answer answer={answer} />}</div>
    </div>
  )
}

export default App

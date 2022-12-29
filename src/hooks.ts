import { useState } from "react"

type QuestionHook = () => {
  processAnswer: boolean
  startAnswer: () => void
  answer: Answer | ""
}

export type Answer = "Yes" | "No" | "Maybe" | "Ask again"

const severalAnswer: Array<Answer> = ["Yes", "No", "Maybe", "Ask again"]

const useQuestionHook: QuestionHook = () => {
  const [processAnswer, setProcessAnswer] = useState<boolean>(false)
  const [answer, setAnswer] = useState<Answer | "">("")

  const startAnswer = () => {
    if (!processAnswer) {
      const randomSeconds = Math.random() * 5000 // from 1 to 5 sec
      const randomAnswer = Math.round(Math.random() * 3) // from 0 to 3

      setTimeout(() => {
        setAnswer(severalAnswer[randomAnswer])
        setProcessAnswer(false)
      }, randomSeconds)

      setProcessAnswer(true)
    }
  }

  return { processAnswer, startAnswer, answer }
}

export { useQuestionHook }

import React from "react"
import { render } from "@testing-library/react"
import { Ball } from "../components/Ball"

test("render Ball", () => {
  const { container } = render(<Ball startAnswer={() => {}} />)

  expect(container.children[1]).toHaveClass("Ball") // Check className
})

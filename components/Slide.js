import { useEffect } from "react"
import "reveal.js/dist/reveal.css"
import "reveal.js/dist/theme/white.css"

export const Slide = ({ children }) => {
  useEffect(() => {
    const clientSideInitialization = async () => {
      const Reveal = await (await import("reveal.js")).default
      const Markdown = await (await import("reveal.js/plugin/markdown/markdown.esm")).default
      const deck = new Reveal({
        plugins: [Markdown]
      })
      deck.initialize()
    }
    clientSideInitialization()
  })

  return (
    <div className="reveal">
      <div className="slides">
        { children }
      </div>
    </div>
  )
}

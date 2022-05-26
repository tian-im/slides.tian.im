import { useEffect } from "react"

export const Presentation = ({ children, ...options }) => {
  useEffect(() => {
    const clientSideInitialization = async () => {
      const { default: Reveal } = await import("reveal.js")
      const { default: MarkdownPlugin } = await import("reveal.js/plugin/markdown/markdown.esm")
      const { default: HighlightPlugin } = await import("reveal.js/plugin/highlight/highlight.esm")
      const { default: NotesPlugin } = await import("reveal.js/plugin/notes/notes.esm")

      const deck = new Reveal({
        plugins: [MarkdownPlugin, HighlightPlugin, NotesPlugin],
        ...options
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

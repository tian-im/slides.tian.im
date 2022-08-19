import { createContext, useContext, useEffect, useState } from "react"

const DEFAULT_CLASSES = ['reveal']

export const Presentation = ({ children, ...options }) => {
  const { handleSlideChanged, handleSlideTransitionEnd } = options

  useEffect(() => {
    const clientSideInitialization = async () => {
      const { default: Reveal } = await import("reveal.js")
      const { default: MarkdownPlugin } = await import("reveal.js/plugin/markdown/markdown.esm.js")
      const { default: HighlightPlugin } = await import("reveal.js/plugin/highlight/highlight.esm.js")
      const { default: NotesPlugin } = await import("reveal.js/plugin/notes/notes.esm.js")

      const deck = new Reveal({
        plugins: [MarkdownPlugin, HighlightPlugin, NotesPlugin],
        slideNumber: 'c',
        ...options
      })
      deck.initialize()
      if (handleSlideChanged) deck.on('slidechanged', handleSlideChanged)
      if (handleSlideTransitionEnd) deck.on('slidetransitionend', handleSlideTransitionEnd)
    }
    clientSideInitialization()
  })

  return (
    <div className="reveal">
      <div className="slides">
        {children}
      </div>
    </div>
  )
}

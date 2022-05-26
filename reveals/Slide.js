export const Slide = ({ children, ...slideProps }) =>
  (
    <section {...slideProps}>
      { children }
    </section>
  )

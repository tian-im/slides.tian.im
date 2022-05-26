export const Code = ({ children, lang, ...codeProps }) =>
  (
    <pre className={lang}>
      <code {...codeProps}>
        { children }
      </code>
    </pre>
  )

export const CodeBlock = ({ children, lang, ...codeProps }) =>
(
  <pre>
    <code className={lang} {...codeProps}>
      {children}
    </code>
  </pre>
)

export const RubyBlock = ({ children, ...codeProps }) =>
(
  <CodeBlock lang="rb">
    {children}
  </CodeBlock>
)

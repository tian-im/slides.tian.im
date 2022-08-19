export const Pane = ({ children, ...paneProps }) =>
  (
    <div
      {...paneProps}
      className="pane"
    >
      { children }
    </div>
  )

export const Columns = ({ children, ...columnProps }) =>
  (
    <div
      {...columnProps}
      className="columns"
    >
      { children }
    </div>
  )

export const Rows = ({ children, ...rowProps }) =>
  (
    <div
      {...rowProps}
      className="rows"
    >
      { children }
    </div>
  )

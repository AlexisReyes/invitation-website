import * as React from "react"

const Footer = () => (
    <footer
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-md)`,
      }}
    >
      © {new Date().getFullYear()} &middot; Hecho con &#x2764;&#xfe0f; por los papás de Alicia.
      {` `}
    </footer>
);

export default Footer

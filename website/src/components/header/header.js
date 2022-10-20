import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <div className="w-full">
      <StaticImage
        loading="eager"
        layout="fullWidth"
        placeholder="tracedSVG"
        alt="Header Image"
        src="../../images/alicia-logo.png"
      />
  </div>
);

export default Header

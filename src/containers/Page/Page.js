import React from "react"
import "./Page.styles.css"

const Page = ({ children }) => (
  <div>
    <section className="page"> {children} </section>
  </div>
)

export default Page

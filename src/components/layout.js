import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`/#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              {/* <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li> */}
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-contact" role="menuitem">
                <Link to={`/contact`}>Contact</Link>
              </li>
              {/* <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>Elements</Link>
              </li> */}
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>Tags</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/kevin-griego-b7854a16a/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/KGriego/"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/Midlu_"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              {/* <Link
                to={`/rss.xml`}
                title="RSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </Link> */}
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout

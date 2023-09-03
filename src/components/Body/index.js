// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const contentClassName = showContent ? 'show' : 'not-show'
      const leftNavbarClassName = showLeftNavbar ? 'show' : 'not-show'
      const rightNavbarClassName = showRightNavbar ? 'show' : 'not-show'
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className={`${leftNavbarClassName} left-navbar-container`}>
              <h1 className="body-lay-out-heading">Left Navbar Menu</h1>
              <ul className="left-nav-items">
                <li className="left-nav-item">
                  <p className="left-item">Item 1</p>
                </li>
                <li className="left-nav-item">
                  <p className="left-item">Item 2</p>
                </li>
                <li className="left-nav-item">
                  <p className="left-item">Item 3</p>
                </li>
                <li className="left-nav-item">
                  <p className="left-item">Item 4</p>
                </li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className={`${contentClassName} content-container`}>
              <h1 className="content-heading">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, concectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className={`${rightNavbarClassName} right-navbar-container`}>
              <h1 className="body-lay-out-heading">Right Navbar Menu</h1>
              <ul className="right-nav-items">
                <li className="right-item-card">
                  <p className="right-item">Ad 1</p>
                </li>
                <li className="right-item-card">
                  <p className="right-item">Ad 2</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

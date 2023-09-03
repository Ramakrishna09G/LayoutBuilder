// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickCheckedContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onClickCheckedLeftnavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onClickCheckedRightnavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }
      return (
        <div className="configuration-controller">
          <h1 className="lay-out-heading">Layout</h1>
          <ul className="controller-items">
            <li className="controller-item">
              <input
                type="checkbox"
                id="content"
                checked={showContent}
                onChange={onClickCheckedContent}
              />
              <label htmlFor="content">Content</label>
            </li>
            <li className="controller-item">
              <input
                type="checkbox"
                id="leftNavBar"
                checked={showLeftNavbar}
                onChange={onClickCheckedLeftnavbar}
              />
              <label htmlFor="leftNavBar">Left Navbar</label>
            </li>
            <li className="controller-item">
              <input
                type="checkbox"
                id="rightNavBar"
                checked={showRightNavbar}
                onChange={onClickCheckedRightnavbar}
              />
              <label htmlFor="rightNavBar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

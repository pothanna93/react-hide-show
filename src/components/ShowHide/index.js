import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  onFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="show-bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-container">
          <div className="text-container">
            <button
              type="button"
              className="hide-button"
              onClick={this.onFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="name">joe</p>}
          </div>
          <div className="text-container">
            <button
              type="button"
              className="hide-button"
              onClick={this.onLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide

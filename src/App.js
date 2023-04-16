import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  ParaContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
} from './StyledComponents'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    boldState: false,
    italicState: false,
    underlineState: false,
  }

  clickBold = () => {
    const {boldState} = this.state
    this.setState({
      boldState: !boldState,
    })
  }

  clickItalic = () => {
    const {italicState} = this.state
    this.setState({
      italicState: !italicState,
    })
  }

  clickUnderline = () => {
    const {underlineState} = this.state
    this.setState({
      underlineState: !underlineState,
    })
  }

  render() {
    const {boldState, italicState, underlineState} = this.state

    return (
      <div className="app-container">
        <div className="app-inner-container">
          <div className="first-container">
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="second-container">
            <ul className="icons-container">
              <li>
                <BoldButton
                  type="button"
                  data-testid="bold"
                  onClick={this.clickBold}
                  boldState={boldState}
                >
                  <VscBold />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  type="button"
                  data-testid="italic"
                  onClick={this.clickItalic}
                  italicState={italicState}
                >
                  <GoItalic />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  type="button"
                  data-testid="underline"
                  onClick={this.clickUnderline}
                  underlineState={underlineState}
                >
                  <AiOutlineUnderline />
                </UnderlineButton>
              </li>
            </ul>
            <hr />
            <ParaContainer
              type="text"
              rows="25"
              cols="48"
              boldState={boldState}
              italicState={italicState}
              underlineState={underlineState}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App

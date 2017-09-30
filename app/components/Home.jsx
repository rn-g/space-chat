import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setLanguage } from '../reducers/languageReducer.jsx'
import { setScene } from '../reducers/sceneReducer.jsx'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      language: '',
      scene: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleLanguageChange = this.handleLanguageChange.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    // dispatch action with language from state
    this.props.setLanguage(this.state.language || 'en')
    // send scene selection on props
    this.props.setScene(e.target.name)
  }


  handleLanguageChange(e) {
    // set selected language on state
    this.setState({ language: e.target.value })
  }

  render() {
    return (
      <div className="home-container">
        <div className="above-fold">
          <h3>You are about to enter a virtual experience in<br />which users from across the world will<br />understand your language.<br /><br />And where space will understand how you feel.</h3>
          <br />
          <br />
          <br />
          <div className="form">
            <label className="control-label">Select your language:</label>

            <select className="form-control" id="select" onChange={this.handleLanguageChange}>
              <option value='en'>English</option>
              <option value='es'>Spanish</option>
              <option value='zh'>Chinese</option>
              <option value='ar'>Arabic</option>
              <option value='de'>German</option>
              <option value='fr'>French</option>
              <option value='it'>Italian</option>
              <option value='pt'>Portuguese</option>
              <option value='nl'>Dutch</option>
              <option value='ja'>Japanese</option>
              <option value='ko'>Korean</option>
              <option value='ru'>Russian</option>
            </select>
          </div>
          <br />
          <br />
          <br />
          <div id="enter-space">
            <div className="button-container">
              <div className="space-btn">
                <button className="btn btn-default" onClick={this.handleClick}><Link to="/room" name="bubbles">ENTER BUBBLES</Link></button>
                <button className="btn btn-default" onClick={this.handleClick}><Link to="/room" name="knots" >ENTER PLASMA</Link></button>
              </div>
              <div className="space-btn">
                <button className="btn btn-default" onClick={this.handleClick}><Link to="/room" name="space">ENTER COSMOS</Link></button>
                <button className="btn btn-default" onClick={this.handleClick} ><Link to="/room" name="cubes">ENTER UFO</Link></button>
              </div>
            </div>
            <div className="down-chevron">
              <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
            </div>
          </div>
        </div>

        <div id="instructions" className="container">

          <div className="row">
            <div className="col-md-4 col-xs-12">
              <h3 className="instructions-header">Experience</h3>
              <p className="instructions-p">Enter one of four virtual words and experience an online chatroom like never before. Use Spacechat on a desktop or mobile device with a VR headset. </p>
            </div>

            <div className="col-md-4 col-xs-12">
              <h3 className="instructions-header">Chat</h3>
              <p className="instructions-p">Speak into your built-in or external microphone on your computer or mobile device. What you say, and what others say to you, will be instantly translated into one of 12 languages.</p>
            </div>

            <div className="col-md-4 col-xs-12">
              <h3 className="instructions-header">Feel</h3>
              <p className="instructions-p">As you and others talk, the virtual space will respond with movement and color changes depending on how you feel, your personality, and the sentiment of your conversation.</p>
            </div>

          </div>

          <div id="compatibility">
            <p>
              Before using Spacechat, please make sure you have functioning audio (input & output), and are using a WebGL and Web Speech API compatible<br />desktop or mobile browser (such as Google Chrome). For more information about compatibility, click <a href="http://caniuse.com/#feat=webgl">here</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#Browser_compatibility">here</a>.
            </p>
          </div>
          <div id="about">
            <h3 className="instructions-header">About</h3>
            <p className="instructions-p">Spacechat is a virtual reality chatroom that allows users to interpret and experience speech with multiple senses. Created by <a href="http://elsa-brown.com">Elsa Brown</a>, <a href="https://github.com/thefishter">Nicole Fish</a>, <a href="http://keziyah.com">Keziyah Lewis</a>, and <a href="https://github.com/ssundby">Stefanie Sundby</a> over two weeks as a senior capstone project for <a href="https://www.gracehopper.com/">The Grace Hopper Program.</a></p>
            <p className="instructions-p"><a href="https://github.com/space-chat/space-chat">View on GitHub.</a></p>
          </div>
        </div>


      </div>
    )
  }
}

export default connect(null, { setLanguage, setScene })(Home)

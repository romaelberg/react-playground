import logo from './logo.svg';
import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
      console.log("dom element: ", this.textInput.current);
    this.textInput.current.focus();
  }
  render() {
    return (
        <div>
          <input type={"text"} ref={this.textInput} />
          <input type={"button"} value={"Focus on the text field"} onClick={this.focusTextInput}/>
        </div>
    )
  }
}

export default App;

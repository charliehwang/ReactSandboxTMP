import React from "react";
import { render } from "react";

class App extends React.Component {
  render() {
    return <div className="message-box">Hello Hi...{this.props.name}</div>;
  }
}

export default App;

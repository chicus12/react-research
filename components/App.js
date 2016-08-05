import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
  }

  setMessage(message) {
    this.state.messages.push(message);
    let messages = this.state.messages;
    this.setState({ messages: messages });
  }

  render() {
    // TODO: view logic
  }
}

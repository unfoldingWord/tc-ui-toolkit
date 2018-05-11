import React, { Component } from 'react';
import { VerseCheck, CheckInfoCard, GroupMenu } from 'tc-ui-toolkit';

class App extends Component {
  state = {
    remindersReducer: {
      enabled: false
    }
  };

  toggleReminder = (event) => {
    this.setState({
      remindersReducer: {
        ...this.state.remindersReducer,
        enabled: event.target.checked
      }
    });
  }

  render() {
    return (
      <GroupMenu />
    );
  }
}

export default App;

import React, {Component} from 'react';

import {CheckInfoCard, ScripturePane, VerseCheck, VerseEditor, GroupMenu} from 'tc-ui-toolkit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVersEditor: true
    };

  }

  render() {
    return (
      <div style={{padding: '10px'}}>
        <GroupMenu />
      </div>
    );
  }
}

export default App;

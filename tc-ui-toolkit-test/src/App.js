import React, {Component} from 'react';

import {CheckInfoCard, ScripturePane, VerseCheck, VerseEditor, GroupMenu} from 'tc-ui-toolkit';

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', height:'100vh'}}>
        <GroupMenu />
        <div style={{display: 'flex', flexDirection: 'column', width:'100%'}}>
          <VerseCheck />
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {ScripturePane, VerseCheck, CheckInfoCard, GroupMenu, TranslationHelps} from 'tc-ui-toolkit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelps: false,
      showHelpsModal: false,
      remindersReducer: {
        enabled: false
      }
    };
  }

  toggleHelps() {
    this.setState({
      showHelps: !this.state.showHelps
    });
  }

  toggleHelpsModal() {
    this.setState({
      showHelpsModal: !this.state.showHelpsModal
    });
  }

  toggleReminder(event) {
    this.setState({
      remindersReducer: {
        ...this.state.remindersReducer,
        enabled: event.target.checked
      }
    });
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%'}}>
        <GroupMenu />
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'auto'}}>
          <ScripturePane />
          <CheckInfoCard
            toggleHelps={this.toggleHelps.bind(this)}
            showHelps={this.state.showHelps} />
          <VerseCheck/>
        </div>
        <TranslationHelps
          isShowHelpsExpanded={this.state.showHelpsModal}
          openExpandedHelpsModal={this.toggleHelpsModal.bind(this)}
          sidebarToggle={this.toggleHelps.bind(this)}
          isShowHelpsSidebar={this.state.showHelps} />
      </div>
    );
  }
}

export default App;

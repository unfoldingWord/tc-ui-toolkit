import React, {Component} from 'react';
import {ScripturePane, VerseCheck, CheckInfoCard, GroupMenu, TranslationHelps} from 'tc-ui-toolkit';
import {
  bibles,
  contextId,
  currentPaneSettings,
  projectDetailsReducer
} from './assets/scripturePaneProps';

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
      <div style={{display: 'flex', flexDirection: 'row', width: '100vw', height: '100vh'}}>
        <GroupMenu
          isVerseFinished={() => true}
          isVerseValid={() => false}
        />
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'auto'}}>
          <ScripturePane
            translate={k => k}
            bibles={bibles}
            contextId={contextId}
            currentPaneSettings={currentPaneSettings}
            projectDetailsReducer={projectDetailsReducer}
          />
          <CheckInfoCard
            translate={k => k}
            seeMoreLabel="see more"
            toggleHelps={this.toggleHelps.bind(this)}
            showHelps={this.state.showHelps} />
          <VerseCheck
            translate={k => k}
            verseText={'dummy text'}
            findIfVerseEdited={() => (true)}
            findIfVerseInvalidated={() => (true)}
            alignedGLText={'Dummy'}/>
        </div>
        <TranslationHelps
          translate={k => k}
          isShowHelpsExpanded={this.state.showHelpsModal}
          openExpandedHelpsModal={this.toggleHelpsModal.bind(this)}
          sidebarToggle={this.toggleHelps.bind(this)}
          isShowHelpsSidebar={this.state.showHelps} />
      </div>
    );
  }
}

export default App;

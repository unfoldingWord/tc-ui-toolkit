import React, {Component} from 'react';
import {ScripturePane, VerseCheck, CheckInfoCard, GroupedMenu, generateMenuData, TranslationHelps, TcuiThemeProvider, createTcuiTheme} from 'tc-ui-toolkit';
import {
  sampleIndex,
  sampleData,
  groupedMenufilters
} from './assets/groupedMenuProps';
import {
  bibles,
  contextId,
  currentPaneSettings,
  projectDetailsReducer
} from './assets/scripturePaneProps';
import {
  verseCheckActions,
  // verseCheckSelections
} from './assets/verseCheckProps';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelps: false,
      showHelpsModal: false,
      remindersReducer: {
        enabled: false
      },
      verseCheck: {
        mode: 'default',
        nothingToSelect: false
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
    const theme = createTcuiTheme({
      typography: {
        useNextVariants: true,
      },
      scrollbarThumb: {borderRadius: '10px'}
    });



    const statusIcons = groupedMenufilters.filter(f => f.id !== "incomplete");

    const entries = generateMenuData(sampleIndex, sampleData, 'done');

    return (
      <TcuiThemeProvider theme={theme}>
        <div style={{display: 'flex', flexDirection: 'row', width: '100vw', height: '100vh'}}>
          <GroupedMenu
            title="Menu"
            filters={groupedMenufilters}
            statusIcons={statusIcons}
            entries={entries}
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
              getScriptureFromReference={() => "Scripture Reference"}
              phrase="For the grace of God has appeared for the salvation of all people. Paul speaks of the grace of God [Titus 2:11](rc://en/ulb/book/tit/02/11) as if it were a person who goes to other people and trains them to live holy lives."
              translate={k => k}
              seeMoreLabel="see more"
              toggleHelps={this.toggleHelps.bind(this)}
              showHelps={this.state.showHelps} />
            <VerseCheck
              mode={this.state.mode}
              actions={{
                ...verseCheckActions,
                changeMode: (mode) => this.setState({ mode }),
                cancelComment: () => this.setState({ mode: 'default' }),
                cancelEditVerse: () => this.setState({ mode: 'default' }),
              }}
              toggleNothingToSelect={nothingToSelect => this.setState({ nothingToSelect })}
              // selections={verseCheckSelections}
              saveSelection={() => this.setState({ mode: 'default' })}
              nothingToSelect={this.state.nothingToSelect}
              selectionsReducer={{nothingToSelect: this.state.nothingToSelect, selections: []}}
              cancelSelection={() => this.setState({ mode: 'default' })}
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
      </TcuiThemeProvider>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {ScripturePane, VerseCheck, CheckInfoCard, GroupedMenu, generateMenuData, TranslationHelps, TcuiThemeProvider, createTcuiTheme} from 'tc-ui-toolkit';
import {
  bibles,
  contextId,
  currentPaneSettings,
  projectDetailsReducer
} from './assets/scripturePaneProps';

const sampleIndex = [
  {
    id: "chapter_1",
    name: "Chapter 1"
  },
  {
    id: "chapter_2",
    name: "Chapter 2"
  }
];

const sampleData = {
  chapter_1: [
    {
      contextId: {
        groupId: "chapter_1",
        reference: {
          bookId: "gal",
          chapter: 1,
          verse: 1
        }
      }
    },
    {
      contextId: {
        groupId: "chapter_1",
        reference: {
          bookId: "gal",
          chapter: 1,
          verse: 2
        }
      }
    },
    {
      contextId: {
        groupId: "chapter_1",
        reference: {
          bookId: "gal",
          chapter: 1,
          verse: 3
        }
      }
    }
  ],
  chapter_2: [
    {
      contextId: {
        groupId: "chapter_2",
        reference: {
          bookId: "gal",
          chapter: 2,
          verse: 1
        }
      }
    },
    {
      contextId: {
        groupId: "chapter_2",
        reference: {
          bookId: "gal",
          chapter: 2,
          verse: 2
        }
      }
    }
  ]
};

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
    const theme = createTcuiTheme({scrollbarThumb: {borderRadius: '10px'}});

    const entries = generateMenuData(sampleIndex, sampleData, 'completed');

    return (
      <TcuiThemeProvider theme={theme}>
        <div style={{display: 'flex', flexDirection: 'row', width: '100vw', height: '100vh'}}>
          <GroupedMenu
            title="Menu"
            filters={[]}
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
      </TcuiThemeProvider>
    );
  }
}

export default App;

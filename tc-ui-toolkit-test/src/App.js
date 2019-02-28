import React, {Component} from 'react';
import {ScripturePane, VerseCheck, CheckInfoCard, GroupedMenu, generateMenuData, TranslationHelps, TcuiThemeProvider, createTcuiTheme, CheckIcon} from 'tc-ui-toolkit';
import {
  bibles,
  contextId,
  currentPaneSettings,
  projectDetailsReducer
} from './assets/scripturePaneProps';
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BlockIcon from "@material-ui/icons/Block";
import EditIcon from "@material-ui/icons/Edit";

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
      done: true,
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
      edited: true,
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
      bookmarked: true,
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
      done: true,
      edited: true,
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

    const filters = [
      {
        label: "Bookmarked",
        key: 'bookmarked',
        icon: <BookmarkIcon style={{color: "white"}}/>
      },
      {
        label: "Complete",
        key: 'done',
        disables: ['incomplete'],
        icon: <CheckIcon style={{color: "white"}}/>
      },
      {
        label: "Incomplete",
        id: 'incomplete',
        key: 'done',
        value: false,
        disables: ['done'],
        icon: <BlockIcon style={{color: "white"}}/>
      },
      {
        label: "Edited",
        key: 'edited',
        icon: <EditIcon style={{color: "white"}}/>
      }
    ];

    const statusIcons = filters.filter(f => f.id !== "incomplete");

    const entries = generateMenuData(sampleIndex, sampleData, 'done');

    return (
      <TcuiThemeProvider theme={theme}>
        <div style={{display: 'flex', flexDirection: 'row', width: '100vw', height: '100vh'}}>
          <GroupedMenu
            title="Menu"
            filters={filters}
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

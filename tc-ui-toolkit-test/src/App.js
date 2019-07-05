import React, {Component} from 'react';
import { ScripturePane, VerseCheck, CheckInfoCard, GroupedMenu, generateMenuData, TranslationHelps, TcuiThemeProvider, createTcuiTheme } from 'tc-ui-toolkit';
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

const article = `
### Translation Strategies

If the personification would be understood clearly, consider using it. If it would not be understood, here are some other ways for translating it.

1. Add words or phrases to make it clear.
1. Use words such as “like” or “as” to show that the sentences is not to be understood literally.
1. Find a way to translate it without the personification.

### Examples of Translation Strategies Applied

1. Add words or phrases to make it clear.

  * ** ... <u>sin crouches</u> at the door** (Genesis 4:7 ULT) - God speaks of sin as a wild animal that is waiting for the chance to attack.  This shows how dangerous sin is. An additional phrase can be added to make this danger clear.
      * ... <u>sin</u> is at your door, <u>waiting to attack you</u>

1. Use words such as “like” or “as” to show that the sentences is not to be understood literally.

  * ** ... sin crouches at the door** (Genesis 4:7 ULT) - This can be translated with the word “as.”
      * ... sin is crouching at the door, just <u>as a wild animal does waiting to attack a person</u>.

1. Find a way to translate it without the personification.

  * ** ... even the <u>winds and the sea obey him</u>**  (Matthew 8:27 ULT) - The men speak of the “wind and the sea as if they are able to hear” and obey Jesus as people can. This could also be translated without the idea of obedience by speaking of Jesus controlling them.
      * He even <u>controls the winds and the sea</u>.


**Note**: We have broadened our definition of “personification” to include “zoomorphism” (speaking of other things as if they had animal characteristics) and “anthropomorphism” (speaking of non-human things as if they had human characteristics.)
`;

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
            modalArticle={article}
            article={article}
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

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
import { article } from './assets/thelps';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelps: false,
      showHelpsModal: false,
      remindersReducer: {
        enabled: false
      },
      tHelpsArticleReducer: {
        article: article
      },
      tags: [],
      mode: 'default',
      nothingToSelect: false
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

  onTHelpLinkClick(path) {
    this.setState({
      tHelpsArticleReducer: {
        ...this.state.tHelpsArticleReducer,
        article: 'This is where the tHelps article for ' + path + ' would be displayed',
      },
      showHelps: true,
    });
  }

  onItemClick() {
    // Reset the tHelps to a different article when a new group item is clicked, like we do in tC
    this.setState({
      tHelpsArticleReducer: {
        ...this.state.tHelpsArticleReducer,
        article: article,
      },
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
            onItemClick={this.onItemClick.bind(this)}
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
              getScriptureFromReference={(lang, resource, book, chapter, verse) => 'This would be the scripture reference for ' + lang + ' - ' + resource + ' - ' + book + ' ' + chapter + ':' + verse}
              phrase="For the grace of God has appeared for the salvation of all people. Paul speaks of the grace of God, [Titus 2:11](rc://en/ulb/book/tit/02/11), as if it were a person who goes to other people and trains them to live holy lives, [Titus 3:11](rc://en/ulb/book/tit/03/11). (See: [Word Completion](rc://en/ta/man/translate/word-completion) and [Some unknown link](rc://en/xxx/man/yyy/zzz) and [Personification](rc://en/ta/man/translate/figs-personification))"
              translate={k => k}
              seeMoreLabel="see more"
              toggleHelps={this.toggleHelps.bind(this)}
              showHelps={this.state.showHelps}
              onTHelpsLinkClick={this.onTHelpLinkClick.bind(this)}
            />
            <VerseCheck
              mode={this.state.mode}
              tags={this.state.tags}
              actions={{
                ...verseCheckActions,
                handleTagsCheckbox: (tag) => this.setState({ tags: [...this.state.tags, tag] }),
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
              alignedGLText={'Dummy'}
              maximumSelections={5} />
          </div>
          <TranslationHelps
            modalArticle={this.state.tHelpsArticleReducer.article}
            article={this.state.tHelpsArticleReducer.article}
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

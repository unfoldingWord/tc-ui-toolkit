import React, {Component} from 'react';
import {
  ScripturePane,
  VerseCheck,
  CheckInfoCard
} from 'tc-ui-toolkit';

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
      <div>
        <div style={{padding: '10px'}}>
          <ScripturePane
            titleLabel="Step 1. Read"
            closeButtonLabel="Close"
            expandedScripturePaneTitle="Matthew"
            expandButtonHoverText="Click to show expanded resource panes"
            clickToRemoveResourceLabel="Click to remove resource"
            clickAddResource="Click to add a resource"
            addResourceLabel={"Add Resources"}
            selectLanguageLabel={"Select language"}
            selectLabel={"Select"}
            showPopover={() => console.log('showPopover')}
            editTargetVerse={() => console.log('editTargetVerse')}
            projectDetailsReducer={{
              manifest: {
                target_language: {
                  book: {
                    name: 'Titus'
                  }
                }
              }
            }}
            translate={(text) => text}
            getLexiconData={() => {
              return {
                'ugl': {
                  '2532': {
                    "brief": "and, even, also, namely",
                    "long": "and, even, also, namely."
                  }
                }
              };
            }}
            selections={[
              {
                occurrence: 1,
                occurrences: 1,
                text: "servant"
              },
              {
                occurrence: 1,
                occurrences: 1,
                text: "an apostle"
              }
            ]}
            setToolSettings={() => {}}
          />
        </div>
        <div style={{padding: '10px'}}>
          <CheckInfoCard
            title='Title'
            phrase='This is the phrase'
            seeMoreLabel='See more'
            onSeeMoreClick={()=>{alert('Seeing more...')}}
            showSeeMoreButton={true}
          />
        </div>
        <div style={{padding: '10px'}}>
          <VerseCheck
            alignedGLText='text'
            verseText='verse text'
            mode='select'
            selections={[{text:'text',occurrence:1}]}
            remindersReducer={this.state.remindersReducer}
            toggleReminder={this.toggleReminder}
          />
        </div>
        <div style={{padding: '10px'}}>
          <VerseCheck 
            alignedGLText='text'
            verseText='verse text'
            mode='view'
            selections={[{text:'text',occurrence:1}]}
            remindersReducer={this.state.remindersReducer}
            toggleReminder={this.toggleReminder}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { VerseCheck, CheckInfoCard } from 'tc-ui-toolkit';

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
          />
        </div>
        <div style={{padding: '10px'}}>
          <VerseCheck 
            alignedGLText='text'
            verseText='verse text'
            mode='view'
            selections={[{text:'text',occurrence:1}]}
            remindersReducer={this.state.remindersReducer}
          />
        </div>
      </div>
    );
  }
}

export default App;

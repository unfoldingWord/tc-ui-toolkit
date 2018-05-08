import React, {Component} from 'react';
import {VerseCheck, CheckInfoCard, Bookmark} from 'tc-ui-toolkit';

class App extends Component {
  state = {
    bookmark: false,
  };

  handleBookmarkChange = event => {
    this.setState({[event.target.value]: event.target.checked});
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
          />
        </div>
        <div style={{padding: '10px'}}>
          <Bookmark
            value='bookmark'
            color='primary'
            checked={this.state.bookmark}
            label='Bookmark'
            onChange={this.handleBookmarkChange} />
        </div>
      </div>
    );
  }
}

export default App;

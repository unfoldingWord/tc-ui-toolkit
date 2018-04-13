import React, { Component } from 'react';

import { CheckInfoCard } from 'tc-ui-toolkit';

class App extends Component {
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <CheckInfoCard
          title="save, saves, saved, safe, salvation"
          phrase='The term "save" refers to keeping someone from experiencing something bad or harmful. To "be safe" means to be protected from harm or danger.'
          seeMoreLabel="See More"
          showSeeMoreButton={false}
          onSeeMoreClick={() => console.log('clicked')}
        />
      </div>
    );
  }
}

export default App;

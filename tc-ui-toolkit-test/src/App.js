import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CheckInfoCard, ScripturePane, TranslationHelps } from 'tc-ui-toolkit';

const article = ( 
<div>
  <p>
    <b> save, saves, saved, safe, salvation</b>
  </p>
  <p>
    Definition:
  </p>
  <p>
    The term "save" refers to keeping someone from experiencing something bad or harmful. To "be safe" means to be protected from harm or danger.
  </p>
  <p>
    In a physical sense, people can be saved or rescued from harm, danger, or death.
    In a spiritual sense, if a person has been "saved," then God, through Jesus' death on the cross, has forgiven him and rescued him from being punished in hell for his sin.
    People can save or rescue people from danger, but only God can save people from being punished eternally for their sins.
    The term "salvation" refers to being saved or rescued from evil and danger.`
  </p> 
</div>
);

class App extends Component {
  render() {
    return (
      <muiThemeProvider>
        <div className='container'>
          <div className='column1'>
            menu column<br/>place holder
          </div>

          <div className='column2'>
            <div className='scripture-item'>
              <ScripturePane
                titleLabel="Step 1. Read"
                closeButtonLabel="Close"
                expandedScripturePaneTitle="Matthew"
                expandButtonHoverText="Click to show expanded resource panes"
              />
            </div>
          
            <div className='info-item'>
              <CheckInfoCard
                title="save, saves, saved, safe, salvation"
                phrase='The term "save" refers to keeping someone from experiencing something bad or harmful. To "be safe" means to be protected from harm or danger.'
                seeMoreLabel="See More"
                showSeeMoreButton={true}
                onSeeMoreClick={() => console.log('CheckInfoCard clicked')}
                //onSeeMoreClick={() => TranslationHelps('Save') }
              />
            </div>
          </div>

          <div className='column3'>
            <div className='helps-item'>
              <TranslationHelps
                article={article} 
                expandedHelpsButtonHoverText="Click to show expanded help pane"
                openExpandedHelpsPane={() => console.log('Expanded translation helps clicked')}
              />
            </div>
          </div>
        </div>
      </muiThemeProvider>
    );
  }
}

export default App;

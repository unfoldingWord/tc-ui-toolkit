import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme }  from 'material-ui/styles';
import { CheckInfoCard, ScripturePane, TranslationHelps } from 'tc-ui-toolkit';
import { VerseCheck, CheckInfoCard } from 'tc-ui-toolkit';

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
    <p> 
      In a physical sense, people can be saved or rescued from harm, danger, or death.
      In a spiritual sense, if a person has been "saved," then God, through Jesus' death on the cross, has forgiven him and rescued him from being punished in hell for his sin.
      People can save or rescue people from danger, but only God can save people from being punished eternally for their sins.
      The term "salvation" refers to being saved or rescued from evil and danger.`
    </p> 
    <p>
      In a physical sense, people can be saved or rescued from harm, danger, or death.
      In a spiritual sense, if a person has been "saved," then God, through Jesus' death on the cross, has forgiven him and rescued him from being punished in hell for his sin.
      People can save or rescue people from danger, but only God can save people from being punished eternally for their sins.
      The term "salvation" refers to being saved or rescued from evil and danger.`
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
  constructor(props) {
    super(props);
    this.state = {
      isShowHelpsSidebar: false,
      isShowHelpsExpanded: false,
      remindersReducer: {
        enabled: false
      }
    };
  }
  
  handleSidebarToggle(){
    console.log('handlSidebarToggle: ' + this.state.isShowHelpsSidebar);
    this.setState({
      isShowHelpsSidebar: !this.state.isShowHelpsSidebar
    });
  }

  handleHelpsExpandedToggle() {
    console.log('handleHelpsExpandedToggle: ' + this.state.isShowHelpsExpanded);
    this.setState({
      isShowHelpsExpanded: !this.state.isShowHelpsExpanded

  toggleReminder = (event) => {
    this.setState({
      remindersReducer: {
        ...this.state.remindersReducer,
        enabled: event.target.checked
      }
    });
  }

  render() {
    const theme = createMuiTheme({scrollbarThumb: { borderRadius: '10px'}});

    return (
      <MuiThemeProvider muiTheme={theme}> 
        <div className='app-container' style={{ height: 'calc(100vh - 2px)' }} > 
          <div className='home-container'>
            Home placeholder
          </div>

          <div className='column-container'>
            <div className='column1'>
              menucolumn<br/>placeholder
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
                  //onSeeMoreClick={() => console.log('CheckInfoCard clicked')}
                  onSeeMoreClick={() => this.handleSidebarToggle() }
                />
              </div>
              <div className='selection-pane'>
                <VerseCheck 
                  alignedGLText='text'
                  verseText='verse text'
                  mode='select'
                  selections={[{text:'text',occurrence:1}]}
                  remindersReducer={this.state.remindersReducer}
                  toggleReminder={this.toggleReminder}
                />
              </div>
            </div>

            <div className='column3'style={{
              width: this.state.isShowHelpsSidebar ? '27%' : '1px'
            }}>
              <div className='helps-item'>
                <TranslationHelps
                  article={article} 
                  expandedHelpsButtonHoverText="Click to show expanded help pane"
                  openExpandedHelpsModal={() =>  this.handleHelpsExpandedToggle()}
                  isShowHelpsSidebar={this.state.isShowHelpsSidebar}
                  sidebarToggle={() => this.handleSidebarToggle()}
                  isShowHelpsExpanded={this.state.isShowHelpsExpanded}
                  modalTitle="translationHelps"
                /> 
              </div> 
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

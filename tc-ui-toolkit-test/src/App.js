import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme }  from 'material-ui/styles';
import {Glyphicon} from 'react-bootstrap';
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
    };
  }
  
  handleSidebarToggle(){
    console.log('handlSidebarToggle: ' + this.state.isShowHelpsSidebar);
    this.setState({
      isShowHelpsSidebar: !this.state.isShowHelpsSidebar
    });
  }

  render() {
    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
        <div className='app-container'> 
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
                Selection Pane Place Holder
              </div>
            </div>

            <div className='column3'>
              <div className="helps-sash">
                <Glyphicon
                  glyph={this.state.isShowHelpsSidebar ? 
                    "chevron-right" : 
                    "chevron-left"} 
                  style={{cursor: "pointer"}} 
                  onClick={() => this.handleSidebarToggle() }
                />
              </div>
            </div>

            <div className='column4'
              style={{
                display: this.state.isShowHelpsSidebar ?
                  'block' :
                  'none'
              }}
            >
              <div className='helps-item'>
                <TranslationHelps
                  article={article} 
                  expandedHelpsButtonHoverText="Click to show expanded help pane"
                  openExpandedHelpsPane={() => console.log('Expanded translation helps clicked')}
                  isShowHelpsSidebar={this.state.isShowHelpsSidebar}
                  sidebarToggle={() => this.handleSidebarToggle()}
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

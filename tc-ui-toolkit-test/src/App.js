import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import { TranslationHelps } from 'tc-ui-toolkit';

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

  handleSidebarToggle() {
    console.log('handlSidebarToggle: ' + this.state.isShowHelpsSidebar);
    this.setState({
      isShowHelpsSidebar: !this.state.isShowHelpsSidebar
    });
  }

  handleHelpsExpandedToggle() {
    console.log('handleHelpsExpandedToggle: ' + this.state.isShowHelpsExpanded);
    this.setState({
      isShowHelpsExpanded: !this.state.isShowHelpsExpanded
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
    return (
      <TranslationHelps
        article={article}
        openExpandedHelpsModal={() => this.handleHelpsExpandedToggle()}
        isShowHelpsSidebar={this.state.isShowHelpsSidebar}
        sidebarToggle={() => this.handleSidebarToggle()}
        isShowHelpsExpanded={this.state.isShowHelpsExpanded}
      />
    );
  }
}

export default App;

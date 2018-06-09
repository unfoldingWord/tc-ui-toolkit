import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../VerseCheck.styles.css';
// components
import RenderSelectionTextComponent from '../RenderSelectionTextComponent';

class SelectionArea extends Component {
  constructor() {
    super();
    this.state = {
      inBox: false,
      modalVisibility: false
    };
  }

  render() {
    const {manifest, reference, translate} = this.props;
    const {target_language, project} = manifest;
    const bookName = target_language && target_language.book && target_language.book.name ?
      target_language.book.name : project.name;
    const languageName = manifest.target_language ? manifest.target_language.name : null;
    return (
      <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <div className='verse-title'>
          <div className='pane' style={{display: 'flex', flexDirection: 'column'}}>
            <span className='verse-title-title'>
              {languageName}
            </span>
            <span className='verse-title-subtitle'>
              {bookName} {reference.chapter + ':' + reference.verse}
            </span>
          </div>
        </div>
        <div>
          <div className={manifest.target_language.direction === 'ltr' ? 'ltr-content' : 'rtl-content'}>
            <RenderSelectionTextComponent
              translate={translate}
              actions={this.props.actions}
              mode={this.props.mode}
              verseText={this.props.verseText}
              selections={this.props.selections}
            />
          </div>
        </div>
      </div>
    );
  }
}

SelectionArea.propTypes = {
  actions: PropTypes.shape({
    changeSelectionsInLocalState: PropTypes.func,
    openAlertDialog: PropTypes.func,
  }).isRequired,
  manifest: PropTypes.object,
  reference: PropTypes.object,
  mode: PropTypes.string.isRequired,
  verseText: PropTypes.string.isRequired,
  selections: PropTypes.array.isRequired,
  translate: PropTypes.func.isRequired
};

export default SelectionArea;

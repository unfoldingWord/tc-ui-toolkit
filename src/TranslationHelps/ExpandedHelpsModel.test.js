import React, { Component } from 'react'
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import ExpandedHelpsModal from './ExpandedHelpsModal';

describe('Test ExpandedHelpsModal component',()=>{
  test('Test initial display', () => {
    const props = {
      show: true
    }

    const tree = renderer
      .create(
        <div>
         <ExpandedHelpsModal
          //show={isShowHelpsExpanded} 
          show={false}
         /* onHide={openExpandedHelpsModal}
          //title={modalTitle}
          article={article} */ 
        /> 
        </div>)
      .toJSON();
    expect(tree).toEqual(<div><p>hello dialog</p></div>);
  });
});

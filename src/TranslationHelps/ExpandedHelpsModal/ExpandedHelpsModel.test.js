import React, {Component} from 'react'
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import ExpandedHelpsModal from './';

describe('Test ExpandedHelpsModal component', () => {
  test('Test initial display', () => {
    const props = {
      show: true
    }

    const tree = renderer
      .create(
        <div>
          <ExpandedHelpsModal
            show={false}
          />
        </div>)
      .toJSON();
    expect(tree).toEqual(<div><p>hello dialog</p></div>);
  });
});

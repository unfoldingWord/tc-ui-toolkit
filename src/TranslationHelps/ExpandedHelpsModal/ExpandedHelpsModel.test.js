import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {mount} from 'enzyme';

import ExpandedHelpsModal from './';

describe('Test ExpandedHelpsModal component', () => {
  test('Test initial display', () => {

    const theme = createMuiTheme({scrollbarThumb: {borderRadius: '10px'}});
    const expectedTitle = 'Title';
    const wrapper = mount(
      <MuiThemeProvider theme={theme}>
        <ExpandedHelpsModal
          show={true}
          onHide={() => {}}
          title={expectedTitle}
          article={'Test article'}
        />
      </MuiThemeProvider>)
    expect(wrapper.find('.tool-bar-title').text(expectedTitle))
  });
});

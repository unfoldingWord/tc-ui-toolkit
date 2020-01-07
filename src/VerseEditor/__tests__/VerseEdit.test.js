/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import VerseEditor from '../VerseEditor';

const mock_translate = (text) => (text);

describe('VerseEditor component:', () => {

  test('should render', () => {
    // given
    const theme = createMuiTheme({
      typography: { useNextVariants: true },
      scrollbarThumb: { borderRadius: '10px' },
    });
    const props = getBasePropertiesAndMockActions();

    // when
    const component = renderer.create(
      <MuiThemeProvider theme={theme}>
        <VerseEditor {...props} />
      </MuiThemeProvider>
    );

    // then
    expect(component.toJSON()).toMatchSnapshot();
  });
});

//
// helpers
//

function getBasePropertiesAndMockActions() {
  const props = {
    open: true,
    verseTitle: 'Dummy Title',
    verseText: 'Dummy Text',
    translate: mock_translate,
    onCancel: () => jest.fn(),
    onSubmit: () => jest.fn(),
    targetLanguage: 'Klingon',
  };

  return props;
}

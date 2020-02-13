/* eslint-env jest */
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import CommentsDialog from '../CommentsDialog';

const mock_translate = (text, params) => {
  if (params) {
    text += ': ' + JSON.stringify(params);
  }
  return text;
};

describe('CommentsDialog component:', () => {
  test('should render', () => {
    // given
    const props = getBasePropertiesAndMockActions();

    // when
    const wrapper = shallow(
      <CommentsDialog {...props} />
    );

    // then
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

//
// helpers
//

function getBasePropertiesAndMockActions() {
  const props = {
    open: true,
    verseTitle: 'Rom 3:13',
    comment: 'Comment Text',
    translate: mock_translate,
    onClose: () => jest.fn(),
    onSubmit: () => jest.fn(),
    targetLanguage: 'Klingon',
  };

  return props;
}

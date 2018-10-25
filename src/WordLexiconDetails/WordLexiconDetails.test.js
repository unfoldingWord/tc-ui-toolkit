import React from 'react';
import WordDetails from './WordLexiconDetails';
import renderer from 'react-test-renderer';

describe('WordDetails', () => {
  it('renders', () => {
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
         wordObject={{
           lemma: 'lemma',
           morph: 'Gr,NS,,,,GMP,',
           strong: 'strong'
         }}
         translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

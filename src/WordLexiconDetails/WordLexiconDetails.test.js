import React from 'react';
import WordDetails from './WordLexiconDetails';
import renderer from 'react-test-renderer';

describe('WordDetails', () => {
  it('renders Greek', () => {
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
        wordObject={{
          lemma: 'lemma',
          morph: 'Gr,NS,,,,GMPF',
          strong: 'strong'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders Hebrew', () => {
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
        wordObject={{
          lemma: 'lemma',
          morph: 'He,R:Ncfsa',
          strong: 'b:H7225'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

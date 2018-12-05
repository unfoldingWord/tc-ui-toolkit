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
          strong: 'G1230'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Hebrew two part', () => { // Gen 1:1 word 1
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
        wordObject={{
          text: "בְּ​רֵאשִׁ֖ית",
          lemma: 'אשִׁירֵת',
          morph: 'He,R:Ncfsa',
          strong: 'b:H7225'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Hebrew single part', () => { // Gen 1:1 word 2
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
        wordObject={{
          text: "בָּרָ֣א",
          lemma: 'בָּרָא',
          morph: 'He,Vqp3ms',
          strong: 'H1254a'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Hebrew three part', () => { // Gen 1:2 word 1
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
        wordObject={{
          text: "וְ​הָ​אָ֗רֶץ",
          lemma: 'אֶרֶץ',
          morph: 'He,C:Td:Ncbsa',
          strong: 'c:d:H0776'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Hebrew two part with suffix', () => { // Gen 1:11 word 15
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
        wordObject={{
          text: "זַרְע​וֹ",
          lemma: 'זֶרַע',
          morph: 'He,Ncmsc:Sp3ms',
          strong: 'H2233'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Hebrew three part with suffix', () => { // Gen 1:12 word 14
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
        wordObject={{
          text: "לְ​מִינ֔​וֹ",
          lemma: 'מִין',
          morph: 'He,R:Ncmsc:Sp3ms',
          strong: 'l:H4327'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Hebrew extra word part', () => { // 2ki-20:17.16
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
        wordObject={{
          text: "בָּבֶֽלָ​ה",
          lemma: 'בָּבֶל',
          morph: 'He,Np',
          strong: 'H0894'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Hebrew missing strongs part', () => { // dan-3:16.6
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
        wordObject={{
          text: "לְ​מַלְכָּ֣​א",
          lemma: 'מֶלֶךְ',
          morph: 'Ar,R:Ncmsd:Td',
          strong: 'l:H4430'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Hebrew with no strongs number', () => { // jdg-1:1 last
    const wrapper = renderer.create(
      <WordDetails
        lexiconData={{}}
        wordObject={{
          text: "בּֽ​וֹ",
          lemma: '',
          morph: 'He,R:Sp3ms',
          strong: 'b'
        }}
        translate={k=>k}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

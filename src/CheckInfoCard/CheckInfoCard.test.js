import React from 'react';
import CheckInfoCard from './CheckInfoCard';
import renderer from 'react-test-renderer';


describe('CheckInfoCard', () => {
  it('renders correctly', () => {
    const props = {
      title: "save, saves, saved, safe, salvation",
      phrase: 'The term "save" in [Titus 2:1](rc://en/ult/book/tit/02/01) refers to keeping someone from experiencing something bad or harmful. To "be safe" means to be protected from harm or danger. (See [Metaphor](rc://en/ta/man/figures/figs-metaphor))',
      seeMoreLabel: "See More",
      showSeeMoreButton: true,
      onSeeMoreClick: jest.fn,
      onTHelpsLinkClick: jest.fn,
      getScriptureFromReference: () => 'reference text'
    };
    const tree = renderer.create(<CheckInfoCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

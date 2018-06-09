import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';

const THelpsMarkDown = ({ article }) => (
  <div className="helps-article">
    <style dangerouslySetInnerHTML={{
      __html: [
        '.remarkableStyling h1{',
        'font-size: 19px;',
        'font-weight: bold;',
        '}',
        '.remarkableStyling h2{',
        'font-size: 14px;',
        'font-weight: normal;',
        '}',
        '.remarkableStyling h3{',
        'font-size: 16px;',
        'font-weight: bold;',
        '}',
        '.remarkableStyling h4{',
        'font-size: 16px;',
        'font-weight: bold;',
        '}',
        '.remarkableStyling blockquote {',
        'font-size: small;',
        '}',
        '.remarkableStyling blockquote strong {',
        'text-decoration: underline;',
        'font-weight: normal;',
        '}'
      ].join('\n')
    }}>
    </style>
    <div id="helpsbody" className="remarkableStyling helpsBody">
      <Markdown options={{html: true}} source={article} />
    </div>
  </div>
);

THelpsMarkDown.propTypes = {
  article: PropTypes.string.isRequired,
};

export default THelpsMarkDown;

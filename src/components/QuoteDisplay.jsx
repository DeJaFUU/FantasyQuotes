import React from 'react';

import Quote from './quote.svg'
import './QuoteDisplay.css';

const QuoteDisplay = ({ title, text, author}) => (
    <div className="quote-box">
        <img src={Quote} className="top" alt="quotation marks" />
        <h2 className="quote-title">Quote from {title}</h2>
        <span className="quote-text">{text}</span>
        <h3 className="quote-author">- {author}</h3>
        <img src={Quote} className="UpsideDown"alt="quotation marks2" />
    </div>
)

export default QuoteDisplay;
import React from 'react';

import './QuoteButton.css'

const QuoteButton = ({onClick}) => (
    <button className="quote-button" onClick={onClick}>
        Give me a new one!
    </button>
)

export default QuoteButton;
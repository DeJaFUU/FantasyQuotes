import React from 'react';

import './ShareButton.css'

const ShareButton = ({ quote, author}) => (
    <button className="share-button">
        <a 
        href={`https://twitter.com/intent/tweet?text=${quote} ~ ${author}`}
        target="_blank"
        rel="noopener noreferrer"
        >
        Share with the world!
        </a>
    </button>
)

export default ShareButton;
import React, { useState } from 'react';
import './App.css'

import firebase  from '../src/firebase/firebase.utils';

import QuoteDisplay from '../src/components/QuoteDisplay'
import QuoteButton from '../src/components/QuoteButton'
import ShareButton from '../src/components/ShareButton'
import MoonLoader from 'react-spinners/MoonLoader'

function App(){

  const quoteMounter = async () => {
    const quoteRef = firebase.database().ref("quotes");
    const snapshot = await quoteRef.once('value');
    setQuotes(snapshot.val())
  }

  const [number, setNumber] = useState(10);
  const [quotes, setQuotes] = useState(quoteMounter);

  const quoteClick = () => setNumber(Math.floor(Math.random() * Object.keys(quotes).length) +1);

  const style = { position: "fixed", top: "35%", left: "50%", transform: "translate(-50%, -50%)" };

    return (
      <div className="App">
        <h1>Random Quote Generator </h1>
        { quotes[number]
        ? <>
          <QuoteDisplay title={quotes[number].source} text={quotes[number].text} author={quotes[number].author} />
            <QuoteButton onClick={quoteClick} />
            <ShareButton quote={quotes[number].text} author={quotes[number].author} />
          </>
        : <div style={style}>
            <MoonLoader 
              size={200}
            /> 
          </div>}
      </div>
    )
}

export default App;
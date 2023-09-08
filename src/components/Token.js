import React from 'react'
import "../App.css";

const Token = ({item}) => {
  return (
    <>
      <div className='cards'>
        <div className='card1'>
          <h1>Basic Info</h1>
          <h2>
            Pair created at <p>{item.pairCreatedAt}</p>
          </h2>
          <h2>
            Symbol <p>{item.baseToken.symbol}</p>
          </h2>
          <h2>
            Dex ID <p>{item.dexId}</p>
          </h2>
          <h2>
            Pair Address <p>{item.pairAddress}</p>
          </h2>
        </div>
        <div>
          <h1>Base Token</h1>
          <h2>
            Name <p>{item.baseToken.name}</p>
          </h2>
          <h2>
            Symbol <p>{item.baseToken.symbol}</p>
          </h2>
          <h2>
            Address <p>{item.baseToken.address}</p>
          </h2>
        </div>
        <div>
          <h1>Quote Token</h1>
          <h2>
            Name <p>{item.quoteToken.name}</p>
          </h2>
          <h2>
            Symbol <p>{item.quoteToken.symbol}</p>
          </h2>
          <h2>
            Address <p>{item.quoteToken.address}</p>
          </h2>
        </div>
        <div>
          <h1>Price</h1>
          <h2>
            Price Native <p>{item.priceNative}</p>
          </h2>
          <h2>
            Price USD <p>{item.priceUsd}</p>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Token
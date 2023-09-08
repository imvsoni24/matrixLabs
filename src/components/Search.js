import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineToken } from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineSearch } from "react-icons/ai";

const Search = ({active}) => {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");
  const getSearchData = async () => {
    let res = await fetch(
      `https://api.dexscreener.com/latest/dex/search/?q=${search}`
    );
    res = await res.json();
    res = res.pairs.slice(0,10)
    let sortedData = res.sort((a, b) => b.priceUsd - a.priceUsd)
    setData(sortedData);
  };


  

  return (
    <div className="mainDiv">
      <div className="mainTopDiv">
        <div className="searchDiv">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AiOutlineSearch
            onClick={getSearchData}
            style={{ marginTop: "1px", fontSize: "24px", cursor: "pointer" }}
          />
        </div>
        <button className="connect">Connect</button>
      </div>

      <div className="mainBottomDiv">
        <p>
          {active === "token"
            ? "Token Search Results"
            : active === "pair"
            ? "Pair Search Results":""}
        </p>

        <div>
          {data.map((item) => {
            return (
              <div key={item.url} className="cards">
                <div className="card">
                  <div className="Box">
                    <p>Basic Info</p>
                    <div className="BoxContent">
                      <p>Pair created at</p>
                      <p>{item.pairCreatedAt}</p>
                    </div>
                    <div className="BoxContent">
                      <p>Symbol</p>
                      <p>{item.baseToken.symbol}</p>
                    </div>
                    <div className="BoxContent">
                      <p>Dex ID</p>
                      <p>{item.dexId}</p>
                    </div>
                    <div className="BoxContent">
                      <p>Pair Address</p>
                      <p>{item.pairAddress}</p>
                    </div>
                  </div>
                  <div className="Logo">
                    <AiOutlineInfoCircle
                      style={{ marginTop: "1px", fontSize: "24px" }}
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="Box">
                    <p>Base Token</p>
                    <div className="BoxContent">
                      <p>Name</p>
                      <p>{item.baseToken.name}</p>
                    </div>
                    <div className="BoxContent">
                      <p>Symbol</p>
                      <p>{item.baseToken.symbol}</p>
                    </div>
                    <div className="BoxContent">
                      <p>Address</p>
                      <p>{item.baseToken.address}</p>
                    </div>
                  </div>
                  <div className="Logo">
                    <MdOutlineToken
                      style={{ marginTop: "1px", fontSize: "24px" }}
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="Box">
                    <p>Quote Token</p>
                    <div className="BoxContent">
                      <p>Name</p>
                      <p>{item.quoteToken.name}</p>
                    </div>
                    <div className="BoxContent">
                      <p>Symbol</p>
                      <p>{item.quoteToken.symbol}</p>
                    </div>
                    <div className="BoxContent">
                      <p>Address</p>
                      <p>{item.quoteToken.address}</p>
                    </div>
                  </div>
                  <div className="Logo">
                    <MdOutlineToken
                      style={{ marginTop: "1px", fontSize: "24px" }}
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="Box">
                    <p>Price</p>
                    <div className="BoxContent">
                      <p>Price Native</p>
                      <p>{item.priceNative}</p>
                    </div>
                    <div className="BoxContent">
                      <p>Price USD</p>
                      <p>{item.priceUsd}</p>
                    </div>
                  </div>
                  <div className="Logo">
                    <FaDollarSign
                      style={{ marginTop: "1px", fontSize: "20px" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from "react";

function Stock({stock, handleClick}) {
  const {name, price, ticker} = stock



  return (
    <div>
      <div onClick={()=>handleClick(stock)} className="card" onKeyDown={handleKeyDown}  >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: ${price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

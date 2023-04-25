import React from "react";
import Stock from "./Stock";

function PortfolioContainer({port, sellStock}) {
  const portList = port.map(stock => (
    <Stock key={stock.id} stock={stock} handleClick={sellStock} />
    ) 
  )

  return (
    <div>
      <h2>My Portfolio</h2>
      
        {portList}
      
    </div>
  );
}

export default PortfolioContainer;

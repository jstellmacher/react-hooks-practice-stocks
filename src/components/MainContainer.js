import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const [stocks, setStocks]= useState([])
const [port, setPort]= useState([])

const [sort,setSort] = useState("Alphabetically")
const [filter,setFilter] = useState("Tech")

useEffect(()=>{
  fetch("http://localhost:3001/stocks")
  .then((r)=>r.json())
  .then((stocks) => setStocks(stocks))
}, []);

const sellStock = (stock) => {
  const newPort = port.filter((s)=> s.id !== stock.id )
  setPort(newPort)
}

const buyStock = (stock) => {
  if(!port.includes(stock)){
    setPort([...port, stock])
  }
};

const sortStocks = [...stocks]
.sort((a, b)=>{
  if(sort === "Alphabetically"){
    return a.name.localeCompare(b.name)
  } else {
    return b.price - a.price
  }
})
.filter((stock)=>
  stock.type === filter)

  return (
    <div>
      <SearchBar sort={sort} sChange={setSort} filter={filter} fChange={setFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortStocks} buyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer port={port} sellStock={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

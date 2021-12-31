import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Punklisk from "./components/Punklisk";


function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async  () => {

      const opennseaData = await axios.get(

        'https://testnets-api.opensea.io/assets?asset_contract_address=0xBcd9E1D895c0A0843cd42f2b014D24f59626BC2e&order_direction=asc'

      )
      console.log(opennseaData.data.assets)
      setPunkListData(opennseaData.data.assets)
    }
    return getMyNfts()
  }, [])
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklisk punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  );
}

export default App;

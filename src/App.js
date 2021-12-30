import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Punklisk from "./components/Punklisk";


function App() {
  // const [punkListData, setPunkListData] = useState([])
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
// https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract
  return (
    <div className="app">
      <Header />
      {/* <Main /> */}
      {/* <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
      /> */}
      {/* <Punklisk PunkLiskData={punkListData} /> */}
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
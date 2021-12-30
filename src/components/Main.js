import React, { useEffect, useState } from "react";
import instramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";
// { selectedPunk, punkListData }
const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [selectedPunk, punkListData]);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.img_original_url}
              alt="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">.#{activePunk.token_id}</span>
          </div>
          
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} />
            
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              {/* <div>0xf454126D0dA6aB6024DA0F634DAA06eA103141EC</div> */}
              <div>{activePunk.owner.address}</div>
              <div className="ownerHandle">@dilbarhassan37</div>
            </div>
            <div className="ownerLink">
              <img src={instramLogo} />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

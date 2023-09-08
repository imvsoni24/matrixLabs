import React, { useState } from "react";
import { MdToken } from "react-icons/md";
import { TbPhotoHexagon} from "react-icons/tb";
import { PiExcludeSquareThin } from "react-icons/pi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "../App.css"

const Sidebar = ({ setActive }) => {

    const handleToken=()=>{
        setActive("token")
    }
    const handlePair=()=>{
        setActive("pair")
    }
  

  return (
    <div className="sidebar">
      <div>
        <div className="heading">
          <TbPhotoHexagon style={{ marginTop: "25px", fontSize: "30px" }} />
          <div className="nftify">𝓷𝓕𝓣𝓲𝓯𝔂</div>
        </div>

        <div>
          <button className="token" onClick={handleToken}>
            <MdToken style={{ marginTop: "1px", fontSize: "24px" }} />
            <div>Token Address</div>
          </button>
          <button className="pair" onClick={handlePair}>
            <PiExcludeSquareThin
              style={{ marginTop: "1px", fontSize: "24px" }}
            />
            <div>Pair Address</div>
          </button>
        </div>
      </div>
      <div className="socialIcon">
        <FaFacebookF
          style={{
            fontSize: "20px",
            backgroundColor: "#F30050",
            padding: "4px",
            borderRadius: "6px",
          }}
        />
        <FaLinkedinIn
          style={{
            fontSize: "20px",
            backgroundColor: "#F30050",
            padding: "4px",
            borderRadius: "6px",
          }}
        />
        <FaTwitter
          style={{
            fontSize: "20px",
            backgroundColor: "#F30050",
            padding: "4px",
            borderRadius: "6px",
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;

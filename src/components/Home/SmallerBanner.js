import React, { useEffect, useState } from "react";
import "./SmallerBanner.css";
import playStation from "../../assets/PlayStation.png";
import playStationFull from "../../assets/Banner/PlayStationFull.png";
import MacBook from "../../assets/MacBook Pro 14mac.svg";
import MacBookfull from "../../assets/Banner/MacBookfull.png";
import Airpod from "../../assets/headset.png";
import AirpodFull from "../../assets/Banner/headsetfull.png";
import Vision from "../../assets/vision.png";
import VisionFull from "../../assets/Banner/visionfull.png";
import { Link } from "react-router-dom";
export default function SmallerBanner() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 460);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div class="wrapper">
      <div class="box a">
        <img src={isSmallScreen ? playStationFull : playStation} />
        <div className="productContent">
          <p class="bannerproductName">Playstation 5</p>
          <p>
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div class="box b">
        <div className="productContent">
          <p class="bannerproductName">Macbook Air</p>
          <p>
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <Link to="/product" className="macBtn">
            Shop Now
          </Link>
        </div>
        <img src={isSmallScreen ? MacBookfull : MacBook} />
      </div>
      <div class="box c">
        <img src={isSmallScreen ? AirpodFull : Airpod} />
        <div className="productContent">
          <p class="bannerproductName">Apple AirPods Max</p>
          <p>Computational audio. Listen, it's powerful</p>
        </div>
      </div>
      <div class="box d">
        <img src={isSmallScreen ? VisionFull : Vision} />
        <div className="productContent visioncontent">
          <p class="bannerproductName visionName">Apple Vision Pro</p>
          <p>An immersive way to experience entertainment</p>
        </div>
      </div>
    </div>
  );
}

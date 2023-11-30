import React, { useState } from "react";
import "./Specification.css";
import Up from "../../assets/Filter/up.png";
import Down from "../../assets/Filter/down.png";

export default function Specification() {
  const [view, setView] = useState(false);
  return (
    <div className="specification">
      <div className="detailsSummary">
        <p>Details</p>
        <p>
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display. Nothing surprising,
          because advanced technologies allow you to practically level the
          display frames and cutouts for the front camera and speaker, leaving
          no room for bold design solutions. And how good that in such realities
          Apple everything is fine with displays. Both critics and mass
          consumers always praise the quality of the picture provided by the
          products of the Californian brand. And last year's 6.7-inch Retina
          panels, which had ProMotion, caused real admiration for many.
        </p>
      </div>
      <div className="screenDetails">
        <p>Screen</p>
        <div className="screenSpec">
          <p>Screen diagonal</p>
          <p>6.7"</p>
        </div>
        <div className="screenSpec">
          <p>The Screen resolution</p>
          <p>2796x1290</p>
        </div>
        <div className="screenSpec">
          <p>The screen refresh rate</p>
          <p>120Hz</p>
        </div>
        <div className="screenSpec">
          <p>The pixel density</p>
          <p>460 ppi</p>
        </div>
        <div className="screenSpec">
          <p>Screen type</p>
          <p>OLED</p>
        </div>
        <div className="screenSpec">
          <p>Additionally</p>
          <div>
            <p>Dynamic sland</p>
            <p>HDR display</p>
            <p>True Tone</p>
            <p>Wide color (P3)</p>
          </div>
        </div>
      </div>
      {view ? (
        <div className="screenDetails">
          <p>CPU</p>
          <div className="screenSpec">
            <p>CPU</p>
            <p>A16 Bionic</p>
          </div>
          <div className="screenSpec">
            <p>Number of cores</p>
            <p>6</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <button className="viewMoreBtn" onClick={() => setView(!view)}>
        View More
        {view ? <img src={Up} alt="icon" /> : <img src={Down} alt="icon" />}
      </button>
    </div>
  );
}

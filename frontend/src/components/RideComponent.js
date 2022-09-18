import React from "react";

const RideComponent = () => {
  return (
    <div className="activeride">
      <div>
        <p className="name">Sara's ride</p>
        <p className="places">From: xyz</p>
        <p className="places">To: abz</p>
        <p className="people">4 people riding</p>

        <div style={{ display: "flex" }}>
          <button
            style={{
              width: "7rem",
              "font-size": "0.8rem",
              height: "1.5rem",
              fontWeight: "500",
            }}
          >
            end this ride
          </button>
          <p style={{ fontSize: "0.8rem", marginLeft: "1rem", opacity: 0.7 }}>
            Total ride estimate: INR 200
          </p>
        </div>
      </div>
    </div>
  );
};

export default RideComponent;

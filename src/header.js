import React from "react";

const Header = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col">
          <h1
            style={{
              color: "white",
              userSelect: "none",
              fontFamily: "Slabo 27px",
            }}
          >
            hulu
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

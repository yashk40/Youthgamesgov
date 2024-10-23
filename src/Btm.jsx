import React from "react";
import "./Btm.css";

export default function Btm() {
  return (
    <div>
      <div className="whole">
        <h1
          id="game"
          style={{ fontWeight: "500", margin: "5%" }}
        >
          Our Games
        </h1>
        <div className="container mt-4 "  style={{boxShadow:'none'}}>
          <div className="row">
            <div className="col">
              <div className="card h-00">
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="image-wrapper">
                      <img src="./crickett.png" alt="Cricket" />
                    </div>
                  </h5>
                  <h1 className="card-text">Cricket</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="image-wrapper">
                      <img src="./football.gif" alt="Football" />
                    </div>
                  </h5>
                  <h1 className="card-text">Football</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="image-wrapper">
                      <img src="./hockey.jpg" alt="Basketball" />
                    </div>
                  </h5>
                  <h1 className="card-text">Hockey</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="image-wrapper">
                      <img src="./tennis.jpg" alt="Tennis" />
                    </div>
                  </h5>
                  <h1 className="card-text">Tennis</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="image-wrapper">
                      <img src="./kabbadi.jpg" alt="kabbadi" />
                    </div>
                  </h5>
                  <h1 className="card-text">Kabbadi</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="image-wrapper">
                      <img src="./basketball-.png" alt="Baseball" />
                    </div>
                  </h5>
                  <h1 className="card-text">Basketball</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="image-wrapper">
                      <img src="./Athlete.jpg" alt="Hockey" />
                    </div>
                  </h5>
                  <h1 className="card-text">Athlete</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="image-wrapper">
                      <img src="./vlley.jpg" alt="Rugby" />
                    </div>
                  </h5>
                  <h1 className="card-text">Volleyball</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="image-wrapper">
                      <img src="./boxingvd.gif" alt="Volleyball" />
                    </div>
                  </h5>
                  <h1 className="card-text">Boxing</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <div className="image-wrapper">
                      <img src="./kho3.svg" alt="Boxing" />
                    </div>
                  </h5>
                  <h1 className="card-text">Kho Kho</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
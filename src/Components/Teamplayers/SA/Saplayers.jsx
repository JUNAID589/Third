import ab from "../../../assets/ab.png";
import smith from "../../../assets/smith.png";
import gary from "../../../assets/gary.png";
import kalis from "../../../assets/kalis.png";
import dale from "../../../assets/dale.png";
import polack from "../../../assets/polack.png";
import ntini from "../../../assets/ntini.png";
import donald from "../../../assets/donald.png";

import sa from "../../../assets/gifs/sa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Saplayers = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO HOME</strong>
              </button>
            </Link>
          </div>
        </div>
        {/* row 1 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-center ">
            <h1 style={{ color: "#fff" }}>
              <strong>
                <i>
                  <span
                    style={{
                      backgroundColor: "#000",
                      borderRadius: "22px",
                      padding: "8px",
                    }}
                  >
                    PROTEAS LEGENDS
                    <img className="mb-2 mx-2" src={sa} alt="flagsa" />
                  </span>
                </i>
              </strong>
            </h1>
          </div>
        </div>

        {/* row 3 */}

        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={ab}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>AB DE VILLERS</strong>
                </h5>
                <Link to={"/Ab"}>
               
                  <a href="#" className="btn btn-dark pak-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={smith}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>SMITH</strong>
                </h5>
                <Link to={"/Smith"}>
                  <a href="#" className="btn btn-dark pak-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={kalis}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>KALIS</strong>
                </h5>
				<Link to={"/Kalis"}>
                  <a href="#" className="btn btn-dark pak-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={gary}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>GARY</strong>
                </h5>
				<Link to={"/Gary"}>
                  <a href="#" className="btn btn-dark pak-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* row 4 */}

        <div className="row mt-5 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={dale}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>DALE</strong>
                </h5>
				<Link to={"/Dale"}>
                  <a href="#" className="btn btn-dark pak-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={polack}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>SHAWN</strong>
                </h5>
				<Link to={"/Polack"}>
                  <a href="#" className="btn btn-dark pak-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={ntini}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>NTINI</strong>
                </h5>
				<Link to={"/Ntini"}>
                  <a href="#" className="btn btn-dark pak-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={donald}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>DONALD</strong>
                </h5>
				<Link to={"/Donald"}>
                  <a href="#" className="btn btn-dark pak-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Saplayers;

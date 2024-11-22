import gayle from "../../../assets/gayle.png";
import lara from "../../../assets/lara.png";
import viv from "../../../assets/viv.png";
import holding from "../../../assets/holding.png";
import sobers from "../../../assets/sobers.png";
import walsh from "../../../assets/walsh.png";
import marshal from "../../../assets/marshal.png";
import curtly from "../../../assets/curtly.png";

import wi from "../../../assets/gifs/wi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Wiplayers = () => {
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
            <h1 style={{ color: "black" }}>
              <strong>
                <i>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "22px",
                      padding: "8px",
                    }}
                  >
                    WINDIES LEGENDS{" "}
                    <img className="mb-2 mx-2" src={wi} alt="flagwi" />
                  </span>
                </i>
              </strong>
            </h1>
          </div>
        </div>
        {/* row 2 */}

        {/* <div className="row mt-5">
          <div className="col d-flex justify-content-center ">
            <h1 className="text-dark ">
              <strong>
                <i>COUNTRIES</i>
              </strong>
            </h1>
          </div>
        </div> */}
        {/* row 3 */}

        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={gayle}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>GAYLE</strong>
                </h5>
                <Link to={"/Gayle"}>
                  <a href="#" className="btn btn-dark wi-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={lara}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>LARA</strong>
                </h5>
				<Link to={"/Lara"}>
                  <a href="#" className="btn btn-dark wi-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={viv}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>VIV RICHARDS</strong>
                </h5>
				<Link to={"/Viv"}>
                  <a href="#" className="btn btn-dark wi-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={holding}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>HOLDING</strong>
                </h5>
				<Link to={"/Holding"}>
                  <a href="#" className="btn btn-dark wi-buttons rounded-5">
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
                src={walsh}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>WALSH</strong>
                </h5>
                <Link to={"/Walsh"}>
                  <a href="#" className="btn btn-dark wi-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={sobers}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>SOBERS</strong>
                </h5>
				<Link to={"/Sobers"}>
                  <a href="#" className="btn btn-dark wi-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={marshal}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>MARSHAL</strong>
                </h5>
				<Link to={"/Marshal"}>
                  <a href="#" className="btn btn-dark wi-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={curtly}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>CURTLY</strong>
                </h5>
				<Link to={"/Curtly"}>
                  <a href="#" className="btn btn-dark wi-buttons rounded-5">
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

export default Wiplayers;

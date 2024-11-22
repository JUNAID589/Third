import bradman from "../../../assets/bradman.png";
import ponting from "../../../assets/ponting.png";
import greg from "../../../assets/greg.png";
import steve from "../../../assets/steve.png";
import bret from "../../../assets/bret.png";
import johnson from "../../../assets/johnson.png";
import warne from "../../../assets/warne.png";
import glen from "../../../assets/glen.png";

import aus from "../../../assets/gifs/aus.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Ausplayers = () => {
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
            <h1 style={{ color: "#000" }}>
              <strong>
                <i>
                  <span
                    style={{
                      backgroundColor: "gold",
                      borderRadius: "22px",
                      padding: "8px",
                    }}
                  >
                    AUSSIE LEGENDS
                    <img className="mb-2 ms-2" src={aus} alt="flagaus" />
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={bradman}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>DON BRADMAN</strong>
                </h5>
                <Link to={"/Bradman"}>
                  <a href="#" className="btn btn-dark aus-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={ponting}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>RICKY PONTING</strong>
                </h5>
                <Link to={"/Ponting"}>
                  {" "}
                  <a href="#" className="btn btn-dark aus-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={steve}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>STEVE WAUGH</strong>
                </h5>
                <Link to={"/Steve"}>
                  {" "}
                  <a href="#" className="btn btn-dark aus-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={greg}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>GREG CHAPPELL</strong>
                </h5>
                <Link to={"/Greg"}>
                  {" "}
                  <a href="#" className="btn btn-dark aus-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* row 4 */}

        <div className="row mt-5 mb-5">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={bret}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>BRET LEE</strong>
                </h5>
                <Link to={"/Bret"}>
                  {" "}
                  <a href="#" className="btn btn-dark aus-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={glen}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>GLEN MCGRATH</strong>
                </h5>
                <Link to={"/Glen"}>
                  <a href="#" className="btn btn-dark aus-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={warne}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>SHANE WARNE</strong>
                </h5>
                <Link to={"/Warne"}>
                  {" "}
                  <a href="#" className="btn btn-dark aus-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={johnson}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>MITCHELL JOHNSON</strong>
                </h5>
                <Link to={"/Johnson"}>
                  {" "}
                  <a href="#" className="btn btn-dark aus-buttons rounded-5">
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

export default Ausplayers;

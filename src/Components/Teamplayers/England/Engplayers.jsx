import cook from "../../../assets/cook.png";
import andrew from "../../../assets/andrew.png";
import jimmy from "../../../assets/jimmy.png";
import trueman from "../../../assets/trueman.png";
import underwood from "../../../assets/underwood.png";
import bedser from "../../../assets/bedser.png";
import kp from "../../../assets/kp.png";
import vaugan from "../../../assets/vaugan.png";

import eng from "../../../assets/gifs/eng.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Pakistaniplayers = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/"}>
              <button className="btn btn-dark rounded-5  home-btn ms-2">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO HOME</strong>
              </button>
            </Link>
          </div>
        </div>
        {/* row 1 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-center ">
            <h1 className="teamplayers-heading text-light">
              <strong>
                <i>
                  <span
                    style={{
                      backgroundColor: "black",
                      borderRadius: "22px",
                      padding: "8px",
                    }}
                  >
                    ENGLAND LEGENDS
                    <img className="mb-2 mx-3 flag" src={eng} alt="flageng" />
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
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center ">
            <div className="card card-players  ">
              <img
                src={cook}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>ALASTAIR COOK</strong>
                </h5>
                <Link to={"/imran"}>
                  <Link to={"/Cook"}>
                    <a className="btn btn-dark pak-buttons  ">
                      <strong>CAREER STATS</strong>
                    </a>
                  </Link>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players ">
              <img
                src={andrew}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>ANDREW STRAUSS</strong>
                </h5>
                <Link to={"/Andrew"}>
                  <a className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={jimmy}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>JAMES ANDERSON</strong>
                </h5>
                <Link to={"/Jimmy"}>
                  <a className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={kp}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>KEVIN PETERSON</strong>
                </h5>
                <Link to={"/Kp"}>
                  <a className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* row 4 */}

        <div className="row  mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={trueman}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>TRUEMAN</strong>
                </h5>
                <Link to={"/Trueman"}>
                  <a className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={bedser}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>BEDSER</strong>
                </h5>
                <Link to={"/Bedser"}>
                  <a className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={underwood}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>UNDERWOOD</strong>
                </h5>
                <Link to={"/Underwood"}>
                  <a className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={vaugan}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>VAUGHAN</strong>
                </h5>
                <Link to={"/Vaughan"}>
                  <a className="btn btn-dark pak-buttons  ">
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

export default Pakistaniplayers;

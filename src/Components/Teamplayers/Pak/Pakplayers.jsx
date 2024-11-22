import imrankhan from "../../../assets/imrankhan.png";
import saeedanwar from "../../../assets/saeedanwar.png";
import inzi from "../../../assets/inzi.png";
import miandad from "../../../assets/miandad.png";
import aktar from "../../../assets/aktar.png";
import akram from "../../../assets/akram.png";
import waqar from "../../../assets/waqar.png";
import afridi from "../../../assets/afridi.png";
import pak from "../../../assets/gifs/pak.gif";
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
            <h1 className="teamplayers-heading" style={{ color: "green" }}>
              <strong>
                <i>
                  <span
                    style={{
                      backgroundColor: "white",
                      borderRadius: "22px",
                      padding: "8px",
                    }}
                  >
                    PAKISTANI LEGENDS
                    <img className="mb-2 mx-3 flag" src={pak} alt="flagpak" />
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
                src={imrankhan}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>IMRAN KHAN</strong>
                </h5>
                <Link to={"/imran"}>
                  <a className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players ">
              <img
                src={saeedanwar}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>SAEED ANWAR</strong>
                </h5>
                <Link to={"/Saeedanwar"}>
                  <a href="#" className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={miandad}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>JAVAID MIANDAD</strong>
                </h5>
                <Link to={"/Miandad"}>
                  {" "}
                  <a href="#" className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={inzi}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>INZIMAM UL HAQ</strong>
                </h5>
                <Link to={"/Inzi"}>
                  <a href="#" className="btn btn-dark pak-buttons  ">
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
                src={aktar}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>SHOAIB AKHTAR</strong>
                </h5>
                <Link to={"/Aktar"}>
                  {" "}
                  <a href="#" className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={akram}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>WASIM AKRAM</strong>
                </h5>
                <Link to={'/Akram'}>
                  {" "}
                  <a href="#" className="btn btn-dark pak-buttons  ">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={waqar}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>WAQAR YOUNIS</strong>
                </h5>
               <Link to={'/Waqar'}> <a href="#" className="btn btn-dark pak-buttons  ">
                  <strong>CAREER STATS</strong>
                </a></Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players  ">
              <img
                src={afridi}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>SHAHID KHAN AFRIDI</strong>
                </h5>
               <Link to={'/Afridi'}> <a href="#" className="btn btn-dark pak-buttons  ">
                  <strong>CAREER STATS</strong>
                </a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pakistaniplayers;

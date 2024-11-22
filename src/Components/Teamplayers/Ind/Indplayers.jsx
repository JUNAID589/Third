import sachin from "../../../assets/sachin.png";
import sehwag from "../../../assets/sehwag.png";
import dravid from "../../../assets/dravid.png";
import ganguly from "../../../assets/ganguly.png";
import zaheer from "../../../assets/zaheer.png";
import kapil from "../../../assets/kapil.png";
import kumblay from "../../../assets/kumblay.png";
import javagal from "../../../assets/javagal.png";
import ind from "../../../assets/gifs/ind.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Indplayers = () => {
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
            <h1 style={{ color: "#ff9107" }}>
              <strong>
                <i>
                  <span
                    style={{
                      backgroundColor: "#0056a9",
                      borderRadius: "22px",
                      padding: "8px",
                    }}
                  >
                    INDIAN LEGENDS
                    <img className="mb-2 mx-2" src={ind} alt="flagind" />
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
                src={sachin}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>SACHIN TENDULKAR</strong>
                </h5>
                <Link to={"/Sachin"}>
                  {" "}
                  <a href="#" className="btn btn-dark ind-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={sehwag}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>VIRENDER SEHWAG</strong>
                </h5>
                <Link to={"/Sehwag"}>
                  <a href="#" className="btn btn-dark ind-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={dravid}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>RAHUL DRAVID</strong>
                </h5>
                <Link to={"/Dravid"}>
                  {" "}
                  <a href="#" className="btn btn-dark ind-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={ganguly}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>GANGULY</strong>
                </h5>
                <Link to={"/Ganguly"}>
                  {" "}
                  <a href="#" className="btn btn-dark ind-buttons rounded-5">
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
                src={kapil}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>KAPIL DEV</strong>
                </h5>
                <Link to={"/Kapil"}>
                  {" "}
                  <a href="#" className="btn btn-dark ind-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={javagal}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>JAVAGAL</strong>
                </h5>
                <Link to={"/Javagal"}>
                  {" "}
                  <a href="#" className="btn btn-dark ind-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={kumblay}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>ANIL KUMBLE</strong>
                </h5>
                <Link to={"/Kumblay"}>
                  {" "}
                  <a href="#" className="btn btn-dark ind-buttons rounded-5">
                    <strong>CAREER STATS</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card card-players">
              <img
                src={zaheer}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>ZAHEER KHAN</strong>
                </h5>
                <Link to={"/Zaheer"}>
                  <a href="#" className="btn btn-dark ind-buttons rounded-5">
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

export default Indplayers;

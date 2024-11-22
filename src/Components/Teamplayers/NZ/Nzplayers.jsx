import bm from "../../../assets/bm.png";
import taylor from "../../../assets/taylor.png";
import guptil from "../../../assets/guptil.png";
import ronchi from "../../../assets/ronchi.png";
import boult from "../../../assets/boult.png";
import wagner from "../../../assets/wagner.png";
import vettori from "../../../assets/vettori.png";
import hadle from "../../../assets/hadlee.png";
import nz from "../../../assets/gifs/nz.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Nzplayers = () => {
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
                    KEWIE LEGENDS{" "}
                    <img className="mb-2" src={nz} alt="flagnz" />
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
                src={bm}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase ">
                  <strong>brandon mccullum</strong>
                </h5>
                <Link to={'/Brandon'}>
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
                src={taylor}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase">
                  <strong>ross taylor</strong>
                </h5>
                <Link to={'/Taylor'}>
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
                src={guptil}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase">
                  <strong>martin guptil</strong>
                </h5>
				<Link to={'/Guptil'}>
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
                src={ronchi}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase">
                  <strong>ronchi</strong>
                </h5>
				<Link to={'/Ronchi'}>
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
                src={wagner}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase">
                  <strong>wagner</strong>
                </h5>
				<Link to={'/Wagner'}>
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
                src={vettori}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase">
                  <strong>vettori</strong>
                </h5>
				<Link to={'/Vettori'}>
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
                src={boult}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase">
                  <strong>boult</strong>
                </h5>
				<Link to={'/Boult'}>
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
                src={hadle}
                style={{ height: "300px" }}
                className="card-img-top"
                alt="pic"
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase">
                  <strong>hadlee</strong>
                </h5>
				<Link to={'/Hadle'}>
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

export default Nzplayers;

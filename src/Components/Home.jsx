import pak from "../assets/pak.png";
import ind from "../assets/ind.png";
import aus from "../assets/aus.png";
import eng from "../assets/eng.png";
import sa from "../assets/sa.png";
import nz from "../assets/nz.png";
import sl from "../assets/sl.png";
import wi from "../assets/wi.png";

import banner from "../assets/banner.png";

import ball from "../assets/gifs/ball.gif";
import ballbat from "../assets/gifs/batball.gif";

import pakplayer from "../assets/pakplayer.png";
import indplayer from "../assets/indplayer.png";
import ausplayer from "../assets/ausplayer.png";
import engplayer from "../assets/engplayer.png";
import saplayer from "../assets/saplayer.png";
import nzplayer from "../assets/nzplayer.png";
import slplayer from "../assets/slplayer.png";
import wiplayer from "../assets/wiplayer.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="ball-gif-container">
        {" "}
        <img className="position-fixed ball-gif" src={ball} alt="" />
      </div>
      <div className="ballbat-gif-container">
        <img className="position-fixed ballbat-gif" src={ballbat} alt="" />
      </div>
      <Link className="made-by-junaid" to={"https://junaid-portfolio-web.netlify.app/"} target="_blank">
        <div>
          <p >
            <strong>Made by JUNAID</strong>
          </p>
        </div>
      </Link>

      <div className="container  ">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-center ">
            <h1 className="text-light  rounded-4 p-2 welcome-to-crickostats">
              <strong>
                <i>WELCOME TO CRICKOSTATS</i>
              </strong>
            </h1>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-center banner ">
            <img className="banner" src={banner} alt="" />
          </div>
        </div>

        {/* row 1 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-center ">
            <h1 className="text-light bg-dark rounded-4 p-2 legend-cricketer-stats">
              <i>LEGEND CRICKETERS STATS</i>
            </h1>
          </div>
        </div>

        {/* row 2 */}

        <div className="row mt-5 ">
          <div className="col-12 col-md-12 col-lg-4 mb-4 d-flex justify-content-center card-players-img   ">
            <Link to={"/Imran"}>
              <img className="players-img " src={pakplayer} alt="" />
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mb-4 d-flex justify-content-center card-players-img   ">
            <Link to={"/Sachin"}>
              <img className="players-img " src={indplayer} alt="" />
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4   mb-4 d-flex justify-content-center card-players-img   ">
            <Link to={"/Warne"}>
              <img className="players-img " src={ausplayer} alt="" />
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4   mb-4 d-flex justify-content-center card-players-img   ">
            <Link to={"/Kp"}>
              <img className="players-img " src={engplayer} alt="" />
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4   mb-4 d-flex justify-content-center card-players-img   ">
            <Link to={"/Lara"}>
              <img className="players-img " src={wiplayer} alt="" />
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4   mb-4 d-flex justify-content-center card-players-img   ">
            <Link to={"/Ab"}>
              <img className="players-img " src={saplayer} alt="" />
            </Link>
          </div>
        </div>
        {/* row 2.1 */}
        <div className="row ">
          <div className="col-lg-2"></div>
          <div className="col-12 col-md-12 col-lg-4  mb-4 d-flex justify-content-center card-players-img   ">
            <Link to={"/Sanga"}>
              <img className="players-img " src={slplayer} alt="" />
            </Link>
          </div>

          <div className="col-12 col-md-12 col-lg-4  mb-4 d-flex justify-content-center card-players-img   ">
            <Link to={"/Brandon"}>
              {" "}
              <img className="players-img " src={nzplayer} alt="" />
            </Link>
          </div>

          <div className="col-lg-2"></div>
        </div>

        {/* row 2.18 */}

        <div className="row mt-5">
          <div className="col d-flex justify-content-center ">
            <h1 className="text-light bg-dark  p-2 explore-from-countries">
              <i>EXPLORE FROM COUNTRIES</i>
            </h1>
          </div>
        </div>

        {/* row 3 */}

        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-6 mb-4 col-lg-3   col-countries ">
            <div
              className="card text-center shadow-sm card-countries"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                height: "280px",
                padding: "2px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between ">
                <Link to={"/Pakplayers"}>
                  <img
                    src={pak}
                    alt="pic"
                    className="img-fluid mb-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 mb-4  col-lg-3   col-countries">
            <div
              className="card text-center shadow-sm card-countries"
              style={{
                backgroundColor: "#0056a9",
                borderRadius: "15px",
                height: "280px",
                padding: "2px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <Link to={"/Indplayers"}>
                  <img
                    src={ind}
                    alt="pic"
                    className="img-fluid mb-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 mb-4  col-lg-3   col-countries">
            <div
              className="card text-center shadow-sm card-countries"
              style={{
                backgroundColor: "#78b341",
                borderRadius: "15px",
                height: "280px",
                padding: "2px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <Link to={"/Ausplayers"}>
                  <img
                    src={aus}
                    alt="pic"
                    className="img-fluid mb-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 mb-4  col-lg-3   col-countries">
            <div
              className="card text-center shadow-sm card-countries"
              style={{
                backgroundColor: "#112562",
                borderRadius: "15px",
                height: "280px",
                padding: "2px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between ">
                <Link to={"/Engplayers"}>
                  <img
                    src={eng}
                    alt="pic"
                    className="img-fluid "
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* row 4 */}

        <div className="row ">
          <div className="col-12 col-sm-12 col-md-6 mb-4  col-lg-3   col-countries">
            <div
              className="card text-center shadow-sm card-countries"
              style={{
                backgroundColor: "#000",
                borderRadius: "15px",
                height: "280px",
                padding: "2px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <Link to={"/Nzplayers"}>
                  <img
                    src={nz}
                    alt="pic"
                    className="img-fluid mb-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 mb-4  col-lg-3   col-countries">
            <div
              className="card text-center shadow-sm card-countries"
              style={{
                backgroundColor: "#1f3d86",
                borderRadius: "15px",
                height: "280px",
                padding: "2px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <Link to={"/Slplayers"}>
                  <img
                    src={sl}
                    alt="pic"
                    className="img-fluid mb-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 mb-4  col-lg-3   col-countries">
            <div
              className="card text-center shadow-sm card-countries"
              style={{
                backgroundColor: "#01662a",
                borderRadius: "15px",
                height: "280px",
                padding: "2px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <Link to={"/Saplayers"}>
                  <img
                    src={sa}
                    alt="pic"
                    className="img-fluid mb-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 mb-4  col-lg-3   col-countries">
            <div
              className="card text-center shadow-sm card-countries"
              style={{
                backgroundColor: "#872937",
                borderRadius: "15px",
                height: "280px",
                padding: "2px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <Link to={"/Wiplayers"}>
                  {" "}
                  <img
                    src={wi}
                    alt="pic"
                    className="img-fluid mb-3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

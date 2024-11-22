import ind from "../../../../assets/gifs/ind.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import zaheer from "../../../../assets/zaheer.png";  // Update the image import if needed

const Zaheer = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/Indplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO TO IND LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <img className="profilepic" src={zaheer} alt="zaheer" />
          </div>
        </div>

        {/* row 1 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <h1 className="teamplayers-heading text-dark">
              <strong>
                <i>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "22px",
                      padding: "8px",
                    }}
                  >
                    ZAHEER KHAN STATS
                    <img className="mb-2 mx-3 flag" src={ind} alt="flagind" />
                  </span>
                </i>
              </strong>
            </h1>
          </div>
        </div>

        {/* row 2 */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Format</th>
                    <th>Matches</th>
                    <th>Wickets</th>
                    <th>Runs</th>
                    <th>Batting Average</th>
                    <th>Bowling Average</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>92</td>
                    <td>311</td>
                    <td>1,235</td>
                    <td>11.95</td>
                    <td>32.94</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>200</td>
                    <td>282</td>
                    <td>792</td>
                    <td>12.13</td>
                    <td>29.43</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>17</td>
                    <td>17</td>
                    <td>13</td>
                    <td>6.5</td>
                    <td>26.35</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zaheer;

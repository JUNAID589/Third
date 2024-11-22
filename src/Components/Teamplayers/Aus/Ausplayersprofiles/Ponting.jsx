import aus from "../../../../assets/gifs/aus.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ponting from "../../../../assets/ponting.png";  // Update the image import if needed

const Ponting = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/Ausplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO TO AUS LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <img className="profilepic" src={ponting} alt="ponting" />
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
                    RICKY PONTING STATS
                    <img className="mb-2 mx-3 flag" src={aus} alt="flagaus" />
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
                    <th>Innings</th>
                    <th>Runs</th>
                    <th>Batting Average</th>
                    <th>100s</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>168</td>
                    <td>287</td>
                    <td>13,378</td>
                    <td>51.85</td>
                    <td>41</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>375</td>
                    <td>365</td>
                    <td>13,704</td>
                    <td>44.29</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>17</td>
                    <td>17</td>
                    <td>618</td>
                    <td>41.20</td>
                    <td>0</td>
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

export default Ponting;

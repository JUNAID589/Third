import wi from "../../../../assets/gifs/wi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import lara from "../../../../assets/lara.png";  // Update the image import if needed

const Lara = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/WIplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO TO WI LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <img className="profilepic" src={lara} alt="lara" />
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
                    BRIAN LARA STATS
                    <img className="mb-2 mx-3 flag" src={wi} alt="flagwi" />
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
                    <th>50s</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>131</td>
                    <td>232</td>
                    <td>11,953</td>
                    <td>52.88</td>
                    <td>34</td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>299</td>
                    <td>289</td>
                    <td>10,405</td>
                    <td>40.48</td>
                    <td>19</td>
                    <td>63</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>N/A</td>
                    <td>0</td>
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

export default Lara;

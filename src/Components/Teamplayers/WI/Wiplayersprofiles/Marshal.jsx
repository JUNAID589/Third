
import wi from "../../../../assets/gifs/wi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import marshall from "../../../../assets/marshal.png";  // Update the image import if needed

const Marshal = () => {
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
            <img className="profilepic" src={marshall} alt="marshall" />
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
                    MALCOLM MARSHALL STATS
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
                    <th>Wickets</th>
                    <th>Bowling Average</th>
                    <th>5W Hauls</th>
                    <th>10W Hauls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>81</td>
                    <td>97</td>
                    <td>376</td>
                    <td>20.94</td>
                    <td>22</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>136</td>
                    <td>128</td>
                    <td>157</td>
                    <td>26.96</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
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

export default Marshal;

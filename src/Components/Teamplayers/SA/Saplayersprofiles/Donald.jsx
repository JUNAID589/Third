import sa from "../../../../assets/gifs/sa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import donald from "../../../../assets/donald.png";  // Update the image import if needed

const Donald = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/SAplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO TO SA LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <img className="profilepic" src={donald} alt="donald" />
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
                    ALLAN DONALD STATS
                    <img className="mb-2 mx-3 flag" src={sa} alt="flagsa" />
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
                    <th>5w</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>72</td>
                    <td>133</td>
                    <td>330</td>
                    <td>22.25</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>164</td>
                    <td>152</td>
                    <td>272</td>
                    <td>21.78</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>3</td>
                    <td>3</td>
                    <td>4</td>
                    <td>15.50</td>
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

export default Donald;

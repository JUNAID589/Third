import aus from "../../../../assets/gifs/aus.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import bradman from "../../../../assets/bradman.png";  // Update the image import if needed

const DonBradman = () => {
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
            <img className="profilepic" src={bradman} alt="bradman" />
          </div>
        </div>

        {/* row 1 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <h1 className="teamplayers-heading text-warning">
              <strong>
                <i>
                  <span
                    style={{
                      backgroundColor: "#000",
                      borderRadius: "22px",
                      padding: "8px",
                    }}
                  >
                    DON BRADMAN STATS
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
                    <td>52</td>
                    <td>80</td>
                    <td>6,996</td>
                    <td>99.94</td>
                    <td>29</td>
                  </tr>
                  <tr>
                    <td>First-Class</td>
                    <td>234</td>
                    <td>338</td>
                    <td>28,067</td>
                    <td>95.14</td>
                    <td>117</td>
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

export default DonBradman;

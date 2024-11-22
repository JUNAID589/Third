import eng from "../../../../assets/gifs/eng.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import anderson from "../../../../assets/jimmy.png"; // Update the image import if needed

const Jimmy = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/Engplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO TO ENG LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <img className="profilepic" src={anderson} alt="anderson" />
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
                    JAMES ANDERSON STATS
                    <img className="mb-2 mx-3 flag" src={eng} alt="flageng" />
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
                    <th>5-Wicket Hauls</th>
                    <th>10-Wicket Hauls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>183</td>
                    <td>340</td>
                    <td>685</td>
                    <td>26.23</td>
                    <td>32</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>194</td>
                    <td>191</td>
                    <td>269</td>
                    <td>29.22</td>
                    <td>2</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>19</td>
                    <td>19</td>
                    <td>18</td>
                    <td>30.66</td>
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

export default Jimmy;

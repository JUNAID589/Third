import ind from "../../../../assets/gifs/ind.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import srinath from "../../../../assets/javagal.png";  // Update the image import if needed

const Javagal = () => {
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
            <img className="profilepic" src={srinath} alt="srinath" />
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
                    JAVAGAL SRINATH STATS
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
                    <td>67</td>
                    <td>236</td>
                    <td>1,009</td>
                    <td>14.22</td>
                    <td>30.49</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>229</td>
                    <td>315</td>
                    <td>884</td>
                    <td>10.63</td>
                    <td>28.08</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
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

export default Javagal;

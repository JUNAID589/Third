import nz from "../../../../assets/gifs/nz.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import taylor from "../../../../assets/taylor.png"; // Update the image import if needed

const Taylor = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/NZplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO TO NZ LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <img className="profilepic" src={taylor} alt="taylor" />
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
                    ROSS TAYLOR STATS
                    <img className="mb-2 mx-3 flag" src={nz} alt="flagnz" />
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
                    <td>112</td>
                    <td>196</td>
                    <td>7,683</td>
                    <td>44.66</td>
                    <td>19</td>
                    <td>35</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>236</td>
                    <td>217</td>
                    <td>8,607</td>
                    <td>47.55</td>
                    <td>21</td>
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>102</td>
                    <td>94</td>
                    <td>1,909</td>
                    <td>26.15</td>
                    <td>0</td>
                    <td>7</td>
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

export default Taylor;

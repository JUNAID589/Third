import ind from "../../../../assets/gifs/ind.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import sehwag from "../../../../assets/sehwag.png";  // Update the image import if needed

const Sehwag = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/Indplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />
                <strong>GO TO IND LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <img className="profilepic" src={sehwag} alt="sehwag" />
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
                    SEHWAG STATS
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
                    <td>104</td>
                    <td>40</td>
                    <td>8,586</td>
                    <td>49.34</td>
                    <td>47.35</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>251</td>
                    <td>96</td>
                    <td>8,273</td>
                    <td>35.05</td>
                    <td>41.80</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>19</td>
                    <td>0</td>
                    <td>394</td>
                    <td>21.88</td>
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

export default Sehwag;

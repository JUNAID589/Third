import wi from "../../../../assets/gifs/wi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import gayle from "../../../../assets/gayle.png";  // Update the image import if needed

const Gayle = () => {
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
            <img className="profilepic" src={gayle} alt="gayle" />
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
                    CHRIS GAYLE STATS
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
                    <td>103</td>
                    <td>182</td>
                    <td>7,214</td>
                    <td>42.18</td>
                    <td>15</td>
                    <td>37</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>301</td>
                    <td>294</td>
                    <td>10,480</td>
                    <td>37.83</td>
                    <td>25</td>
                    <td>54</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>79</td>
                    <td>75</td>
                    <td>1,899</td>
                    <td>27.92</td>
                    <td>2</td>
                    <td>14</td>
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

export default Gayle;

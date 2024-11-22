import nz from "../../../../assets/gifs/nz.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import boult from "../../../../assets/boult.png"; // Update the image import if needed

const Boult = () => {
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
            <img className="profilepic" src={boult} alt="boult" />
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
                    TRENT BOULT STATS
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
                    <th>Wickets</th>
                    <th>Bowling Average</th>
                    <th>5w</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>78</td>
                    <td>155</td>
                    <td>317</td>
                    <td>27.44</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>95</td>
                    <td>189</td>
                    <td>169</td>
                    <td>26.43</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>22</td>
                    <td>42</td>
                    <td>66</td>
                    <td>23.18</td>
                    <td>1</td>
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

export default Boult;

import sl from "../../../../assets/gifs/sl.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import murali from "../../../../assets/murli.png";  // Update the image import if needed

const Murli = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/SLplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO TO SL LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <img className="profilepic" src={murali} alt="murali" />
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
                    MUTTIAH MURALITHARAN STATS
                    <img className="mb-2 mx-3 flag" src={sl} alt="flagsl" />
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
                    <th>Best Bowling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>133</td>
                    <td>227</td>
                    <td>800</td>
                    <td>22.72</td>
                    <td>9/51</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>350</td>
                    <td>336</td>
                    <td>534</td>
                    <td>23.08</td>
                    <td>7/30</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>12</td>
                    <td>12</td>
                    <td>13</td>
                    <td>24.00</td>
                    <td>4/34</td>
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

export default Murli;

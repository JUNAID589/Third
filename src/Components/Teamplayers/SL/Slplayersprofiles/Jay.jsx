import sl from "../../../../assets/gifs/sl.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jayasuriya from "../../../../assets/jay.png";  // Update the image import if needed

const Jay = () => {
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
            <img className="profilepic" src={jayasuriya} alt="jayasuriya" />
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
                    SANATH JAYASURIYA STATS
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
                    <th>Runs</th>
                    <th>Batting Average</th>
                    <th>100s</th>
                    <th>50s</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>110</td>
                    <td>185</td>
                    <td>6,973</td>
                    <td>40.07</td>
                    <td>14</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>445</td>
                    <td>422</td>
                    <td>13,430</td>
                    <td>32.36</td>
                    <td>28</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>31</td>
                    <td>31</td>
                    <td>629</td>
                    <td>21.44</td>
                    <td>0</td>
                    <td>3</td>
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

export default Jay;

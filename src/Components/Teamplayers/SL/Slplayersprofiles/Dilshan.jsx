import sl from "../../../../assets/gifs/sl.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import dilshan from "../../../../assets/dilshan.png";  // Update the image import if needed

const Dilshan = () => {
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
            <img className="profilepic" src={dilshan} alt="dilshan" />
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
                    TILAKARATNE DILSHAN STATS
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
                    <th>Hundreds</th>
                    <th>Fifties</th>
                    <th>Wickets</th>
                    <th>Bowling Average</th>
                    <th>Best Bowling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>87</td>
                    <td>150</td>
                    <td>5,492</td>
                    <td>40.61</td>
                    <td>15</td>
                    <td>25</td>
                    <td>47</td>
                    <td>35.31</td>
                    <td>5/54</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>330</td>
                    <td>303</td>
                    <td>10,290</td>
                    <td>39.27</td>
                    <td>22</td>
                    <td>49</td>
                    <td>106</td>
                    <td>36.15</td>
                    <td>4/23</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>80</td>
                    <td>74</td>
                    <td>1,889</td>
                    <td>28.11</td>
                    <td>0</td>
                    <td>13</td>
                    <td>38</td>
                    <td>29.36</td>
                    <td>3/9</td>
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

export default Dilshan;

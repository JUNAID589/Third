import eng from "../../../../assets/gifs/eng.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import pietersen from "../../../../assets/kp.png"; // Update the image import if needed

const Kp = () => {
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
            <img className="profilepic" src={pietersen} alt="pietersen" />
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
                    KEVIN PIETERSEN STATS
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
                    <th>Runs</th>
                    <th>Batting Average</th>
                    <th>100s</th>
                    <th>50s</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>104</td>
                    <td>181</td>
                    <td>8,181</td>
                    <td>47.28</td>
                    <td>23</td>
                    <td>35</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>136</td>
                    <td>125</td>
                    <td>4,440</td>
                    <td>40.73</td>
                    <td>9</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>37</td>
                    <td>36</td>
                    <td>1,176</td>
                    <td>37.93</td>
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

export default Kp;

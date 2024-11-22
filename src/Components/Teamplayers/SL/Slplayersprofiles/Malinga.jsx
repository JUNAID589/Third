
import sl from "../../../../assets/gifs/sl.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import malinga from "../../../../assets/malinga.png";  // Update the image import if needed

const Malinga = () => {
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
            <img className="profilepic" src={malinga} alt="malinga" />
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
                    LASITH MALINGA STATS
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
                    <td>30</td>
                    <td>55</td>
                    <td>101</td>
                    <td>33.16</td>
                    <td>5/13</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>226</td>
                    <td>219</td>
                    <td>338</td>
                    <td>28.87</td>
                    <td>5/34</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>84</td>
                    <td>82</td>
                    <td>107</td>
                    <td>19.80</td>
                    <td>5/31</td>
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

export default Malinga;

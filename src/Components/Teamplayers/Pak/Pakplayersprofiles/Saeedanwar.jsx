import pak from "../../../../assets/gifs/pak.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import saeedanwar from "../../../../assets/saeedanwar.png";  // Update the image import if needed

const Saeed = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/Pakplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO TO PAK LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className=" d-flex justify-content-center ">
            <img className="profilepic" src={saeedanwar} alt="Saeed Anwar" />
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
                    SAEED ANWAR STATS
                    <img className="mb-2 mx-3 flag" src={pak} alt="flagpak" />
                  </span>
                </i>
              </strong>
            </h1>
          </div>
        </div>

        {/* row 2 */}
        <div className="row mt-4">
          <div className="col-12 ">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Format</th>
                    <th>Matches</th>
                    <th>Runs</th>
                    <th>Wickets</th>
                    <th>Batting Average</th>
                    <th>Bowling Average</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>55</td>
                    <td>4052</td>
                    <td>5</td>
                    <td>45.33</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>200</td>
                    <td>8800</td>
                    <td>0</td>
                    <td>41.50</td>
                    <td>-</td> {/* Saeed Anwar was not known for bowling in ODIs */}
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

export default Saeed;

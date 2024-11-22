import sa from "../../../../assets/gifs/sa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ab from "../../../../assets/ab.png";  // Update the image import if needed

const Ab = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/SAplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO TO SA LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <img className="profilepic" src={ab} alt="ab de villiers" />
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
                    AB DE VILLIERS STATS
                    <img className="mb-2 mx-3 flag" src={sa} alt="flagsa" />
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
                    <td>114</td>
                    <td>189</td>
                    <td>8,765</td>
                    <td>50.66</td>
                    <td>22</td>
                    <td>46</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>228</td>
                    <td>218</td>
                    <td>9,577</td>
                    <td>53.50</td>
                    <td>25</td>
                    <td>46</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>78</td>
                    <td>75</td>
                    <td>1,672</td>
                    <td>30.15</td>
                    <td>0</td>
                    <td>10</td>
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

export default Ab;

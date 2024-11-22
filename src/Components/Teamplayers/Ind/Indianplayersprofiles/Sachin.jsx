import ind from "../../../../assets/gifs/ind.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import sachin from "../../../../assets/sachin.png";  // Update the image import if needed

const Sachin = () => {
  return (
    <>
      <div className="container">
        {/* row 0 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-start">
            <Link to={"/Indplayers"}>
              <button className="btn btn-dark rounded-5 home-btn">
                <FontAwesomeIcon className="mx-1" icon={faArrowLeft} beat />{" "}
                <strong>GO TO IND LEGENDS</strong>
              </button>
            </Link>
          </div>
        </div>

        {/* row 0.1 */}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <img className="profilepic" src={sachin} alt="sachin" />
          </div>
        </div>

        {/* row 1 */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <h1 className="teamplayers-heading text-light">
              <strong>
                <i>
                  <span
                    style={{
                      backgroundColor: "#000",
                      borderRadius: "22px",
                      padding: "8px",
                    }}
                  >
                    SACHIN TENDULKAR STATS
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
                    <td>200</td>
                    <td>46</td>
                    <td>15,921</td>
                    <td>53.78</td>
                    <td>54.17</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>463</td>
                    <td>154</td>
                    <td>18,426</td>
                    <td>44.83</td>
                    <td>44.48</td>
                  </tr>
                  <tr>
                    <td>T20I</td>
                    <td>1</td>
                    <td>0</td>
                    <td>10</td>
                    <td>10.00</td>
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

export default Sachin;

import pak from "../../../../assets/gifs/pak.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import afridi from "../../../../assets/afridi.png";  // Update the image import if needed

const Afridi = () => {
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
            <img className="profilepic" src={afridi} alt="Shahid Afridi" />
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
                    SHAHID AFRIDI STATS
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
                    <th>Wickets</th>
                    <th>Runs</th>
                    <th>Batting Average</th>
                    <th>Bowling Average</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>27</td>
                    <td>48</td>
                    <td>1716</td>
                    <td>31.86</td>
                    <td>35.23</td>
                  </tr>
                  <tr>
                    <td>ODI</td>
                    <td>398</td>
                    <td>395</td>
                    <td>8064</td>
                    <td>23.57</td>
                    <td>34.51</td>
                  </tr>
                  <tr>
                    <td>T20</td>
                    <td>99</td>
                    <td>98</td>
                    <td>1405</td>
                    <td>19.00</td>
                    <td>24.28</td>
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

export default Afridi;

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-light " style={{position:'relative', top:'526px' , backgroundColor:'#059212'}}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-lg-4 col-md-4 mb-4 col-xxl-4 col-xl-4">
              <ul className="list-unstyled list-footer">
                <li className="mb-3">
                  <strong>Customer Service</strong>
                </li>
                <li>My Account</li>
                <li>FAQS</li>
                <li>Cash On Delivery Service</li>
                <li>Contact Me</li>
              </ul>
            </div>

            <div className="col-12 col-md-4 col-lg-4 mb-4 col-xxl-4 col-xl-4">
              <ul className="list-unstyled list-footer">
                <li className="mb-3">
                  <strong>Help & Information</strong>
                </li>
                <li>About Me</li>
                <li>Shipping & Exchange Policy</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Payment Information</li>
                <li>Credit/Debit Card Policy</li>
              </ul>
            </div>

            <div className="col-12 col-md-4 mb-4 col-xxl-4 col-xl-4 col-lg-4">
              <ul className="list-unstyled list-footer">
                <li>
                  <strong>FOLLOW ME ON</strong>
                </li>
                <li className="d-flex gap-3 fs-4 ">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaFacebook style={{ color: "black" }} />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: "black" }} />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaYoutube style={{ color: "black" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="hr-tag-footer" />
          <div className="row my-3">
            <div className="col-12 text-center">
              <p>© 2024 All Rights Reserved - Powered By Junaid</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

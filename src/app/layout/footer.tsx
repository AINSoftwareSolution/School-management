import Logo from "../utilis/images/logo.png";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-black px-4 py-4 gap-4">
        <div className="footer-widget-area pt-24 pb-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <div className="widget tm-widget-contact-info contact-info-style1 contact-icon-theme-colored1">
                  <div className="thumb">
                    <Image src={Logo} alt="Logo" width={150} height={150} />
                  </div>
                  <div className="description text-gray-400 mb-4">
                   Kondhwa Pune
                  </div>
                  <ul className="mb-6">
                    <li className="contact-phone">
                      <div className="icon"></div>
                      <div className="text-gray-400 mb-4">
                        <a href="tel:+123-456-789">
                          {" "}
                          <MdAddIcCall /> 7849122458
                        </a>
                      </div>
                    </li>
                    <li className="contact-email">
                      <div className="icon"></div>
                      <div className="text-gray-400 mb-4">
                        <a href="mailto:contact@yourdomain.com ">
                          <MdEmail /> info@wisdomwavesschool.com
                        </a>
                      </div>
                    </li>
                    <li className="contact-website">
                      <div className="icon">
                        <i className="flaticon-contact-035-website"></i>
                      </div>
                      <div className="text">
                        <a target="_blank" href="http://yourdomain.com"></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="widget widget_nav_menu text-gray-400">
                  <h2 className="widget-title text-3xl text-white text-bold">
                    Services
                  </h2>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="widget ">
                  <h4 className="widget-title text-2xl text-white text-bold py-20 mb-8">
                  {/*  Twitter Feed */}
                  </h4>
                  <div
                    className="twitter-feed list-border clearfix"
                    data-username="Envato"
                    data-count="2"
                  >
                    <ul></ul>
                  </div>
                </div>

                <h5 className="text-white text-2xl  mb-6 ">
                  Connect With Us
                </h5>
                <ul className="flex items-center gap-8">
                  <li className="mr-2">
                    <a href="https://www.facebook.com/profile.php?id=61557791486582" target="_blank" className="text-white hover:text-red-600">
                      <i className="fab fa-facebook text-4xl">
                        <FaFacebook />
                      </i>
                    </a>
                  </li>
                  <li className="mr-2">
                    <a href="#" className="text-white hover:text-red-600">
                      <i className="fab fa-twitter text-4xl">
                        <FaSquareXTwitter />
                      </i>
                    </a>
                  </li>
                  <li className="mr-2">
                    <a href="#" className="text-white hover:text-red-600">
                      <i className="fab fa-youtube text-4xl">
                        <FaSquareYoutube />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/wisdom_waves_school/"  target="_blank" className="text-white hover:text-red-600">
                      <i className="fab fa-instagram text-4xl">
                        <FaInstagramSquare />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <div className="widget text-gray-400">
                  <h4 className="widget-title text-white text-2xl">Opening Hours</h4>
                  <div className="opening-hours border-dark">
                    <ul>
                      <li className="clearfix">
                        <div className="value">
                          {" "}
                          <span> Mon - Tues : </span> 6.00 am - 10.00 pm{" "}
                        </div>
                        <hr className="w-60 border-t-1 border-gray-600 mb-4" />
                      </li>
                      <li className="clearfix">
                        <div className="value">
                          {" "}
                          <span> Wed - Thurs :</span> 8.00 am - 6.00 pm{" "}
                        </div>
                        <hr className="w-60 border-t-1 border-gray-600 mb-4" />
                      </li>
                      <li className="clearfix">
                        <div className="value">
                          <span> Fri :</span> 3.00 pm - 8.00 pm{" "}
                        </div>
                        <hr className="w-60 border-t-1 border-gray-600 mb-4" />
                      </li>
                      <li className="clearfix">
                        <div className="value">
                          
                          <span> Sun : </span> Closed
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="footer-bottom bg-gray-900">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-6 pb-6">
              <div className="col-span-1">
                <div className="footer-paragraph">
                  © 2024 ThemeMascot. All Rights Reserved.
                </div>
              </div>
              <div className="col-span-1">
                <div className="footer-paragraph text-right">Site Template</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

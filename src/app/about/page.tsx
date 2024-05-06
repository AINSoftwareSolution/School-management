import { Container } from "../component";
import { FaAngleRight } from "react-icons/fa";
import aboutImage from "../utilis/Images/AboutImage.jpg"; // Import the image

const About = () => {
  return (
    <div className=" w-full h-[70vh] ">
      <Container>
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage.src})` }}
        ></div>
        <div className=" flex flex-col justify-center items-center text-white">
          <h2 className="text-2xl">About Us</h2>
          <nav
            role="navigation"
            className="breadcrumb-trail breadcrumbs flex items-center"
          >
            <div className="breadcrumbs">
              <span className="trail-item trail-begin ">
                <span>Home</span>
              </span>
              <span className="mx-2">
                <FaAngleRight />
              </span>
              <span className="text-center">About</span>
            </div>
          </nav>
        </div>
      </Container>

      {/* Next section */}
      <div className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="lg:col-span-7 xl:col-span-5 wow fadeInLeft"
          >
            <div className="about-text-content mb-md-30">
              <h3 className="text-theme-colored2 line-bottom">
                Welcome To <span className="text-theme-colored3">KidsPro</span>
                <br />
                Best Education in Our Kindergarten
              </h3>
              <h5 className="text-theme-colored4">
                Lorem ipsum dolor sit amet soluta saepe odit error, maxime
                praesentium sunt udiandae!
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                atque officiis maxime suscipit expedita obcaecati nulla in
                ducimus iure quos quam recusandae dolor quas et perspiciatis
                voluptatum accusantium delectus nisi reprehenderit, eveniet fuga
                modi pariatur, eius vero. Ea vitae maiores.
              </p>
              <a
                href="#"
                className="btn btn-sm btn-flat btn-theme-colored2 btn-outline-light mt-15 mr-15"
              >
                Read More
              </a>
              <a
                href="#"
                className="btn btn-sm btn-flat btn-theme-colored1 btn-outline-light mt-15"
              >
                Get a Quote
              </a>
            </div>
          </div>
          <div
            className="lg:col-span-5 xl:col-span-5 xl:col-start-7 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
          >
            <div className="video-popup">
              <a>
                <img
                  alt=""
                  src="images/about/6.png"
                  className="img-fullwidth"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

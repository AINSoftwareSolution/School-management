import { Container } from "../component";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import drawingImage from "../utilis/Images/drawingImg.jpg";
import MathsImage from "../utilis/Images/mathsImg.jpg";
import LearningImage from "../utilis/Images/learningImg.jpg";
import MultimediaImage from "../utilis/Images/multimediaImg.jpg";
import AboutImage from "../utilis/Images/AboutImage.jpg"

const About = () => {
  return (
    <main>
   <Container>
  <div className="relative w-full h-[60vh]">
    {/* Image */}
    <Image
      src={AboutImage}
      alt=""
      className="object-cover w-full h-full"
    />
    
    {/* Text container */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
      {/* Heading */}
      <h2 className="text-4xl mb-2">About Us</h2>
      {/* Text */}
      <p className="mt-2">
        <span>Home</span> 
        <FaAngleRight className="inline mx-2" /> 
        <span>About</span>
      </p>
    </div>
  </div>
</Container>



      <Container>
        {/* Next section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 mb-4 mt-6 gap-4 ">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-[#00BCD4] text-4xl">
              Welcome To{" "}
              <span className=" text-red-500 text-4xl ">
                Wisdom Waves School
              </span>
              <br />
              Best Education in Our Kindergarten
            </h3>
            <h5 className=" text-[#5038b1] text-2xl">
              Lorem ipsum dolor sit amet soluta saepe odit error, maxime
              praesentium sunt udiandae!
            </h5>
            <p className="text-[#66788a] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              atque officiis maxime suscipit expedita obcaecati nulla in ducimus
              iure quos quam recusandae dolor quas et perspiciatis voluptatum
              accusantium delectus nisi reprehenderit, eveniet fuga modi
              pariatur, eius vero. Ea vitae maiores.
            </p>
            <button
              type="button"
              className="text-white bg-[#00BCD4] hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3.5 me-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Read More
            </button>
            <button
              type="button"
              className="text-white bg-[#FF9800] hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get a Queto
            </button>
          </div>
          <div className="hidden lg:block col-span-1 lg:col-span-1 schoolImage"></div>
        </div>

        {/* 2nd Next Section */}

        <div className="my-8" id="activiy">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 mt-10">
              Our <span className="text-red-500"> Coursers </span>
            </h1>
            <p className="text-[#66788a] ">
              There are many variations of passages. But the majority have
              suffered alteration in some form, by injected humour, or
              randomised words.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2">
            <div
              className="default-carousel "
              style={{ width: "395.333px", marginRight: "10px" }}
            >
              <div className="p-8">
                <Image
                  src={MathsImage}
                  alt="Image 1"
                  className="mx-auto mb-4 rounded-md"
                  width={400}
                  height={400}
                />
                <div className="course-overlay  "></div>
              </div>
              <div className="course-details clearfix p-10 ">
                <h3 className="mt-0 mb-0">
                  <a className=" text-2xl text-semibold text-red-500" href="#">
                    Math Classes
                  </a>
                </h3>
                <ul className="review_text">
                  <li className="list-inline-item">
                    <div className="star-rating" title="Rated 5.00 out of 5">
                      <span className="block w-full text-[#00BCD4] text-2xl">* * * * *</span>
                    </div>
                  </li>
                </ul>
                <p className="mb-4 text-[#66788a]">
                  Lorem ipsum dolor adipisicing elit. Prsent quossit sit amet
                  consect adipisicin elit quosit
                </p>

                <div className="course-details-bottom mt-4">
                  <button
                    type="button"
                    className="text-white bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Capacity <br />
                    20 kids
                  </button>

                  <button
                    type="button"
                    className="text-white bg-[#5038b1] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Duration <br />
                    45 min
                  </button>

                  <button
                    type="button"
                    className="text-white bg-[#00BCD4] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Age <br />
                    5y - 6y
                  </button>
                </div>
              </div>
            </div>
            <div
              className="default-carousel "
              style={{ width: "395.333px", marginRight: "10px" }}
            >
              <div className="p-8">
                <Image
                  src={drawingImage}
                  alt="Image 1"
                  className="mx-auto mb-4 rounded-md "
                  width={400}
                  height={400}
                />
                <div className="course-overlay  "></div>
              </div>
              <div className="course-details clearfix p-10 ">
                <h3 className="mt-0 mb-0">
                  <a className=" text-2xl text-semibold text-red-500" href="#">
                    Drawing Class
                  </a>
                </h3>
                <ul className="review_text">
                  <li className="list-inline-item">
                    <div className="star-rating" title="Rated 5.00 out of 5">
                      <span className="block w-full text-[#00BCD4] text-2xl">* * * * *</span>
                    </div>
                  </li>
                </ul>
                <p className="mb-4 text-[#66788a]">
                  Lorem ipsum dolor adipisicing elit. Prsent quossit sit amet
                  consect adipisicin elit quosit
                </p>

                <div className="course-details-bottom mt-4">
                  <button
                    type="button"
                    className="text-white bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Capacity <br />
                    20 kids
                  </button>

                  <button
                    type="button"
                    className="text-white bg-[#5038b1] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Duration <br />
                    45 min
                  </button>

                  <button
                    type="button"
                    className="text-white bg-[#00BCD4] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Age <br />
                    5y - 6y
                  </button>
                </div>
              </div>
            </div>
            <div
              className="default-carousel "
              style={{ width: "395.333px", marginRight: "10px" }}
            >
              <div className="p-8">
                <Image
                  src={LearningImage}
                  alt="Image 1"
                  className="mx-auto mb-4 rounded-md "
                  width={400}
                  height={400}
                />
                <div className="course-overlay  "></div>
              </div>
              <div className="course-details clearfix p-10 ">
                <h3 className="mt-0 mb-0">
                  <a className=" text-2xl text-semibold text-red-500" href="#">
                    Learning Class
                  </a>
                </h3>
                <ul className="review_text">
                  <li className="list-inline-item">
                    <div className="star-rating" title="Rated 5.00 out of 5">
                      <span className="block w-full text-[#00BCD4] text-2xl">* * * * *</span>
                    </div>
                  </li>
                </ul>
                <p className="mb-4 text-[#66788a]">
                  Lorem ipsum dolor adipisicing elit. Prsent quossit sit amet
                  consect adipisicin elit quosit
                </p>

                <div className="course-details-bottom mt-4">
                  <button
                    type="button"
                    className="text-white bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Capacity <br />
                    20 kids
                  </button>

                  <button
                    type="button"
                    className="text-white bg-[#5038b1] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Duration <br />
                    45 min
                  </button>

                  <button
                    type="button"
                    className="text-white bg-[#00BCD4] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Age <br />
                    5y - 6y
                  </button>
                </div>
              </div>
            </div>

            <div
              className="default-carousel "
              style={{ width: "395.333px", marginRight: "10px" }}
            >
              <div className="p-8">
                <Image
                  src={MultimediaImage}
                  alt="Image 1"
                  className="mx-auto mb-4 rounded-md "
                  width={400}
                  height={400}
                />
                <div className="course-overlay  "></div>
              </div>
              <div className="course-details clearfix p-10 ">
                <h3 className="mt-0 mb-0">
                  <a className=" text-2xl text-semibold text-red-500" href="#">
                    Multimedia Class
                  </a>
                </h3>
                <ul className="review_text">
                  <li className="list-inline-item">
                    <div className="star-rating" title="Rated 5.00 out of 5">
                      <span className="block w-full text-[#00BCD4] text-2xl">* * * * *</span>
                    </div>
                  </li>
                </ul>
                <p className="mb-4 text-[#66788a]">
                  Lorem ipsum dolor adipisicing elit. Prsent quossit sit amet
                  consect adipisicin elit quosit
                </p>

                <div className="course-details-bottom mt-4">
                  <button
                    type="button"
                    className="text-white bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Capacity <br />
                    20 kids
                  </button>

                  <button
                    type="button"
                    className="text-white bg-[#5038b1] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Duration <br />
                    45 min
                  </button>

                  <button
                    type="button"
                    className="text-white bg-[#00BCD4] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-4"
                  >
                    Age <br />
                    5y - 6y
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default About;

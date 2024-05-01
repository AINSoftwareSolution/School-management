"use client";
import Image from "next/image";
import { Container, InputField } from "./component";
import Image1 from "./utilis/Images/lunch-food-sandwich-milk-and-fruits.webp";
import Image2 from "./utilis/Images/clock.jpg";
import Image3 from "./utilis/Images/microscope.png";
import Image4 from "./utilis/Images/classworks.webp";
import Square1 from "./utilis/Images/square-shape-img1.jpg";
import Square2 from "./utilis/Images/square-shape-img2.jpg";
import Square3 from "./utilis/Images/square-shape-img3.jpg";
import Square4 from "./utilis/Images/square-shape-img4.jpg";
import WelcomeImage from "./utilis/Images/img_wel.webp";
import { FaPaintBrush, FaMusic, FaHome } from "react-icons/fa";
import Link from "next/link";
import {
  MdOutlineSportsSoccer,
  MdSportsEsports,
  MdEmojiTransportation,
  MdNoFood,
} from "react-icons/md";
import { TbAirConditioning, TbNetwork } from "react-icons/tb";

export default function Home() {
  return (
    <main>
      {/* banner */}
      <div className="w-full h-full bg-banner-bg  flex items-center">
        <div className="w-full bg-black opacity-80 text-white banner bg-center ">
          <Container>
            <div className="relative bg-cover h-[98vh] max-w-screen-2xl mx-auto flex justify-end items-center">
              <div className="max-w-xl px-2 py-12 bg-none ">
                <h1 className="text-[2.5rem] uppercase font-bold text-purple-700  leading-[3rem]	">
                  Practical Teaching &{" "}
                  <span className="text-red-500"> Social Development</span>
                </h1>

                <p className="text-black md:text-lg font-semibold my-8">
                  We aim at success by creating skills necessary for kids to
                  enrich & empower in studies & sports.
                </p>
                <Link
                  href="#_"
                  className="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 
                rounded-lg hover:from-purple-700 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* welcome section */}

      <Container>
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-2/3 mb-8 md:mb-0">
              <div className="text-center md:text-left">
                <h1 className="text-blue-500 text-4xl font-bold mb-4 mt-8">
                  Welcome To Wisdom Waves School
                </h1>
                <h4 className="text-red-500 text-2xl font-bold mt-4">
                  World's We recognise that quality education comes through:
                </h4>
                <hr className="w-16 border-t-2 border-blue-400"></hr>
                <p className="text-gray-600 text-xl mb-6 mt-4">
                  We believe that curriculum plays a vital role in every
                  preschool activity, right from interactions and meals to
                  singing and playing. We never miss an opportunity to educate.
                  We have the best-in-class curriculum designed in-house using a
                  combination of Playway and Montessori methods.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="tm-sc-icon-box icon-box flex justify-center sm:justify-start items-center text-center sm:text-left iconbox-theme-colored3">
                    <div className="flex flex-col justify-center">
                      <h2 className="icon-box-title text-2xl text-blue-700 font-bold">
                        Active Learning
                      </h2>
                      <p className="text-gray-600 text-md mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  {/*<!-- Repeat the same structure for other icon boxes --> */}
                  <div className="tm-sc-icon-box icon-box flex justify-center sm:justify-start items-center text-center sm:text-left iconbox-theme-colored3">
                    <div className="flex flex-col justify-center">
                      <h2 className="icon-box-title text-2xl text-red-500 font-bold">
                        Fun And Happiness
                      </h2>
                      <p className="text-gray-600 text-md mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="tm-sc-icon-box icon-box flex justify-center sm:justify-start items-center text-center sm:text-left iconbox-theme-colored3">
                    <div className="flex flex-col justify-center">
                      <h2 className="icon-box-title text-2xl text-yellow-500 font-bold">
                        Fullfilled With Love
                      </h2>
                      <p className="text-gray-600 text-md mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="tm-sc-icon-box icon-box flex justify-center sm:justify-start items-center text-center sm:text-left iconbox-theme-colored3">
                    <div className="flex flex-col justify-center">
                      <h2 className="icon-box-title text-2xl text-pink-500 font-bold">
                        Expert Teachers
                      </h2>
                      <p className="text-gray-600 text-md mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<!-- Right Column --> */}
            <div className="w-full md:w-1/3">
              <div className="text-center">
                <Image
                  src={WelcomeImage}
                  alt="welcome-image"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Standard Curriculum */}
      <div className="bg-white w-full standardCurriculum">
        <Container>
          <div className="flex flex-col justify-start items-center py-8 ">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-red-500 mb-8">
                Standard Curriculum
              </h1>
              <div className="flex justify-center items-center">
                <hr className="w-48 border-t-2 border-pink-600" />
              </div>
            </div>

            <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-blue-100 rounded-lg hover:shadow-xl transition duration-300">
                <div className="p-8">
                  <Image
                    src={Image1}
                    alt="Image 1"
                    className="mx-auto mb-4 rounded-md"
                    width={250}
                    height={250}
                  />
                  <div className="mb-4 font-bold text-center text-2xl">
                    Middle (10-16) Years
                  </div>
                  <p className="text-gray-500">
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mu sdis parturient.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-b from-yellow-100 to-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                <div className="p-8">
                  <Image
                    src={Image2}
                    alt="clock Image 2"
                    className="mx-auto mb-8 rounded-md"
                    width={300}
                    height={300}
                  />
                  <div className="mb-4 font-bold text-center text-2xl">
                    Elementary School
                  </div>
                  <p className="text-gray-500">
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mu sdis parturient.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-b from-purple-100 to-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                <div className="p-8">
                  <Image
                    src={Image3}
                    alt="Image 3"
                    className="mx-auto mb-4 rounded-md"
                    width={300}
                    height={300}
                  />
                  <div className="mb-4 font-bold text-center text-2xl">
                    Kinder (3-6) Years
                  </div>
                  <p className="text-gray-500">
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mu sdis parturient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Activity Section */}
      <div className="bg-white">
        <div className="container mx-auto py-8">
          <div className="text-center">
            <h1 className="text-4xl text-red-500 font-bold mb-4 mt-8">
              Our Activities
            </h1>
            <p className="text-gray-600">
              There are many variations of passages. But the majority have
              suffered alteration in some form, by injected humour, or
              randomised words.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Sport Activity */}
            <div className="activity bg-white rounded-lg text-center border p-4 shadow-lg  hover:bg-purple-100 transition duration-300 ease-in-out">
              <div className="activity-icon bg-red-500 text-white w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4">
                <MdOutlineSportsSoccer />
              </div>
              <h2 className="text-2xl text-red-500 font-semibold mb-2 mt-0">
                Sport
              </h2>
              <p className="text-black font-semibold mb-4">
                Engage in physical activities and sportsmanship.
              </p>
              <p className="text-gray-600">
                Participating in sports activities promotes physical fitness and
                overall well-being among students. Sports teach the value of
                collaboration and teamwork.
              </p>
            </div>

            {/* Music Activity */}
            <div className="activity bg-white rounded-lg text-center border p-4 shadow-lg  hover:bg-purple-100 transition duration-300 ease-in-out">
              <div className="activity-icon bg-blue-500 text-white w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4">
                <FaMusic />
              </div>
              <h2 className="text-2xl text-blue-500 font-semibold mb-2 mt-0">
                Music
              </h2>
              <p className="text-black font-semibold mb-4">
                Explore the world of music and rhythm.
              </p>
              <p className="text-gray-600">
                Music offers children a creative outlet for self-expression,
                fosters cognitive development, and promotes social skills
                through collaborative activities.
              </p>
            </div>

            {/* Painting Activity */}
            <div className="activity bg-white rounded-lg text-center border p-4 shadow-lg  hover:bg-purple-100 transition duration-300 ease-in-out">
              <div className="activity-icon bg-yellow-400 text-white w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4">
                <FaPaintBrush />
              </div>
              <h2 className="text-2xl text-yellow-400 font-semibold mb-2 mt-0">
                Painting
              </h2>
              <p className="text-black font-semibold mb-4">
                Express yourself through colors and creativity.
              </p>
              <p className="text-gray-600">
                Painting activities encourage children to unleash their
                creativity and imagination, develop fine motor skills and
                coordination, and engage in sensory exploration.
              </p>
            </div>

            {/* Playground Activity */}
            <div className="activity bg-white rounded-lg text-center border p-4 shadow-lg  hover:bg-purple-100 transition duration-300 ease-in-out">
              <div className="activity-icon bg-green-500 text-white w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4">
                <MdSportsEsports />
              </div>
              <h2 className="text-2xl text-green-500 font-semibold mb-2 mt-0">
                Playground
              </h2>
              <p className="text-black font-semibold mb-4">
                Enjoy recreational activities and outdoor fun.
              </p>
              <p className="text-gray-600">
                Playground activities promote physical development, social
                interaction, and imaginative play. Children engage in various
                outdoor activities such as climbing.
              </p>
            </div>
          </div>
        </div>

        {/* section-5 */}
        <div className="w-full h-auto bg-blue-500 py-16">
          <Container>
            <div className="grid grid-cols-2 items-center gap-16 ">
              <div className="text-white md:pl-12">
                <div className="text-white">
                  <h2 className="text-white text-4xl font-bold text-center mb-8">
                    Why Our Schools are the Right Fit for Your Child?
                  </h2>
                  <p className="text-white text-center">
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                  </p>
                </div>

                <div className="mt-4">
                  {/* Container for buttons */}
                  <div className="mb-2">
                    {/* Container for button 1 */}
                    <button className="rounded-full bg-white text-black py-4 px-20 shadow-lg hover:bg-blue-100 transition duration-300">
                      <span className="mr-2" role="img" aria-label="icon">
                        🎓
                      </span>
                      Well Trained Professionals
                    </button>
                  </div>
                  <br></br>
                  <div className="mb-2">
                    {/* Container for button 2 */}
                    <button className="rounded-full bg-white text-black py-4 px-20 shadow-lg hover:bg-blue-100 transition duration-300">
                      <span className="mr-2" role="img" aria-label="icon">
                        🏫
                      </span>
                      Awesome Infra-Structure
                    </button>
                  </div>
                  <br></br>
                  <div>
                    <button className="rounded-full bg-white text-black py-4 px-20 shadow-lg hover:bg-blue-100 transition duration-300">
                      <span className="mr-2" role="img" aria-label="icon">
                        📚
                      </span>
                      International Lesson Patterns
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                  src={Image4}
                  alt="Image4"
                  width={25}
                  height={25}
                  layout="responsive"
                />
              </div>
            </div>
          </Container>
        </div>

        {/* section-6 */}

        <div className="w-full h-auto bg-white py-16">
          <Container>
            <div className="grid grid-cols-2 p-4 gap-4">
              <div>
                <div className="flex justify-end">
                  <div className="bg-gradient-to-b from to-white p-4 rounded-full">
                    <Image
                      src={Square1}
                      alt=" Square-shape-img1"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-gradient-to-b from to-white p-4 rounded-full">
                      <Image
                        src={Square2}
                        alt=" Square-shape-img2"
                        width={150}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-gradient-to-b from to-white p-4 rounded-full">
                    <Image
                      src={Square3}
                      alt=" Square-shape-img1"
                      width={250}
                      height={250}
                    />
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-gradient-to-b from to-white p-4 rounded-full">
                      <Image
                        src={Square4}
                        alt=" Square-shape-img2"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-2xl p-16 rounded-lg">
                <h2 className="text-black text-[2rem] font-[500]">
                  Ask About Kids Acts
                </h2>
                <form>
                  <InputField label="Your name" name="your_name" />
                  <InputField label="Email Address" name="your_email" />
                  <InputField label="Contact Number" name="your_contact" />
                  <InputField label="Stuyding Class" name="your_class" />
                  <InputField
                    label="Type Your Requirements"
                    name="your_requirements"
                  />
                </form>
                <button
                  type="button"
                  className="text-white bg-purple-700 hover:bg-purple-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-white w-full">
        <Container>
          <div className="flex flex-col justify-start items-center py-8">
            <div className="text-center">
              <h1 className="text-4xl text-red-500 font-bold mb-4 mt-12">
                Facilities
              </h1>
              <div className="flex justify-center items-center">
                <hr className="w-48 border-t-4 border-pink-600" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
              {/* Aircondition */}
              <div className="activity bg-white rounded-lg text-center border p-4 shadow-lg hover:shadow-lg transition duration-300 ease-in-out hover:bg-blue-400">
                <div className="activity-icon text-white w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4">
                  <TbAirConditioning style={{ color: "#FFD700" }} />
                </div>
                <h2 className="text-2xl font-semibold mb-2 mt-0 text-black">
                  Aircondition
                </h2>
                <p className="text-gray-500">Weather control.</p>
              </div>

              {/* Infrastructure */}
              <div className="activity bg-white rounded-lg text-center border border-blue-500 p-4 shadow-lg hover:shadow-lg transition duration-300 ease-in-out hover:bg-blue-400 hover:text-black">
                <div className="activity-icon  text-red w-20 h-20 flex justify-center items-center mx-auto mb-4">
                  <FaHome style={{ color: "#FFD700" }} />
                </div>
                <h2 className="text-2xl text-black font-semibold mb-2 mt-0">
                  Infrastructure
                </h2>
                <p className="text-gray-500">Campus Area.</p>
              </div>

              {/* Transport */}
              <div className="activity bg-white rounded-lg text-center border border-green-500 p-4 shadow-lg hover:shadow-lg transition duration-300 ease-in-out hover:bg-blue-400 hover:text-black">
                <div className="activity-icon text-yellow text-white w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4">
                  <MdEmojiTransportation style={{ color: "#FFD700" }} />
                </div>
                <h2 className="text-2xl text-black font-semibold mb-2 mt-0">
                  Transport
                </h2>
                <p className="text-gray-500">Vehicles.</p>
              </div>

              {/* Food & Stay */}
              <div className="activity bg-white rounded-lg text-center border border-green-500 p-4 shadow-lg hover:shadow-lg transition duration-300 ease-in-out hover:bg-blue-400 hover:text-black">
                <div className="activity-icon text-white w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4">
                  <MdNoFood style={{ color: "#FFD700" }} />
                </div>
                <h2 className="text-2xl text-black font-semibold ">
                  {" "}
                  Food & Stay{" "}
                </h2>

                <p className="text-gray-500">Lunch Snacks.</p>
              </div>

              {/* Networked */}
              <div className="activity bg-white rounded-lg text-center border border-red-500 p-4 shadow-lg hover:shadow-lg transition duration-300 ease-in-out hover:bg-blue-400 hover:text-black">
                <div className="activity-icon text-white w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4">
                  <TbNetwork style={{ color: "#FFD700" }} />
                </div>
                <h2 className="text-2xl text-red-500 font-semibold mb-2 mt-0">
                  Networked
                </h2>
                <p className="text-gray-500">Communication.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

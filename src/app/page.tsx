"use client";
import Image from "next/image";
import Link from "next/link";
import Image1 from "./utilis/Images/carousel-1.jpg";
import Image2 from "./utilis/Images/carousel-2.jpg";
import Image3 from "./utilis/Images/microscope.png";
import WelcomeImage from "./utilis/Images/img_wel.webp";
import { Container } from "./component";
import { useState } from "react";
import { activitiesData, faqData } from "./utilis/data";

export default function Home() {
  const [isOpen, setIsOpen] = useState(Array(4).fill(false));

  const toggleAccordion = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };
  return (
    <main>
      {/* banner */}
      <div className="bg-cover bg-top bg-fixed min-h-screen flex items-center banner border-a" >
        <Container>
          <div className="flex justify-start ">
            <div className="w-10/12 lg:w-8/12 z-10">
              <h1 className="text-4xl lg:text-6xl text-white mb-6 leading-7	">Make A Brighter Future For Your 
                Child</h1>
              <p className="text-lg lg:text-xl font-medium text-white mb-6 pb-2">Vero elitr justo clita lorem. 
               Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea 
                elitr.</p>
              <Link href="" className="bg-[#cba347] text-white rounded-full py-2 sm:py-4 px-4 sm:px-9 me-3">Our 
               Classes
              </Link>
              <Link href="" className="bg-purple-800 text-white rounded-full py-2 sm:py-4 px-4 sm:px-9 ">
                Learn More
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* welcome section */}

      <Container>
        <div className="flex flex-wrap justify-center items-center my-8" id="about">
          <div className="w-full md:w-[60%] mb-8 md:mb-0">
            <div className="text-center md:text-left">
              <h1 className="text-blue-500 text-4xl font-bold mb-4 mt-8">
                Welcome To Wisdom Waves School
              </h1>
              <h4 className="text-red-500 text-2xl font-bold mt-4">
                Worlds We recognise that quality education comes through:
              </h4>
              <hr className="w-16 border-t-2 border-blue-400"></hr>
              <p className="text-gray-600 text-xl mb-6 mt-4">
                We believe that curriculum plays a vital role in every
                preschool activity, right from interactions and meals to
                singing and playing. We never miss an opportunity to educate.
                We have the best-in-className curriculum designed in-house
                using a combination of Playway and Montessori methods.
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
          <div className="w-full md:w-[40%] px-3">
            <Image
              src={WelcomeImage}
              alt="welcome-image"
              width={700}
              height={700}
            />
          </div>
        </div>


        {/* Standard Curriculum */}
        <div className="flex flex-col justify-start items-center py-8 my-8" id="program">
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
                  width={200}
                  height={200}
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
                  width={200}
                  height={200}
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
                  width={200}
                  height={200}
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

        {/* Activity Section */}
        <div className="my-8" id="activiy">
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
            {activitiesData.map((activity, index) => (
              <div key={index}
                className={`bg-white rounded-lg text-center border p-4 shadow-lg 
              hover:bg-purple-100 transition duration-300 ease-in-out`}>
                <div className={`icon w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4 ${activity.color}`}>
                  {/* {activity.icon} */}
                </div>
                <h2 className={`text-2xl font-semibold mb-2 mt-0 text-${activity.color.substring(3)}`}>
                  {activity.title}
                </h2>
                <p className="text-black font-semibold mb-4">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* faq */}
        <div className="my-8" id="faq">
          <div className="  text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
            <p className=" mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
          </div>

          <div className=" mt-8 space-y-4 md:mt-16">
            {faqData.map((faq, index) => (
              <div key={index} className={`transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer ${isOpen[index] ? 'bg-gray-50' : ''}`} onClick={() => toggleAccordion(index)}>
                <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                  <span className="flex text-lg font-semibold text-black">{faq.question}</span>

                  <svg className={`w-6 h-6 text-gray-400 ${isOpen[index] ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${isOpen[index] ? '' : 'hidden'}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-base mt-9">Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
        </div>

      </Container>

    </main>
  );
}

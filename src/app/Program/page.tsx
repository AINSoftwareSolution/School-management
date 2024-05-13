import { Container } from "../component";
import Image from "next/image";
// import progrmamImage from "../utilis/images/ProgramImage.jpg"
// import PlaygroupImage from "../utilis/images/playgroupImage.jpg"

const Programs = () => {
  return (
    <main>
      <Container>
        <div className=" w-full h-[60vh]">
          {/* <Image
            src={progrmamImage}
            alt=""
            className=" w-full h-full"
          /> */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">

            <h2 className="text-4xl mb-2">Programs</h2>
          </div>
        </div>
      </Container>
      {/* playgrond section*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 mt-4 p-4 gap-4">
        <div className="col-span-1 lg-span-col-1 ">
          <h2 className="text-4xl text-[#00BCD4] p-8">
            PlayGroup
          </h2>
          <h5 className=" text-2xl font-semibold text-pink-600">Age group 1.8-2.5 years</h5>

          <p className="text-[#66788a]">
            At Wisdom Waves School, a child can never differentiate between play and learning. Are they playing or are they learning? They are doing both! We have a play way of learning which keeps a child engaged and encourages him to explore new concepts and learn about them. We introduce them to the formal education system in a light and fun loving environment that makes them happy about their start!

            The activities at the best playgroup in Kondhwa are conducted by third party professionals to ensure that a child learns the best! Our children are creative thinkers who are ready to take over the world!</p>
        </div>


        <div className="hidden lg:block col-span-1 lg:col-span-1">
          {/* <Image
            src={PlaygroupImage}
            alt=''
            className=""
          /> */}
        </div>
      </div>

      {/* 2nd section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-200  mb-4 mt-8 p-4 gap-4">
        <div className="bg-[#7b3186] rounded-lg">
          <h1 className="text-2xl font-semibold text-[#f9ae02] mt-4 p-6">Key Areas in Playgroup Curriculum</h1>
          <ul className="list p-6">
            <li className="flex items-center">
              <span className="text-white">Theme based Concept Time</span>
            </li>
            <li className="flex items-center">
              <span className="text-white">Exploration based learning</span>
            </li>
            <li className="flex items-center">
              <span className="text-white">Promoting positive peer social </span>
            </li>
            <li className="flex items-center">
              <span className="text-white">Math Readiness</span>
            </li>
            <li className="flex items-center">
              <span className="text-white">Language Readiness</span>
            </li>
            <li className="flex items-center">
              <span className="text-white"> Promoting fine and gross motor skills</span>
            </li>
            <li className="flex items-center mb-6">
              <span className="text-white">Promoting cognitive development</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#7b3186] rounded-lg">

          <h1 className="text-2xl font-semibold text-[#f9ae02] mt-4 p-6">Playgroup learning Activities Included</h1>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="col-md-6">

              <ul className="list p-6">
                <li className="flex items-center">

                  <span className="text-white">Circle Time</span>
                </li>
                <li className="flex items-center">

                  <span className="text-white">Free Play</span>
                </li>
                <li className="flex items-center">

                  <span className="text-white">Knowledge Time </span>
                </li>
                <li className="flex items-center">

                  <span className="text-white">Free Play</span>
                </li>
                <li className="flex items-center">

                  <span className="text-white">Language Readiness</span>
                </li>
                <li className="flex items-center">

                  <span className="text-white"> Artsy</span>
                </li>
                <li className="flex items-center mb-6">

                  <span className="text-white">Personality development</span>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <ul className="list p-6">
                <li className="flex items-center">
                  <span className="text-white">Library</span>
                </li>
                <li className="flex items-center">
                  <span className="text-white">Talk Time</span>
                </li>
                <li className="flex items-center">
                  <span className="text-white">Sciencify</span>
                </li>
                <li className="flex items-center">
                  <span className="text-white">Outdoor</span>
                </li>
                <li className="flex items-center">
                  <span className="text-white">Indoor </span>
                </li>
                <li className="flex items-center">
                  <span className="text-white">Whirl & Twirl </span>
                </li>
                <li className="flex items-center mb-6">
                  <span className="text-white">Sensorium </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd column */}
      <Container>
        <div className=" w-full h-[60vh] bg-shadow-lg">
          {/* <Image
            src={progrmamImage}
            alt=""
            className=" w-full h-full"
          /> */}

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-4xl mb-2">Programs</h2>
          </div>
        </div>
      </Container>

      <div className="grid grid-cols-1 lg-grid-cols-2 mb-4 mt-4 p-4 gap-4">
        <div className="bg-gray-300 ">
          <h1 className="text-4xl text-red-500">Nursery</h1>
        </div>
      </div>
    </main>
  );
};

export default Programs;


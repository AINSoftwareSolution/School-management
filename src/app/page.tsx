"use client";
import Image from "next/image";
import { Container, InputField, TabPane, Tabs } from "./component";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Image1 from "./utilis/Images/lunch-food-sandwich-milk-and-fruits.webp";
import Image2 from "./utilis/Images/clock.jpg";
import Image3 from "./utilis/Images/microscope.png";
import Image4 from "./utilis/Images/classworks.webp";
import Square1 from "./utilis/Images/square-shape-img1.jpg";
import Square2 from "./utilis/Images/square-shape-img2.jpg";
import Square3 from "./utilis/Images/square-shape-img3.jpg";
import Square4 from "./utilis/Images/square-shape-img4.jpg";

export default function Home() {
  return (
    <main>
      {/* banner */}
      <div className="w-full h-full bg-banner-bg  flex items-center">
        <div className="w-full bg-black opacity-80 text-white banner bg-center ">
          <Banner />
        </div>
      </div>
      <div className="bg-white w-full standardCurriculum">
        <Container>
          {/* stan */}
          <div className="flex flex-col justify-start items-center py-8 ">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-8">Standard Curriculum</h1>
              <div className="flex justify-center items-center">
                <hr className="w-48 border-t-4 border-pink-600" />
              </div>
            </div>

            <div className="grid  mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-blue-100 to-white shadow-lg p-8 rounded-lg">
                <Image
                  src={Image1}
                  alt=" Image 1"
                  className="h-50 w-50 mx-auto mb-4 rounded-lg"
                  width={150}
                  height={150}
                />
                <div className="mb-4 font-bold text-center text-xl">
                  Middle (10-16) Years
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem quaerat similique labore ab doloribus omnis ullam
                  nulla doloremque! Incidunt earum debitis voluptatibus eos
                  laudantium aliquam, ea repudiandae quisquam ab quod quaerat
                  ipsam pariatur. Minima aspernatur cupiditate in facere
                  doloremque incidunt, qui vel tenetur, deleniti excepturi
                  perspiciatis maiores nisi aperiam porro.
                </p>
              </div>

              <div className="bg-gradient-to-b from-yellow-100 to-white shadow-lg p-8 rounded-lg">
                <Image
                  src={Image2}
                  alt="clock Image 2"
                  className="h-50 w-50 mx-auto mb-4 rounded-lg"
                  width={150}
                  height={150}
                />
                <div className="mb-4 font-bold text-center text-xl">
                  Elementary School
                </div>
                <p>
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                  dicta soluta hic eaque quo alias eos velit cumque repudiandae
                  quaerat deleniti earum nihil, sequi quisquam provident
                  voluptate obcaecati at nemo! Saepe laboriosam ex neque
                  consequuntur incidunt dolor temporibus, ipsum tenetur, odit
                  tempora esse autem cumque earum officiis dolorem, harum est!{" "}
                </p>
              </div>

              <div className="bg-gradient-to-b from-purple-100 to-white shadow-lg p-8 rounded-lg">
                <Image
                  src={Image3}
                  alt=" Image 3"
                  className="h-50 w-50 mx-auto mb-4 rounded-lg"
                  width={150}
                  height={150}
                />
                <div className="mb-4 font-bold text-center text-xl">
                  Kinder (3-6) Years{" "}
                </div>
                <p>
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime cum laudantium minus amet adipisci. Ipsam numquam
                  sapiente sit dicta quisquam, esse, perspiciatis amet nesciunt
                  officiis et magni sunt obcaecati consequatur porro nemo
                  accusamus saepe laudantium repellendus? Cum asperiores vitae,
                  odit quas porro velit dolorem natus quia at vero, perspiciatis
                  architecto.{" "}
                </p>
              </div>
            </div>
          </div>
        </Container>
        {/* section-3 */}
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
                    \ {/* Container for button 1 */}
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
        {/* section-4 */}

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
                        width={200}
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
    </main>
  );
}

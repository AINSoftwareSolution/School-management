import Image from 'next/image';
import Image1 from "./utilis/Images/carousel-1.jpg";

function AboutUsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative h-96">
           
            <Image
              src={Image1}
              alt="About Us Banner"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <div className="px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus lorem, eget ultrices mauris. Integer eget sodales quam. Duis vestibulum ligula eget justo dapibus, ac tincidunt nulla luctus. Vivamus volutpat eleifend vehicula. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;

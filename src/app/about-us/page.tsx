
import Link from "next/link"; 

function AboutUsPage() {
  return (
    <div className="bg-cover bg-top bg-fixed h-[90vh] flex items-center banner border">
    
     
        <div className="flex justify-start">
          <div className="w-10/12 lg:w-8/12 z-10">
            <h1 className="text-4xl lg:text-6xl text-white mb-6 leading-7">Make A Brighter Future For Your Child</h1>
            <p className="text-lg lg:text-xl font-medium text-white mb-6 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
            <Link href="" className="bg-[#cba347] text-white rounded-full py-2 sm:py-4 px-4 sm:px-9 me-3">
              Our Classes
            </Link>
            <Link href="" className="bg-purple-800 text-white rounded-full py-2 sm:py-4 px-4 sm:px-9 ">
              Learn More
            </Link>
          </div>
        </div>
   
    </div>
  );
}

export default AboutUsPage;

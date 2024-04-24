'use client'
import { AcadamicDetails, Confirmation, ContactDetails, StudentDetails } from "@/app/container";
import { useState } from "react";

const Details: React.FC = () => {
    // State to manage form data
    const [data, setData] = useState();

    // Function to handle input changes
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    //     const { name, value } = event.target;
    //     setData({
    //         ...data,
    //         [name]: value,
    //     });
    // };

    // State to track active tab
    const [activeTab, setActiveTab] = useState<number>(0);

    // Function to handle next button click
    const handleNext = (): void => {
        setActiveTab(prev => Math.min(prev + 1, formElements.length - 1));
    };

    // Function to handle back button click
    const handleBack = (): void => {
        setActiveTab(prev => Math.max(prev - 1, 0));
    };

    // Array of form components
    const formElements: JSX.Element[] = [
        <StudentDetails key={0} />,
        <ContactDetails key={1} />,
        <AcadamicDetails key={2} />,
        <Confirmation key={3} />
    ];

    return (
        <section className="bg-purple-50 min-h-screen">
            <div className="flex flex-col items-center justify-center px-8 pb-8 mx-auto pt-[8rem]">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {/* Step indicator */}
                        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
                            {formElements.map((_, index) => (
                                <li key={index}
                                    className={`${index <= activeTab ? 'text-blue-600 after:border-blue-200' : 'text-gray after:border-gray-200'} 
                                    ${index === formElements.length - 1 ? '' : 'after:border-b  after:border-1 after:hidden'}
                                    flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1  sm:after:inline-block after:mx-6 xl:after:mx-10`}>
                                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                                        {
                                            index <= activeTab ? <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg> : <span className="me-2">{index + 1}</span>
                                        }

                                        {index === 0 ? 'Student' : index === 1 ? 'Contact' : index === 2 ? 'Academic' : 'Confirmation'}
                                        <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>


                {/* Render active form element */}
                <div className="w-full bg-white rounded-lg shadow  xl:p-0 mt-4">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex flex-col justify-center">
                            <div>{formElements[activeTab]}</div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow  xl:p-0  mt-4 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                        <div className="flex flex-wrap gap-x-6 mx-auto justify-between w-full">
                            <button
                                disabled={activeTab === 0}
                                onClick={handleBack}
                                className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${activeTab === 0
                                    ? 'opacity-50 bg-slate-600'
                                    : 'opacity-100'
                                    }`}
                            >
                                Back
                            </button>
                            <button
                                disabled={activeTab === formElements.length - 1}
                                onClick={handleNext}
                                className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${activeTab === formElements.length - 1
                                    ? 'opacity-50 bg-slate-600'
                                    : 'opacity-100'
                                    }`}
                            >
                                Next
                            </button>
                            {activeTab === formElements.length - 1 && (
                                <button
                                    className="px-4 py-2 rounded-xl bg-blue-600 text-white"
                                    onClick={() => console.log(data)}
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Details

import Link from 'next/link';
import React from 'react';

const AdmissionButton = () => {
    return (
        <>
            <Link href="/admission-enquiry/login" target='_blank'
                className="text-white  top-1/2 right-[-100px] fixed transform rotate-90 z-50 bg-pink-600 px-12 py-3 rounded-b-[30px] font-bold text-xl">
                Admission Open
            </Link>
        </>
    );
};
export default AdmissionButton;

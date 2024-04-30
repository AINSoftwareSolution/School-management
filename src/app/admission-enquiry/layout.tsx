'use client'
import Image from "next/image"
import Logo from '../utilis/images/logo.png'
import Link from "next/link"
import { AiOutlineLogout } from "react-icons/ai"
import { useRouter } from "next/navigation"

const AdmissionLayout = ({ children, }: { children: React.ReactNode }) => {
    const router = useRouter()
    const handlelogout = () => {
        localStorage.removeItem('token')
        router.push('/admission-enquiry/login')
    }
    return (
        <section>
            <div className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="flex flex-wrap justify-around items-center py-4">
                    <Link href={'/'}><Image src={Logo} width={100} height={100} alt="wisdom school" /></Link>
                    <div className="text-center">
                        <h4 className="font-[700] text-[1.5rem]">Wisdom Waves School</h4>
                        <address>Parge nagar, Kondhwa, Pune-48. <Link href={'tel:9511863508'}>+91 9511863508</Link></address>
                    </div>
                    <button className="flex gap-2 font-[700] items-center" onClick={handlelogout}><AiOutlineLogout /> Logout</button>
                </div>
            </div>
            {children}
        </section>
    )
}

export default AdmissionLayout
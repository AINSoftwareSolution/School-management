"use client"
import Logo from "../utilis/images/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "../component";
import Link from "next/link";


const Footer = () => {
  const isPath = usePathname().startsWith('/admission-enquiry')
  if (isPath) return <></>

  return (
    <>
      <section className="footer bg-purple-900 text-white">
        <Container>
          <div className="flex justify-between flex-wrap">
            <div className="text-start py-3 md:py-5">
              <Image src={Logo} className="logo mb-4" alt="wisdom waves school" width={200} height={200} />
              <p>parge Nagar,Kondhwa Pune–411048</p>
              <Link href="mailto:info@wisdomwavesschool.in" target="_blank" rel="noopener noreferrer">
                info@wisdomwavesschool.in
              </Link><br />
              <Link href="tel:+91 8087782000" target="_blank" rel="noopener noreferrer">+91 8087782000</Link>
            </div>
            <div className="text-star text-md-end py-3 md:py-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.312280849728!2d73.88640297496164!3d18.46950878261424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb3607b51119%3A0x8bde0a39078cbe6d!2sParge%20nagar!5e0!3m2!1sen!2sin!4v1714981164791!5m2!1sen!2sin"
                width="320" height="250" style={{ border: 0 }} allowFullScreen
                loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </Container>
        <footer className="bg-purple-800 text-white border-t border-white">
          <div className="text-center py-5 md:py-1 pt-3">
            <p className="text-white">
              © Copyright 2024-25. All rights reserved. Wisdom waves school
            </p>
          </div>
        </footer>
      </section>
    </>
  );
};
export default Footer;

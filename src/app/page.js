import Navbar from "./_components/Navbar"
import Hero from "./_components/Hero"
import Footer from "./_components/Footer"
import Testimonial from "./_components/Testimonial"
import Faq from "./_components/Faq"
import Services from "./_components/Services"
import Contact from "./_components/Contact"

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Testimonial />
    <Contact />
    <Faq />
    <Footer />
    </>
  )
}

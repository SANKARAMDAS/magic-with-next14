import Navbar from "./_components/Navbar"
import Hero from "./_components/Hero"
import Footer from "./_components/Footer"
import Testimonial from "./_components/Testimonial"
import Faq from "./_components/Faq"
import Services from "./_components/Services"
import Contact from "./_components/Contact"

const getLandingPageData = async () => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}`;
  let req = await fetch(url, {cach: 'no-store'});

  const storyData = await req.json();
  const { nav_section, hero_section } = storyData.story.content;

  return{
    nav_section: nav_section[0],
    hero_section: hero_section[0],
  }
}

export default async function Home() {
  const storyData = await getLandingPageData();

  return (
    <>
    <Navbar data={storyData.nav_section} />
    <Hero data={storyData.hero_section} />
    <Services />
    <Testimonial />
    <Contact />
    <Faq />
    <Footer />
    </>
  )
}

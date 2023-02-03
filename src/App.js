import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DataworksMedia</title>
        <link rel="canonical" href="http://dataworksmedia.com" />
        <meta
          name="description"
          content="Dataworks Media is digital marketing agency focused on Paid Advertising PPC, Content Creation, Website building and hosting, and SEO management"
        />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;

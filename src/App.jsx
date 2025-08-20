import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import Slider from './Components/Slider';
// import StatsDashboard from './Components/StatsDashboard';
import ServicesSection from './Components/ServicesSection';
import AboutUs from './Components/AboutUs';
// import MyTeam from './Components/MyTeam';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import ServicePage from './Components/ServicePage';
import ScrollToTop from './Components/ScrollToTop';
import ContactUs from './Components/ContactUs';

// Additional pages if you have them:

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
  <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HomePage />
              <ServicesSection />
              {/* <AboutUs /> */}
            
            </>
          } 
        />

        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/services" element={<ServicePage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* Services pages */}
        {/* <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/development" element={<Development />} />*/}
        <Route path="/contact" element={<ContactUs />} /> 
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

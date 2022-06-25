import React, { useState } from 'react';
import About from '../About/About';
import Footer from '../Common/Footer/Footer';
import Contact from '../Contact/Contact';
import ContactInfo from '../Contact/ContactInfo';
// import ContactInfo from '../Contact/ContactInfo';
import Banner from './Banner';
import Projects from './Projects/Projects';
// import ServiceBanner from './Services/ServiceBanner';
import Services from './Services/Services';

const Home = () => {
    const [loading, setLoading] = useState(false);
    // setLoading(true)
    return (
      <div>
         {loading ? 'losjdkj' :  <div>
       <Banner></Banner>
       <Projects></Projects>
       <Contact></Contact>
       <Services></Services>
       <ContactInfo></ContactInfo>
       <About></About>
       <Footer></Footer>
   </div>}
      </div>
    );
};

export default Home;
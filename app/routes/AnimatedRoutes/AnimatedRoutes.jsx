import React, { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ENV } from '../../configs/configs';

import { trackEvent, EVENT_TYPES } from '../../analytics/tracker';

import TopBar from '../../components/TopBar/TopBar';

import Blogs from '../../pages/Blogs/Blogs';
import Bio from '../../pages/Bio/Bio';
import Projects from '../../pages/Projects/Projects';
import Certificates from '../../pages/Certificates/Certificates';
import TechStack from '../../pages/TechStack/TechStack';
import Uses from '../../pages/Uses/Uses';
import Contact from '../../pages/Contact/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const changeRoute = (value) => {
    Navigate(value);
  };

  const [showNavbar, setShowNavbar] = useState(false);

  const downloadResume = () => {
    if(ENV === 'development') {
      console.log('Download Resume DEV');
    window.location.assign(`${window.location.origin}/api/download/resume`);
    } else if(ENV === 'production') {
      console.log('Download Resume PROD');
      trackEvent({
        eventName: EVENT_TYPES.DOWNLOAD,
        values: 'Resume',
      });
      window.open('https://api.summy.dev/api/download/resume', '_blank');
    }
  };

  useEffect(() => {
    if (location.pathname !== '/bio' && location.pathname !== '/') {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence>
      <TopBar
        changeRoute={changeRoute}
        showNavbar={showNavbar}
        downloadResume={downloadResume}
        currentRoute={location.pathname}
      />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Bio showNavbar={setShowNavbar} />} />
        <Route path="bio" element={<Bio showNavbar={setShowNavbar} />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="techstacks" element={<TechStack />} />
        <Route path="uses" element={<Uses />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

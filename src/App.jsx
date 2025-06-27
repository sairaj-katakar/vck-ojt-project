import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import  HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';

import './styles/Pages.css'
import ChatbotComponent from './componenet/Chatbot/ChatbotComponent';
import DeveloperInfoPopup from './componenet/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';
const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sairaj Sunil Katakar"
          studentPhotoUrl="/images/sai.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/applynow" element={<AdmissionPage />} />
          
        </Routes>
        <ChatbotComponent/>
      </Router>
    
    </div>
  );
}

export default App;
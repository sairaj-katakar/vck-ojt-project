import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import  HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';

import './styles/Pages.css'
import ChatbotComponent from './componenet/Chatbot/ChatbotComponent';
const App = () => {
  return (
    <div>
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
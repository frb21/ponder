import StartingPage from './components/pages/startingPage.jsx';
import LoginPage from './components/pages/loginPage.jsx';
import SignupPage from './components/pages/signupPage.jsx';
import FeedPage from './components/pages/homePage.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartingPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/feed" element={<FeedPage />}/>
      </Routes>
    </Router>    
  );
}
export default App;

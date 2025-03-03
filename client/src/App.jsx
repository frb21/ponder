import StartingPage from './components/pages/startingPage.jsx';
import LoginPage from './components/pages/loginPage.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartingPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </Router>    
  );
}
export default App;

import StartingPage from './components/pages/startingPage.jsx';
import LoginPage from './components/pages/loginPage.jsx';
import SignupPage from './components/pages/signupPage.jsx';
import FeedPage from './components/pages/homePage.jsx';
import PostCard from './components/pages/postCard.jsx';
import ProfilePage from './components/pages/profileCard.jsx';
import ProtectedRoute from './components/pages/protectedRoute.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<StartingPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route element={<ProtectedRoute />}> 
            <Route path="/feed" element={<FeedPage />}/>
        </Route>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </Router>    
    </QueryClientProvider>
  );
}
export default App;

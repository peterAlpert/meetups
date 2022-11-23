import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';
import MainNavigation  from './components/layout/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation />

      <Routes>
        <Route path='/' element={<AllMeetupsPage /> } />
        <Route path='/new-meetups' element={<NewMeetupsPage />} />
        <Route path='/favorites' element={<FavoritesPage /> } />
      </Routes>
     
    </Router>
  );
}

export default App;

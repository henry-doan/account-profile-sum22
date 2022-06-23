import Profile from './components/users/Profile';
import { Routes, Route } from 'react-router-dom';
// TODO no match 
// HOME 
// About Page
// Navbar / Footer? 
const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Profile /> } />
    </Routes>
  </>
)

export default App;

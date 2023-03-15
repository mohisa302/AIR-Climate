import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Country from './components/Country';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Country" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Country from './components/Country';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route exact path="/Details/:id" element={<Details />} />
          <Route path="/Country" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

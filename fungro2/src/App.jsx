import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Teen from './pages/Teen';

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/teen' element={<Teen />} />
      </Routes>
      
    </Router>


   
  );
};

export default App;

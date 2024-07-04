import Navbar from './Navbar';
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
      <div className="content">
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/blogs/:id" element={<BlogDetails/>}></Route>
  
    
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;

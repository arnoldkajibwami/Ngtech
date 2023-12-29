import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Login from './Login';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import PostJob from './PostJob';
import SignUp from './Signup';
import Categoryall from './Category';
import Blogdescription from "./Blogdescription";

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/item/:id" element={<Blogdescription />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/category" element={<Categoryall/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
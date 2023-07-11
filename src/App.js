import './App.css';
import About from './pages/about/index';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout/Layout'
import Blog from './pages/blog/index';
import Contact from './pages/contact/index';

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;

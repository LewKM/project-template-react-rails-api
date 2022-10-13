import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import "./App.css";
import LandingPage from './pages/Home';
import CreateCharts from './pages/CreateCharts';
import FeaturedCharts from './pages/Charts';
import ContactForm from './pages/ContactForm';
import BlogPart from './pages/Blog';
import Login from './pages/Login';
import UpdateCharts from './pages/UpdateCharts';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/home' element={<LandingPage />}></Route>
        <Route path='/add' element={<CreateCharts />}></Route>
        <Route path='/chart' element={<FeaturedCharts />} ></Route>
        <Route path='/update' element={<UpdateCharts />} ></Route>
        <Route path='/contact' element={<ContactForm />}></Route>
        <Route path='/blog' element={<BlogPart />}></Route>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
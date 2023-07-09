import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' index element={<About/>}></Route>
          <Route path='contact' index element={<Contact/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

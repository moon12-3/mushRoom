import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Record from './components/Record'
import Thesis from './components/Thesis'
import Accodi from './components/Accodi';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ScrollToTop/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/record" element={<Record/>}/>
          <Route path="/thesis" element={<Thesis/>}/>
          <Route path="/thesis" element={<Thesis/>}/>
          <Route path="/accodion" element={<Accodi/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;


import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Record from './components/Record'
import Thesis from './components/Thesis'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/record" element={<Record/>}/>
          <Route path="/thesis" element={<Thesis/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

